// Libraries
import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
// This import is no longer needed but was not explicitly removed in the instruction, so I'll keep it for now.
// This import is no longer needed but was not explicitly removed in the instruction, so I'll keep it for now.

// Import custom types
import { Character } from "@/core/entities/character/Character";

// Custom Components
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { ThemedView } from "@/components/ui/ThemedView";

import { getLocalizedName } from "@/services/localization/localization-helper";
import { getTotalCharacterLevel } from "@/core/rules/character/character-multiclassing";
import { getNextXPThreshold } from "@/core/entities/progression/leveling";

import { ui } from "@/services/localization/ui-localization-resolver";

import styles from "@/styles/generic.styles";
import { formatNaturalNumber } from "@/utils/input-handler";

import { CharacterRepository } from "@/repositories/CharacterRepository";
import { useCharacterStore } from "@/store/characterStore";
import { useCombatNavigator } from "@/navigation/navigators/combatNavigator";
import { useCharacterNavigator } from "@/navigation/navigators/characterNavigator";

const IndexScreen = () => {
  const characters = useCharacterStore((s) => s.characters);
  const setCharacters = useCharacterStore((s) => s.setCharacters);
  const selectCharacter = useCharacterStore((s) => s.selectCharacter);
  const combatNavigator = useCombatNavigator();
  const characterNavigator = useCharacterNavigator();

  useEffect(() => {
    async function load() {
      const stored = await CharacterRepository.getAll();
      setCharacters(stored);
    }
    load();
  }, [setCharacters]);

  const deleteItem = async (id: string) => {
    await CharacterRepository.deleteById(id);
    const updated = await CharacterRepository.getAll();
    setCharacters(updated);
  };

  const handleSelectCharacter = (id: string) => {
    selectCharacter(id);
    combatNavigator.enterCombat(id);
  };

  const renderListItem = ({ item: character }: { item: Character }) => (
    <View>
      <TouchableOpacity
        onPress={() => handleSelectCharacter(character.id)}
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
              selectCharacter(character.id);
              characterNavigator.goToEdition();
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
        <TouchableOpacity onPress={() => characterNavigator.goToCreation()}>
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
