# Project Structure

A quick-reference guide to the codebase topology. The application roots all source code within the `src/` directory to prevent root-level clutter.

```text
src/
├── app/               # 🚦 Expo Router screens (Navigation)
├── assets/            # 🖼️ Static assets (Fonts, Images)
├── components/        # 🧩 Shared UI elements
│   ├── layout/        # Structural containers (Wrappers, Spacers)
│   └── ui/            # Reusable primitive atoms (Buttons, Text, Modals)
├── constants/         # 📌 App-wide non-domain constants (UI dimensions, colors)
├── core/              # ⚙️ D&D Game Engine (Pure TS, UI agnostic)
│   ├── combat/        # Intent-based action resolution pipeline
│   │   └── intents/
│   │       ├── combat-intent.ts         # CombatIntent type + IntentType enum
│   │       ├── intent-queue.ts          # FIFO queue for pending intents
│   │       ├── intent-resolver.ts       # Routes intents through ExecutionGraph
│   │       └── reaction-system.ts       # Opens reaction windows via RuleRegistry
│   ├── data/          # Static game definitions (content, registries)
│   │   ├── actions/   # ActionInstance records, organized by class and subclass
│   │   │   ├── by-class/
│   │   │   └── by-subclass/
│   │   ├── classes/   # ClassTemplate and SubclassTemplate records
│   │   │   └── subclasses/
│   │   └── registries/              # Registry functions (lookup by id, homebrew extension)
│   │       ├── actions.registry.ts
│   │       ├── check-nodes.registry.ts  # CheckNode DAG + ancestry chain resolution
│   │       ├── choice-pools.registry.ts
│   │       ├── classes.registry.ts
│   │       ├── features.registry.ts
│   │       ├── language-nodes.registry.ts
│   │       ├── modifiers.registry.ts    # ModifierTemplate lookup; lazily builds expertise cache
│   │       ├── options.registry.ts
│   │       ├── resources.registry.ts
│   │       ├── status.registry.ts
│   │       └── subclasses.registry.ts
│   │   └── rules/     # Static rule content (templates and scaling data)
│   │       ├── checks/              # CheckNode DAG definitions (skills, saves, tools)
│   │       ├── choice-pools/        # ChoicePoolTemplate records
│   │       │   ├── <class>/         # One file per class/subclass
│   │       │   └── choice-pools.ts  # Root aggregator → BASE_POOLS
│   │       ├── modifiers/           # ModifierTemplate records
│   │       │   ├── by-class/<class>/    # Class/subclass modifier templates
│   │       │   ├── expertise-modifiers.ts   # Generated per CheckNode
│   │       │   └── status-modifiers.ts
│   │       ├── options/             # OptionTemplate records
│   │       │   ├── shared/          # Cross-class options (fighting styles, etc.)
│   │       │   ├── <class>/         # One file per class/subclass
│   │       │   └── options.ts       # Root aggregator → BASE_OPTIONS
│   │       ├── resources/           # ResourceTemplate records
│   │       ├── scaling/             # Proficiency bonus scaling, class-specific tables
│   │       ├── statuses/            # StatusTemplate records (D&D conditions)
│   │       └── XP_Table.ts
│   ├── entities/      # Pure TypeScript types — zero logic, zero functions
│   │   ├── actions/
│   │   │   ├── action-board.ts
│   │   │   ├── action-duration.ts   # "economy" (slot) | "free"
│   │   │   ├── action-instance.ts   # ActionInstance + all ActionEffect variants
│   │   │   └── action-trigger.ts
│   │   ├── character/
│   │   │   ├── Character.ts
│   │   │   ├── advantage-state.ts   # "advantage" | "disadvantage" | "none"
│   │   │   ├── character-classes.ts
│   │   │   ├── check-state.ts       # CharacterCheckState + serialization helpers
│   │   │   ├── choice-instance.ts
│   │   │   ├── class-instance.ts
│   │   │   ├── language-state.ts    # CharacterLanguageState + LanguageMode
│   │   │   ├── race-instance.ts
│   │   │   └── skill-instance.ts
│   │   ├── combat/
│   │   │   ├── action-economy.ts
│   │   │   ├── combat-state.ts      # CombatState (participant state in EncounterState)
│   │   │   ├── encounter-state.ts   # Persistence-layer EncounterState
│   │   │   ├── initiative.ts
│   │   │   └── status-instance.ts
│   │   ├── features/
│   │   │   └── feature-instance.ts
│   │   ├── modifiers/
│   │   │   ├── Condition.ts         # Condition discriminated union (runtime gates)
│   │   │   ├── Effect.ts
│   │   │   ├── Event.ts             # GameEvent enum
│   │   │   └── Modifier.ts          # ModifierTemplate, ModifierInstance, ModifierType
│   │   └── rules/
│   │       ├── ability/             # Ability type, AbilityScores
│   │       ├── advantage/
│   │       │   └── advantage-instance.ts  # AdvantageInstance + AdvantagePolarity
│   │       ├── check/
│   │       │   ├── check-category.ts
│   │       │   └── check-node.ts    # CheckNode (DAG node for checks/proficiencies)
│   │       ├── duration/
│   │       │   └── expiry-condition.ts   # ExpiryCondition discriminated union
│   │       ├── eligibility/
│   │       │   └── eligibility-condition.ts  # EligibilityCondition for OptionTemplate gates
│   │       ├── choice-pool-template.ts
│   │       ├── class-template.ts
│   │       ├── feature-template.ts  # FeatureTemplate + FeatureGrant union (7 variants)
│   │       ├── option-template.ts   # OptionTemplate + OptionGrant = Exclude<FeatureGrant,"choice">
│   │       ├── resolved-base.ts     # ResolvedBase + resolveBase() — Phase 1 stat resolution
│   │       ├── resource-template.ts
│   │       ├── stats.types.ts       # StatModel, DerivedStatKey, RuntimeModifierInstance
│   │       └── subclass-template.ts
│   ├── rules/         # Pure functions — no side effects, no React
│   │   ├── character/
│   │   │   ├── abilities-modifiers.ts
│   │   │   ├── ability-scores-helper.ts
│   │   │   ├── advantage-helper.ts      # resolveAdvantageState, buildCharacterAdvantageInstances
│   │   │   ├── armor-class.ts
│   │   │   ├── character-multiclassing.ts
│   │   │   ├── checks-helper.ts         # resolveCheckAbility, resolveCheckProficiency, buildCharacterCheckProficiencies
│   │   │   ├── choices-helper.ts        # bootstrapFeatureChoices, resetChoicesForTrigger, getEligibleOptionsForPool
│   │   │   ├── eligibility-helper.ts    # evaluateEligibility
│   │   │   ├── features-helper.ts       # getActiveFeatures (merges class + direct features)
│   │   │   ├── hit-dice-helper.ts
│   │   │   ├── languages-helper.ts      # resolveLanguageMode, buildCharacterLanguageState
│   │   │   ├── leveling.ts
│   │   │   ├── modifiers-helper.ts      # instantiateModifier, refreshModifierInstance, buildCharacterPassiveModifiers
│   │   │   ├── modifiers-pool.ts        # collectModifierPool, refreshModifierPool
│   │   │   ├── resource-scaling.ts
│   │   │   ├── resources-helper.ts
│   │   │   ├── resting.ts
│   │   │   ├── status-effects-helper.ts # getStatusModifierInstances, getStatusAdvantageInstances
│   │   │   └── subclass-helper.ts
│   │   ├── combat/
│   │   │   ├── actions-helper.ts
│   │   │   ├── combat-helper.ts
│   │   │   ├── combat-runtime.ts
│   │   │   ├── damage-and-healing.ts
│   │   │   ├── expiry-helper.ts         # sweepExpiredByEvent, buildExpiryConditions
│   │   │   ├── runtime-effects-helper.ts  # applyStatus, removeStatusesById, revokeRuntimeEffectsBySource, cascadeStatusRemoval
│   │   │   └── saving-throws-helper.ts
│   │   ├── dsl/
│   │   │   ├── dice-parser.ts
│   │   │   ├── dsl-parser.ts            # parseRule, registerRuleInGraph
│   │   │   ├── dsl-types.ts             # RuleDSL + ModifierDSL Zod schemas
│   │   │   ├── rule-loader.ts
│   │   │   └── rule-registry.ts         # RuleRegistry class + singleton ruleRegistry
│   │   ├── execution/
│   │   │   ├── execution-graph.ts       # RuleExecutionGraph (priority-sorted handler map)
│   │   │   ├── execution-node.ts        # ExecutionNode enum (attack, damage, saving throw lifecycle)
│   │   │   └── rule-handler.ts          # RuleHandler + RuleContext
│   │   ├── modifiers/
│   │   │   ├── condition-evaluator.ts   # evaluateCondition + EvaluationContext
│   │   │   ├── stacking.ts              # applyStackingRules, sortModifiersByPriority
│   │   │   └── tag-utils.ts
│   │   ├── shared/
│   │   │   ├── grant-filters.ts         # grantsOfType, optionGrantsOfType (type-safe filtering)
│   │   │   └── stat-targeting.ts        # matchesStatTarget, serializeStatModel
│   │   ├── rule-definition.ts           # RuleDefinition interface + RuleDomain type
│   │   └── spellcasting/
│   │       └── spellcasting-helper.ts
│   ├── systems/       # Stateful orchestration spanning multiple rules
│   │   ├── combat/
│   │   │   ├── action-economy/
│   │   │   │   └── economy-manager.ts
│   │   │   ├── action-execution/
│   │   │   │   └── take-action.ts       # executeAction + all effect application helpers
│   │   │   ├── combat-triggers.ts
│   │   │   ├── combatEngine.ts          # startCombat, nextTurn (uses separate EncounterState shape)
│   │   │   ├── initiative-system.ts
│   │   │   └── modifierEngine.ts
│   │   ├── dice/
│   │   │   ├── DiceProvider.ts
│   │   │   ├── ManualDiceProvider.ts
│   │   │   └── RandomDiceProvider.ts
│   │   ├── ecs/
│   │   │   ├── component-store.ts       # Generic O(1) entity-component store
│   │   │   ├── ecs-world.ts
│   │   │   ├── effect-component.ts
│   │   │   └── entity-registry.ts
│   │   ├── events/
│   │   │   ├── event-bus.ts
│   │   │   ├── event-engine.ts
│   │   │   ├── event-phase.ts
│   │   │   ├── event-queue.ts
│   │   │   └── event-types.ts           # EngineEventMap (typed payloads per GameEvent)
│   │   ├── state/
│   │   │   ├── event-log.ts
│   │   │   ├── replay-engine.ts
│   │   │   ├── snapshot-manager.ts      # EngineSnapshot history for undo/replay
│   │   │   └── snapshot-types.ts
│   │   ├── stats/
│   │   │   ├── modifiers-stacking-helper.ts  # applyStackingRule (per-action stacking policy)
│   │   │   ├── resolve-stats.ts         # resolveStat, buildEvaluationContext, ResolvedStat
│   │   │   └── stat-resolver.ts         # resolveOutOfCombat, resolveInCombat, resolveStatValue
│   │   └── validation/
│   │       └── RuleValidator.ts
│   └── init.ts        # initializeCoreSystems() — must be called once at app startup
├── hooks/             # 🪝 React custom hooks (UI/State binding)
├── navigation/        # 🗺️ Domain navigators and path helpers
├── repositories/      # 🗄️ Persistence abstractions (AsyncStorage wrappers)
│   ├── character-defaults.ts
│   ├── character-migration.ts   # hydrateCharacter() — must be called on every raw read
│   ├── CharacterRepository.ts
│   └── EncounterRepository.ts
├── rules/             # 📜 Domain rule definitions (generated + hand-written)
│   ├── rules.generated.ts       # ⚠️ GENERATED — never edit by hand
│   └── spells/
│       └── fireball.rule.ts     # Example RuleDefinition (exports fireballRule)
├── services/          # 🚰 Infrastructure & Side Effects (i18n)
├── store/             # 🧠 Global UI State (Zustand)
│   ├── characterStore.ts        # selectedCharacterId only
│   └── localizationStore.ts
├── styles/            # 🎨 Global themes and stylesheets
└── utils/             # 🛠️ React context providers and generic JS helpers
    └── character-provider.tsx
```

