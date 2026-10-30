# Modifier System

This document covers everything related to modifiers: how they are defined, instantiated, conditioned, stacked, targeted at stats, and applied to characters in and out of combat.

---

## Overview

The modifier system is the mechanism by which features, choices, statuses, actions, and rules alter a character's stats. It is composed of four distinct layers:

1. **`ModifierTemplate`** — static declaration of what a modifier does (registered in `modifiers.registry.ts`)
2. **`ModifierInstance`** — a resolved snapshot of a template at a point in time, with concrete numeric values
3. **`Condition`** — an alias of `Predicate`, and a runtime gate that determines if an instance is active during a given context
4. **`StatModel`** — what stat the modifier targets, expressed as a discriminated union that supports hierarchical targeting

---

## `ModifierType` — The Math Operations

Defined in `src/core/entities/modifiers/Modifier.ts`:

| Type | Priority | Operation | Use case |
|---|---|---|---|
| `SET` | 100 | `value = mod.value` | Unarmored Defense, Mage Armor |
| `MULTIPLICATIVE` | 200 | `value *= mod.value` | Conditions that halve a stat |
| `ADDITIVE` | 300 | `value += mod.value` | Proficiency bonuses, spell bonuses, buffs |
| `FLOOR` | 400 | `value = max(value, mod.value)` | "minimum 1" rules |
| `CAP` | 500 | `value = min(value, mod.value)` | Maximum AC caps |

Lower priority number runs first. A `SET` modifier at priority 100 runs before an `ADDITIVE` at 300 — so you can `SET` then `ADDITIVE` on top of it.

---

## `ModifierTemplate` — Static Declaration

```typescript
interface ModifierTemplate {
  id: string;
  sourceId: string;
  statModel: StatModel;    // what stat this targets
  type: ModifierType;
  value: ModifierValue; // number | Expr
  priority?: ModifierValue; // falls back to DEFAULT_MODIFIER_PRIORITY[type]
  condition?: Condition;   // runtime gate
  effectId?: string;       // stacking group key
  tags?: string[];
}

type ModifierValue = number | ((context: ModifierEvalContext) => number);
```

Expr values are evaluated against an ExprContext (character, resolved, targetNodeId?, resolveResource?). targetNodeId is injected per check node by the stat resolver.

Templates are registered in `src/core/data/registries/modifiers.registry.ts`. Precedence: homebrew > base > generated expertise. `getModifierTemplateById(id)` throws if the template is not found.

---

## `ModifierInstance` — Resolved Snapshot

```typescript
interface ModifierInstance {
  id: string;
  templateId: string;
  sourceId: string;
  statModel: StatModel;
  type: ModifierType;
  value: number;      // resolved at instantiation
  priority: number;   // resolved at instantiation
  condition?: Condition;
  effectId?: string;
  expiryConditions?: ExpiryCondition[];
  tags?: string[];
}
```

Instances are created by `instantiateModifier(template, character, sourceId)` in `modifiers-helper.ts`. The formula is evaluated once at creation using the raw `ResolvedBase`. Formula-based instances can be refreshed later with `refreshModifierInstance(instance, character, resolved, targetNodeId?)` — this re-evaluates the formula against an updated base without changing the instance id.

---

## `StatModel` — What the Modifier Targets

Defined in `src/core/entities/rules/stats.types.ts`:

```typescript
type StatModel =
  | { type: "ability"; ability: Ability }           // STR, DEX, CON, INT, WIS, CHA
  | { type: "check"; nodeId: string }               // any CheckNode id (skill, save, tool)
  | { type: "derived"; key: DerivedStatKey }        // maxHp, speed, initiative, ac, ...
  | { type: "spellcasting"; sourceId: string; key: SpellcastingStatKey }
  | { type: "spellcastingByAbility"; ability: Ability; key: SpellcastingStatKey }
  | { type: "spellcastingGlobal"; key: SpellcastingStatKey }
  | { type: "custom"; key: string };

type DerivedStatKey = "maxHp" | "speed" | "initiative" | "ac" | "spellAttackModifier"
                    | "spellSaveDC" | "concentrationLimit" | "proficiencyBonus";
type SpellcastingStatKey = "attackModifier" | "saveDC";
```

**Hierarchical `check` targeting** is the key design. A modifier targeting `{ type: "check", nodeId: "skillCheck" }` applies to every skill check. A modifier targeting `{ type: "check", nodeId: "skillCheck.STR" }` applies to every STR-based skill — including any skill whose character `abilityOverride` points to STR. This is resolved by `matchesStatTarget` in `stat-targeting.ts`.

