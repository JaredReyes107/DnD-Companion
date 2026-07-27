import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { Character } from "@/core/entities/character/Character";
import { EncounterState } from "@/core/entities/combat/encounter-state";
import { CombatState } from "@/core/entities/combat/combat-state";
import { CharacterRepository } from "@/repositories/CharacterRepository";
import { CharacterSelectionRepository } from "@/repositories/CharacterSelectionRepository";
import { EncounterRepository } from "@/repositories/EncounterRepository";

import { buildCombatState } from "@/core/rules/combat/combat-helper";
import { buildEncounterState } from "@/core/entities/combat/encounter-helper";
import { buildCharacterResources } from "@/core/rules/character/resources-helper";
import { buildCharacterActions } from "@/core/rules/combat/actions-helper";
import { buildCharacterPassiveModifiers } from "@/core/rules/character/stat-modifiers-helper";

import { bootstrapFeatureChoices } from "@/core/rules/character/choices-helper";

/**
 * Returns the character with its CombatState merged in from the encounter.
 * If no encounter exists yet for this character, one is created and persisted.
 */
async function hydrateCharacterWithCombatState(
  character: Character,
): Promise<{ character: Character; encounter: EncounterState }> {
  let encounter = await EncounterRepository.getByCharacterId(character.id);

  if (!encounter) {
    // First time opening: bootstrap a fresh encounter and persist it.
    encounter = buildEncounterState([character]);
    await EncounterRepository.save(encounter);
  }

  const combatState: CombatState =
    encounter.participants[character.id] ?? buildCombatState(character);

  return {
    character: { ...character, combatState },
    encounter,
  };
}

// ---------------------------------------------------------------------------
// Context contract
// ---------------------------------------------------------------------------

type CharacterContextType = {
  character: Character | null;
  encounter: EncounterState | null;
  loading: boolean;
  /** Persist a character mutation. Also syncs combatState back to the encounter. */
  saveCharacter: (updated: Character) => Promise<void>;
  /** Persist an encounter mutation (e.g. action economy, round advance). */
  saveEncounter: (updated: EncounterState) => Promise<void>;
  loadCharacterById: (id: string) => Promise<void>;
};

const CharacterContext = createContext<CharacterContextType | null>(null);

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

export const CharacterProvider = ({
  children,
  initialCharacterId,
}: {
  children: React.ReactNode;
  initialCharacterId?: string;
}) => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [encounter, setEncounter] = useState<EncounterState | null>(null);
  const [loading, setLoading] = useState(true);

  const loadCharacterById = useCallback(async (id: string) => {
    setLoading(true);
    try {
      const raw = await CharacterRepository.getById(id);
      if (!raw) {
        setCharacter(null);
        setEncounter(null);
        return;
      }

      const { character: hydrated, encounter: enc } =
        await hydrateCharacterWithCombatState(raw);

      setCharacter(hydrated);
      setEncounter(enc);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    async function init() {
      if (initialCharacterId) {
        await loadCharacterById(initialCharacterId);
      } else {
        const selectedId = await CharacterSelectionRepository.getSelectedId();
        if (selectedId) {
          await loadCharacterById(selectedId);
        } else {
          setLoading(false);
        }
      }
    }
    init();
  }, [initialCharacterId, loadCharacterById]);

  /**
   * Saves a character mutation.
   * If the character carries an updated combatState, that is synced back into
   * the encounter so both storage layers stay consistent.
   */

  const saveCharacter = useCallback(async (updated: Character) => {
    // Re-bootstrap choices whenever the character is saved —
    // covers level-ups unlocking new pools and feature changes.
    // Never overwrites existing selections.
    const featureChoices = bootstrapFeatureChoices(updated);

    // Rebuild all derived state against the re-bootstrapped character
    const withChoices: Character = { ...updated, featureChoices };

    const rebuilt: Character = {
      ...withChoices,
      resources: buildCharacterResources(withChoices),
      actions: buildCharacterActions(withChoices),
      statModifiers: buildCharacterPassiveModifiers(withChoices),
    };

    setCharacter(rebuilt);

    // Persist without combatState — it lives in the encounter
    const { combatState: characterToStore } = rebuilt as Character & {
      combatState?: CombatState;
    };

    const all = await CharacterRepository.getAll();
    const next = all.map((c) => (c.id === rebuilt.id ? characterToStore : c));
    await CharacterRepository.saveAll(next as Character[]);

    // Sync combatState back to encounter if present
    if (rebuilt.combatState) {
      setEncounter((prev) => {
        if (!prev) return prev;
        const updatedEncounter: EncounterState = {
          ...prev,
          participants: {
            ...prev.participants,
            [rebuilt.id]: rebuilt.combatState!,
          },
        };
        EncounterRepository.save(updatedEncounter);
        return updatedEncounter;
      });
    }
  }, []);

  /**
   * Saves an encounter mutation and syncs the active character's combatState
   * back into React state so the UI reflects it immediately.
   */
  const saveEncounter = useCallback(async (updated: EncounterState) => {
    setEncounter(updated);
    await EncounterRepository.save(updated);

    // Keep the character's in-memory combatState in sync.
    setCharacter((prev) => {
      if (!prev) return prev;
      const updatedCombatState = updated.participants[prev.id];
      if (!updatedCombatState) return prev;
      return { ...prev, combatState: updatedCombatState };
    });
  }, []);

  const value = React.useMemo(
    () => ({
      character,
      encounter,
      loading,
      saveCharacter,
      saveEncounter,
      loadCharacterById,
    }),
    [
      character,
      encounter,
      loading,
      saveCharacter,
      saveEncounter,
      loadCharacterById,
    ],
  );

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
};

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

export function useCharacter() {
  const ctx = useContext(CharacterContext);
  if (!ctx) {
    throw new Error("useCharacter must be used inside CharacterProvider");
  }
  return ctx;
}