---

## Layer Responsibilities at a Glance

| Directory | What belongs here | What does NOT belong here |
|---|---|---|
| `core/entities/` | Pure TS types and interfaces — zero functions, zero logic | Any function body, any import from `rules/` or `data/` |
| `core/data/rules/` | Static D&D content: templates, options, pools, scaling tables | Logic, calculations, React |
| `core/data/registries/` | Lookup functions, homebrew extension points, cached derived registries | Business logic, React hooks |
| `core/rules/` | Pure functions: calculate, build, resolve | State management, React, storage |
| `core/systems/` | Multi-step orchestration, stateful operations | UI concerns, direct storage access |
| `core/combat/intents/` | Intent routing, reaction window logic | Storage, React, direct stat computation |
| `repositories/` | AsyncStorage read/write, one file per entity | Business logic, React hooks |
| `utils/character-provider.tsx` | Runtime hydration of Character + Encounter | Direct storage calls, navigation |
| `store/` | Zustand slices for UI-level state | Encounter state, combat state |
| `rules/` | Hand-written `.rule.ts` files; generated `rules.generated.ts` | Anything not a RuleDefinition export |
| `app/` | Screens, layouts, navigation wiring | Business logic, direct storage access |
| `components/` | Stateless UI primitives | State management, navigation |

