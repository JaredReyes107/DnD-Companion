import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Character } from "@/core/entities/character/Character";

type CharacterContextType = {
  character: Character | null;
  loading: boolean;
  saveCharacter: (updated: Character) => Promise<void>;
  loadCharacterById: (id: string) => Promise<void>;
};

const CharacterContext = createContext<CharacterContextType | null>(null);

export const CharacterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadCharacter() {
      try {
        const selectedId = await AsyncStorage.getItem("selectedCharacterId");
        if (!selectedId) return;

        const raw = await AsyncStorage.getItem("characters");
        if (!raw) return;

        const characters: Character[] = JSON.parse(raw);
        const found = characters.find((c) => c.id === selectedId) ?? null;

        if (mounted) setCharacter(found);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadCharacter();

    return () => {
      mounted = false;
    };
  }, []);

  const saveCharacter = useCallback(async (updated: Character) => {
    setCharacter(updated);

    const raw = await AsyncStorage.getItem("characters");
    if (!raw) return;

    const characters: Character[] = JSON.parse(raw);
    const next = characters.map((c) => (c.id === updated.id ? updated : c));

    await AsyncStorage.setItem("characters", JSON.stringify(next));
  }, []);

  const loadCharacterById = useCallback(async (id: string) => {
    setLoading(true);

    const raw = await AsyncStorage.getItem("characters");
    if (!raw) {
      setCharacter(null);
      setLoading(false);
      return;
    }

    const characters: Character[] = JSON.parse(raw);
    const found = characters.find((c) => c.id === id) ?? null;

    setCharacter(found);
    setLoading(false);
  }, []);

  return (
    <CharacterContext.Provider
      value={{ character, loading, saveCharacter, loadCharacterById }}
    >
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
