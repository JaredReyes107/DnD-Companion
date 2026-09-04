import AsyncStorage from "@react-native-async-storage/async-storage";
import { Character } from "../core/entities/character/Character";
import { hydrateCharacter } from "./character-migration";

const CHARACTERS_KEY = "characters";

export const CharacterRepository = {
  async getAll(): Promise<Character[]> {
    try {
      const stored = await AsyncStorage.getItem(CHARACTERS_KEY);
      const parsed: unknown = stored ? JSON.parse(stored) : [];
      const list = Array.isArray(parsed) ? parsed : [];
      return list.map(hydrateCharacter);
    } catch (error) {
      console.error("Failed to fetch characters from storage:", error);
      return [];
    }
  },

  async saveAll(characters: Character[]): Promise<void> {
    try {
      await AsyncStorage.setItem(CHARACTERS_KEY, JSON.stringify(characters));
    } catch (error) {
      console.error("Failed to save characters to storage:", error);
    }
  },

  async getById(id: string): Promise<Character | null> {
    const all = await this.getAll();
    return all.find((c) => c.id === id) || null;
  },

  async deleteById(id: string): Promise<void> {
    const all = await this.getAll();
    const filtered = all.filter((c) => c.id !== id);
    await this.saveAll(filtered);
  },
};