---

## The Three-Level Data Aggregation Pattern

All content data (resources, actions, options, choice pools, modifiers) follows a consistent three-level hierarchy:

```
Leaf file (per subclass)
  → Class aggregator (per class)
    → Root aggregator (BASE_X constant)
      → Registry (getXById, homebrew extension)
```

Adding a new subclass never touches anything above the class-level aggregator. The registry imports only from the root aggregator. New content requires creating one leaf file and updating one class aggregator — no registry changes needed.

Shared content that crosses class boundaries (e.g. fighting styles valid for multiple classes) lives in a `shared/` subdirectory under the content type directory and is imported only by the root aggregator.

---

## The Rules Pipeline

Rules live in `src/rules/` as hand-written `.rule.ts` files. Each file exports a named `RuleDefinition` const following the `<name>Rule` convention:

```typescript
// src/rules/spells/fireball.rule.ts
export const fireballRule: RuleDefinition = {
  id: "fireball",
  domain: "spell",
  triggers: [ExecutionNode.DAMAGE_CALCULATION],
  handler: { ... },
};
```

After adding a `.rule.ts` file, run `ts-node scripts/compile-rules.ts` to regenerate `src/rules/rules.generated.ts`. **Never edit `rules.generated.ts` by hand.** `initializeCoreSystems()` loads all generated rules into the `ruleRegistry` singleton at startup.

