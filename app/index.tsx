// Libraries
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import custom types
import { Character } from "@/game/domain/character/Character";

// Custom Components
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { ThemedView } from "@/components/ThemedView";

import { getLocalizedName } from "@/lib/helpers/localization-helper";
import { getTotalCharacterLevel } from "@/game/mechanics/character-multiclassing";
<<<<<<< HEAD
import { getNextXPThreshold } from "@/game/domain/progression/leveling";
=======
import { getNextXPThreshold } from "@/game/mechanics/leveling";
>>>>>>> main

import { ui } from "@/localization/ui-localization-resolver";

import styles from "@/stylesheets/generic.styles";
import { formatNaturalNumber } from "@/lib/utilities/input-handler";

const IndexScreen = () => {
  const router = useRouter();
  const [characters, setCharacters] = useState<Character[]>([]);

  const loadItemsFromStorage = async () => {
    try {
      const storedItems = await AsyncStorage.getItem("characters");
      if (storedItems) {
        setCharacters(JSON.parse(storedItems));
      }
    } catch (error) {
      Alert.alert("Error", "Failed to load items: " + error);
    }
  };

  //Load characters whenever this view is loaded
  useEffect(() => {
    (async () => {
      await loadItemsFromStorage();
    })();
  }, []);

  const deleteItem = async (id: string) => {
    const updatedItems = characters.filter((item) => item.id !== id);

    setCharacters(updatedItems);
  };

  useEffect(() => {
    // Save in local storage whenever an item is added, modified or deleted
    AsyncStorage.setItem("characters", JSON.stringify(characters));
  }, [characters]);

  const loadCharacterDetails = async (id: string) => {
    try {
      await AsyncStorage.setItem("selectedCharacterId", id);
    } catch (error) {
      console.error("Error saving string:", error);
    }

    router.push("../combat/tab-character-sheet");
  };

  const renderListItem = ({ item: character }: { item: Character }) => (
    <View>
      <TouchableOpacity
        onPress={() => loadCharacterDetails(character.id)}
        style={styles.characterCard}
      >
        <View style={styles.iconContainer}>
          <MaterialIcons name="face" size={24} color="white" />
        </View>
        <View style={styles.characterCard_TextContainer}>
          <Text key="Nombre" style={styles.characterCard_Title}>
            {character.name}
          </Text>
          <Text key="Raza" style={styles.characterCard_Text}>
            {character.race}
          </Text>
          <Text key="Clase" style={styles.characterCard_Text}>
            {character.classes.order.map(
              (characterClass) =>
                getLocalizedName(
                  "classes",
                  character.classes.byId[characterClass].classId,
                ) +
                " " +
                character.classes.byId[characterClass].level +
                " ",
            )}
          </Text>
          <Text key="Xp" style={styles.characterCard_Text}>
            {formatNaturalNumber(character.experiencePoints) +
              "/" +
              formatNaturalNumber(
                getNextXPThreshold(getTotalCharacterLevel(character.classes)) ??
                  0,
              )}
          </Text>
        </View>

        <View style={styles.characterCard_ButtonsContainer}>
          <TouchableOpacity
            onPress={() => {
              AsyncStorage.setItem("selectedCharacterId", character.id);
              router.push("./character-edition");
            }}
            style={styles.characterCard_ActionIcon}
          >
            <MaterialCommunityIcons
              name="square-edit-outline"
              size={24}
              color="#da8466"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => deleteItem(character.id)}
            style={styles.characterCard_ActionIcon}
          >
            <MaterialIcons name="delete" size={24} color="#da8466" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <ThemedView style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{ui("character.plural")}</Text>
        <TouchableOpacity onPress={() => router.push("../character-creation")}>
          <View style={styles.iconButton}>
            <MaterialIcons name="add" size={24} color="white"></MaterialIcons>
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id}
        renderItem={renderListItem}
        style={styles.list}
      />
    </ThemedView>
  );
};

export default IndexScreen;
