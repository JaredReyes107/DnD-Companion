# Overrides

Overrides change the behaviour of an existing template without editing it. They exist for
non-numerical changes (Bardic Inspiration recharging on a short rest at bard 5, a homebrew
feature that drops a drawback). Numerical changes stay modifiers (`modifier-system.md`).

## Mental model

```text
Template (static, in a registry)
   + active OverrideTemplates (granted by features/options/table rules)
   = ResolvedTemplate { template, trail }      // computed at read time, never stored
```

- Templates are never mutated. Resolution returns a new object.
- Resolved templates are derived data. Do not store them on `Character`.
- Every applied change is recorded in the `trail`, so the UI can explain "why is this different".

## Shapes

`src/core/entities/rules/override/override-template.ts`

| Type | Purpose |
|---|---|
| `TemplateKind` | `"resource" \| "action" \| "modifier" \| "status"`. Features are not overridable (not registry-addressable, and overrides are granted by features, so patching them would be circular). |
| `OverrideFor<K>` | `{ id, kind, sourceId?, target: { id }, priority?, patches[] }` |
| `Patch<K>` | `set` (allow-listed scalar field), `describe`, and for actions `removeEffect` / `addEffect` |
| `PATCHABLE_FIELDS` | Runtime allow-list per kind. The compile-time type does not protect against homebrew JSON, so the resolver enforces it too. |
| `ResolvedTemplate<K>` | `{ kind, id, template, trail: AppliedPatch[] }` |

Patchable fields today:

| Kind | Fields |
|---|---|
| resource | `recharge`, `max` (an `Expr`), `category` |
| action | `duration` (plus effect add/remove) |
| modifier | `value`, `priority` (`number \| Expr`) |
| status | `limitStat`, `bindsSourceEffects` |

Widen this list per real need, not speculatively.

## Activation

An override is active when something the character has grants it:

```ts
{ type: "override"; id: string }   // a FeatureGrant (options inherit it via OptionGrant)
```

`buildOverrideContext(character, extraOverrideIds?)` collects, in this order: active features
(class levels, then `character.features`), selected choice options, then extra ids. Duplicates
collapse and first-seen order is kept. Level gating comes free from `featuresByLevel`.

**Table-wide rules** need no new owner: a homebrew feature with an `override` grant, attached
through `Character.features` (source `"table"`), is the container.

## Resolution

`resolveTemplateWith(kind, id, ctx)` (`core/rules/overrides/resolve-template.ts`):

1. Look up the base template. Unknown ids throw.
2. Keep active overrides of the same kind whose `target.id` equals the id.
3. Sort by `priority` ascending (default 0), then activation order. **Later wins.**
4. Apply patches in order. Each `set` records `before` and `after` in the trail.

Safety rules, all deliberate:

- A non-allow-listed field is ignored with a `console.warn`.
- A `removeEffect` on a missing key, or an `addEffect` with an existing key, warns and is skipped.
- Collection ops on a non-action kind are ignored with a warning.
- Homebrew must never be able to crash a character sheet.

Registration (`registerHomebrewOverride`) rejects overrides with no patches.

## Effect keys

Effects inside an action have no identity by default. To make one removable or patchable, give
it a `key` (unique within its action; checked by the integrity test and by
`registerHomebrewAction`). Unkeyed effects cannot be targeted. Add keys when an effect becomes an
override target, not in bulk.

Example (`emboldening_bond`): its `applyStatus: concentrating` effect has `key: "concentration"`,
so a homebrew override can use `{ op: "removeEffect", key: "concentration" }`.

## Who consumes resolved templates

| Consumer | Status |
|---|---|
| Resources (`resourceMax`, `resourceRecharge`, `restoreResources`) | Resolved. `ResourceContext` carries the `OverrideContext`. |
| Actions (`resolveActiveActions`, `tab-actions`) | Resolved. Actions are derived from features, choices and defaults. |
| Modifiers, statuses | Resolver supports them. No consumer is wired yet. |
| UI trail / description sheet | **Not built.** `describe` patches are only recorded in the trail. |

Build the `OverrideContext` once per render or per save (it walks features), then call
`resolveTemplateWith` per row.

## Non-goals

- **Substitution** ("action X resolves to Y"). Patch-in-place covers the known cases. Revisit only
  when a real case needs it.
- Targeting by tag or source. Tags are UI grouping and `sourceId` is provenance, so neither is a
  rule target. Targets are ids, chosen from a picker. `id: string[]` is a one-line extension if
  the picker needs multi-select.

## Authoring a homebrew override (intended in-app flow)

1. Pick a feature (or class, or item).
2. See what it grants (`grants` is data).
3. Pick the granted action, resource or modifier.
4. Edit a field from `PATCHABLE_FIELDS[kind]`, or add or remove a keyed effect.

## Testing

Unit tests live in `src/core/rules/__tests__/` (`resolve-override-template`, `active-overrides`,
`resource-overrides`, `action-derivation`). `registry-integrity` checks that registry keys equal ids,
grants resolve, pool ids exist, and effect keys are unique. Run it separately from the fast suite.

## Open items

- `describe` composition and localized override text (the description sheet).
- Provenance navigation (status → action → feature → class) depends on normalized `sourceId`.
- Per-field value types in `PATCHABLE_FIELDS` so an editor can be generated from data.
- Representation of unlimited uses in templates (see `engine.md`).