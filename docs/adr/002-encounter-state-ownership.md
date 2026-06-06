# ADR 002: Encounter State Ownership and Combat State Hydration

## Status

Accepted

## Context

`Character` records are persisted in AsyncStorage via `CharacterRepository`. During an earlier migration, `CombatState` was moved out of the `Character` entity and into `EncounterState.participants`, where it belongs architecturally — combat state is encounter-scoped, not character-scoped.

This migration was incomplete. `EncounterState` had no repository. The `CharacterProvider` had no awareness of encounters. Combat tabs were constructing throwaway `EncounterState` objects inline on every render using `buildEncounterState([character])`, which meant:

1. Persisted action economy, death saves, round number, and runtime modifiers were never loaded.
2. Every render discarded and reconstructed fresh combat state.
3. `character.combatState` was always `undefined` when loaded from storage, breaking any screen that guarded on it.
4. `tab-stats` rendered an invisible blank screen because its `!character.combatState` guard hit a bare `<View>` with no background.

## Decision

### 1. Introduce `EncounterRepository`

A new repository at `src/repositories/EncounterRepository.ts` owns all persistence of `EncounterState` records. It follows the same shape as `CharacterRepository` and adds one domain-specific method:

```typescript
getByCharacterId(characterId: string): Promise<EncounterState | null>
```

This scans stored encounters for one whose `participants` map contains the given character ID. Callers do not need to know the encounter ID — only the character ID.

### 2. Hydrate `combatState` in `CharacterProvider`

`CharacterProvider` is extended to load the encounter alongside the character. On every `loadCharacterById` call:

1. Load the `Character` from `CharacterRepository`.
2. Call `EncounterRepository.getByCharacterId(character.id)`.
3. If no encounter exists (new character, or pre-migration data), call `buildEncounterState([character])` and persist it via `EncounterRepository.save`.
4. Merge `encounter.participants[character.id]` onto the character as `combatState`.
5. Expose both `character` (with `combatState` populated) and `encounter` on the context.

After this, `character.combatState` is **always defined** by the time any screen renders. The `!character.combatState` guard in screens becomes a true "still loading" sentinel rather than a routine occurrence.

### 3. Expose `saveEncounter` on the context

The context contract is extended from:

```typescript
{ character, loading, saveCharacter, loadCharacterById }
```

to:

```typescript
{ character, encounter, loading, saveCharacter, saveEncounter, loadCharacterById }
```

`saveEncounter` persists an updated `EncounterState` and syncs the in-memory `character.combatState` so UI reflects changes immediately without a reload.

`saveCharacter` is updated to automatically sync any changed `combatState` back into the encounter record, keeping both storage layers consistent.

### 4. Combat tabs consume encounter from context

Tabs that previously called `buildEncounterState([character])` inline — `tab-actions` and `tab-character-sheet` — now read `encounter` from `useCharacter()` and pass it to `resolveInCombat`. Action economy mutations call `saveEncounter(cycleActionResource(encounter, ...))` rather than mutating a locally-constructed throwaway object.

## Consequences

**Positive:**

- Combat state (action economy, death saves, initiative order, runtime modifiers) survives navigation between tabs and app sessions.
- `character.combatState` is guaranteed non-null after the provider loads, eliminating a class of invisible blank-screen bugs.
- Action economy mutations are now applied to the persisted encounter, not discarded.
- The existing `buildEncounterState` function continues to serve its purpose (constructing a fresh state) without being misused as a render-time data source.

**Negative / Trade-offs:**

- The provider now performs two sequential async reads on mount (character, then encounter). This is acceptable given the offline-first model and the typical size of these records.
- `Character.combatState` remains an optional field on the type (`combatState?: CombatState`). It is populated by the provider but absent in the raw stored record. Code outside the provider should treat it as potentially undefined; code inside combat screens can rely on it being present after loading.

## Rules Going Forward

- **Do not** call `buildEncounterState` in render bodies or component code. Encounter construction is the provider's responsibility.
- **Do not** call `saveCharacter` to persist action economy changes. Use `saveEncounter`.
- **Do not** access `AsyncStorage` directly in screens or components. Go through repositories.
- A character's `encounterId` field is the intended long-term link between the two records. `getByCharacterId` uses a participant scan as an interim approach until that field is reliably populated during character creation.