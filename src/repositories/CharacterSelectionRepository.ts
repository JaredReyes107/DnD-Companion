import AsyncStorage from "@react-native-async-storage/async-storage";

const SELECTED_CHAR_KEY = "selectedCharacterId";

export const CharacterSelectionRepository = {
  async getSelectedId(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(SELECTED_CHAR_KEY);
    } catch (error) {
      console.error("Failed to fetch selected character ID:", error);
      return null;
    }
  },

  async setSelectedId(id: string | null): Promise<void> {
    try {
      if (id === null) {
        await AsyncStorage.removeItem(SELECTED_CHAR_KEY);
      } else {
        await AsyncStorage.setItem(SELECTED_CHAR_KEY, id);
      }
    } catch (error) {
      console.error("Failed to set selected character ID:", error);
    }
  },
};
