// Libraries
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

// Custom Components
import { loadCharacterFromStorage } from "@/lib/utilities/system-storage";
import { Character } from "@/game/types/instances/character";
import { ProficiencyIcon } from "@/components/ProficiencyIcon";

// Styles
import { useFonts } from "expo-font";
import { Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

// Custom Styles
import genericStyles from "@/stylesheets/generic.styles";
import styles from "@/stylesheets/character-sheet.styles";

// Character Functions
import { getInitiativeBonus } from "@/game/mechanics/initiative-roll";
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

const CharacterSheetScreen = () => {
  const router = useRouter();

  const [character, setCharacter] = useState<Character>();

  const fetchCharacter = async () => {
    const result = await loadCharacterFromStorage();
    if (result) {
      setCharacter(result);
    }
  };

  //Load details of the selected character whenever this view is loaded
  useEffect(() => {
    fetchCharacter();
  }, []);

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
                  character.classes.byId[characterClass].classId +
                  " " +
                  character.classes.byId[characterClass].level +
                  " ",
              )}
            </Text>
          </View>

          <View style={genericStyles.characterCard_ButtonsContainer}>
            <TouchableOpacity
              onPress={() => router.replace("../combat")}
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
              <Text style={genericStyles.header}>Características</Text>
            </View>

            <View style={styles.mainStatsRow}>
              <View style={styles.mainStatContainer}>
                <View style={styles.mainStatBox}>
                  <View style={styles.mainStatModifierContainer}>
                    <Text style={styles.mainStatText}>FUE</Text>
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
                    <Text style={styles.mainStatText}>DES</Text>
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
                    <Text style={styles.mainStatText}>CON</Text>
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
                    <Text style={styles.mainStatText}>INT</Text>
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
                    <Text style={styles.mainStatText}>SAB</Text>
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
                    <Text style={styles.mainStatText}>CAR</Text>
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
                  <View style={styles.secondaryStatModifier}>
                    <Text style={styles.secondaryStatText}>Puntos</Text>
                    <Text style={styles.secondaryStatModifierValue}>
                      {character.hitPoints.currentMaximumHP}
                    </Text>
                    <Text style={styles.secondaryStatText}>de Golpe</Text>
                  </View>
                </View>
              </View>

              <View style={styles.secondaryStatContainer}>
                <View style={styles.secondaryStatBox}>
                  <View style={styles.secondaryStatModifier}>
                    <Text style={styles.secondaryStatText}>Iniciativa</Text>
                    <Text style={styles.secondaryStatModifierValue}>
                      {PrintNumberWithSign(getInitiativeBonus(character))}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.secondaryStatContainer}>
                <View style={styles.secondaryStatBox}>
                  <View style={styles.secondaryStatModifier}>
                    <Text style={styles.secondaryStatText}>Velocidad</Text>
                    <Text style={styles.secondaryStatModifierValue}>
                      {character.baseSpeed}
                    </Text>
                    <Text style={styles.secondaryStatText}>Pies</Text>
                  </View>
                </View>
              </View>

              <View style={styles.secondaryStatContainer}>
                <View style={styles.secondaryStatBox}>
                  <View style={styles.secondaryStatModifier}>
                    <Text style={styles.secondaryStatText}>Clase De</Text>
                    <Text style={styles.secondaryStatModifierValue}>
                      {getArmorClass(character)}
                    </Text>
                    <Text style={styles.secondaryStatText}>Armadura</Text>
                  </View>
                </View>
              </View>

              <View style={styles.secondaryStatContainer}>
                <View style={styles.secondaryStatBox}>
                  <View style={styles.secondaryStatModifier}>
                    <Text style={styles.secondaryStatText}>Bon. De</Text>
                    <Text style={styles.secondaryStatModifierValue}>
                      +{getProficiencyBonus(character)}
                    </Text>
                    <Text style={styles.secondaryStatText}>Competencia</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Saving Throws */}
          <View style={styles.detailsSection}>
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
                        {item.definition.toString()}
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
                        {item.definition.name}
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
