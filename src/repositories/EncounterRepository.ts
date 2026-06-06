import AsyncStorage from "@react-native-async-storage/async-storage";
import { EncounterState } from "@/core/entities/combat/encounter-state";

const ENCOUNTERS_KEY = "encounters";

export const EncounterRepository = {
  async getAll(): Promise<Record<string, EncounterState>> {
    try {
      const stored = await AsyncStorage.getItem(ENCOUNTERS_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      console.error("Failed to fetch encounters from storage:", error);
      return {};
    }
  },

  async getByCharacterId(characterId: string): Promise<EncounterState | null> {
    try {
      const all = await this.getAll();
      const found = Object.values(all).find(
        (encounter) => characterId in encounter.participants,
      );
      return found ?? null;
    } catch (error) {
      console.error("Failed to find encounter for character:", error);
      return null;
    }
  },

  async save(encounter: EncounterState): Promise<void> {
    try {
      const all = await this.getAll();
      all[encounter.id] = encounter;
      await AsyncStorage.setItem(ENCOUNTERS_KEY, JSON.stringify(all));
    } catch (error) {
      console.error("Failed to save encounter to storage:", error);
    }
  },

  async deleteById(encounterId: string): Promise<void> {
    try {
      const all = await this.getAll();
      delete all[encounterId];
      await AsyncStorage.setItem(ENCOUNTERS_KEY, JSON.stringify(all));
    } catch (error) {
      console.error("Failed to delete encounter from storage:", error);
    }
  },
};
