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

// Styles
import { useFonts } from "expo-font";
import { Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

// Custom Styles
import genericStyles from "@/stylesheets/generic.styles";
import styles from "@/stylesheets/character-sheet.styles";

// Character Functions
import { getInitiativeBonus } from "@/game/mechanics/initiative";
import { getArmorClass } from "@/game/mechanics/armor-class";
import {
  getAbilityModifier,
  getProficiencyBonus,
} from "@/game/mechanics/abilities-modifiers";
import { getSavingThrowModifier } from "@/game/mechanics/saving-throws-modifiers";
import { getSkillModifier } from "@/game/mechanics/skills-modifiers";

// Helper Functions
import { PrintNumberWithSign } from "@/lib/utilities/formater-numbers";
import { getCharacterSkillsAsArray } from "@/lib/helpers/skills-helper";
import { getCharacterSavingThrowsAsArray } from "@/lib/helpers/saving-throws-helper";
import { useCharacter } from "@/hooks/useCharacter";
import { buildCombatState } from "@/lib/helpers/combat-helper";
import {
  getLocalizedName,
  getLocalizedShortName,
} from "@/lib/helpers/localization-helper";
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
    return (
      <ScrollView
        style={[genericStyles.rootContainer, { paddingHorizontal: "0%" }]}
      >
        {/* 
        <View style={styles.tabsMenu}>
          <View style={styles.tabSectionContainer_Active}>
            <Text style={styles.tabSectionName_Active}>
              Detalles
            </Text>
          </View>
        </View>    
        */}
        <View style={[genericStyles.characterCard, { marginHorizontal: 20 }]}>
          <View style={genericStyles.iconContainer}>
            <MaterialIcons name="face" size={24} color="white" />
          </View>

          <View style={genericStyles.characterCard_TextContainer}>
            <Text key="Nombre" style={genericStyles.characterCard_Title}>
              {character?.name}
            </Text>
            <Text key="Raza" style={genericStyles.characterCard_Text}>
              {character?.race}
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
          </View>

          <View style={genericStyles.characterCard_ButtonsContainer}>
            <TouchableOpacity
              onPress={() => {
                saveCharacter(buildCombatState(character));
                router.replace("../combat");
              }}
              style={genericStyles.characterCard_ActionIcon}
            >
              <MaterialCommunityIcons
                name="sword-cross"
                size={24}
                color="#da8466"
              />
            </TouchableOpacity>

            <TouchableOpacity
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onPress={() => router.push("/character-equipment" as any)}
              style={genericStyles.characterCard_ActionIcon}
            >
              <MaterialCommunityIcons
                name="bag-personal"
                size={24}
                color="#da8466"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => 0}
              style={genericStyles.characterCard_ActionIcon}
            >
              <MaterialCommunityIcons
                name="lightning-bolt"
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
                      {(getAbilityModifier(
                        character.baseAbilityScores.STR.value,
                      ) > 0
                        ? "+"
                        : "") +
                        getAbilityModifier(
                          character.baseAbilityScores.STR.value,
                        )}
                    </Text>
                  </View>
                  <View style={styles.mainStatValueContainer}>
                    <Text style={styles.mainStatValue}>
                      {character.baseAbilityScores.STR.value}
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
                      {(getAbilityModifier(
                        character.baseAbilityScores.DEX.value,
                      ) > 0
                        ? "+"
                        : "") +
                        getAbilityModifier(
                          character.baseAbilityScores.DEX.value,
                        )}
                    </Text>
                  </View>
                  <View style={styles.mainStatValueContainer}>
                    <Text style={styles.mainStatValue}>
                      {character.baseAbilityScores.DEX.value}
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
                      {(getAbilityModifier(
                        character.baseAbilityScores.CON.value,
                      ) > 0
                        ? "+"
                        : "") +
                        getAbilityModifier(
                          character.baseAbilityScores.CON.value,
                        )}
                    </Text>
                  </View>
                  <View style={styles.mainStatValueContainer}>
                    <Text style={styles.mainStatValue}>
                      {character.baseAbilityScores.CON.value}
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
                      {(getAbilityModifier(
                        character.baseAbilityScores.WIS.value,
                      ) > 0
                        ? "+"
                        : "") +
                        getAbilityModifier(
                          character.baseAbilityScores.WIS.value,
                        )}
                    </Text>
                  </View>
                  <View style={styles.mainStatValueContainer}>
                    <Text style={styles.mainStatValue}>
                      {character?.baseAbilityScores.WIS.value}
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
                      {(getAbilityModifier(
                        character.baseAbilityScores.INT.value,
                      ) > 0
                        ? "+"
                        : "") +
                        getAbilityModifier(
                          character.baseAbilityScores.INT.value,
                        )}
                    </Text>
                  </View>
                  <View style={styles.mainStatValueContainer}>
                    <Text style={styles.mainStatValue}>
                      {character?.baseAbilityScores.INT.value}
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
                      {(getAbilityModifier(
                        character.baseAbilityScores.CHA.value,
                      ) > 0
                        ? "+"
                        : "") +
                        getAbilityModifier(
                          character.baseAbilityScores.CHA.value,
                        )}
                    </Text>
                  </View>
                  <View style={styles.mainStatValueContainer}>
                    <Text style={styles.mainStatValue}>
                      {character?.baseAbilityScores.CHA.value}
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
                    const value = `${character.hitPoints.currentMaximumHP}`;
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
                      {PrintNumberWithSign(getInitiativeBonus(character))}
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
                      {character.baseSpeed}
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
                    const value = `${getArmorClass(character)}`;
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
                        getSavingThrowModifier(character, item.state),
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
                        getSkillModifier(character, item.state),
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
