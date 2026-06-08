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
import { Character } from "@/core/entities/character/Character";
import { Alignment, ALIGNMENTS } from "@/core/data/rules/Alignments";
import {
  AbilityScores,
  ABILITIES,
} from "@/core/entities/rules/ability/ability.types";
import { CharacterSavingThrows } from "@/core/entities/rules/saving-throw/saving-throw-instance";

// Functions and Helpers
import { getMaximumHitDice } from "@/core/rules/character/hit-dice-helper";
import { buildAbilityScores } from "@/core/rules/character/ability-scores-helper";
import { buildSavingThrows } from "@/core/rules/combat/saving-throws-helper";
import { SKILL_KEYS } from "@/core/data/rules/SKILLS";
import { CharacterSkills } from "@/core/entities/character/skill-instance";
import { buildCharacterSkills } from "@/core/rules/combat/skills-helper";
import { buildCharacterResources } from "@/core/rules/character/resources-helper";
import { buildCharacterActions } from "@/core/rules/combat/actions-helper";
import { startEncounter } from "@/core/entities/combat/encounter-helper";

// Components
import { ThemedView } from "./ThemedView";
import { MaterialIcons } from "@expo/vector-icons";

import SmoothCounterButton from "./SmoothCounterButton";
import CustomPicker from "@/components/ui/CustomPicker";
import { MainClassForm } from "@/components/ui/MainClassForm";
import { SecondaryClassesForm } from "@/components/ui/SecondaryClassesForm";
import AbilityScoreInput from "@/components/ui/AbilityScoresInput";
import SavingThrowProficiencyInput from "@/components/ui/SavingThrowProficiencyInput";
import SkillProficiencyInput from "@/components/ui/SkillProficiencyInput";

import { ui } from "@/services/localization/ui-localization-resolver";
import { getLocalizedName } from "@/services/localization/localization-helper";
import {
  formatNaturalNumber,
  returnNaturalNumber,
} from "@/utils/input-handler";

import styles from "@/styles/character-creation.styles";
import genericStyles from "@/styles/generic.styles";

type Props = {
  initialCharacter?: Character | null;
  onSubmit: (character: Character) => void | Promise<void>;
  submitLabel: string;
};

