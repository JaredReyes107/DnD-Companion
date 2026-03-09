// Libraries
import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

// Custom Components
import { ProficiencyIcon } from "@/components/ProficiencyIcon";

// Character Functions
import {
  getAbilityModifier,
  getProficiencyBonus,
} from "@/game/mechanics/abilities-modifiers";
<<<<<<< HEAD
import { resolveInCombat } from "@/game/engine/resolvers/stat-resolver";
import { ModifierType, StatModel } from "@/game/data/templates/stats.types";
import { getTotalCharacterLevel } from "@/game/mechanics/character-multiclassing";
import { getNextXPThreshold } from "@/game/domain/progression/leveling";
=======
import { resolveOutOfCombat } from "@/game/mechanics/stat-resolver";
import { ModifierType, StatModel } from "@/game/types/templates/stats";
import { getTotalCharacterLevel } from "@/game/mechanics/character-multiclassing";
import { getNextXPThreshold } from "@/game/mechanics/leveling";
>>>>>>> main
import { formatNaturalNumber } from "@/lib/utilities/input-handler";

// Helper Functions
import { PrintNumberWithSign } from "@/lib/utilities/formater-numbers";
import { getCharacterSkillsAsArray } from "@/lib/helpers/skills-helper";
import { getCharacterSavingThrowsAsArray } from "@/lib/helpers/saving-throws-helper";
import { useCharacter } from "@/lib/utilities/character-provider";
import {
  getLocalizedName,
  getLocalizedShortName,
} from "@/lib/helpers/localization-helper";

