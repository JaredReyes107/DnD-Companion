# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Stack
React Native (Expo 51) + expo-router (file-based routing), TypeScript strict, Zustand, AsyncStorage. Tests use `jest-expo` preset.

## Commands
```
npm test                   # Jest in watch mode
npm test -- --testPathPattern="<file>"   # Run a single test file (no watch flag needed in CI)
npm run lint               # ESLint (errors fail CI)
npm run lint:fix           # Auto-fix lint issues
npm run format             # Prettier write
npm run simulate           # ts-node scripts/run-combat-simulation.ts
npm run adapt              # ts-node (tsconfig.scripts.json) scripts/adapt-5etools/index.ts
```

## Path Alias
`@/*` maps to `./src/*` — use this for all cross-directory imports within `src/`.

## Code Style (enforced by ESLint + Prettier)
- **Components**: arrow functions only (`const Foo = () => ...`), never `function Foo()`.
- **Imports**: unused imports are errors (`eslint-plugin-unused-imports`); prefix intentionally unused vars/args with `_`.
- **Formatting**: 2-space indent, double quotes, semicolons, LF line endings.
- **Commits**: conventional commits enforced by commitlint (`feat:`, `fix:`, `chore:`, etc.).

## Architecture

### Data flow
1. `src/core/data/` — static D&D data (classes, actions, features, registries). All game entities are registered here.
2. `src/core/entities/` — pure TypeScript types/interfaces. `Character` is a plain data object, not a class instance.
3. `src/core/rules/` — rule execution engine: `ExecutionNode` enum → `RuleDefinition` → `RuleRegistry` → `RuleExecutionGraph`.
4. `src/core/systems/` — runtime systems (stats, combat, dice, ECS, events).
5. `src/repositories/` — `CharacterRepository` reads/writes to AsyncStorage; **always** call `hydrateCharacter()` on raw reads and `serializeCharacter()` on writes (maps `checks` and `languages` through custom hydration).
6. `src/store/` — Zustand stores. `useCharacterStore` only persists `selectedCharacterId`; full character list is loaded via `CharacterRepository`.

### Rules system
- New rules go in `src/rules/<domain>/<name>.rule.ts` (domains: `spells`, `feats`, `conditions`, `class-features`, `items`).
- After adding a `.rule.ts` file, run `ts-node scripts/compile-rules.ts` to regenerate `src/rules/rules.generated.ts`. **Do not edit `rules.generated.ts` manually.**
- `initializeCoreSystems()` (in `src/core/init.ts`) must be called once at app startup before any registry lookup.

### Character migration
`src/repositories/character-migration.ts` runs on every AsyncStorage read to forward-migrate stale data. Dynamic maps (`features`, `resources`, `actions`, etc.) default to `{}` wholesale — do **not** try to deep-merge them.

## Testing
- Test files co-locate with source: `*.test.ts` next to implementation (e.g., `intent-resolver.test.ts` beside `intent-resolver.ts`).
- `tsconfig.json` **excludes** test files from compilation — tests are only run by Jest, never by `tsc`.
- Tests mock `RuleExecutionGraph` and `ReactionSystem` as plain objects with `jest.fn()` — no test-helper utilities exist; mock inline.
