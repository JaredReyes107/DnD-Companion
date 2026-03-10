# Combat Engine Architecture

The Combat Engine is the core orchestrator for combat encounters in the D&D Companion application. It utilizes a highly decoupled, data-driven, and event-oriented architecture inspired by standard VTTs (Virtual TableTops) and Entity-Component-Systems (ECS).

## Key Components

1. **Encounter State**: The central atomic state mapping all turns, active participants, rounds, and system triggers.
2. **Event Queue & Bus**: Replaces direct function calls with an asynchronous, deterministic tick loop processing events in `BEFORE`, `MAIN`, `AFTER` phases.
3. **Execution Graph**: Evaluates combat actions (e.g., Attack Rolls, Saves) through a node-based interceptor graph rather than hardcoded `if/else` logic.
4. **Intent Resolver & Reactions**: Defers state mutations by building `CombatIntent`s first, allowing systems like _Counterspell_ or _Shield_ to pause the execution and evaluate conditional logic.
5. **ECS Hybrid Component Store**: Modifiers and active effects are mapped globally via an $O(1)$ ECS dictionary structure to scale for large encounters without processing overhead.

## UML Diagrams

### 1. Unified Event Flow (Event Bus + Execution Graph)

```mermaid
sequenceDiagram
    participant UI as Combat UI
    participant Q as EventQueue
    participant E as EventEngine
    participant B as EventBus
    participant G as ExecutionGraph
    participant S as EncounterState

    UI->>Q: enqueue(ATTACK_INTENT)
    loop Every Tick
        E->>Q: drain()
        E->>B: emit(EVENT, BEFORE)
        E->>B: emit(EVENT, MAIN)
        E->>B: emit(EVENT, AFTER)
    end
    B->>G: run(ATTACK_ROLL)
    G->>S: Mutate State
```

### 2. Action Intent Resolution (Reaction Windows)

```mermaid
stateDiagram-v2
    [*] --> IntentDeclared
    IntentDeclared --> PreExecutionHooks: Evaluate Node
    PreExecutionHooks --> ReactionWindow: Broadcast Trigger
    ReactionWindow --> ReactionWindow: Other Participants React
    ReactionWindow --> MutateState: Resume Final Execution
    MutateState --> [*]

    note right of ReactionWindow: E.g., Wizard casts 'Shield' changing AC before Hit Check.
```

### 3. Rules DSL to Effect Engine Pipeline

```mermaid
graph TD
    YAML[YAML Rule Definitions<br/>'rules/spells/bless.yaml'] --> Parser[DSL Parser]
    Parser -->|Maps string triggers to Execution Graph| Graph[Rule Execution Graph]
    Parser -->|Parses string dice to Dynamic Rollers| Effect[Standardized Effect Instance]

    Effect --> Engine[Modifier Engine]
    Engine --> ECS[ECS Component Store]
    ECS --> Resolver[Stat Resolver]
    Resolver -->|Stacks and Filters| FinalMath[Final Stat Value]

    style YAML fill:#f9f,stroke:#333,stroke-width:2px
    style FinalMath fill:#bbf,stroke:#333,stroke-width:2px
```

## Best Practices & Guidelines

- **Never directly mutate `EncounterState`**. All transitions should occur by mapping a data payload, enqueueing it into the `EventQueue`, and letting the `CombatEngine` natively drain and process the state.
- **Modifiers tick on `TURN_START`**. Avoid modifying expiration boundaries around `TURN_END` to ensure single-round durations do not collapse immediately upon casting.
- **Use the Conflict Resolver for Tie-breakers**. Do not write hardcoded exceptions (e.g., `if (mageArmor && unarmoredDefense)`). Instead, add a mutual exclusion rule dynamically via the DSL's `conflicts` array mapping.
- **Maintain "Pure" Data Entities**. The classes governing `Modifier`, `Duration`, and `Event` should contain zero behavior algorithms.