**Spellcasting tiers:**
- `spellcasting` — targets one specific spellcasting source by id (e.g. "wizard_spellcasting").
- `spellcastingByAbility` — targets all sources sharing the given ability (e.g. all INT casters).
- `spellcastingGlobal` — targets all spellcasting sources regardless of ability.

---

## `matchesStatTarget` — Hierarchical Targeting

`matchesStatTarget(modifierTarget, resolvingTarget, context)` in `src/core/rules/shared/stat-targeting.ts`:

1. For spellcasting stats: applies the three-tier logic (`spellcasting` exact → `spellcastingByAbility` → `spellcastingGlobal`).
2. For `check` → `check`: calls `resolveCheckNodeAncestryChain(resolvingTarget.nodeId, context.resolvedAbility)` to get the full ancestry chain (node → parents → ability-scoped parent if resolvedAbility provided), then checks if `modifierTarget.nodeId` is in that chain.
3. For all other types: exact structural equality via `JSON.stringify`.

The `resolvedAbility` context parameter is critical for ability-scoped modifiers (like Frost Rune: "add +2 to all STR checks") to also match any skill that the character has overridden to use STR.

`serializeStatModel(statModel)` produces a stable string key for the `ResolvedCharacter` stats map (e.g. `"check:perception"`, `"derived:ac"`, `"ability:STR"`).

---

## `Condition` — Runtime Gates

Condition is an alias of Predicate. See Predicates in the second half. Use the P builders. evaluateCondition calls `isSatisfied(..., "open")`.

**`resourceAtLeast` is the key pattern for resource-gated passive modifiers.** Example from Rune Knight: a rune's passive modifier has `condition: { type: "resourceAtLeast", resourceId: "fire_rune", minimum: 1 }` — the modifier is active while the resource has at least 1 charge and automatically deactivates when the resource is spent, with no lifecycle management needed.

---

## Stacking Rules

`applyStackingRules(modifiers)` in `src/core/rules/modifiers/stacking.ts`:

- Modifiers with the same `effectId` are grouped. Within each group, only the **strongest** instance survives (or the weakest for `CAP` type). "Strongest" is determined by `resolveModifierValue` — higher value wins for all types except `CAP`.
- Modifiers without `effectId` are independent — they all apply.

This is the **passive stacking** rule used during `resolveStat`. It prevents the same effect (e.g. two Bless spells) from stacking while allowing different effects (Bless + Bardic Inspiration) to stack freely.

**Per-action stacking policy** for `applyModifier` action effects:

`applyStackingRule(character, templateId, policy)` in `systems/stats/modifiers-stacking-helper.ts` handles the `stacking` field on `ApplyModifierEffect`:

| Policy | Behavior |
|---|---|
| `"overlap"` (default) | Does nothing — allows multiple instances from the same template |
| `"refresh"` | Removes the oldest instance of the same template before adding new |
| `"override"` | Removes all instances of the same template, replacing with the new one |
| `"ignore"` | If any instance of the same template already exists, do nothing |

---

## The Modifier Pool

`collectModifierPool(character, runtimeModifiers)` in `modifiers-pool.ts` assembles all modifiers relevant for stat resolution:

1. `Object.values(character.statModifiers)` — passive/permanent modifiers from features and choices.
2. `getStatusModifierInstances(character)` — modifiers derived from active `CombatState.statuses`.
3. `runtimeModifiers` — active timed combat modifiers from `CombatState.runtimeModifiers`.

`refreshModifierPool(pool, character, resolved)` then re-evaluates all formula-based modifiers against the current `ResolvedBase`. This is called after Phase 1 resolution so formulas that reference `ctx.resolved.proficiencyBonus` use the modifier-adjusted PB.

---

## Building Passive Modifiers

`buildCharacterPassiveModifiers(character)` in `modifiers-helper.ts` produces the `Record<string, ModifierInstance>` for `character.statModifiers`:

1. Walks `getActiveFeatures(character)` and instantiates every `{ type: "modifier" }` grant.
2. Walks `getModifiersFromChoices(character)` and instantiates every modifier granted by selected options.

Keys are `"${feature.id}:${modifier.id}"` for feature grants and `"choice:${modifierId}"` for choice grants. Call this whenever features or choices change and assign the result back to `character.statModifiers`.

---

## Expertise

Expertise modifiers are generated dynamically by `buildExpertiseModifiers()` in `src/core/data/rules/modifiers/expertise-modifiers.ts`. One `ADDITIVE` modifier template is created per `CheckNode` in the registry (adding PB a second time). These are lazily cached in `modifiers.registry.ts` and regenerated only when the check registry version changes (i.e. when homebrew nodes are registered).

