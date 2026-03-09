# Domain Model

This document outlines the core business entities within the `src/core/entities` engine.

## The Character Entity

The central object representing a player or NPC. It aggregates various sub-domains into a single serializable state.

```mermaid
classDiagram
    class Character {
        +String id
        +String name
        +HitPoints hitPoints
        +AbilityScores baseAbilityScores
        +CharacterClasses classes
        +CharacterResources resources
        +Record~String, SkillInstance~ skills
        +CombatState combatState
    }

    class HitPoints {
        +int currentHP
        +int currentMaximumHP
        +int temporalHP
    }

    class AbilityScores {
        +int STR
        +int DEX
        +int CON
        +int INT
        +int WIS
        +int CHA
    }

    class CharacterClasses {
        +String[] order
        +Record~String, ClassInstance~ byId
    }

    class CharacterResources {
        +Record~String, ResourceInstance~ data
    }

    class CombatState {
        +int round
        +int currentTurnIndex
        +int initiativeOrder
        +ActionEconomy actionEconomy
        +Record~String, ActiveCombatModifier~ runtimeModifiers
    }

    Character *-- HitPoints
    Character *-- AbilityScores
    Character *-- CharacterClasses
    Character *-- CharacterResources
    Character *-- CombatState
```

## The Encounter Entity

Manages a group of participants running through the Combat Engine lifecycle.

```mermaid
classDiagram
    class EncounterState {
        +String id
        +String name
        +int currentRound
        +String[] turnOrder
        +int activeTurnIndex
        +Record~String, CombatState~ participants
    }

    class CombatState {
        +int initiativeRoll
        +int initiativeOrder
        +ActionEconomy actionEconomy
        +Record~String, ActiveCombatModifier~ runtimeModifiers
        +String[] conditions
    }

    class ActionEconomy {
        +ResourceState actions
        +ResourceState bonusActions
        +ResourceState reactions
    }

    EncounterState *-- CombatState : Participants Map
    CombatState *-- ActionEconomy
```

## The Modifier System (Base)

The foundation for the Universal Modifier System, dictating how dynamic changes are applied to character stats.

```mermaid
classDiagram
    class ActiveCombatModifier {
        +String id
        +StatModifierInstance modifier
        +int appliedAtRound
        +int expiresAtRound
        +int expiresAtTurn
        +boolean concentration
    }

    class StatModifierInstance {
        +StatModel statModel
        +String sourceId
        +ModifierType mode
        +int value
        +int priority
        +String scope
    }

    class StatModel {
        <<enumeration>>
        ability
        save
        skill
        derived
        custom
    }

    class ModifierType {
        <<enumeration>>
        add
        subtract
        multiply
        override
        min
        max
    }

    ActiveCombatModifier o-- StatModifierInstance
    StatModifierInstance --> StatModel
    StatModifierInstance --> ModifierType
```
