# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Non-obvious documentation context

- **`src/core/data/`** holds all static D&D 5e game data (classes, actions, resources, registries). It is not "raw data files" — it is hand-authored TypeScript constants that constitute the game's data layer.
- **`src/rules/` vs `src/core/rules/`**: `src/rules/` contains authored rule implementations (`.rule.ts` files per spell/feat/condition) and the generated index. `src/core/rules/` contains the execution engine (registry, graph, handler interfaces, DSL). They are separate layers.
- **`5etools-data/`** at the project root is external SRD data used only by the `scripts/adapt-5etools/` import script. It is not consumed by the app at runtime.
- **`scripts/`** run with `ts-node` using a separate `tsconfig.scripts.json` — they are not part of the app build and are never compiled by the main `tsconfig.json`.
- **`src/repositories/character-migration.ts`** is the authoritative "schema upgrade" layer, not `CharacterRepository.ts`. `CharacterRepository` delegates hydration to the migration module.
- **Zustand store** (`useCharacterStore`) only persists `selectedCharacterId` to AsyncStorage; the actual character array is managed by `CharacterRepository` separately. The store is a UI selection cache, not the source of truth for character data.
