# 🧙 D&D Companion

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Expo](https://img.shields.io/badge/Expo-React%20Native-black)
![License](https://img.shields.io/badge/license-MIT-green)

A modular **Dungeons & Dragons companion app** built with Expo and TypeScript, designed to provide powerful tools for both **players and Dungeon Masters**.

The project includes a **domain-driven game engine** capable of handling character sheets, combat resolution, and rule-based stat calculations.

---

## ✨ Features

- 🧙 **Character Sheet** management
- ⚔️ **Combat Tracker** for encounters
- 📜 **D&D rules engine** (stats, modifiers, combat)
- 🧰 **Dungeon Master tools**
- 🧩 **Modular architecture** for extensibility

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npx expo start
```

### 3. Run on device

- Press **i** for iOS simulator
- Press **a** for Android emulator
- Scan the QR code with **Expo Go**

---

## 🏗 Architecture Overview

The project follows a **modular, domain-driven architecture** separating the UI from the game engine.

```text
src/
├── app/          # Navigation and screens (Expo Router)
├── core/         # D&D rules engine (pure TypeScript, UI-agnostic)
│   ├── combat/   # Intent-based action resolution pipeline
│   ├── data/     # Static game content, registries
│   ├── entities/ # Pure TypeScript types — zero logic
│   ├── rules/    # Pure functions (calculate, build, resolve)
│   └── systems/  # Stateful orchestration (combat, stats, ECS, events)
├── repositories/ # AsyncStorage abstractions
├── rules/        # Hand-written rule definitions (compiled to rules.generated.ts)
├── store/        # Zustand UI state (selectedCharacterId only)
└── components/   # Stateless UI primitives
```

---

## 📚 Documentation

Project documentation is available in the `docs/` folder.

| Document | Description |
|---|---|
| [architecture.md](docs/architecture.md) | High-level system architecture, layer rules, key architectural decisions |
| [domain-model.md](docs/domain-model.md) | Domain entities: Character, Encounter, Features, Options, Statuses, Expiry |
| [engine.md](docs/engine.md) | Stat resolution pipeline, action execution, advantage resolution, resting |
| [project-structure.md](docs/project-structure.md) | Complete folder hierarchy reference with file-level descriptions |
| [rules-system.md](docs/rules-system.md) | RuleDefinition, RuleRegistry, ExecutionGraph, IntentResolver, authoring guide |
| [modifier-system.md](docs/modifier-system.md) | ModifierTemplate/Instance, stacking, conditions, stat targeting, advantage |
| [combat-engine.md](docs/combat-engine.md) | Combat subsystems: events, ECS, snapshots, action economy, invariants |
| [navigation-architecture.md](docs/navigation-architecture.md) | Expo Router navigation, deep linking, hydration guard |
| [contributing.md](docs/contributing.md) | Development workflow, branching, commit style, adding rules/content |

---

## 🧠 Core Concepts

### Core Engine

Located in `src/core`, this layer contains the **pure D&D rules engine** — no React, no AsyncStorage, no side effects:

- **Entities** — Pure TypeScript types: `Character`, `CombatState`, `EncounterState`, `FeatureTemplate`, `ModifierTemplate`, etc.
- **Data** — Static game content: class templates, subclasses, feature grants, option pools, modifier templates, check node DAGs.
- **Rules** — Pure functions: stat calculation, feature/choice resolution, proficiency, advantage, expiry, resting.
- **Systems** — Stateful orchestration: stat resolver, combat engine, event bus, ECS component store, snapshot manager.
- **Combat** — Intent-based action pipeline: `IntentQueue`, `IntentResolver`, `ReactionSystem`.

### Initialization

`initializeCoreSystems()` in `src/core/init.ts` must be called once at app startup before any registry lookup or rule resolution. It registers scaling tables and loads all compiled rules into the `ruleRegistry`.

### Character Hydration

Always use `hydrateCharacter()` from `src/repositories/character-migration.ts` when reading raw character data from AsyncStorage. `CharacterRepository` does this automatically.

---

## 🤝 Contributing

Contributions are welcome. Please read [docs/contributing.md](docs/contributing.md) before opening a pull request.

Key rules:

- Use **Conventional Commits** (`feat:`, `fix:`, `refactor:`, `test:`, `docs:`)
- Follow the **feature branch workflow**
- Keep the **core engine independent of UI**
- Never edit `src/rules/rules.generated.ts` — run `ts-node scripts/compile-rules.ts` instead

---

## 📸 Previews

![simulator_screenshot_488ECA42-263B-49E8-9C49-2A8AA9797A35](https://github.com/user-attachments/assets/9d63c1a7-54bb-4e67-889a-02b4d95b77c3)

![simulator_screenshot_F5C12527-3850-4822-AD63-2284C2F2DECB](https://github.com/user-attachments/assets/58888b17-7429-4595-b6d8-94b12fe96ad4)

![simulator_screenshot_08E8BCC8-A3BB-4FBF-82B5-17FD18809AA2](https://github.com/user-attachments/assets/386fe3be-904d-4449-af25-1a3b3ecef7eb)

![simulator_screenshot_39B7C72A-E217-4DAB-BF3C-80A7718A9E66](https://github.com/user-attachments/assets/6391a0c4-bd15-4ba8-bb5c-15a0cbbd3ee1)

![simulator_screenshot_B33F7D2B-EB3F-418E-A382-770A5BBFCC2A](https://github.com/user-attachments/assets/b8337cd2-0690-4809-b6b8-60ef25bfbc96)

---

## 📄 License

MIT License
