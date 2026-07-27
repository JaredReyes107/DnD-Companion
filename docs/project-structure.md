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
│   ├── data/          # Static game definitions (content, registries)
│   │   ├── actions/   # ActionInstance records, organized by class and subclass
│   │   │   ├── by-class/
│   │   │   └── by-subclass/
│   │   ├── classes/   # ClassTemplate and SubclassTemplate records
│   │   │   └── subclasses/
│   │   ├── registries/            # Registry functions (lookup by id, homebrew extension)
│   │   │   ├── actions.registry.ts
│   │   │   ├── choice-pools.registry.ts   # NEW
│   │   │   ├── classes.registry.ts
│   │   │   ├── features.registry.ts
│   │   │   ├── modifiers.registry.ts
│   │   │   ├── options.registry.ts        # NEW
│   │   │   ├── resources.registry.ts
│   │   │   └── subclasses.registry.ts
│   │   └── rules/     # Static rule content (templates and scaling data)
│   │       ├── choice-pools/              # NEW — ChoicePoolTemplate records
│   │       │   ├── barbarian/             # One file per subclass (leaf)
│   │       │   ├── bard/
│   │       │   ├── cleric/
│   │       │   ├── druid/
│   │       │   ├── barbarian-pools.ts     # Class aggregator
│   │       │   ├── bard-pools.ts
│   │       │   ├── cleric-pools.ts
│   │       │   ├── druid-pools.ts
│   │       │   └── choice-pools.ts        # Root aggregator → BASE_POOLS
│   │       ├── modifiers/
│   │       ├── options/                   # NEW — OptionTemplate records
│   │       │   ├── shared/                # Cross-class options (fighting styles, etc.)
│   │       │   ├── barbarian/             # One file per subclass (leaf)
│   │       │   ├── bard/
│   │       │   ├── cleric/
│   │       │   ├── druid/
│   │       │   ├── barbarian-options.ts   # Class aggregator
│   │       │   ├── bard-options.ts
│   │       │   ├── cleric-options.ts
│   │       │   ├── druid-options.ts
│   │       │   └── options.ts             # Root aggregator → BASE_OPTIONS
│   │       ├── resources/
│   │       ├── scaling/
│   │       ├── resources.ts               # Root aggregator → BASE_RESOURCES
│   │       └── XP_Table.ts
│   ├── entities/      # Pure TypeScript types — zero logic, zero functions
│   │   ├── actions/
│   │   │   ├── action-board.ts
│   │   │   ├── action-duration.ts
│   │   │   ├── action-instance.ts
│   │   │   └── action-trigger.ts
│   │   ├── character/
│   │   │   ├── Character.ts               # featureChoices added
│   │   │   ├── character-classes.ts
│   │   │   ├── choice-instance.ts         # NEW — ChoiceInstance runtime state
│   │   │   ├── class-instance.ts
│   │   │   ├── race-instance.ts
│   │   │   └── skill-instance.ts
│   │   ├── combat/
│   │   │   ├── action-economy.ts
│   │   │   ├── combat-state.ts
│   │   │   ├── encounter-state.ts
│   │   │   └── initiative.ts
│   │   ├── features/
│   │   │   └── feature-instance.ts
│   │   ├── modifiers/
│   │   ├── progression/
│   │   ├── resources/
│   │   │   └── resource-instance.ts
│   │   ├── rules/
│   │   │   ├── ability/
│   │   │   ├── choice-pool-template.ts    # NEW — ChoicePoolTemplate + ChoiceSelectionTrigger
│   │   │   ├── class-template.ts
│   │   │   ├── feature-template.ts        # Updated — grants[] replaces resources/actions/modifiers
│   │   │   ├── option-template.ts         # NEW — OptionTemplate + OptionGrant
│   │   │   ├── resource-template.ts
│   │   │   ├── saving-throw/
│   │   │   ├── skill/
│   │   │   ├── spellcasting-template.ts
│   │   │   ├── stats.types.ts
│   │   │   └── subclass-template.ts
│   │   └── spellcasting/
│   ├── rules/         # Pure functions — no side effects, no React
│   │   ├── character/
│   │   │   ├── abilities-modifiers.ts
│   │   │   ├── ability-scores-helper.ts
│   │   │   ├── armor-class.ts
│   │   │   ├── character-multiclassing.ts
│   │   │   ├── choices-helper.ts          # NEW — getResourcesFromChoices, getUnfilledChoices, etc.
│   │   │   ├── features-helper.ts         # Updated — getActiveFeatures now takes Character
│   │   │   ├── hit-dice-helper.ts
│   │   │   ├── resource-scaling.ts
│   │   │   ├── resources-helper.ts        # Updated — merges choice-granted resources
│   │   │   ├── resting.ts
│   │   │   ├── stat-modifiers-helper.ts   # Updated — merges choice-granted modifiers
│   │   │   ├── subclass-helper.ts
│   │   │   └── leveling.ts
│   │   ├── combat/
│   │   │   ├── actions-helper.ts          # Updated — merges choice-granted actions
│   │   │   ├── combat-runtime.ts
│   │   │   ├── damage-and-healing.ts
│   │   │   ├── saving-throws-helper.ts
│   │   │   ├── saving-throws-modifiers.ts
│   │   │   ├── skills-helper.ts
│   │   │   └── skills-modifiers.ts
│   │   ├── dsl/
│   │   ├── execution/
│   │   ├── modifiers/
│   │   └── spellcasting/
│   └── systems/       # Stateful orchestration spanning multiple rules
│       ├── combat/
│       ├── dice/
│       ├── ecs/
│       ├── events/
│       └── stats/
├── hooks/             # 🪝 React custom hooks (UI/State binding)
├── navigation/        # 🗺️ Domain navigators and path helpers
├── repositories/      # 🗄️ Persistence abstractions (AsyncStorage wrappers)
├── services/          # 🚰 Infrastructure & Side Effects (i18n)
├── store/             # 🧠 Global UI State (Zustand)
├── styles/            # 🎨 Global themes and stylesheets
├── utils/             # 🛠️ React context providers and generic JS helpers
│   └── character-provider.tsx
└── rules/             # 📜 Domain rule definitions (generated + hand-written)
```

## Layer Responsibilities at a Glance

| Directory | What belongs here | What does NOT belong here |
|---|---|---|
| `core/entities/` | Pure TS types and interfaces — zero functions, zero logic | Any function body, any import from `rules/` or `data/` |
| `core/data/rules/` | Static D&D content: templates, options, pools, scaling tables | Logic, calculations, React |
| `core/data/registries/` | Lookup functions, homebrew extension points | Business logic, React hooks |
| `core/rules/` | Pure functions: calculate, build, resolve | State management, React, storage |
| `core/systems/` | Multi-step orchestration, stateful operations | UI concerns, direct storage access |
| `repositories/` | AsyncStorage read/write, one file per entity | Business logic, React hooks |
| `utils/character-provider.tsx` | Runtime hydration of Character + Encounter | Direct storage calls, navigation |
| `store/` | Zustand slices for UI-level state | Encounter or combat state |
| `app/` | Screens, layouts, navigation wiring | Business logic, direct storage access |
| `components/` | Stateless UI primitives | State management, navigation |

## The Three-Level Data Aggregation Pattern

All content data (resources, actions, options, choice pools, localization) follows a consistent three-level hierarchy:

```
Leaf file (per subclass)
  → Class aggregator (per class)
    → Root aggregator (BASE_X constant)
      → Registry (getXById, homebrew extension)
