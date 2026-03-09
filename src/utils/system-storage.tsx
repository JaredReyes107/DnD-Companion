// utils/storage.ts

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

import { Character } from "@/core/entities/character/Character";

export const loadCharacterFromStorage = async (): Promise<Character | null> => {
  try {
    const selectedCharacterId = await AsyncStorage.getItem(
      "selectedCharacterId",
    );

    const charactersData = await AsyncStorage.getItem("characters");
    if (charactersData !== null) {
      const data: Character[] = JSON.parse(charactersData);
      const selectedCharacter = data.find(
        (item) => item.id === selectedCharacterId,
      );

      return selectedCharacter ?? null;
    }

    Alert.alert("No data found");
    return null;
  } catch (error) {
    Alert.alert("Error retrieving data", (error as Error).message);
    return null;
  }
};
