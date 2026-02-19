// Libraries
import React, { useMemo, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  SectionList,
  KeyboardAvoidingView,
} from "react-native";
import * as Crypto from "expo-crypto";

// Custom Classes and Constants
import { Character } from "@/game/types/instances/Character";
import { Alignment, ALIGNMENTS } from "@/game/base-data/Alignments";
import {
  ABILITY_ORDER,
  AbilityScores,
  CharacterSavingThrows,
} from "@/game/types/templates/abilities-scores";

// Functions and Helpers
import { getMaximumHitDice } from "@/lib/helpers/hit-dice-helper";
import { buildAbilityScores } from "@/lib/helpers/ability-scores-helper";
import { buildSavingThrows } from "@/lib/helpers/saving-throws-helper";
import { SKILL_KEYS } from "@/game/base-data/SKILLS";
import { CharacterSkills } from "@/game/types/templates/character-skills";
import { buildCharacterSkills } from "@/lib/helpers/skills-helper";
import { buildCharacterResources } from "@/lib/helpers/resources-helper";
import { buildCharacterActions } from "@/lib/helpers/actions-helper";

// Components
import { ThemedView } from "./ThemedView";
import { MaterialIcons } from "@expo/vector-icons";

import CustomPicker from "@/components/CustomPicker";
import { MainClassForm } from "@/components/MainClassForm";
import { SecondaryClassesForm } from "@/components/SecondaryClassesForm";
import AbilityScoreInput from "@/components/AbilityScoresInput";
import SavingThrowProficiencyInput from "@/components/SavingThrowProficiencyInput";
import SkillProficiencyInput from "@/components/SkillProficiencyInput";

import { ui } from "@/localization/ui-localization-resolver";
import { getLocalizedName } from "@/lib/helpers/localization-helper";
import {
  formatNaturalNumber,
  returnNaturalNumber,
} from "@/lib/utilities/input-handler";

import styles from "@/stylesheets/character-creation.styles";
import genericStyles from "@/stylesheets/generic.styles";

type Props = {
  initialCharacter?: Character | null;
  onSubmit: (character: Character) => void | Promise<void>;
  submitLabel: string;
};

type ClassDraft = {
  id: string;
  classTemplateId: string | null;
  level: number;
};

