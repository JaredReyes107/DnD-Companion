import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { Character } from "@/core/entities/character/Character";
import { CharacterRepository } from "@/repositories/CharacterRepository";
import { CharacterSelectionRepository } from "@/repositories/CharacterSelectionRepository";

type CharacterContextType = {
  character: Character | null;
  loading: boolean;
  saveCharacter: (updated: Character) => Promise<void>;
  loadCharacterById: (id: string) => Promise<void>;
};

const CharacterContext = createContext<CharacterContextType | null>(null);

export const CharacterProvider = ({
  children,
  initialCharacterId,
}: {
  children: React.ReactNode;
  initialCharacterId?: string;
}) => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  const loadCharacterById = useCallback(async (id: string) => {
    setLoading(true);
    try {
      const found = await CharacterRepository.getById(id);
      setCharacter(found);
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

  const saveCharacter = useCallback(async (updated: Character) => {
    setCharacter(updated);
    const all = await CharacterRepository.getAll();
    const next = all.map((c) => (c.id === updated.id ? updated : c));
    await CharacterRepository.saveAll(next);
  }, []);

  const value = React.useMemo(
    () => ({ character, loading, saveCharacter, loadCharacterById }),
    [character, loading, saveCharacter, loadCharacterById],
  );

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
};

export function useCharacter() {
  const ctx = useContext(CharacterContext);
  if (!ctx) {
    throw new Error("useCharacter must be used inside CharacterProvider");
  }
  return ctx;
}
