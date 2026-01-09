/* eslint-disable prettier/prettier */

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
import { Character } from "@/game/types/templates/Character"; // Import custom types
import { Alignment, ALIGNMENTS } from "@/game/base-data/Alignments";
import { Ability, AbilityScores, SavingThrows } from "@/game/types/templates/AbilityScores";
import { getCharacterSkillsFromState } from "@/lib/adapters/SkillHelper";
import { getAllClassTemplates } from "@/game/registries/ClassRegistry";

import { MaterialIcons } from "@expo/vector-icons";

import CustomPicker from "@/components/CustomPicker";
import { MainClassForm } from "@/components/MainClassForm";
import { SecondaryClassesForm } from "@/components/SecondaryClassesForm";

import styles from "@/stylesheets/CharacterCreation";
import genericStyles from "@/stylesheets/GenericStyles";

export default function CharacterCreationScreen () {
  const router = useRouter();

  const [characters, setCharacters] = useState<Character[]>([]);

  const [CharacterName, setCharacterName] = useState("");
  const [CharacterRace, setCharacterRace] = useState("");
  const [CharacterAlignment, setCharacterAlignment] = useState<Alignment | null>(null);
  
  type ClassDraft = {
    id: string;        // instance id (uuid)
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

  const [CharacterStats, setCharacterStats] = useState([
    10, 10, 10, 10, 10, 10,
  ]);
  const [CharacterSTProficiencies, setCharacterSTProficiencies] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [CharacterSkillProficiencies, setCharacterSkillProficiencies] =
    useState([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ]);
  const [CharacterSkillExpertises, setCharacterSkillExpertises] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const loadCharactersFromStorage = async () => {
    try {
      const storedCharacters = await AsyncStorage.getItem("characters");
      if (storedCharacters) {
        setCharacters(JSON.parse(storedCharacters));
      }
    } catch (error) {
      Alert.alert("Error", "Failed to load items");
    }
  };

  //Load already existing characters whenever this view is loaded
  useEffect(() => {
    loadCharactersFromStorage();
  }, []);

  const addCharacter = () => {
    if (!CharacterName) 
    {
      Alert.alert("Error", "El nombre no puede estar vacío");
      return;
    }

    const abilityOrder: Ability[] = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];

    const abilityScores = abilityOrder.reduce((acc, ability, index) => {
      acc[ability] = {
        ability,
        value: CharacterStats[index],
      };
      return acc;
    }, {} as AbilityScores);

    const savingThrows = abilityOrder.reduce((acc, ability, index) => {
      acc[ability] = {
        ability,
        hasProficiency: CharacterSTProficiencies[index],
      };
      return acc;
    }, {} as SavingThrows);

    const characterClasses = [mainClass, ...secondaryClasses];

    const classesById = Object.fromEntries(
      characterClasses.map((c) => [
        c.id,
        {
          classId: c.classTemplateId!,
          level: c.level,
          activeFeatures: [],
        },
      ])
    );

    if (characterClasses.some(d => !d.id)) {
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

      abilityScores,
      savingThrows,
      skills: getCharacterSkillsFromState(
        CharacterSkillProficiencies,
        CharacterSkillExpertises
      ),

      hitPoints: {
        baseMaximumHP: CharacterHP || 4 * 5,
        currentMaximumHP: CharacterHP || 4 * 5,
        currentHP: CharacterHP || 4 * 5,
        temporalHP: 0,
      },

      speed: CharacterSpeed || 30,

      combatState: {
        actionUsed: false,
        bonusActionUsed: false,
        reactionUsed: false,

        conditions: [],
      },
    };

    console.log(getCharacterSkillsFromState(
        CharacterSkillProficiencies,
        CharacterSkillExpertises
      ));

    setCharacters([...characters, newCharacter]);

    router.push("/");
  };

  // Save in local storage whenever a character is added, modified or deleted
  useEffect(() => {
    AsyncStorage.setItem("characters", JSON.stringify(characters));
  }, [characters]);

  const modifyCharacterStat = (index: number, isIncreasing: boolean) => {
    const updatedStats = [...CharacterStats];
    if (isIncreasing) {
      updatedStats[index] += 1;
    } else {
      updatedStats[index] -= 1;
    }

    setCharacterStats(updatedStats);
  };

  const modifyCharacterSTProficiencies = (index: number) => {
    const updatedProficiencies = [...CharacterSTProficiencies];

    updatedProficiencies[index] = !updatedProficiencies[index];

    setCharacterSTProficiencies(updatedProficiencies);
  };

  const modifyCharacterSkillProficiencies = (index: number) => {
    const updatedSkillProficiencies = [...CharacterSkillProficiencies];

    if (updatedSkillProficiencies[index]) {
      updatedSkillProficiencies[index] = false;

      const updatedSkillExpertises = [...CharacterSkillExpertises];
      updatedSkillExpertises[index] = false;

      setCharacterSkillExpertises(updatedSkillExpertises);
    } else {
      updatedSkillProficiencies[index] = true;
    }

    setCharacterSkillProficiencies(updatedSkillProficiencies);
  };

  const modifyCharacterSkillExpertises = (index: number) => {
    const updatedSkills = [...CharacterSkillExpertises];

    updatedSkills[index] = !updatedSkills[index];

    setCharacterSkillExpertises(updatedSkills);
  };

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
                        prev.map((c) => (c.id === item.id ? updated : c))
                      )
                    }
                    onRemove={() =>
                      setSecondaryClasses((prev) => prev.filter((c) => c.id !== item.id))
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
            }>
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
              <View style={styles.statContainer}>
                <Text style={styles.statTitle}>Fuerza</Text>
                <View style={styles.statDetailsContainer}>
                  <Text style={styles.statValue}>{CharacterStats[0]}</Text>
                  <View style={styles.statDetailsButtonsContainer}>
                    <TouchableOpacity
                      style={styles.statDetailsButtons}
                      onPress={() =>
                        CharacterStats[0] > 0
                          ? modifyCharacterStat(0, false)
                          : null
                      }
                    >
                      <MaterialIcons
                        name="remove"
                        size={12}
                        color="white"
                      ></MaterialIcons>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.statDetailsButtons}
                      onPress={() =>
                        CharacterStats[0] < 20
                          ? modifyCharacterStat(0, true)
                          : null
                      }
                    >
                      <MaterialIcons
                        name="add"
                        size={12}
                        color="white"
                      ></MaterialIcons>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={styles.statContainer}>
                <Text style={styles.statTitle}>Destreza</Text>
                <View style={styles.statDetailsContainer}>
                  <Text style={styles.statValue}>{CharacterStats[1]}</Text>
                  <View style={styles.statDetailsButtonsContainer}>
                    <TouchableOpacity
                      style={styles.statDetailsButtons}
                      onPress={() =>
                        CharacterStats[1] > 0
                          ? modifyCharacterStat(1, false)
                          : null
                      }
                    >
                      <MaterialIcons
                        name="remove"
                        size={12}
                        color="white"
                      ></MaterialIcons>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.statDetailsButtons}
                      onPress={() =>
                        CharacterStats[1] < 20
                          ? modifyCharacterStat(1, true)
                          : null
                      }
                    >
                      <MaterialIcons
                        name="add"
                        size={12}
                        color="white"
                      ></MaterialIcons>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={styles.statContainer}>
                <Text style={styles.statTitle}>Constitución</Text>
                <View style={styles.statDetailsContainer}>
                  <Text style={styles.statValue}>{CharacterStats[2]}</Text>
                  <View style={styles.statDetailsButtonsContainer}>
                    <TouchableOpacity
                      style={styles.statDetailsButtons}
                      onPress={() =>
                        CharacterStats[2] > 0
                          ? modifyCharacterStat(2, false)
                          : null
                      }
                    >
                      <MaterialIcons
                        name="remove"
                        size={12}
                        color="white"
                      ></MaterialIcons>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.statDetailsButtons}
                      onPress={() =>
                        CharacterStats[2] < 20
                          ? modifyCharacterStat(2, true)
                          : null
                      }
                    >
                      <MaterialIcons
                        name="add"
                        size={12}
                        color="white"
                      ></MaterialIcons>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={styles.statContainer}>
                <Text style={styles.statTitle}>Inteligencia</Text>
                <View style={styles.statDetailsContainer}>
                  <Text style={styles.statValue}>{CharacterStats[3]}</Text>
                  <View style={styles.statDetailsButtonsContainer}>
                    <TouchableOpacity
                      style={styles.statDetailsButtons}
                      onPress={() =>
                        CharacterStats[3] > 0
                          ? modifyCharacterStat(3, false)
                          : null
                      }
                    >
                      <MaterialIcons
                        name="remove"
                        size={12}
                        color="white"
                      ></MaterialIcons>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.statDetailsButtons}
                      onPress={() =>
                        CharacterStats[3] < 20
                          ? modifyCharacterStat(3, true)
                          : null
                      }
                    >
                      <MaterialIcons
                        name="add"
                        size={12}
                        color="white"
                      ></MaterialIcons>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={styles.statContainer}>
                <Text style={styles.statTitle}>Sabiduría</Text>
                <View style={styles.statDetailsContainer}>
                  <Text style={styles.statValue}>{CharacterStats[4]}</Text>
                  <View style={styles.statDetailsButtonsContainer}>
                    <TouchableOpacity
                      style={styles.statDetailsButtons}
                      onPress={() =>
                        CharacterStats[4] > 0
                          ? modifyCharacterStat(4, false)
                          : null
                      }
                    >
                      <MaterialIcons
                        name="remove"
                        size={12}
                        color="white"
                      ></MaterialIcons>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.statDetailsButtons}
                      onPress={() =>
                        CharacterStats[4] < 20
                          ? modifyCharacterStat(4, true)
                          : null
                      }
                    >
                      <MaterialIcons
                        name="add"
                        size={12}
                        color="white"
                      ></MaterialIcons>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={styles.statContainer}>
                <Text style={styles.statTitle}>Carisma</Text>
                <View style={styles.statDetailsContainer}>
                  <Text style={styles.statValue}>{CharacterStats[5]}</Text>
                  <View style={styles.statDetailsButtonsContainer}>
                    <TouchableOpacity
                      style={styles.statDetailsButtons}
                      onPress={() =>
                        CharacterStats[5] > 0
                          ? modifyCharacterStat(5, false)
                          : null
                      }
                    >
                      <MaterialIcons
                        name="remove"
                        size={12}
                        color="white"
                      ></MaterialIcons>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.statDetailsButtons}
                      onPress={() =>
                        CharacterStats[5] < 20
                          ? modifyCharacterStat(5, true)
                          : null
                      }
                    >
                      <MaterialIcons
                        name="add"
                        size={12}
                        color="white"
                      ></MaterialIcons>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* ST Proficiencies */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldHeader}>Tiradas de salvación</Text>
            <View style={styles.statsContainer}>
              <View style={styles.proficienciesContainer}>
                <TouchableOpacity
                  style={styles.proficiencyButton}
                  onPress={() => modifyCharacterSTProficiencies(0)}
                >
                  {!CharacterSTProficiencies[0] && (
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                  {CharacterSTProficiencies[0] && (
                    <MaterialIcons
                      name="circle"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                </TouchableOpacity>
                <Text style={styles.statTitle}>Fuerza</Text>
              </View>

              <View style={styles.proficienciesContainer}>
                <TouchableOpacity
                  style={styles.proficiencyButton}
                  onPress={() => modifyCharacterSTProficiencies(1)}
                >
                  {!CharacterSTProficiencies[1] && (
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                  {CharacterSTProficiencies[1] && (
                    <MaterialIcons
                      name="circle"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                </TouchableOpacity>
                <Text style={styles.statTitle}>Destreza</Text>
              </View>

              <View style={styles.proficienciesContainer}>
                <TouchableOpacity
                  style={styles.proficiencyButton}
                  onPress={() => modifyCharacterSTProficiencies(2)}
                >
                  {!CharacterSTProficiencies[2] && (
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                  {CharacterSTProficiencies[2] && (
                    <MaterialIcons
                      name="circle"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                </TouchableOpacity>
                <Text style={styles.statTitle}>Constitución</Text>
              </View>

              <View style={styles.proficienciesContainer}>
                <TouchableOpacity
                  style={styles.proficiencyButton}
                  onPress={() => modifyCharacterSTProficiencies(3)}
                >
                  {!CharacterSTProficiencies[3] && (
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                  {CharacterSTProficiencies[3] && (
                    <MaterialIcons
                      name="circle"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                </TouchableOpacity>
                <Text style={styles.statTitle}>Inteligencia</Text>
              </View>

              <View style={styles.proficienciesContainer}>
                <TouchableOpacity
                  style={styles.proficiencyButton}
                  onPress={() => modifyCharacterSTProficiencies(4)}
                >
                  {!CharacterSTProficiencies[4] && (
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                  {CharacterSTProficiencies[4] && (
                    <MaterialIcons
                      name="circle"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                </TouchableOpacity>
                <Text style={styles.statTitle}>Sabiduría</Text>
              </View>

              <View style={styles.proficienciesContainer}>
                <TouchableOpacity
                  style={styles.proficiencyButton}
                  onPress={() => modifyCharacterSTProficiencies(5)}
                >
                  {!CharacterSTProficiencies[5] && (
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                  {CharacterSTProficiencies[5] && (
                    <MaterialIcons
                      name="circle"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                </TouchableOpacity>
                <Text style={styles.statTitle}>Carisma</Text>
              </View>
            </View>
          </View>

          {/* Skills*/}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldHeader}>Competencias y Pericia</Text>
            <View style={styles.statsContainer}>
              <View style={styles.proficienciesContainer}>
                <TouchableOpacity
                  style={styles.proficiencyButton}
                  onPress={() => modifyCharacterSkillProficiencies(0)}
                >
                  {!CharacterSkillProficiencies[0] && (
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                  {CharacterSkillProficiencies[0] && (
                    <MaterialIcons
                      name="circle"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                </TouchableOpacity>
                {CharacterSkillProficiencies[0] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => modifyCharacterSkillExpertises(0)}
                  >
                    {!CharacterSkillExpertises[0] && (
                      <MaterialIcons
                        name="radio-button-unchecked"
                        size={16}
                        color="white"
                      ></MaterialIcons>
                    )}
                    {CharacterSkillExpertises[0] &&
                      CharacterSkillProficiencies[0] && (
                        <MaterialIcons
                          name="circle"
                          size={16}
                          color="white"
                        ></MaterialIcons>
                      )}
                  </TouchableOpacity>
                )}
                {!CharacterSkillProficiencies[0] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => null}
                  >
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="#808080"
                    ></MaterialIcons>
                  </TouchableOpacity>
                )}
                <Text style={styles.statTitle}>Acrobacias</Text>
              </View>

              <View style={styles.proficienciesContainer}>
                <TouchableOpacity
                  style={styles.proficiencyButton}
                  onPress={() => modifyCharacterSkillProficiencies(1)}
                >
                  {!CharacterSkillProficiencies[1] && (
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                  {CharacterSkillProficiencies[1] && (
                    <MaterialIcons
                      name="circle"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                </TouchableOpacity>
                {CharacterSkillProficiencies[1] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => modifyCharacterSkillExpertises(1)}
                  >
                    {!CharacterSkillExpertises[1] && (
                      <MaterialIcons
                        name="radio-button-unchecked"
                        size={16}
                        color="white"
                      ></MaterialIcons>
                    )}
                    {CharacterSkillExpertises[1] &&
                      CharacterSkillProficiencies[1] && (
                        <MaterialIcons
                          name="circle"
                          size={16}
                          color="white"
                        ></MaterialIcons>
                      )}
                  </TouchableOpacity>
                )}
                {!CharacterSkillProficiencies[1] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => null}
                  >
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="#808080"
                    ></MaterialIcons>
                  </TouchableOpacity>
                )}
                <Text style={styles.statTitle}>Arcanos</Text>
              </View>

              <View style={styles.proficienciesContainer}>
                <TouchableOpacity
                  style={styles.proficiencyButton}
                  onPress={() => modifyCharacterSkillProficiencies(2)}
                >
                  {!CharacterSkillProficiencies[2] && (
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                  {CharacterSkillProficiencies[2] && (
                    <MaterialIcons
                      name="circle"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                </TouchableOpacity>
                {CharacterSkillProficiencies[2] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => modifyCharacterSkillExpertises(2)}
                  >
                    {!CharacterSkillExpertises[2] && (
                      <MaterialIcons
                        name="radio-button-unchecked"
                        size={16}
                        color="white"
                      ></MaterialIcons>
                    )}
                    {CharacterSkillExpertises[2] &&
                      CharacterSkillProficiencies[2] && (
                        <MaterialIcons
                          name="circle"
                          size={16}
                          color="white"
                        ></MaterialIcons>
                      )}
                  </TouchableOpacity>
                )}
                {!CharacterSkillProficiencies[2] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => null}
                  >
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="#808080"
                    ></MaterialIcons>
                  </TouchableOpacity>
                )}
                <Text style={styles.statTitle}>Atletismo</Text>
              </View>

              <View style={styles.proficienciesContainer}>
                <TouchableOpacity
                  style={styles.proficiencyButton}
                  onPress={() => modifyCharacterSkillProficiencies(3)}
                >
                  {!CharacterSkillProficiencies[3] && (
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                  {CharacterSkillProficiencies[3] && (
                    <MaterialIcons
                      name="circle"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                </TouchableOpacity>
                {CharacterSkillProficiencies[3] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => modifyCharacterSkillExpertises(3)}
                  >
                    {!CharacterSkillExpertises[3] && (
                      <MaterialIcons
                        name="radio-button-unchecked"
                        size={16}
                        color="white"
                      ></MaterialIcons>
                    )}
                    {CharacterSkillExpertises[3] &&
                      CharacterSkillProficiencies[3] && (
                        <MaterialIcons
                          name="circle"
                          size={16}
                          color="white"
                        ></MaterialIcons>
                      )}
                  </TouchableOpacity>
                )}
                {!CharacterSkillProficiencies[3] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => null}
                  >
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="#808080"
                    ></MaterialIcons>
                  </TouchableOpacity>
                )}
                <Text style={styles.statTitle}>Engañar</Text>
              </View>

              <View style={styles.proficienciesContainer}>
                <TouchableOpacity
                  style={styles.proficiencyButton}
                  onPress={() => modifyCharacterSkillProficiencies(4)}
                >
                  {!CharacterSkillProficiencies[4] && (
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                  {CharacterSkillProficiencies[4] && (
                    <MaterialIcons
                      name="circle"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                </TouchableOpacity>
                {CharacterSkillProficiencies[4] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => modifyCharacterSkillExpertises(4)}
                  >
                    {!CharacterSkillExpertises[4] && (
                      <MaterialIcons
                        name="radio-button-unchecked"
                        size={16}
                        color="white"
                      ></MaterialIcons>
                    )}
                    {CharacterSkillExpertises[4] &&
                      CharacterSkillProficiencies[4] && (
                        <MaterialIcons
                          name="circle"
                          size={16}
                          color="white"
                        ></MaterialIcons>
                      )}
                  </TouchableOpacity>
                )}
                {!CharacterSkillProficiencies[4] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => null}
                  >
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="#808080"
                    ></MaterialIcons>
                  </TouchableOpacity>
                )}
                <Text style={styles.statTitle}>Historia</Text>
              </View>

              <View style={styles.proficienciesContainer}>
                <TouchableOpacity
                  style={styles.proficiencyButton}
                  onPress={() => modifyCharacterSkillProficiencies(5)}
                >
                  {!CharacterSkillProficiencies[5] && (
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                  {CharacterSkillProficiencies[5] && (
                    <MaterialIcons
                      name="circle"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                </TouchableOpacity>
                {CharacterSkillProficiencies[5] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => modifyCharacterSkillExpertises(5)}
                  >
                    {!CharacterSkillExpertises[5] && (
                      <MaterialIcons
                        name="radio-button-unchecked"
                        size={16}
                        color="white"
                      ></MaterialIcons>
                    )}
                    {CharacterSkillExpertises[5] &&
                      CharacterSkillProficiencies[5] && (
                        <MaterialIcons
                          name="circle"
                          size={16}
                          color="white"
                        ></MaterialIcons>
                      )}
                  </TouchableOpacity>
                )}
                {!CharacterSkillProficiencies[5] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => null}
                  >
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="#808080"
                    ></MaterialIcons>
                  </TouchableOpacity>
                )}
                <Text style={styles.statTitle}>Interpretación</Text>
              </View>

              <View style={styles.proficienciesContainer}>
                <TouchableOpacity
                  style={styles.proficiencyButton}
                  onPress={() => modifyCharacterSkillProficiencies(6)}
                >
                  {!CharacterSkillProficiencies[6] && (
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                  {CharacterSkillProficiencies[6] && (
                    <MaterialIcons
                      name="circle"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                </TouchableOpacity>
                {CharacterSkillProficiencies[6] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => modifyCharacterSkillExpertises(6)}
                  >
                    {!CharacterSkillExpertises[6] && (
                      <MaterialIcons
                        name="radio-button-unchecked"
                        size={16}
                        color="white"
                      ></MaterialIcons>
                    )}
                    {CharacterSkillExpertises[6] &&
                      CharacterSkillProficiencies[6] && (
                        <MaterialIcons
                          name="circle"
                          size={16}
                          color="white"
                        ></MaterialIcons>
                      )}
                  </TouchableOpacity>
                )}
                {!CharacterSkillProficiencies[6] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => null}
                  >
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="#808080"
                    ></MaterialIcons>
                  </TouchableOpacity>
                )}
                <Text style={styles.statTitle}>Intimidación</Text>
              </View>

              <View style={styles.proficienciesContainer}>
                <TouchableOpacity
                  style={styles.proficiencyButton}
                  onPress={() => modifyCharacterSkillProficiencies(7)}
                >
                  {!CharacterSkillProficiencies[7] && (
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                  {CharacterSkillProficiencies[7] && (
                    <MaterialIcons
                      name="circle"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                </TouchableOpacity>
                {CharacterSkillProficiencies[7] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => modifyCharacterSkillExpertises(7)}
                  >
                    {!CharacterSkillExpertises[7] && (
                      <MaterialIcons
                        name="radio-button-unchecked"
                        size={16}
                        color="white"
                      ></MaterialIcons>
                    )}
                    {CharacterSkillExpertises[7] &&
                      CharacterSkillProficiencies[7] && (
                        <MaterialIcons
                          name="circle"
                          size={16}
                          color="white"
                        ></MaterialIcons>
                      )}
                  </TouchableOpacity>
                )}
                {!CharacterSkillProficiencies[7] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => null}
                  >
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="#808080"
                    ></MaterialIcons>
                  </TouchableOpacity>
                )}
                <Text style={styles.statTitle}>Investigación</Text>
              </View>

              <View style={styles.proficienciesContainer}>
                <TouchableOpacity
                  style={styles.proficiencyButton}
                  onPress={() => modifyCharacterSkillProficiencies(8)}
                >
                  {!CharacterSkillProficiencies[8] && (
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                  {CharacterSkillProficiencies[8] && (
                    <MaterialIcons
                      name="circle"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                </TouchableOpacity>
                {CharacterSkillProficiencies[8] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => modifyCharacterSkillExpertises(8)}
                  >
                    {!CharacterSkillExpertises[8] && (
                      <MaterialIcons
                        name="radio-button-unchecked"
                        size={16}
                        color="white"
                      ></MaterialIcons>
                    )}
                    {CharacterSkillExpertises[8] &&
                      CharacterSkillProficiencies[8] && (
                        <MaterialIcons
                          name="circle"
                          size={16}
                          color="white"
                        ></MaterialIcons>
                      )}
                  </TouchableOpacity>
                )}
                {!CharacterSkillProficiencies[8] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => null}
                  >
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="#808080"
                    ></MaterialIcons>
                  </TouchableOpacity>
                )}
                <Text style={styles.statTitle}>Juego de Manos</Text>
              </View>

              <View style={styles.proficienciesContainer}>
                <TouchableOpacity
                  style={styles.proficiencyButton}
                  onPress={() => modifyCharacterSkillProficiencies(9)}
                >
                  {!CharacterSkillProficiencies[9] && (
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                  {CharacterSkillProficiencies[9] && (
                    <MaterialIcons
                      name="circle"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                </TouchableOpacity>
                {CharacterSkillProficiencies[9] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => modifyCharacterSkillExpertises(9)}
                  >
                    {!CharacterSkillExpertises[9] && (
                      <MaterialIcons
                        name="radio-button-unchecked"
                        size={16}
                        color="white"
                      ></MaterialIcons>
                    )}
                    {CharacterSkillExpertises[9] &&
                      CharacterSkillProficiencies[9] && (
                        <MaterialIcons
                          name="circle"
                          size={16}
                          color="white"
                        ></MaterialIcons>
                      )}
                  </TouchableOpacity>
                )}
                {!CharacterSkillProficiencies[9] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => null}
                  >
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="#808080"
                    ></MaterialIcons>
                  </TouchableOpacity>
                )}
                <Text style={styles.statTitle}>Medicina</Text>
              </View>

              <View style={styles.proficienciesContainer}>
                <TouchableOpacity
                  style={styles.proficiencyButton}
                  onPress={() => modifyCharacterSkillProficiencies(10)}
                >
                  {!CharacterSkillProficiencies[10] && (
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                  {CharacterSkillProficiencies[10] && (
                    <MaterialIcons
                      name="circle"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                </TouchableOpacity>
                {CharacterSkillProficiencies[10] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => modifyCharacterSkillExpertises(10)}
                  >
                    {!CharacterSkillExpertises[10] && (
                      <MaterialIcons
                        name="radio-button-unchecked"
                        size={16}
                        color="white"
                      ></MaterialIcons>
                    )}
                    {CharacterSkillExpertises[10] &&
                      CharacterSkillProficiencies[10] && (
                        <MaterialIcons
                          name="circle"
                          size={16}
                          color="white"
                        ></MaterialIcons>
                      )}
                  </TouchableOpacity>
                )}
                {!CharacterSkillProficiencies[10] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => null}
                  >
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="#808080"
                    ></MaterialIcons>
                  </TouchableOpacity>
                )}
                <Text style={styles.statTitle}>Naturaleza</Text>
              </View>

              <View style={styles.proficienciesContainer}>
                <TouchableOpacity
                  style={styles.proficiencyButton}
                  onPress={() => modifyCharacterSkillProficiencies(11)}
                >
                  {!CharacterSkillProficiencies[11] && (
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                  {CharacterSkillProficiencies[11] && (
                    <MaterialIcons
                      name="circle"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                </TouchableOpacity>
                {CharacterSkillProficiencies[11] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => modifyCharacterSkillExpertises(11)}
                  >
                    {!CharacterSkillExpertises[11] && (
                      <MaterialIcons
                        name="radio-button-unchecked"
                        size={16}
                        color="white"
                      ></MaterialIcons>
                    )}
                    {CharacterSkillExpertises[11] &&
                      CharacterSkillProficiencies[11] && (
                        <MaterialIcons
                          name="circle"
                          size={16}
                          color="white"
                        ></MaterialIcons>
                      )}
                  </TouchableOpacity>
                )}
                {!CharacterSkillProficiencies[11] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => null}
                  >
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="#808080"
                    ></MaterialIcons>
                  </TouchableOpacity>
                )}
                <Text style={styles.statTitle}>Percepción</Text>
              </View>

              <View style={styles.proficienciesContainer}>
                <TouchableOpacity
                  style={styles.proficiencyButton}
                  onPress={() => modifyCharacterSkillProficiencies(12)}
                >
                  {!CharacterSkillProficiencies[12] && (
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                  {CharacterSkillProficiencies[12] && (
                    <MaterialIcons
                      name="circle"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                </TouchableOpacity>
                {CharacterSkillProficiencies[12] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => modifyCharacterSkillExpertises(12)}
                  >
                    {!CharacterSkillExpertises[12] && (
                      <MaterialIcons
                        name="radio-button-unchecked"
                        size={16}
                        color="white"
                      ></MaterialIcons>
                    )}
                    {CharacterSkillExpertises[12] &&
                      CharacterSkillProficiencies[12] && (
                        <MaterialIcons
                          name="circle"
                          size={16}
                          color="white"
                        ></MaterialIcons>
                      )}
                  </TouchableOpacity>
                )}
                {!CharacterSkillProficiencies[12] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => null}
                  >
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="#808080"
                    ></MaterialIcons>
                  </TouchableOpacity>
                )}
                <Text style={styles.statTitle}>Perspicacia</Text>
              </View>

              <View style={styles.proficienciesContainer}>
                <TouchableOpacity
                  style={styles.proficiencyButton}
                  onPress={() => modifyCharacterSkillProficiencies(13)}
                >
                  {!CharacterSkillProficiencies[13] && (
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                  {CharacterSkillProficiencies[13] && (
                    <MaterialIcons
                      name="circle"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                </TouchableOpacity>
                {CharacterSkillProficiencies[13] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => modifyCharacterSkillExpertises(13)}
                  >
                    {!CharacterSkillExpertises[13] && (
                      <MaterialIcons
                        name="radio-button-unchecked"
                        size={16}
                        color="white"
                      ></MaterialIcons>
                    )}
                    {CharacterSkillExpertises[13] &&
                      CharacterSkillProficiencies[13] && (
                        <MaterialIcons
                          name="circle"
                          size={16}
                          color="white"
                        ></MaterialIcons>
                      )}
                  </TouchableOpacity>
                )}
                {!CharacterSkillProficiencies[13] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => null}
                  >
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="#808080"
                    ></MaterialIcons>
                  </TouchableOpacity>
                )}
                <Text style={styles.statTitle}>Persuasión</Text>
              </View>

              <View style={styles.proficienciesContainer}>
                <TouchableOpacity
                  style={styles.proficiencyButton}
                  onPress={() => modifyCharacterSkillProficiencies(14)}
                >
                  {!CharacterSkillProficiencies[14] && (
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                  {CharacterSkillProficiencies[14] && (
                    <MaterialIcons
                      name="circle"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                </TouchableOpacity>
                {CharacterSkillProficiencies[14] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => modifyCharacterSkillExpertises(14)}
                  >
                    {!CharacterSkillExpertises[14] && (
                      <MaterialIcons
                        name="radio-button-unchecked"
                        size={16}
                        color="white"
                      ></MaterialIcons>
                    )}
                    {CharacterSkillExpertises[14] &&
                      CharacterSkillProficiencies[14] && (
                        <MaterialIcons
                          name="circle"
                          size={16}
                          color="white"
                        ></MaterialIcons>
                      )}
                  </TouchableOpacity>
                )}
                {!CharacterSkillProficiencies[14] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => null}
                  >
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="#808080"
                    ></MaterialIcons>
                  </TouchableOpacity>
                )}
                <Text style={styles.statTitle}>Religión</Text>
              </View>

              <View style={styles.proficienciesContainer}>
                <TouchableOpacity
                  style={styles.proficiencyButton}
                  onPress={() => modifyCharacterSkillProficiencies(15)}
                >
                  {!CharacterSkillProficiencies[15] && (
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                  {CharacterSkillProficiencies[15] && (
                    <MaterialIcons
                      name="circle"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                </TouchableOpacity>
                {CharacterSkillProficiencies[15] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => modifyCharacterSkillExpertises(15)}
                  >
                    {!CharacterSkillExpertises[15] && (
                      <MaterialIcons
                        name="radio-button-unchecked"
                        size={16}
                        color="white"
                      ></MaterialIcons>
                    )}
                    {CharacterSkillExpertises[15] &&
                      CharacterSkillProficiencies[15] && (
                        <MaterialIcons
                          name="circle"
                          size={16}
                          color="white"
                        ></MaterialIcons>
                      )}
                  </TouchableOpacity>
                )}
                {!CharacterSkillProficiencies[15] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => null}
                  >
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="#808080"
                    ></MaterialIcons>
                  </TouchableOpacity>
                )}
                <Text style={styles.statTitle}>Sigilo</Text>
              </View>

              <View style={styles.proficienciesContainer}>
                <TouchableOpacity
                  style={styles.proficiencyButton}
                  onPress={() => modifyCharacterSkillProficiencies(16)}
                >
                  {!CharacterSkillProficiencies[16] && (
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                  {CharacterSkillProficiencies[16] && (
                    <MaterialIcons
                      name="circle"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                </TouchableOpacity>
                {CharacterSkillProficiencies[16] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => modifyCharacterSkillExpertises(16)}
                  >
                    {!CharacterSkillExpertises[16] && (
                      <MaterialIcons
                        name="radio-button-unchecked"
                        size={16}
                        color="white"
                      ></MaterialIcons>
                    )}
                    {CharacterSkillExpertises[16] &&
                      CharacterSkillProficiencies[16] && (
                        <MaterialIcons
                          name="circle"
                          size={16}
                          color="white"
                        ></MaterialIcons>
                      )}
                  </TouchableOpacity>
                )}
                {!CharacterSkillProficiencies[16] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => null}
                  >
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="#808080"
                    ></MaterialIcons>
                  </TouchableOpacity>
                )}
                <Text style={styles.statTitle}>Supervivencia</Text>
              </View>

              <View style={styles.proficienciesContainer}>
                <TouchableOpacity
                  style={styles.proficiencyButton}
                  onPress={() => modifyCharacterSkillProficiencies(17)}
                >
                  {!CharacterSkillProficiencies[17] && (
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                  {CharacterSkillProficiencies[17] && (
                    <MaterialIcons
                      name="circle"
                      size={16}
                      color="white"
                    ></MaterialIcons>
                  )}
                </TouchableOpacity>
                {CharacterSkillProficiencies[17] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => modifyCharacterSkillExpertises(17)}
                  >
                    {!CharacterSkillExpertises[17] && (
                      <MaterialIcons
                        name="radio-button-unchecked"
                        size={16}
                        color="white"
                      ></MaterialIcons>
                    )}
                    {CharacterSkillExpertises[17] &&
                      CharacterSkillProficiencies[17] && (
                        <MaterialIcons
                          name="circle"
                          size={16}
                          color="white"
                        ></MaterialIcons>
                      )}
                  </TouchableOpacity>
                )}
                {!CharacterSkillProficiencies[17] && (
                  <TouchableOpacity
                    style={styles.proficiencyButton}
                    onPress={() => null}
                  >
                    <MaterialIcons
                      name="radio-button-unchecked"
                      size={16}
                      color="#808080"
                    ></MaterialIcons>
                  </TouchableOpacity>
                )}
                <Text style={styles.statTitle}>Trato con Animales</Text>
              </View>
            </View>
          </View>

          <View style={styles.submitButtonContainer}>
            <TouchableOpacity onPress={addCharacter} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Añadir Personaje</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
