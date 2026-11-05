# Costs and Payment

How an action spends and gains resources. Spending is data: an action declares what it can cost,
the player chooses how to pay, and a pure pipeline validates and applies it.

## Concepts

- **Num** = `number | Expr`. Anywhere a cost can be a literal, it can be a formula.
- **CostLine** `{ key?, resource, delta }`. `resource` is `{ resourceId }` or `{ param }`.
  `delta` is signed: **negative spends, positive gains**.
- **CostOption** `{ id, params?, lines, requires? }`: one way to pay. An action has one or more
  (`costOptions`); the player picks one.
- **Params** are choices made at payment time:
  - `range`: an integer between `min` and `max` (Num, so `max` can be `E.resource("lay_on_hands")`),
    optional rank bounds.
  - `resource`: one resource out of a **group** (e.g. any spell slot). Candidates are group
    members the character owns, filtered by rank bounds.
- `E.param(id)` reads a param inside a delta; `E.lookup` maps a param value to a price.

## Groups and rank

`ResourceTemplate.groups?: string[]` and `rank?: Num`. A group is a set of interchangeable
resources (`spell_slot`, `standard_slot`); `rank` orders them (slot level). Invariant: a group
member must have a rank, otherwise it is never a candidate (`validateResourceTemplate`).
A resource is only a candidate if the character has an instance, i.e. some feature grants it.

## Normalization

Legacy data (`modifyResource` with a negative amount, `convertResource`) is converted at the
registry: `getActionRegistry()` returns normalized, cached actions.

- negative `modifyResource` becomes a `CostLine`; `convertResource` becomes two lines;
- the generated option id is `implicitOptionId(action.id)` = `` `${actionId}:cost` ``
  (the colon keeps it distinct from hand-written ids, which are globally unique);
- `effects` keeps only gains and non-resource effects.

New data should declare `costOptions` directly, using `core/data/actions/shared/cost-builders.ts`
(`spend`, `gain`, `anySlot`, `standardSlot`, `spendSlot`, `gainSlot`).

## Payment pipeline (`core/rules/costs/payment.ts`)

1. `validatePayment(character, option, params, ctx)`: pure. Checks `requires`, every param
   (present, integer in range, or a valid candidate), resolves each line, **sums lines that hit
   the same resource**, then checks the net change.
2. Failures are typed: `requirement`, `missingParam`, `outOfRange`, `invalidParam`,
   `unresolvable`, `missingResource`, `insufficient`, `overflow`.
3. Nothing is clamped. A gain that would exceed max fails with `overflow`.
4. `applyPayment` applies the changes through `applyResourceDelta`.
5. `pay` = validate then apply. It is atomic: on failure the original character is returned.

## UI

`ActionSection` decides per action: no cost choice, execute; one option without a range param,
execute; one option with a range, show the stepper; several options, show `CostBoard`.
`defaultRangeValues` / `withRangeValues` seed and fill range params;
`cost-choice-label.ts` builds the labels.

## Examples

- **Lay on Hands**: one option, range param `amount` (min 1, max the remaining pool), one line
  spending `amount` from `lay_on_hands`.
- **Font of Magic**: slot-to-points and points-to-slot options. Prices use `E.lookup`; the lines
  carry keys `price` and `points` so overrides can address them.
- **Divine Smite**: option `divine_smite_slot`, resource param `anySlot()`, line `spendSlot`.

## Integrity

`core/data/__tests__/cost-integrity.test.ts` (run separately from the fast suite) checks: no
legacy spends in effects, unique option ids (per action and globally), unique line keys and param
ids per option, at least one line per option, every param reference declared, every resource
param names a non-empty group, every cost-line resource exists, every group member has a rank.