```

Adding a new subclass never touches anything above the class-level aggregator. The registry imports only from the root aggregator. This means new content can be added by creating one leaf file and updating one class aggregator — no registry changes needed.

Shared content that crosses class boundaries (e.g. fighting styles valid for multiple classes) lives in a `shared/` subdirectory under the content type directory and is imported only by the root aggregator, never by class or subclass files.

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

## Import Conventions

Always use the absolute path alias `@/` which points to `src/`:

```typescript
// ✅ Good
import { Character } from "@/core/entities/character/Character";
import { EncounterRepository } from "@/repositories/EncounterRepository";

// ❌ Bad — fragile during refactors
import { Character } from "../../../../core/entities/character/Character";
```

## Known Structural Issues (Migration Targets)

The following are confirmed misplacements that predate the current architecture and are tracked for a future cleanup pass:

- `src/core/entities/combat/encounter-helper.ts` — contains functions (`buildEncounterState`, `startEncounter`). Pure construction belongs in `rules/`, repository calls belong in `systems/` or a service layer. Not in `entities/`.
- `src/core/rules/combat/combat-helper.ts` and `src/core/entities/combat/combat-helper.ts` — duplicate files, same content in two locations.
- `src/core/rules/character/leveling.ts` and `src/core/entities/progression/leveling.ts` — duplicate files.
- `src/core/data/rules/XP_Table.ts` and `src/core/entities/progression/XP_Table.ts` — duplicate data.