Expertise templates are E.when(proficiency, E.pb(), E.n(0)), tagged "expertise", with no effectId.

---

## Advantage System

Templates (AdvantageTemplate) are granted by { type: "advantage"; id } and expanded per node by expandAdvantageTemplate.
Advantage/disadvantage is tracked separately from numeric modifiers. `AdvantageInstance` in `src/core/entities/rules/advantage/advantage-instance.ts`:

```typescript
interface AdvantageInstance {
  id: string;
  nodeId: string;           // the CheckNode this applies to
  polarity: "advantage" | "disadvantage";
  sourceId: string;
  expiryConditions?: ExpiryCondition[];
  condition?: Condition;    // resource-gated passive advantages
}
```

Three storage locations:

| Location | Type | Lifecycle |
|---|---|---|
| `character.checks.passiveAdvantageInstances` | `Record<string, AdvantageInstance>` | Persistent; rebuilt by `buildCharacterAdvantageInstances` on every save |
| `character.combatState.runtimeAdvantageInstances` | `Record<string, AdvantageInstance>` | Timed; cleared by `sweepExpiredByEvent` |
| Status-derived (via `getStatusAdvantageInstances`) | ephemeral | Lives as long as the status is active |

`resolveAdvantageState(character, nodeId)` merges all three sources, walks the CheckNode ancestry chain, filters by `condition`, and applies the character's `advantageStackingRule`.

Two stacking modes:
- `"raw"` (5e default): any advantage + any disadvantage = none, regardless of counts.
- `"oneToOne"` (optional house rule): instances cancel one-for-one; the remainder polarity wins.

## Modifier System and Expressions

## Pipeline

```text
Template ──instantiate──▶ ModifierInstance ──refresh──▶ resolveStat ──▶ final value
 (Expr values)             (numbers baked)              (filter, stack, order, apply)
```

- `ModifierTemplate.value` and `.priority` are `number | Expr`. Function values no longer exist.
- `instantiateModifier` evaluates against the **raw** base. `refreshModifierInstance` re-evaluates
  against the resolved base each time stats are resolved, so Expr values can depend on ability scores.
- An Expr that cannot be evaluated falls back to a neutral value per type (additive 0, multiplicative
  1, floor -1e9, cap 1e9, set 0) instead of throwing.

## Resolution order

`resolveStat`: filter by `condition` → apply stacking (`effectId` groups keep the strongest) → sort by
`priority` ascending → apply.

| Type | Default priority |
|---|---|
| SET | 100 |
| MULTIPLICATIVE | 200 |
| ADDITIVE | 300 |
| FLOOR | 400 |
| CAP | 500 |

Final value is `Math.floor`ed.

## Expr (`entities/rules/expr/expr.ts`, evaluated in `rules/predicate/evaluate-predicate.ts`)

One expression language for modifier values, resource maximums and predicates.

| Group | Nodes |
|---|---|
| Leaves | `const`, `abilityScore`, `abilityMod`, `proficiencyBonus`, `characterLevel`, `classLevel`, `casterLevel`, `resource`, `hp`, `stat` |
| Operators | `add`, `sub`, `mul`, `div` (rounding), `min`, `max`, `clamp`, `if`, `table` |

- `classLevel(classId, subclassId?)`: without a subclass it matches any subclass; with one it gates on it.
- `table(by, steps, below=0)`: the value of the largest key `<= by`. Steps are constants. This is how
  level progressions (Rage, Superiority Dice, spell slots) are data.
- `casterLevel`: multiclass caster level. Full casters count fully, half and third round down, unless
  the template sets `roundUp` (Artificer). Pact casters do not count.
- Evaluation is three-valued: `number | undefined`. `undefined` means "cannot tell" and propagates.
  `stat` leaves are unknown during stat resolution (circular), and `resource` leaves need an injected
  resolver (`ExprContext.resolveResource`).
- Unknown node types warn once in development and evaluate to `undefined`.

## Predicates (`Condition = Predicate`)

Composition (`all`, `any`, `not`), numeric `compare` over any Expr, status, build state, and
target-dependent variants. Target-dependent ones are `undefined` outside an encounter.

`isSatisfied(p, ctx, policy)`: an `undefined` result counts as satisfied under `"open"` (modifier
conditions) and as not satisfied under `"closed"`. A condition with an unknown variant therefore
**grants** its bonus, which is why unknown variants warn in development.

Use the `P` and `E` builders in data files rather than raw objects.

## Where this connects

- Resource maximums: `engine.md`, "Resources".
- Behaviour changes that are not numeric: `overrides.md`.
