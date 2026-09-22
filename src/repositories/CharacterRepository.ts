import AsyncStorage from "@react-native-async-storage/async-storage";
import { Character } from "../core/entities/character/Character";
import {
  hydrateCharacterCheckState,
  serializeCharacterCheckState,
} from "../core/entities/character/check-state";
import {
  hydrateCharacterLanguageState,
  serializeCharacterLanguageState,
} from "@/core/entities/character/language-state";

const CHARACTERS_KEY = "characters";

function hydrateCharacter(raw: Character): Character {
  return {
    ...raw,
    checks: hydrateCharacterCheckState(raw.checks as never),
    languages: hydrateCharacterLanguageState(raw.languages as never),
  };
}

function serializeCharacter(character: Character): unknown {
  return {
    ...character,
    checks: serializeCharacterCheckState(character.checks),
    languages: serializeCharacterLanguageState(character.languages),
  };
}

export const CharacterRepository = {
  async getAll(): Promise<Character[]> {
    try {
      const stored = await AsyncStorage.getItem(CHARACTERS_KEY);
      const parsed: Character[] = stored ? JSON.parse(stored) : [];
      return parsed.map(hydrateCharacter);
    } catch (error) {
      console.error("Failed to fetch characters from storage:", error);
      return [];
    }
  },

  async saveAll(characters: Character[]): Promise<void> {
    try {
      const serialized = characters.map(serializeCharacter);
      await AsyncStorage.setItem(CHARACTERS_KEY, JSON.stringify(serialized));
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

export const DebugDelete = {
  async clearAll(): Promise<void> {
    await AsyncStorage.removeItem(CHARACTERS_KEY);
  },
};
