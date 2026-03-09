# Contributing Guidelines

When contributing to the D&D Companion, we follow strict software engineering practices to maintain the stability of the core engine and the cleanliness of the React UI.

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

- **`src/core` Purity**: Code inside `src/core` **must never** import from `src/app`, `src/features`, or `src/components`. It must remain 100% UI-agnostic.
- **Rules vs Systems**:
  - If you are writing a mathematical formula (e.g., "calculate proficiency"), put it in `src/core/rules`. It should be a pure function.
  - If you are writing state-mutation logic spanning multiple entities (e.g., "process turn change"), put it in `src/core/systems`.

## 4. Submitting a Pull Request

- Ensure `npx tsc --noEmit` passes locally.
- Ensure `npm run lint` yields no errors.
- Keep PRs scoped to a single logical change. If a PR touches both UI redesign and core engine math, split it into two PRs.
