// Libraries
import React, { useCallback } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { useCharacter } from "@/utils/character-provider";
import { useFocusEffect } from "expo-router";
import { useCharacterNavigator } from "@/navigation/navigators/characterNavigator";

// Custom Components
import { SavingThrowTree } from "@/components/ui/SavingThrowTree";
import { AbilityCheckTree } from "@/components/ui/AbilityCheckTree";
import { LanguageProficiencyTree } from "@/components/ui/LanguageProficiencyTree";

// Character Functions
import {
  getAbilityModifier,
  getProficiencyBonus,
} from "@/core/rules/character/abilities-modifiers";
import { resolveInCombat } from "@/core/systems/stats/stat-resolver";
import { getTotalCharacterLevel } from "@/core/rules/character/character-multiclassing";
import { getNextXPThreshold } from "@/core/entities/progression/leveling";
import { formatNaturalNumber } from "@/utils/input-handler";
import { getLanguageNodeRoots } from "@/core/data/registries/language-nodes.registry";
import {
  getCheckCategoryRoots,
  getCheckNodeChildren,
} from "@/core/data/registries/check-nodes.registry";
import {
  resolveCheckProficiency,
  revokeCheckProficiency,
  grantCheckProficiency,
} from "@/core/rules/character/checks-helper";

// Helper Functions
import { PrintNumberWithSign } from "@/utils/formater-numbers";
import { getCharacterSavingThrowsAsArray } from "@/core/rules/combat/saving-throws-helper";
import {
  getLocalizedName,
  getLocalizedShortName,
} from "@/services/localization/localization-helper";
import { WEAPON_PROFICIENCY_UI_ROOTS } from "@/core/data/rules/checks/weapon-nodes";

// Styles
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

// Custom Styles
import genericStyles from "@/styles/generic.styles";
import styles from "@/styles/character-sheet.styles";
import { Montserrat_500Medium, useFonts } from "@expo-google-fonts/montserrat";

import { ui } from "@/services/localization/ui-localization-resolver";

