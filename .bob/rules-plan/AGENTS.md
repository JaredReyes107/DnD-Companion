# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Non-obvious architectural constraints

- **Rule execution is pipeline-ordered**: `ExecutionNode` enum values define fixed lifecycle phases (PRE_ATTACK_ROLL → ATTACK_ROLL → … → POST_DAMAGE). Rules declare which nodes they trigger on; the `RuleExecutionGraph` runs all rules for each node in priority order. New lifecycle phases require adding an enum value AND updating the graph traversal.
- **`Character` is a plain data object** (TypeScript `type`, not a class). All computation lives in system functions (`resolveOutOfCombat`, `resolveInCombat`, `resolveStat`). Never add methods to `Character`.
- **`RuleRegistry` is a singleton** (`export const ruleRegistry`). Tests that need an isolated registry must instantiate `new RuleRegistry()` directly — the singleton is populated by `initializeCoreSystems()`.
- **`RuleHandler` interface requires three fields**: `id`, `node`, `priority`. Missing any causes silent runtime failures since TypeScript excludes test files from compilation.
- **Modifier stacking is controlled by `ModifierType`** (ADDITIVE, FLAT_OVERRIDE, etc.) resolved in `src/core/systems/stats/resolve-stats.ts`. The `resolveStat` function must receive the complete modifier pool for a stat — partial pools produce wrong results.
- **`tsconfig.json` excludes test files**: TypeScript errors in `*.test.ts` files are invisible to `tsc`. Run Jest to catch test-file type errors.
- **Character migration is forward-only**: `hydrateCharacter()` backfills missing fields from `defaultScalarFields` and wipes dynamic maps to `{}`. There is no rollback or versioning system. Schema changes must be backward-compatible or handled as backfill additions only.
