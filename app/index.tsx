// Libraries
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import custom types
import { Character } from "@/game/types/instances/Character";

// Custom Components
import { MaterialIcons } from "@expo/vector-icons";
import { ThemedView } from "@/components/ThemedView";

import styles from "@/stylesheets/generic.styles";

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

    router.push("../character-sheet");
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
                character.classes.byId[characterClass].classId +
                " " +
                character.classes.byId[characterClass].level +
                " ",
            )}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => deleteItem(character.id)}
          style={styles.characterCard_ActionIcon}
        >
          <MaterialIcons name="delete" size={24} color="#da8466" />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );

  return (
    <ThemedView style={[styles.rootContainer, { paddingHorizontal: 20 }]}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Personajes</Text>
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
