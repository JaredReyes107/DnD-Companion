# Project Structure

A quick-reference guide to the codebase topology. The application roots all source code within the `src/` directory to prevent root-level clutter.

```text
src/
├── app/               # 🚦 Expo Router screens (Navigation)
├── assets/            # 🖼️ Static assets (Fonts, Images)
├── components/        # 🧩 Shared UI elements
│   ├── layout/        # Structural containers (Wrappers, Spacers)
│   └── ui/            # Reusable primitive atoms (Buttons, Text, Modals)
├── constants/         # 📌 App-wide non-domain magic numbers (UI dimensions, colors)
├── core/              # ⚙️ D&D Game Engine (Pure TS, UI agnostic)
│   ├── data/          # Static game definitions (Classes, Action Lists, Scaling)
│   ├── entities/      # Domain state models (Character, EncounterState, Modifier)
│   ├── rules/         # Pure D&D math functions (Calc HP, Roll checks)
│   └── systems/       # Stateful orchestration (Stat Resolver, Combat Engine)
├── hooks/             # 🪝 React custom hooks (UI/State binding)
├── navigation/        # 🗺️ Domain navigators and path helpers
│   ├── navigators/    # Domain-specific hooks (useCombatNavigator, useCharacterNavigator)
│   └── paths.ts       # Centralized route string definitions
├── repositories/      # 🗄️ Persistence abstractions (AsyncStorage wrappers)
│   ├── CharacterRepository.ts
│   ├── CharacterSelectionRepository.ts
│   └── EncounterRepository.ts
├── services/          # 🚰 Infrastructure & Side Effects (i18n)
├── store/             # 🧠 Global UI State (Zustand — character list, selection)
├── styles/            # 🎨 Global themes and raw generic stylesheets
├── types/             # 🏷️ Global utility types
├── utils/             # 🛠️ React context providers and generic JS helpers
│   └── character-provider.tsx  # Runtime join of Character + EncounterState
└── rules/             # 📜 Domain rule definitions (generated + hand-written)
```

## Layer Responsibilities at a Glance

| Directory | What belongs here | What does NOT belong here |
|---|---|---|
| `core/` | Pure TS logic, types, D&D rules | React imports, AsyncStorage, navigation |
| `repositories/` | AsyncStorage read/write, one file per entity | Business logic, React hooks |
| `utils/character-provider.tsx` | Runtime hydration of Character + Encounter | Direct storage calls, navigation |
| `store/` | Zustand slices for UI-level state (character list) | Encounter or combat state |
| `app/` | Screens, layouts, navigation wiring | Business logic, direct storage access |
| `components/` | Stateless UI primitives | State management, navigation |

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

`EncounterRepository` adds one additional method:

```typescript
async getByCharacterId(characterId: string): Promise<EncounterState | null>
```

This scans all stored encounters for one that contains the given character ID as a participant. It is the entry point used by `CharacterProvider` to load combat state without requiring the caller to know the encounter ID upfront.

## Import Conventions

Always use the absolute path alias `@/` which points to `src/`:

```typescript
// ✅ Good
import { Character } from "@/core/entities/character/Character";
import { EncounterRepository } from "@/repositories/EncounterRepository";

// ❌ Bad — fragile during refactors
import { Character } from "../../../../core/entities/character/Character";
```
