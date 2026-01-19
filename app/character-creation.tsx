// Libraries
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Custom Classes and Constants
import { Character } from "@/game/types/instances/character"; // Import custom types
import { Alignment, ALIGNMENTS } from "@/game/base-data/alignments";
import {
  ABILITY_ORDER,
  AbilityScores,
  CharacterSavingThrows,
} from "@/game/types/templates/abilities-scores";

import { buildAbilityScores } from "@/lib/helpers/ability-scores-helper";
import { buildSavingThrows } from "@/lib/helpers/saving-throws-helper";
import { SKILL_ORDER } from "@/game/base-data/skills";
import { CharacterSkills } from "@/game/types/templates/character-skills";
import { buildCharacterSkills } from "@/lib/helpers/skills-helper";
import { getAllClassTemplates } from "@/game/registries/classes.registry";

import { MaterialIcons } from "@expo/vector-icons";

import CustomPicker from "@/components/CustomPicker";
import { MainClassForm } from "@/components/MainClassForm";
import { SecondaryClassesForm } from "@/components/SecondaryClassesForm";
import AbilityScoreInput from "@/components/AbilityScoresInput";
import SavingThrowProficiencyInput from "@/components/SavingThrowProficiencyInput";
import SkillProficiencyInput from "@/components/SkillProficiencyInput";

import styles from "@/stylesheets/character-creation.styles";
import genericStyles from "@/stylesheets/generic.styles";
import { buildSpellSlots } from "@/game/rules/spellcasting";
import { buildCharacterClassResources } from "@/lib/helpers/resources-helper";

