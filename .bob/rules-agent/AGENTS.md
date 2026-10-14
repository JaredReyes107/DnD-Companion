# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Non-obvious coding rules

- **Generated file**: Never edit `src/rules/rules.generated.ts`. Add `.rule.ts` files to `src/rules/<domain>/` and run `ts-node scripts/compile-rules.ts` to regenerate it.
- **Rule naming**: Rule files must be named `<name>.rule.ts` and export a named const `<name>Rule` (e.g. `fireball.rule.ts` exports `fireballRule`).
- **`initializeCoreSystems()`** must be called exactly once before any registry or rule lookup. It is guarded by an `initialized` flag, so calling it twice is safe but the first call must happen before any game logic runs.
- **Character hydration**: Always use `hydrateCharacter()` from `src/repositories/character-migration.ts` when reading raw data from AsyncStorage. `CharacterRepository` does this automatically; bypass is only safe in migration scripts.
- **Component components** must be arrow functions — `eslint/react/function-component-definition` is set to `error` for named components. Regular `function` declarations for React components will fail lint.
- **`@/` alias** is available for anything under `src/` — use it for cross-directory imports; relative `../../` paths for same-directory siblings are fine.
- **Test colocation**: Tests live next to the source file. A separate `__tests__/` folder only exists for the UI snapshot test. New unit tests go beside their implementation file.
- **Dynamic maps on `Character`** (`features`, `resources`, `actions`, `statModifiers`, `featureChoices`) default to `{}` on migration — never spread-merge keys from old data into new defaults.
