// Libraries
import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  KeyboardAvoidingView,
  FlatList,
  SectionList,
} from "react-native";
import { useRouter } from "expo-router";
import * as Crypto from "expo-crypto";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Custom Classes and Constants
import { Character } from "@/game/types/instances/Character"; // Import custom types
import { Alignment, ALIGNMENTS } from "@/game/base-data/alignments";
import {
  ABILITY_ORDER,
  AbilityScores,
  CharacterSavingThrows,
} from "@/game/types/templates/abilities-scores";

// Functions and Helpers
import { buildAbilityScores } from "@/lib/helpers/ability-scores-helper";
import { buildSavingThrows } from "@/lib/helpers/saving-throws-helper";
import { SKILL_ORDER } from "@/game/base-data/skills";
import { CharacterSkills } from "@/game/types/templates/character-skills";
import { buildCharacterSkills } from "@/lib/helpers/skills-helper";
import { getAllClassTemplates } from "@/game/registries/classes.registry";
import { buildCharacterResources } from "@/lib/helpers/resources-helper";

import { MaterialIcons } from "@expo/vector-icons";

// Components
import { ThemedView } from "@/components/ThemedView";
import CustomPicker from "@/components/CustomPicker";
import { MainClassForm } from "@/components/MainClassForm";
import { SecondaryClassesForm } from "@/components/SecondaryClassesForm";
import AbilityScoreInput from "@/components/AbilityScoresInput";
import SavingThrowProficiencyInput from "@/components/SavingThrowProficiencyInput";
import SkillProficiencyInput from "@/components/SkillProficiencyInput";

import genericStyles from "@/stylesheets/generic.styles";
import styles from "@/stylesheets/character-creation.styles";

const CharacterCreationScreen = () => {
  const router = useRouter();

  const [characters, setCharacters] = useState<Character[]>([]);

  const [CharacterName, setCharacterName] = useState("");
  const [CharacterRace, setCharacterRace] = useState("");
  const [CharacterAlignment, setCharacterAlignment] =
    useState<Alignment | null>(null);

  type ClassDraft = {
    id: string;
    classTemplateId: string | null;
    level: number;
  };
  const [mainClass, setMainClass] = useState<ClassDraft>({
    id: Crypto.randomUUID(),
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
      id: Crypto.randomUUID(),
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

      features: {},
      resources: {},

      combatState: {
        actionUsed: false,
        bonusActionUsed: false,
        reactionUsed: false,

        conditions: [],
      },
    };

    newCharacter.resources = buildCharacterResources(newCharacter);
    console.log(newCharacter.resources);

    setCharacters([...characters, newCharacter]);

    router.push("/");
  };

  // Save in local storage whenever a character is added, modified or deleted
  useEffect(() => {
    AsyncStorage.setItem("characters", JSON.stringify(characters));
  }, [characters]);

  const sections = [
    {
      key: "identity",
      title: "Identidad",
      data: ["name", "race", "alignment", "xp"],
    },
    {
      key: "classes",
      title: "Clases",
      data: ["mainClass", ...secondaryClasses],
    },
    {
      key: "addClass",
      title: "Añadir nueva clase",
      data: ["addClass"],
    },
    {
      key: "stats",
      title: "Estadísticas",
      data: ["stats"],
    },
    {
      key: "savingThrows",
      title: "Tiradas de Salvación",
      data: ["savingThrows"],
    },
    {
      key: "skills",
      title: "Habilidades",
      data: ["skills"],
    },
    {
      key: "submit",
      title: "",
      data: ["submit"],
    },
  ];

  const classTemplates = getAllClassTemplates();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderItem = ({ item, section }: any) => {
    switch (section.key) {
      case "identity":
        if (item === "name") {
          return (
            <View style={styles.fieldContainer}>
              <Text style={styles.fieldHeader}>Nombre del personaje</Text>
              <TextInput
                placeholder=""
                onChangeText={setCharacterName}
                style={styles.input}
              />
            </View>
          );
        }
        if (item === "race") {
          return (
            <View style={styles.fieldContainer}>
              <Text style={styles.fieldHeader}>Raza</Text>
              <TextInput
                placeholder=""
                onChangeText={setCharacterRace}
                style={styles.input}
              />
            </View>
          );
        }
        if (item === "alignment") {
          return (
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
          );
        }
        if (item === "xp") {
          return (
            <View style={styles.fieldContainer}>
              <Text style={styles.fieldHeader}>Puntos de Experiencia</Text>
              <TextInput
                placeholder=""
                onChangeText={(val) => setCharacterXP(+val)}
                style={styles.input}
              />
            </View>
          );
        }
        return null;

      case "classes":
        if (item === "mainClass") {
          return (
            <MainClassForm
              classTemplates={classTemplates}
              value={mainClass}
              onChange={setMainClass}
            />
          );
        }

        // secondary class
        return (
          <>
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
          </>
        );

      case "addClass":
        return (
          <TouchableOpacity
            style={styles.addClassButtonContainer}
            onPress={() =>
              setSecondaryClasses((prev) => [
                ...prev,
                {
                  id: Crypto.randomUUID(),
                  classTemplateId: null,
                  level: 1,
                },
              ])
            }
          >
            <Text style={styles.addClassButton}>+ Añadir clase</Text>
          </TouchableOpacity>
        );

      case "speed":
        return (
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
        );

      case "hp":
        return (
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
        );

      case "stats":
        return (
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
        );

      case "savingThrows":
        return (
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
        );

      case "skills":
        return (
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
        );

      case "submit":
        return (
          <View style={styles.submitButtonContainer}>
            <TouchableOpacity
              onPress={addCharacter}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Añadir Personaje</Text>
            </TouchableOpacity>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <KeyboardAvoidingView
      style={[genericStyles.rootContainer, { paddingHorizontal: 20 }]}
    >
      <ThemedView>
        <SectionList
          sections={sections}
          keyExtractor={(item, index) =>
            typeof item === "string" ? item + index : item.id
          }
          renderItem={renderItem}
        />
      </ThemedView>
    </KeyboardAvoidingView>
  );
};

export default CharacterCreationScreen;
