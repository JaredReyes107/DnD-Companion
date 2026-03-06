# 🧭 Software Development Standards & Tools Guide

**Version:** 1.0  
**Last updated:** 2025-27-10  
**Author:** Jared Reyes  

---

## 1. Purpose
This document defines the tools, conventions, and workflows to be followed throughout the life of this software project.  
Its goal is to ensure **consistency, readability, maintainability, and scalability**, regardless of who contributes.

---

## 2. Toolchain Overview
| Phase | Purpose | Tool(s) | Notes |
|-------|----------|---------|-------|
| Project Management | Plan sprints, track progress | GitHub Projects | Follow Kanban-style workflow |
| Version Control | Code history and collaboration | Git + GitHub | Branch per feature; PRs for merges |
| Documentation | Record decisions, APIs, architecture | Markdown | Stored in `/docs/` folder |
| Diagrams | Visualize designs and use cases | draw.io | Export PNG/SVG to `/docs/diagrams/` |
| Testing | Verify correctness | pytest / unittest / Jest | Run before merging |
| Deployment | Build and release | Docker / GitHub Actions | Automate whenever possible |

---

## 3. Repository Structure
```
/root
  /app               # Screens
  /assets            # Images, icons, sounds and other media resources
  /components        # Reusable UI components
  /constants         # Static data, enums, config
  /docs              # Documentation
  /game              # Game types, rules, registries and official player options
    /data            # Templates, constants
    /domain          # Domain logic
    /engine          # Engine execution
  /hooks             # Custom React hooks
  /lib               # APIs, storage, UI adapters, utilities
    /adapters        
    /utilities
  /stylesheets       # Style files for screens
  /types             # Global TypeScript types
  .gitignore
  README.md
```

---

## 4. Naming Rules

### 4.1 Naming Conventions
| Element | Convention | Example |
|---------|------------|---------|
| Folders | kebab-case | `docs`, `app-example` |
| Files | kebab-case | `character-creation.tsx` |
| Classes | PascalCase | `UserProfile` |
| Components | PascalCase | `ThemedText` |
| Constants | UPPER_SNAKE_CASE| `MAX_RETRIES` |
| Variables | camelCase | `userCount` |
| Functions | camelCase | `calculateTotal()` |
| Hooks | camelCase | `useEffect()` |
| Styles | kebab-case | `addCharacter-button` |
| Branches | kebab-case + prefix | `feature/authentication-flow`, `fix/button-alignment` |
| Commits | Conventional Commits | `feature(ui): add login modal` |

### 4.2 Naming Guidelines
- Avoid abbreviations unless they’re universal (`id`, `url`, `API`).
- Don't repeat terms for different purposes (`add` for functions making a sum and adding an item to an array).
- Functions: describe **what** they do (`getUserData`, `saveCharacter`).
- Variables: prefer clarity over brevity (`userSession` > `usrSes`).

---

## 5 Coding Rules

### 5.1 Coding Guidelines
- 2 spaces indentation.
- Always use semicolons.
- Double quotes for strings.
- No unused imports or vars.
- Destructure props and context.
- Keep component files under ~200 lines; split logic into hooks or subcomponents.
- Enforce linting with ```npm run lint``` and ```npm run lint:fix```

### 5.2 Comments Guidelines

---

## 6. Branching and Commit Rules

### 6.1 Branch Types
| Type | Use for |
|-------|----------|
| `feature` | New functionality |
| `fix` | Bug fixes |
| `refactor` | Code restructuring without changing behavior |
| `docs` | Documentation-only changes |
| `chore` | Maintenance (deps, config, etc.) |

### 6.2 Commit Guidelines
Follow the **Conventional Commits** format:
```
<type>(scope): <message>
```
Examples:
```
feat(ui): add inventory tab in character screen
fix(auth): refresh token logic on app relaunch
refactor(storage): move async functions to utils
```
For the complete guidelines, check 'https://www.conventionalcommits.org/en/v1.0.0/'

### 6.3 Merging
- Review or self-review all code before merging to `main`.  
- Ensure all tests pass before merge.  

---

## 7. Documentation Standards
- Each module/function/class includes **docstrings** explaining purpose and parameters.  
- Update `/docs/` whenever new features or design decisions are added.  
- Include **diagram updates** when architecture changes.  

--- 

## 8. Workflow 
**Summary:** Issue → Branch → PR → Merge → Tag

### 8.1 Plan
Create an **Issue** in GitHub:
- Title: short and clear.
- Description: context + acceptance criteria.
- Label it (`feature`, `bug`, etc.).
- Add checklist if needed.

### 8.2 Develop
Create a branch from `main` using naming rules.  
Link it to the Issue using keywords like:
```
Closes #24
```

### 8.3 Review & Test
Open a **Pull Request**.  
Include:
- Summary of what changed.
- Screenshots (if visual).
- “Closes #xx” reference.

Run linter + build locally before pushing.

### 8.4 Merge
When the PR passes checks and is approved (or self-reviewed):
- Squash and merge → cleaner history.
- The Issue auto-closes.
- Card moves to “Done” in GitHub Projects.

### 8.5 Release
If ready for release:
1. Update version in `app.json`.
2. Tag the release (`vX.Y.Z`).
3. Generate changelog (manual or automated).
4. Archive builds with Expo EAS (if applicable).
5- Name and push the version to the repository.

```
git tag -a v1.2.0 -m "Character builder and improved navigation"
git push origin v1.2.0
```

---

## 9. Review History

| Date | Version | Changes |
|------|----------|----------|
| [2025-27-10 ] | 1.0 | Initial version |

---

> **Note:** This document should evolve with the project.  
> Revisit after each major milestone or sprint review to refine practices.