const CharacterCreationScreen = () => {
  const router = useRouter();

  const [characters, setCharacters] = useState<Character[]>([]);

  const [CharacterName, setCharacterName] = useState("");
  const [CharacterRace, setCharacterRace] = useState("");
  const [CharacterAlignment, setCharacterAlignment] =
    useState<Alignment | null>(null);

  type ClassDraft = {
    id: string; // instance id (uuid)
    classTemplateId: string | null;
    level: number;
  };
  const [mainClass, setMainClass] = useState<ClassDraft>({
    id: crypto.randomUUID(),
    classTemplateId: null,
    level: 1,
  });
  const [secondaryClasses, setSecondaryClasses] = useState<ClassDraft[]>([]);

  const [CharacterXP, setCharacterXP] = useState(0);

  const [CharacterSpeed, setCharacterSpeed] = useState(30);
  const [CharacterHP, setCharacterHP] = useState(0);

  const [characterAbilityScores, setCharacterAbilityScores] =
    useState<AbilityScores>(buildAbilityScores());
  const [characterSavingThrows, setCharacterSavingThrows] =
    useState<CharacterSavingThrows>(buildSavingThrows());
  const [characterSkillProficiencies, setCharacterSkillProficiencies] =
    useState<CharacterSkills>(buildCharacterSkills());

  const loadCharactersFromStorage = async () => {
    try {
      const storedCharacters = await AsyncStorage.getItem("characters");
      if (storedCharacters) {
        setCharacters(JSON.parse(storedCharacters));
      }
    } catch {
      Alert.alert("Error", "Failed to load items");
    }
  };

  //Load already existing characters whenever this view is loaded
  useEffect(() => {
    const loadCharacters = async () => {
      await loadCharactersFromStorage();
    };
    loadCharacters();
  }, []);

  const addCharacter = () => {
    if (!CharacterName) {
      Alert.alert("Error", "El nombre no puede estar vacío");
      return;
    }

    const characterClasses = [mainClass, ...secondaryClasses];

    const classesById = Object.fromEntries(
      characterClasses.map((c) => [
        c.id,
        {
          classId: c.classTemplateId!,
          level: c.level,
        },
      ]),
    );

    if (characterClasses.some((d) => !d.id)) {
      Alert.alert("Todas las clases deben estar seleccionadas");
      return;
    }

    const newCharacter: Character = {
      id: crypto.randomUUID(),
      icon: "face",

      name: CharacterName,
      race: CharacterRace || "Humano",
      alignment: CharacterAlignment ?? "Lawful Good",
      experiencePoints: CharacterXP,

      classes: {
        byId: classesById,
        order: characterClasses.map((c) => c.id),
      },

      abilityScores: characterAbilityScores,
      savingThrows: characterSavingThrows,
      skills: characterSkillProficiencies,

      hitPoints: {
        baseMaximumHP: CharacterHP || 4 * 5,
        currentMaximumHP: CharacterHP || 4 * 5,
        currentHP: CharacterHP || 4 * 5,
        temporalHP: 0,
      },

      speed: CharacterSpeed || 30,

      spellSlots: {},
      features: {},
      resources: {},

      combatState: {
        actionUsed: false,
        bonusActionUsed: false,
        reactionUsed: false,

        conditions: [],
      },
    };

    newCharacter.spellSlots = buildSpellSlots(newCharacter);
    newCharacter.resources = buildCharacterClassResources(newCharacter);

    setCharacters([...characters, newCharacter]);

    router.push("/");
  };

  // Save in local storage whenever a character is added, modified or deleted
  useEffect(() => {
    AsyncStorage.setItem("characters", JSON.stringify(characters));
  }, [characters]);

  const classTemplates = getAllClassTemplates();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView style={genericStyles.rootContainer}>
        <View style={genericStyles.customFieldContainer}>
          {/* Nombre */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldHeader}>Nombre del personaje</Text>
            <TextInput
              placeholder=""
              onChangeText={setCharacterName}
              style={styles.input}
            />
          </View>

          {/* Race */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldHeader}>Raza</Text>
            <TextInput
              placeholder=""
              onChangeText={setCharacterRace}
              style={styles.input}
            />
          </View>

          {/* Alignment */}
          <View style={[styles.fieldContainer, { zIndex: 100 }]}>
            <Text style={styles.fieldHeader}>Alineamiento</Text>
            <View style={styles.pickerContainer}>
              <CustomPicker
                items={ALIGNMENTS}
                selectedValue={CharacterAlignment}
                onChange={(val) => setCharacterAlignment(val)}
                placeholder="Selecciona un alineamiento"
              ></CustomPicker>
            </View>
          </View>

          {/* XP */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldHeader}>Puntos de Experiencia</Text>
            <TextInput
              placeholder=""
              onChangeText={(val) => setCharacterXP(+val)}
              style={styles.input}
            />
          </View>

          {/* Main Class */}
          <MainClassForm
            classTemplates={classTemplates}
            value={mainClass}
            onChange={setMainClass}
          />

          {/* Secondary Classes */}
          <FlatList
            data={secondaryClasses}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View>
                <SecondaryClassesForm
                  value={item}
                  classTemplates={classTemplates}
                  onChange={(updated) =>
                    setSecondaryClasses((prev) =>
                      prev.map((c) => (c.id === item.id ? updated : c)),
                    )
                  }
                  onRemove={() =>
                    setSecondaryClasses((prev) =>
                      prev.filter((c) => c.id !== item.id),
                    )
                  }
                />
              </View>
            )}
          />
          <TouchableOpacity
            style={styles.addClassButtonContainer}
            onPress={() =>
              setSecondaryClasses((prev) => [
                ...prev,
                {
                  id: crypto.randomUUID(),
                  classTemplateId: null,
                  level: 1,
                },
              ])
            }
          >
            <Text style={styles.addClassButton}>+ Añadir clase</Text>
          </TouchableOpacity>

          {/* Speed */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldHeader}>Velocidad</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterInput}>{CharacterSpeed}</Text>
              <View style={styles.counterButtonsContainer}>
                <TouchableOpacity
                  style={styles.counterButton}
                  onPress={() =>
                    setCharacterSpeed(
                      CharacterSpeed > 0 ? CharacterSpeed - 5 : 0,
                    )
                  }
                >
                  <MaterialIcons
                    name="remove"
                    style={styles.counterButtonIcon}
                  ></MaterialIcons>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.counterButton}
                  onPress={() =>
                    setCharacterSpeed(
                      CharacterSpeed < 40 ? CharacterSpeed + 5 : 75,
                    )
                  }
                >
                  <MaterialIcons
                    name="add"
                    style={styles.counterButtonIcon}
                  ></MaterialIcons>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* HP */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldHeader}>Puntos de Golpe</Text>
            <TextInput
              placeholder=""
              onChangeText={(value) =>
                setCharacterHP(
                  isNaN(parseInt(value, 10)) ? 0 : parseInt(value, 10),
                )
              }
              style={styles.input}
            />
          </View>

          {/* Stats */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldHeader}>Estadísticas</Text>
            <View style={styles.statsContainer}>
              <FlatList
                data={ABILITY_ORDER}
                keyExtractor={(ability) => ability}
                renderItem={({ item: ability }) => (
                  <AbilityScoreInput
                    label={ability}
                    score={characterAbilityScores[ability].value}
                    onChange={(delta) =>
                      setCharacterAbilityScores((prev) => ({
                        ...prev,
                        [ability]: {
                          ...prev[ability],
                          value: prev[ability].value + delta,
                        },
                      }))
                    }
                  />
                )}
              />
            </View>
          </View>

          {/* ST Proficiencies */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldHeader}>Tiradas de salvación</Text>
            <View style={styles.statsContainer}>
              <FlatList
                style={styles.proficienciesList}
                data={ABILITY_ORDER}
                keyExtractor={(ability) => ability}
                renderItem={({ item: ability }) => (
                  <SavingThrowProficiencyInput
                    ability={ability}
                    label={ability}
                    savingThrow={characterSavingThrows[ability]}
                    onToggleProficiency={() =>
                      setCharacterSavingThrows((prev) => ({
                        ...prev,
                        [ability]: {
                          ...prev[ability],
                          hasProficiency: !prev[ability].hasProficiency,
                        },
                      }))
                    }
                  />
                )}
              />
            </View>
          </View>

          {/* Skills*/}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldHeader}>Competencias y Pericia</Text>
            <View style={styles.statsContainer}>
              <FlatList
                style={styles.proficienciesList}
                data={SKILL_ORDER}
                keyExtractor={(skillKey) => skillKey}
                renderItem={({ item: skillKey }) => (
                  <SkillProficiencyInput
                    skillId={skillKey}
                    skillInstance={characterSkillProficiencies[skillKey]}
                    onToggleProficiency={() =>
                      setCharacterSkillProficiencies((prev) => {
                        const current = prev[skillKey];
                        return {
                          ...prev,
                          [skillKey]: {
                            ...current,
                            hasProficiency: !current.hasProficiency,
                            hasExpertise: false, // expertise cannot exist without proficiency
                          },
                        };
                      })
                    }
                    onToggleExpertise={() =>
                      setCharacterSkillProficiencies((prev) => {
                        const current = prev[skillKey];
                        if (!current.hasProficiency) return prev;
                        return {
                          ...prev,
                          [skillKey]: {
                            ...current,
                            hasExpertise: !current.hasExpertise,
                          },
                        };
                      })
                    }
                  />
                )}
              />
            </View>
          </View>

          {/* Submit Button */}
          <View style={styles.submitButtonContainer}>
            <TouchableOpacity
              onPress={addCharacter}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Añadir Personaje</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CharacterCreationScreen;