const CharacterForm = ({ initialCharacter, onSubmit, submitLabel }: Props) => {
  const [name, setName] = useState(initialCharacter?.name ?? "");
  const [race, setRace] = useState(initialCharacter?.race ?? "");
  const [alignment, setAlignment] = useState<Alignment | null>(
    initialCharacter?.alignment ?? null,
  );
  const [xp, setXp] = useState(initialCharacter?.experiencePoints ?? 0);
  const [baseHP, setBaseHP] = useState(initialCharacter?.baseMaximumHP ?? 0);
  const [baseSpeed, setBaseSpeed] = useState(initialCharacter?.baseSpeed ?? 30);

  const [abilityScores, setAbilityScores] = useState<AbilityScores>(
    initialCharacter?.baseAbilityScores ?? buildAbilityScores(),
  );
  const [savingThrows, setSavingThrows] = useState<CharacterSavingThrows>(
    initialCharacter?.savingThrows ?? buildSavingThrows(),
  );
  const [skills, setSkills] = useState<CharacterSkills>(
    initialCharacter?.skills ?? buildCharacterSkills(),
  );
  const { mainClassInitial, secondaryInitial } = useMemo(() => {
    if (!initialCharacter) {
      return {
        mainClassInitial: {
          id: Crypto.randomUUID(),
          classTemplateId: null,
          level: 1,
        },
        secondaryInitial: [],
      };
    }

    const drafts: ClassDraft[] = initialCharacter.classes.order.map((id) => ({
      id,
      classTemplateId: initialCharacter.classes.byId[id].classId,
      level: initialCharacter.classes.byId[id].level,
    }));

    return {
      mainClassInitial: drafts[0],
      secondaryInitial: drafts.slice(1),
    };
  }, [initialCharacter]);

  const [mainClass, setMainClass] = useState<ClassDraft>(mainClassInitial);
  const [secondaryClasses, setSecondaryClasses] =
    useState<ClassDraft[]>(secondaryInitial);

  const handleSubmit = () => {
    const classDrafts = [mainClass, ...secondaryClasses];

    const classesById = Object.fromEntries(
      classDrafts.map((c) => [
        c.id,
        {
          classId: c.classTemplateId!,
          level: c.level,
        },
      ]),
    );

    const character: Character = {
      id: initialCharacter?.id ?? Crypto.randomUUID(),
      icon: initialCharacter?.icon ?? "face",

      name,
      race,
      alignment: alignment ?? "lawful_good",
      experiencePoints: xp,

      classes: {
        byId: classesById,
        order: classDrafts.map((c) => c.id),
      },

      baseAbilityScores: abilityScores,
      baseMaximumHP: baseHP,
      baseSpeed: baseSpeed,

      hitPoints: initialCharacter?.hitPoints ?? {
        currentMaximumHP: baseHP,
        currentHP: baseHP,
        temporalHP: 0,
      },

      currentHitDice: {},
      savingThrows,
      skills,

      features: initialCharacter?.features ?? {},
      resources: {},
      actions: {},
      statModifiers: initialCharacter?.statModifiers ?? {},
      combatState: initialCharacter?.combatState ?? null,
    };

    character.currentHitDice = getMaximumHitDice(character);
    character.resources = buildCharacterResources(character);
    character.actions = buildCharacterActions(character);

    onSubmit(character);
  };

  const sections = [
    { key: "identity", data: ["name", "race", "alignment", "xp"] },
    { key: "hp", data: ["hp"] },
    { key: "speed", data: ["speed"] },
    { key: "classes", data: ["mainClass", ...secondaryClasses] },
    { key: "stats", data: ["stats"] },
    { key: "savingThrows", data: ["savingThrows"] },
    { key: "skills", data: ["skills"] },
    { key: "submit", data: ["submit"] },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderItem = ({ item, section }: any) => {
    switch (section.key) {
      case "identity":
        if (item === "name") {
          return (
            <View style={styles.fieldContainer}>
              <Text style={styles.fieldHeader}>{ui("character.input")}</Text>
              <TextInput
                placeholder={name ? name : ""}
                value={name}
                onChangeText={setName}
                style={styles.input}
              />
            </View>
          );
        }
        if (item === "race") {
          return (
            <View style={styles.fieldContainer}>
              <Text style={styles.fieldHeader}>{ui("race.singular")}</Text>
              <TextInput
                value={race}
                onChangeText={setRace}
                style={styles.input}
              />
            </View>
          );
        }
        if (item === "alignment") {
          return (
            <View style={[styles.fieldContainer, { zIndex: 100 }]}>
              <Text style={styles.fieldHeader}>{ui("alignment.singular")}</Text>
              <View style={styles.pickerContainer}>
                <CustomPicker
                  namespace="alignments"
                  items={ALIGNMENTS}
                  selectedValue={alignment}
                  onChange={(val) => setAlignment(val)}
                  placeholder={ui("picker.selectAlignment")}
                ></CustomPicker>
              </View>
            </View>
          );
        }
        if (item === "xp") {
          return (
            <View style={styles.fieldContainer}>
              <Text style={styles.fieldHeader}>{ui("xp.full")}</Text>
              <TextInput
                keyboardType="numeric"
                value={formatNaturalNumber(xp)}
                onChangeText={(text: string) =>
                  formatNaturalNumber(xp) != text
                    ? setXp(returnNaturalNumber(text))
                    : text
                }
                style={styles.input}
              />
            </View>
          );
        }
        return null;

      case "hp":
        return (
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldHeader}>{ui("hp.full")}</Text>
            <TextInput
              value={formatNaturalNumber(baseHP)}
              onChangeText={(value: string) =>
                formatNaturalNumber(baseHP) != value
                  ? setBaseHP(returnNaturalNumber(value))
                  : value
              }
              style={styles.input}
            />
          </View>
        );

      case "speed":
        return (
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldHeader}>{ui("stats.speed")}</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterInput}>{baseSpeed}</Text>
              <View style={styles.counterButtonsContainer}>
                <TouchableOpacity
                  style={styles.counterButton}
                  onPress={() =>
                    setBaseSpeed(baseSpeed > 0 ? baseSpeed - 5 : 0)
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
                    setBaseSpeed(baseSpeed < 40 ? baseSpeed + 5 : 75)
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

      case "classes":
        if (item === "mainClass") {
          return <MainClassForm value={mainClass} onChange={setMainClass} />;
        }

        // Secondary classes
        return (
          <>
            <SecondaryClassesForm
              value={item}
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

      case "stats":
        return (
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldHeader}>{ui("stats.abilityScores")}</Text>
            <View style={styles.statsContainer}>
              <FlatList
                data={ABILITY_ORDER}
                keyExtractor={(ability) => ability}
                renderItem={({ item: ability }) => (
                  <AbilityScoreInput
                    label={getLocalizedName("abilities", ability)}
                    score={abilityScores[ability].value}
                    onChange={(delta) =>
                      setAbilityScores((prev) => {
                        const currentValue = prev[ability].value;

                        const newValue = Math.max(
                          0,
                          Math.min(30, currentValue + delta),
                        );

                        return {
                          ...prev,
                          [ability]: {
                            ...prev[ability],
                            value: newValue,
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

      case "savingThrows":
        return (
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldHeader}>{ui("savingThrows.full")}</Text>
            <View style={styles.statsContainer}>
              <FlatList
                style={styles.proficienciesList}
                data={ABILITY_ORDER}
                keyExtractor={(ability) => ability}
                renderItem={({ item: ability }) => (
                  <SavingThrowProficiencyInput
                    ability={ability}
                    label={getLocalizedName("abilities", ability)}
                    savingThrow={savingThrows[ability]}
                    onToggleProficiency={() =>
                      setSavingThrows((prev) => ({
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
            <Text style={styles.fieldHeader}>{ui("stats.skills")}</Text>
            <View style={styles.statsContainer}>
              <FlatList
                style={styles.proficienciesList}
                data={SKILL_KEYS}
                keyExtractor={(skillKey) => skillKey}
                renderItem={({ item: skillKey }) => (
                  <SkillProficiencyInput
                    skillId={skillKey}
                    skillInstance={skills[skillKey]}
                    onToggleProficiency={() =>
                      setSkills((prev) => {
                        const current = prev[skillKey];
                        return {
                          ...prev,
                          [skillKey]: {
                            ...current,
                            hasProficiency: !current.hasProficiency,
                            hasExpertise: false,
                          },
                        };
                      })
                    }
                    onToggleExpertise={() =>
                      setSkills((prev) => {
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
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <Text style={styles.submitButtonText}>{submitLabel}</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <KeyboardAvoidingView style={genericStyles.rootContainer}>
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

export default CharacterForm;
