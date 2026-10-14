# Contributing Guidelines

When contributing to the D&D Companion, follow these engineering practices to maintain stability of the core engine and cleanliness of the React UI.

## 1. Branching Strategy: GitHub Flow

We utilize a simplified trunk-based approach known as GitHub Flow.

- `main`: The production-ready, stable branch.
- `feature/*`: For new additions (e.g., `feature/combat-tracker`).
- `fix/*`: For bug resolutions (e.g., `fix/ac-calculation`).
- `refactor/*`: For structural changes.

**Workflow:**

1. Branch off `main`.
2. Commit changes using Conventional Commits.
3. Open a Pull Request (PR) against `main`.
4. Merge upon review and successful CI/CD checks (TypeScript compilation, Linting).

## 2. Conventional Commits

Commit messages must be clear and parseable. Follow the `type(scope): subject` format.

**Allowed Types:**

- `feat`: A new feature (e.g., `feat(core): add haste spell modifier`)
- `fix`: A bug fix (e.g., `fix(ui): correct padding on action board`)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `test`: Adding or correcting tests
- `docs`: Documentation only changes

## 3. Architecture Rules

Review `docs/architecture.md` before coding. The most critical rule is **Dependency Inversion relative to the Engine**:

- **`src/core` Purity**: Code inside `src/core` must **never** import from `src/app`, `src/features`, or `src/components`. It must remain 100% UI-agnostic.
- **Rules vs Systems**:
  - If you are writing a mathematical formula (e.g., "calculate proficiency"), put it in `src/core/rules`. It should be a pure function.
  - If you are writing state-mutation logic spanning multiple entities (e.g., "process turn change"), put it in `src/core/systems`.
- **No direct AsyncStorage access** outside `src/repositories/`. All reads go through `CharacterRepository` or `EncounterRepository`, which call `hydrateCharacter()` on every read.
- **Never edit `src/rules/rules.generated.ts` by hand.** Add `.rule.ts` files to `src/rules/<domain>/` and run `ts-node scripts/compile-rules.ts` to regenerate it.

## 4. Adding a New Rule

1. Create `src/rules/<domain>/<name>.rule.ts`.
2. Export a named const `<name>Rule: RuleDefinition` (e.g. `fireballRule`).
3. Run `ts-node scripts/compile-rules.ts` to regenerate `src/rules/rules.generated.ts`.
4. Add tests beside the implementation file (e.g. `fireball.rule.test.ts`).

## 5. Adding New Content (Class Feature / Option / Modifier)

Follow the **three-level aggregation pattern** described in `docs/project-structure.md`:

1. Create the leaf file (e.g. `src/core/data/rules/options/fighter/rune-knight-options.ts`).
2. Import it from the class aggregator (`src/core/data/rules/options/fighter-options.ts`).
3. The root aggregator and registry require no changes.

For modifiers used by multiple classes (e.g. fighting styles), add to `src/core/data/rules/options/shared/` and import only from the root aggregator.

## 6. Modifier Conflicts (Mutually Exclusive Effects)

For mutually exclusive stat-setting effects (e.g. Mage Armor and Unarmored Defense both set AC via `SET` modifier type), use `effectId` on `ModifierTemplate` to place them in the same stacking group. `applyStackingRules` will keep only the strongest — no explicit conflict resolution code needed.

There is no `ConflictResolver` class — this was removed. Mutual exclusion is handled entirely by the `effectId` stacking mechanism and `ModifierType.SET` priority ordering.

## 7. Component Requirements

- React components must be arrow functions (`const Foo = () => ...`), never `function Foo()`.
- Unused imports are lint errors — use `_` prefix for intentionally unused vars.
- Formatting: 2-space indent, double quotes, semicolons, LF line endings (enforced by Prettier).

## 8. Submitting a Pull Request

- Ensure `npx tsc --noEmit` passes locally.
- Ensure `npm run lint` yields no errors.
- Ensure `npm test` passes.
- Keep PRs scoped to a single logical change. If a PR touches both UI redesign and core engine math, split it into two PRs.
