# Project Structure

A quick-reference guide to the codebase topology. The application roots all source code within the `src/` directory to prevent root-level clutter.

```text
src/
├── app/               # 🚦 Expo Router screens (Navigation)
├── assets/            # 🖼️ Static assets (Fonts, Images)
├── components/        # 🧩 Shared UI elements
│   ├── layout/        # structural containers (Wrappers, Spacers)
│   └── ui/            # Reusable primitive atoms (Buttons, Text, Modals)
├── constants/         # 📌 App-wide non-domain magic numbers (UI dimensions, colors)
├── core/              # ⚙️ D&D Game Engine (Pure TS, UI agnostic)
│   ├── data/          # Static game definitions (Classes, Action Lists)
│   ├── entities/      # Domain state models (Character, Spell, Modifier)
│   ├── rules/         # Pure D&D math functions (Calc HP, Roll checks)
│   └── systems/       # Stateful orchestration (Stat Resolver, Combat Tracker)
├── features/          # 📦 Feature-Driven UI Modules
│   ├── character-sheet/
│   ├── combat-tracker/
│   └── dm-tools/
├── hooks/             # 🪝 React custom hooks (UI/State binding)
├── services/          # 🚰 Infrastructure & Side Effects (Storage, i18n)
├── store/             # 🧠 Global State Management (Zustand/Redux)
├── styles/            # 🎨 Global themes and raw generic stylesheets
├── types/             # 🏷️ Global utility types (API requests, UI generics)
└── utils/             # 🛠️ Generic JS helpers (Math clamps, Array sorters)
```

## Import Convetions

To maintain a robust file structure, always utilize the absolute path alias `@/` which points directly to the `src/` directory.

```typescript
// ✅ Good
import { Character } from "@/core/entities/character/Character";

// ❌ Bad (Fragile during refactors)
import { Character } from "../../../../core/entities/character/Character";
```
