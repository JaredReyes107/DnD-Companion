import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Character } from "../core/entities/character/Character";

interface CharacterState {
  characters: Character[];
  selectedCharacterId: string | null;
  hasHydrated: boolean;

  // Actions
  setCharacters: (characters: Character[]) => void;
  selectCharacter: (id: string | null) => void;
  setHasHydrated: (state: boolean) => void;
}

export const useCharacterStore = create<CharacterState>()(
  persist(
    (set) => ({
      characters: [],
      selectedCharacterId: null,
      hasHydrated: false,

      setCharacters: (characters) => set({ characters }),
      selectCharacter: (id) => set({ selectedCharacterId: id }),
      setHasHydrated: (state) => set({ hasHydrated: state }),
    }),
    {
      name: "character-storage",
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: (state) => {
        return () => state?.setHasHydrated(true);
      },
      partialize: (state) => ({
        selectedCharacterId: state.selectedCharacterId,
      }),
    },
  ),
);