type ClassDraft = {
  id: string;
  classTemplateId: string | null;
  level: number;
  subclassId: string | null;
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
          subclassId: null,
        },
        secondaryInitial: [],
      };
    }

    const drafts: ClassDraft[] = initialCharacter.classes.order.map((id) => {
      const instance = initialCharacter.classes.byId[id];
      return {
        id,
        classTemplateId: instance.classId,
        level: instance.level,
        subclassId: instance.subclassId ?? null,
      };
    });

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
          ...(c.subclassId !== null && { subclassId: c.subclassId }),
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

      hitPoints: {
        currentMaximumHP: baseHP,
        currentHP: baseHP,
        temporalHP: 0,
      },

      currentHitDice: {},
      savingThrows,
      skills,

      //TODO: Make this dynamic
      actionLimits: {
        actions: 1,
        bonusActions: 1,
        reactions: 1,
      },

      encounterId: "",
      features: initialCharacter?.features ?? {},
      resources: {},
      actions: {},
      statModifiers: initialCharacter?.statModifiers ?? {},
    };
    character.currentHitDice = getMaximumHitDice(character);
    character.resources = buildCharacterResources(character);
    character.actions = buildCharacterActions(character);

    startEncounter([character]);
    onSubmit(character);
  };

  const sections = [
    { key: "identity", data: ["name", "race", "alignment", "xp"] },
    { key: "hp", data: ["hp"] },
    { key: "speed", data: ["speed"] },
    { key: "classes", data: ["mainClass", ...secondaryClasses] },
    { key: "addClass", data: ["addClass"] },
    { key: "stats", data: ["stats"] },
    { key: "savingThrows", data: ["savingThrows"] },
    { key: "skills", data: ["skills"] },
    { key: "submit", data: ["submit"] },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderItem = ({ item, section }: any) => {
    switch (section.key) {
      case "identity":
        return renderIdentityField(item);
      case "hp":
        return renderHPField();
      case "speed":
        return renderSpeedField();
      case "classes":
        return renderClassItem(item);
      case "addClass":
        return renderAddClassButton();
      case "stats":
        return renderStatsSection();
      case "savingThrows":
        return renderSavingThrowsSection();
      case "skills":
        return renderSkillsSection();
      case "submit":
        return renderSubmitButton();
      default:
        return null;
    }
  };

  const renderIdentityField = (item: string) => {
    if (item === "name") {
      return (
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldHeader}>{ui("character.input")}</Text>
          <TextInput
            placeholder={name}
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
          <TextInput value={race} onChangeText={setRace} style={styles.input} />
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
            onChangeText={(text: string) => {
              if (formatNaturalNumber(xp) !== text) {
                setXp(returnNaturalNumber(text));
              }
            }}
            style={styles.input}
          />
        </View>
      );
    }
    return null;
  };

  const renderHPField = () => (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldHeader}>{ui("hp.full")}</Text>
      <TextInput
        keyboardType="numeric"
        value={formatNaturalNumber(baseHP)}
        onChangeText={(value: string) => {
          if (formatNaturalNumber(baseHP) !== value) {
            setBaseHP(returnNaturalNumber(value));
          }
        }}
        style={styles.input}
      />
    </View>
  );

  const renderSpeedField = () => (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldHeader}>{ui("stats.speed")}</Text>
      <View style={styles.counterContainer}>
        <Text style={styles.counterInput}>{baseSpeed}</Text>
        <View style={styles.counterButtonsContainer}>
          <SmoothCounterButton
            style={styles.counterButton}
            onPress={() => setBaseSpeed((prev) => (prev > 0 ? prev - 5 : 0))}
          >
            <MaterialIcons
              name="remove"
              style={styles.counterButtonIcon}
            ></MaterialIcons>
          </SmoothCounterButton>
          <SmoothCounterButton
            style={styles.counterButton}
            onPress={() => setBaseSpeed((prev) => (prev < 75 ? prev + 5 : 75))}
          >
            <MaterialIcons
              name="add"
              style={styles.counterButtonIcon}
            ></MaterialIcons>
          </SmoothCounterButton>
        </View>
      </View>
    </View>
  );

  const renderClassItem = (item: ClassDraft | "mainClass") => {
    if (item === "mainClass") {
      return <MainClassForm value={mainClass} onChange={setMainClass} />;
    }

    return (
      <SecondaryClassesForm
        value={item}
        onChange={(updated) =>
          setSecondaryClasses((prev) =>
            prev.map((c) => (c.id === item.id ? updated : c)),
          )
        }
        onRemove={() =>
          setSecondaryClasses((prev) => prev.filter((c) => c.id !== item.id))
        }
      />
    );
  };

  const renderAddClassButton = () => (
    <TouchableOpacity
      style={styles.addClassButtonContainer}
      onPress={() =>
        setSecondaryClasses((prev) => [
          ...prev,
          {
            id: Crypto.randomUUID(),
            classTemplateId: null,
            level: 1,
            subclassId: null,
          },
        ])
      }
    >
      <Text style={styles.addClassButton}>+ Añadir clase</Text>
    </TouchableOpacity>
  );

  const renderStatsSection = () => (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldHeader}>{ui("stats.abilityScores")}</Text>
      <View style={styles.statsContainer}>
        <FlatList
          data={ABILITIES}
          keyExtractor={(ability) => ability}
          renderItem={({ item: ability }) => (
            <AbilityScoreInput
              label={getLocalizedName("abilities", ability)}
              score={abilityScores[ability]}
              onChange={(delta) =>
                setAbilityScores((prev) => {
                  const currentValue = prev[ability];
                  const newValue = Math.max(
                    0,
                    Math.min(30, currentValue + delta),
                  );
                  return {
                    ...prev,
                    [ability]: newValue,
                  };
                })
              }
            />
          )}
        />
      </View>
    </View>
  );

  const renderSavingThrowsSection = () => (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldHeader}>{ui("savingThrows.full")}</Text>
      <View style={styles.statsContainer}>
        <FlatList
          style={styles.proficienciesList}
          data={ABILITIES}
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

  const renderSkillsSection = () => (
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

  const renderSubmitButton = () => (
    <View style={styles.submitButtonContainer}>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>{submitLabel}</Text>
      </TouchableOpacity>
    </View>
  );

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