const CharacterSheetScreen = () => {
  const characterNavigator = useCharacterNavigator();
  const { character, encounter, saveCharacter, loadCharacterById } =
    useCharacter();

  const [_fontsLoaded] = useFonts({ Montserrat: Montserrat_500Medium });

  useFocusEffect(
    useCallback(() => {
      if (character?.id) loadCharacterById(character.id);
    }, [character?.id, loadCharacterById]),
  );

  if (!character || !encounter || !_fontsLoaded) {
    return (
      <View>
        <Text>Cargando personaje…</Text>
      </View>
    );
  }

  const toggleProficiency = (nodeId: string) =>
    saveCharacter(
      resolveCheckProficiency(character, nodeId)
        ? revokeCheckProficiency(character, nodeId)
        : grantCheckProficiency(character, nodeId),
    );

  const resolvedStats = resolveInCombat(character, encounter);

  return (
    <ScrollView
      style={[genericStyles.rootContainer, { paddingHorizontal: "0%" }]}
    >
      <View style={[genericStyles.characterCard, { marginHorizontal: 20 }]}>
        <View style={genericStyles.iconContainer}>
          <MaterialIcons name="face" size={24} color="white" />
        </View>
        <View style={genericStyles.characterCard_TextContainer}>
          <Text style={genericStyles.characterCard_Title}>
            {character.name}
          </Text>
          <Text style={genericStyles.characterCard_Text}>{character.race}</Text>
          <Text style={genericStyles.characterCard_Text}>
            {character.classes.order.map(
              (id) =>
                getLocalizedName(
                  "classes",
                  character.classes.byId[id].classId,
                ) +
                " " +
                character.classes.byId[id].level +
                " ",
            )}
          </Text>
          <Text style={genericStyles.characterCard_Text}>
            {formatNaturalNumber(character.experiencePoints) +
              "/" +
              formatNaturalNumber(
                getNextXPThreshold(getTotalCharacterLevel(character.classes)) ??
                  0,
              )}
          </Text>
        </View>
        <View style={genericStyles.characterCard_ButtonsContainer}>
          <TouchableOpacity
            onPress={() => characterNavigator.goToEdition(character.id)}
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
        {/* Ability Scores */}
        <View style={styles.detailsSection}>
          <View style={genericStyles.headerContainer}>
            <Text style={genericStyles.header}>
              {ui("stats.abilityScores")}
            </Text>
          </View>

          <View style={styles.mainStatsRow}>
            {(["STR", "DEX", "CON", "INT", "WIS", "CHA"] as const).map(
              (ability) => (
                <View key={ability} style={styles.mainStatContainer}>
                  <View style={styles.mainStatBox}>
                    <View style={styles.mainStatModifierContainer}>
                      <Text style={styles.mainStatText}>
                        {getLocalizedShortName("abilities", ability)}
                      </Text>
                      <Text style={styles.mainStatModifierValue}>
                        {PrintNumberWithSign(
                          getAbilityModifier(
                            resolvedStats.stats.get(`ability:${ability}`)
                              ?.finalValue ?? 0,
                          ),
                        )}
                      </Text>
                    </View>
                    <View style={styles.mainStatValueContainer}>
                      <Text style={styles.mainStatValue}>
                        {resolvedStats.stats.get(`ability:${ability}`)
                          ?.finalValue ?? 0}
                      </Text>
                    </View>
                  </View>
                </View>
              ),
            )}
          </View>
        </View>

        {/* Secondary Stats */}
        <View style={styles.detailsSection}>
          <View style={styles.secondaryStatsRow}>
            {/* Max HP */}
            <View style={styles.secondaryStatContainer}>
              <View style={styles.secondaryStatBox}>
                {(() => {
                  const value = `${resolvedStats.stats.get("derived:maxHp")?.finalValue ?? 0}`;
                  const [before, after] = ui("hp.segmented").split(" {value} ");
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

            {/* Initiative */}
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

            {/* Speed */}
            <View style={styles.secondaryStatContainer}>
              <View style={styles.secondaryStatBox}>
                <View style={styles.secondaryStatModifier}>
                  <Text style={styles.secondaryStatText}>
                    {ui("stats.speed")}
                  </Text>
                  <Text style={styles.secondaryStatModifierValue}>
                    {resolvedStats.stats.get("derived:speed")?.finalValue ?? 0}
                  </Text>
                  <Text style={styles.secondaryStatText}>
                    {ui("measurements.feet")}
                  </Text>
                </View>
              </View>
            </View>

            {/* AC */}
            <View style={styles.secondaryStatContainer}>
              <View style={styles.secondaryStatBox}>
                {(() => {
                  const value = `${resolvedStats.stats.get("derived:ac")?.finalValue ?? 0}`;
                  const [before, after] = ui("ac.segmented").split(" {value} ");
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

            {/* Proficiency Bonus */}
            <View style={[styles.secondaryStatContainer, { width: "100%" }]}>
              <View style={styles.secondaryStatBox}>
                {(() => {
                  const value = `+${getProficiencyBonus(character)}`;
                  const [before, after] = ui("pb.segmented").split(" {value} ");
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
            <Text style={genericStyles.header}>{ui("savingThrows.full")}</Text>
          </View>

          <SavingThrowTree
            entries={getCharacterSavingThrowsAsArray()}
            character={character}
            resolvedStats={resolvedStats}
          />
        </View>

        {/* Skills */}
        <View style={styles.detailsSection}>
          <View style={genericStyles.headerContainer}>
            <Text style={genericStyles.header}>{ui("stats.skills")}</Text>
          </View>
          <AbilityCheckTree
            rootNodeIds={getCheckCategoryRoots("skillCheck").flatMap((rootId) =>
              getCheckNodeChildren(rootId).map((c) => c.id),
            )}
            namespace="skills"
            character={character}
            resolvedStats={resolvedStats}
            onUpdate={saveCharacter}
            onToggleProficiency={(nodeId) =>
              saveCharacter(
                resolveCheckProficiency(character, nodeId)
                  ? revokeCheckProficiency(character, nodeId)
                  : grantCheckProficiency(character, nodeId),
              )
            }
            sortRoots
          />
        </View>

        {/* Weapons */}
        <View style={styles.detailsSection}>
          <View style={genericStyles.headerContainer}>
            <Text style={genericStyles.header}>Weapons</Text>
          </View>
          <AbilityCheckTree
            rootNodeIds={WEAPON_PROFICIENCY_UI_ROOTS}
            namespace="checkNodes"
            character={character}
            resolvedStats={resolvedStats}
            onUpdate={saveCharacter}
            onToggleProficiency={toggleProficiency}
            showAbilityPicker={false}
            showValue={false}
            sortChildren
          />
        </View>

        {/* Armor */}
        <View style={styles.detailsSection}>
          <View style={genericStyles.headerContainer}>
            <Text style={genericStyles.header}>Armor</Text>
          </View>
          <AbilityCheckTree
            rootNodeIds={getCheckCategoryRoots("armorCheck")}
            namespace="checkNodes"
            character={character}
            resolvedStats={resolvedStats}
            onUpdate={saveCharacter}
            onToggleProficiency={toggleProficiency}
          />
        </View>

        {/* Tools */}
        <View style={styles.detailsSection}>
          <View style={genericStyles.headerContainer}>
            <Text style={genericStyles.header}>Tools</Text>
          </View>
          <AbilityCheckTree
            rootNodeIds={getCheckCategoryRoots("toolCheck")}
            namespace="checkNodes"
            character={character}
            resolvedStats={resolvedStats}
            onUpdate={saveCharacter}
            onToggleProficiency={toggleProficiency}
            sortRoots
            sortChildren
          />
        </View>

        {/* Languages */}
        <View style={styles.detailsSection}>
          <View style={genericStyles.headerContainer}>
            <Text style={genericStyles.header}>Languages</Text>
          </View>
          <LanguageProficiencyTree
            rootNodeIds={getLanguageNodeRoots()}
            character={character}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default CharacterSheetScreen;