// Styles
import { useFonts } from "expo-font";
import { Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

// Custom Styles
import genericStyles from "@/stylesheets/generic.styles";
import styles from "@/stylesheets/character-sheet.styles";

import { ui } from "@/localization/ui-localization-resolver";

const CharacterSheetScreen = () => {
  const router = useRouter();

  const { character, saveCharacter } = useCharacter();

  const [_fontsLoaded] = useFonts({
    Montserrat: Montserrat_500Medium,
  });

  if (!character || !_fontsLoaded) {
    return (
      <View>
        <Text>Cargando personaje…</Text>
      </View>
    );
  } else {
<<<<<<< HEAD
    const resolvedStats = resolveInCombat(character);
=======
    const resolvedStats = resolveOutOfCombat(character);
>>>>>>> main

    return (
      <ScrollView
        style={[genericStyles.rootContainer, { paddingHorizontal: "0%" }]}
      >
        <View>
          <TouchableOpacity
            onPress={() => {
              const newChar = {
                ...character,
                statModifiers: {
                  //...character.statModifiers,
                  mod1: {
<<<<<<< HEAD
                    templateId: "exampleId",
=======
>>>>>>> main
                    statModel: {
                      type: "derived",
                      key: "spellAttackModifier",
                    } as StatModel,
                    sourceId: "HB",
                    mode: "add" as ModifierType,
<<<<<<< HEAD
                    value: 2,
                  },
                  alert: {
                    templateId: "string",
=======
                    value: 0,
                    scope: "persistent" as "persistent" | "combat",
                  },
                  alert: {
>>>>>>> main
                    statModel: {
                      type: "derived",
                      key: "initiative",
                    } as StatModel,
                    sourceId: "alert",
                    mode: "add" as ModifierType,
                    value: 5,
<<<<<<< HEAD
=======
                    scope: "persistent" as "persistent" | "combat",
>>>>>>> main
                  },
                },
              };

              saveCharacter(newChar);
            }}
          >
            <Text
              style={{
                backgroundColor: "#249A0F",
                color: "white",
                textAlign: "center",
                padding: 10,
                marginHorizontal: "20%",
              }}
            >
              Test action
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[genericStyles.characterCard, { marginHorizontal: 20 }]}>
          <View style={genericStyles.iconContainer}>
            <MaterialIcons name="face" size={24} color="white" />
          </View>
          <View style={genericStyles.characterCard_TextContainer}>
            <Text key="Nombre" style={genericStyles.characterCard_Title}>
              {character.name}
            </Text>
            <Text key="Raza" style={genericStyles.characterCard_Text}>
              {character.race}
            </Text>
            <Text key="Clase" style={genericStyles.characterCard_Text}>
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
            <Text key="Xp" style={genericStyles.characterCard_Text}>
              {formatNaturalNumber(character.experiencePoints) +
                "/" +
                formatNaturalNumber(
                  getNextXPThreshold(
                    getTotalCharacterLevel(character.classes),
                  ) ?? 0,
                )}
            </Text>
          </View>

          <View style={genericStyles.characterCard_ButtonsContainer}>
            <TouchableOpacity
              onPress={() => {
                router.push("../character-edition");
              }}
              style={genericStyles.characterCard_ActionIcon}
            >
              <MaterialCommunityIcons
                name="square-edit-outline"
                size={24}
                color="#da8466"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.detailsBody}>
          {/* Main Statistics and Modifiers */}
          <View style={styles.detailsSection}>
            <View style={genericStyles.headerContainer}>
              <Text style={genericStyles.header}>
                {ui("stats.abilityScores")}
              </Text>
            </View>

            <View style={styles.mainStatsRow}>
              <View style={styles.mainStatContainer}>
                <View style={styles.mainStatBox}>
                  <View style={styles.mainStatModifierContainer}>
                    <Text style={styles.mainStatText}>
                      {getLocalizedShortName("abilities", "STR")}
                    </Text>
                    <Text style={styles.mainStatModifierValue}>
                      {PrintNumberWithSign(
                        getAbilityModifier(
                          resolvedStats.stats.get("ability:STR")?.finalValue ??
                            0,
                        ),
                      )}
                    </Text>
                  </View>
                  <View style={styles.mainStatValueContainer}>
                    <Text style={styles.mainStatValue}>
                      {resolvedStats.stats.get("ability:STR")?.finalValue ?? 0}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.mainStatContainer}>
                <View style={styles.mainStatBox}>
                  <View style={styles.mainStatModifierContainer}>
                    <Text style={styles.mainStatText}>
                      {getLocalizedShortName("abilities", "DEX")}
                    </Text>
                    <Text style={styles.mainStatModifierValue}>
                      {PrintNumberWithSign(
                        getAbilityModifier(
                          resolvedStats.stats.get("ability:DEX")?.finalValue ??
                            0,
                        ),
                      )}
                    </Text>
                  </View>
                  <View style={styles.mainStatValueContainer}>
                    <Text style={styles.mainStatValue}>
                      {resolvedStats.stats.get("ability:DEX")?.finalValue ?? 0}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.mainStatContainer}>
                <View style={styles.mainStatBox}>
                  <View style={styles.mainStatModifierContainer}>
                    <Text style={styles.mainStatText}>
                      {getLocalizedShortName("abilities", "CON")}
                    </Text>
                    <Text style={styles.mainStatModifierValue}>
                      {PrintNumberWithSign(
                        getAbilityModifier(
                          resolvedStats.stats.get("ability:CON")?.finalValue ??
                            0,
                        ),
                      )}
                    </Text>
                  </View>
                  <View style={styles.mainStatValueContainer}>
                    <Text style={styles.mainStatValue}>
                      {resolvedStats.stats.get("ability:CON")?.finalValue ?? 0}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.mainStatContainer}>
                <View style={styles.mainStatBox}>
                  <View style={styles.mainStatModifierContainer}>
                    <Text style={styles.mainStatText}>
                      {getLocalizedShortName("abilities", "INT")}
                    </Text>
                    <Text style={styles.mainStatModifierValue}>
                      {PrintNumberWithSign(
                        getAbilityModifier(
                          resolvedStats.stats.get("ability:INT")?.finalValue ??
                            0,
                        ),
                      )}
                    </Text>
                  </View>
                  <View style={styles.mainStatValueContainer}>
                    <Text style={styles.mainStatValue}>
                      {resolvedStats.stats.get("ability:INT")?.finalValue ?? 0}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.mainStatContainer}>
                <View style={styles.mainStatBox}>
                  <View style={styles.mainStatModifierContainer}>
                    <Text style={styles.mainStatText}>
                      {getLocalizedShortName("abilities", "WIS")}
                    </Text>
                    <Text style={styles.mainStatModifierValue}>
                      {PrintNumberWithSign(
                        getAbilityModifier(
                          resolvedStats.stats.get("ability:WIS")?.finalValue ??
                            0,
                        ),
                      )}
                    </Text>
                  </View>
                  <View style={styles.mainStatValueContainer}>
                    <Text style={styles.mainStatValue}>
                      {resolvedStats.stats.get("ability:WIS")?.finalValue ?? 0}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.mainStatContainer}>
                <View style={styles.mainStatBox}>
                  <View style={styles.mainStatModifierContainer}>
                    <Text style={styles.mainStatText}>
                      {getLocalizedShortName("abilities", "CHA")}
                    </Text>
                    <Text style={styles.mainStatModifierValue}>
                      {PrintNumberWithSign(
                        getAbilityModifier(
                          resolvedStats.stats.get("ability:CHA")?.finalValue ??
                            0,
                        ),
                      )}
                    </Text>
                  </View>
                  <View style={styles.mainStatValueContainer}>
                    <Text style={styles.mainStatValue}>
                      {resolvedStats.stats.get("ability:CHA")?.finalValue ?? 0}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Other Stats, like HP, Initiative, Speed, AC and Proficiency Bonus */}
          <View style={styles.detailsSection}>
            <View style={styles.secondaryStatsRow}>
              <View style={styles.secondaryStatContainer}>
                <View style={styles.secondaryStatBox}>
                  {(() => {
                    const value = `${resolvedStats.stats.get("derived:maxHp")?.finalValue ?? 0}`;
                    const [before, after] =
                      ui("hp.segmented").split(" {value} ");

                    return (
                      <View style={styles.secondaryStatModifier}>
                        <Text style={styles.secondaryStatText}>{before}</Text>
                        <Text style={styles.secondaryStatModifierValue}>
                          {value}
                        </Text>
                        <Text style={styles.secondaryStatText}>{after}</Text>
                      </View>
                    );
                  })()}
                </View>
              </View>

              <View style={styles.secondaryStatContainer}>
                <View style={styles.secondaryStatBox}>
                  <View style={styles.secondaryStatModifier}>
                    <Text style={styles.secondaryStatText}>
                      {ui("initiative.full")}
                    </Text>
                    <Text style={styles.secondaryStatModifierValue}>
                      {PrintNumberWithSign(
                        resolvedStats.stats.get("derived:initiative")
                          ?.finalValue ?? 0,
                      )}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.secondaryStatContainer}>
                <View style={styles.secondaryStatBox}>
                  <View style={styles.secondaryStatModifier}>
                    <Text style={styles.secondaryStatText}>
                      {ui("stats.speed")}
                    </Text>
                    <Text style={styles.secondaryStatModifierValue}>
                      {resolvedStats.stats.get("derived:speed")?.finalValue ??
                        0}
                    </Text>
                    <Text style={styles.secondaryStatText}>
                      {ui("measurements.feet")}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.secondaryStatContainer}>
                <View style={styles.secondaryStatBox}>
                  {(() => {
                    const value = `${resolvedStats.stats.get("derived:ac")?.finalValue ?? 0}`;
                    const [before, after] =
                      ui("ac.segmented").split(" {value} ");

                    return (
                      <View style={styles.secondaryStatModifier}>
                        <Text style={styles.secondaryStatText}>{before}</Text>
                        <Text style={styles.secondaryStatModifierValue}>
                          {value}
                        </Text>
                        <Text style={styles.secondaryStatText}>{after}</Text>
                      </View>
                    );
                  })()}
                </View>
              </View>

              <View style={[styles.secondaryStatContainer, { width: "100%" }]}>
                <View style={styles.secondaryStatBox}>
                  {(() => {
                    const value = `+${getProficiencyBonus(character)}`;
                    const [before, after] =
                      ui("pb.segmented").split(" {value} ");

                    return (
                      <View style={styles.secondaryStatModifier}>
                        <Text style={styles.secondaryStatText}>{before}</Text>
                        <Text style={styles.secondaryStatModifierValue}>
                          {value}
                        </Text>
                        <Text style={styles.secondaryStatText}>{after}</Text>
                      </View>
                    );
                  })()}
                </View>
              </View>
            </View>
          </View>

          {/* Saving Throws */}
          <View style={styles.detailsSection}>
            <View style={genericStyles.headerContainer}>
              <Text style={genericStyles.header}>
                {ui("savingThrows.full")}
              </Text>
            </View>

            <FlatList
              style={[{ marginHorizontal: -20 }]}
              data={getCharacterSavingThrowsAsArray(character)}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View
                  style={[
                    styles.proficienciesContainer,
                    { paddingHorizontal: 20 },
                  ]}
                >
                  <View style={styles.proficiencyRow}>
                    <View style={styles.proficiencyDetails}>
                      <ProficiencyIcon
                        hasProficiency={item.state.hasProficiency}
                      />
                      <Text style={styles.proficiencyText}>
                        {getLocalizedName("abilities", item.definition)}
                      </Text>
                    </View>
                    <Text style={styles.proficiencyModifierBold}>
                      {PrintNumberWithSign(
                        resolvedStats.stats.get("save:" + item.definition)
                          ?.finalValue ?? 0,
                      )}
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>

          {/* Skills */}
          <View style={styles.detailsSection}>
            <View style={genericStyles.headerContainer}>
              <Text style={genericStyles.header}>Habilidades</Text>
            </View>

            <FlatList
              data={getCharacterSkillsAsArray(character)}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.proficienciesContainer}>
                  <View style={styles.proficiencyRow}>
                    <View style={styles.proficiencyDetails}>
                      <ProficiencyIcon
                        hasProficiency={item.state.hasProficiency}
                      />
                      <Text style={styles.proficiencyText}>
                        {getLocalizedName("skills", item.id)}
                      </Text>
                    </View>
                    <Text style={styles.proficiencyModifier}>
                      {PrintNumberWithSign(
                        resolvedStats.stats.get("skill:" + item.id)
                          ?.finalValue ?? 0,
                      )}
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
};

export default CharacterSheetScreen;
