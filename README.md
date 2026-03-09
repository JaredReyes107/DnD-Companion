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
├── app/          # Navigation and screens
├── features/     # Feature modules (character sheet, combat tracker)
├── core/         # D&D rules engine
├── services/     # Infrastructure (storage, localization)
└── components/   # Shared UI components
```

---

## 📚 Documentation

Project documentation is available in the `docs/` folder.

| Document                                          | Description                      |
| ------------------------------------------------- | -------------------------------- |
| [architecture.md](docs/architecture.md)           | High-level system architecture   |
| [domain-model.md](docs/domain-model.md)           | Domain entities and UML diagrams |
| [engine.md](docs/engine.md)                       | Game engine rules and systems    |
| [project-structure.md](docs/project-structure.md) | Folder hierarchy reference       |
| [contributing.md](docs/contributing.md)           | Development workflow             |

---

## 🧠 Core Concepts

The project is organized around three main concepts:

### Core Engine

Located in `src/core`, this layer contains the **pure D&D rules engine**:

- **Entities**: (`Character`, `CombatState`)
- **Rules**: (stat calculations, HP, modifiers)
- **Systems**: (combat engine, stat resolution)

### Features

Located in `src/features`, these modules implement user-facing functionality:

- Character Sheet
- Combat Tracker
- DM Tools

### Infrastructure

Located in `src/services`, this layer manages external interactions such as storage and localization.

---

## 🤝 Contributing

Contributions are welcome. Please read [docs/contributing.md](docs/contributing.md) before opening a pull request.

Key rules:

- Use **Conventional Commits**
- Follow the **feature branch workflow**
- Keep the **core engine independent of UI**

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
