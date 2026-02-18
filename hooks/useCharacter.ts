import { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Character } from "@/game/types/instances/Character";

export function useCharacter() {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  // Load once on mount
  useEffect(() => {
    let mounted = true;

    async function loadCharacter() {
      try {
        const selectedId = await AsyncStorage.getItem("selectedCharacterId");
        if (!selectedId) {
          if (mounted) setCharacter(null);
          return;
        }

        const raw = await AsyncStorage.getItem("characters");
        if (!raw) {
          if (mounted) setCharacter(null);
          return;
        }

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

  // Explicit save helper
  const saveCharacter = useCallback(async (updated: Character) => {
    setCharacter(updated);

    const raw = await AsyncStorage.getItem("characters");
    if (!raw) return;

    const characters: Character[] = JSON.parse(raw);
    const next = characters.map((c) => (c.id === updated.id ? updated : c));

    await AsyncStorage.setItem("characters", JSON.stringify(next));
  }, []);

  return {
    character,
    loading,
    saveCharacter,
  };
}