---

## The Repository Pattern

All persistence goes through `src/repositories/`. Screens and providers never call `AsyncStorage` directly.

Each repository file follows the same shape:

```typescript
export const XRepository = {
  async getAll(): Promise<X[]> { ... },
  async getById(id: string): Promise<X | null> { ... },
  async save(item: X): Promise<void> { ... },
  async deleteById(id: string): Promise<void> { ... },
};
```

`EncounterRepository` adds:

```typescript
async getByCharacterId(characterId: string): Promise<EncounterState | null>
```

---

## Import Conventions

Always use the absolute path alias `@/` which points to `src/`:

```typescript
// ✅ Good
import { Character } from "@/core/entities/character/Character";
import { EncounterRepository } from "@/repositories/EncounterRepository";

// ❌ Bad — fragile during refactors
import { Character } from "../../../../core/entities/character/Character";
```

---

## Known Structural Issues (Migration Targets)

The following confirmed misplacements predate the current architecture and are tracked for a future cleanup pass:

- `src/core/entities/combat/encounter-helper.ts` — contains functions (`buildEncounterState`, `startEncounter`). Pure construction belongs in `rules/`, repository calls in `systems/`.
- `src/core/systems/combat/combatEngine.ts` — uses an `EncounterState` imported from `entities/combat/EncounterState` (capital E, different shape with `round`/`activeTurn`/`initiative`/`activeEffects`) that is distinct from the persistence `EncounterState` in `entities/combat/encounter-state.ts`. These two types need unification.
- `src/core/rules/combat/combat-helper.ts` and `src/core/entities/combat/combat-helper.ts` — duplicate files.
- `src/core/rules/character/leveling.ts` and `src/core/entities/progression/leveling.ts` — duplicate files.
- `src/core/data/rules/XP_Table.ts` and `src/core/entities/progression/XP_Table.ts` — duplicate data.
