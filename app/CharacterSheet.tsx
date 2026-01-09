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
import { loadCharacterFromStorage } from "@/lib/utilities/StorageSystem";
import { Character } from "@/game/types/templates/Character";
import { Feature } from "@/game/types/templates/Feature";
import { ProficiencyIcon } from "@/components/ProficiencyIcon";

// Styles
import { useFonts } from "expo-font";
import { Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

// Custom Styles
import genericStyles from "@/stylesheets/GenericStyles";
import styles from "@/stylesheets/CharacterDetails";

// Character Functions
import { getInitiativeBonus } from "@/game/rules/Initiative";
import { getArmorClass } from "@/game/rules/ArmorClass";
import {
  getAbilityModifier,
  getProficiencyBonus,
} from "@/game/rules/AbilityModifiers";
import { getSavingThrowModifier } from "@/game/rules/SavingThrowModifier";
import { getSkillModifier } from "@/game/rules/SkillModifiers";

// Helper Functions
import { PrintNumberWithSign } from "@/lib/utilities/PrintNumberWithSign";
import { getCharacterSkillsToArray } from "@/lib/adapters/SkillHelper";

export default function CharacterSheetScreen() {
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

  const [fontsLoaded] = useFonts({
    Montserrat: Montserrat_500Medium,
  });

  //TODO: Not styled. Not currently used. Use in another section/window for the feature details.
  const renderFeatures = ({ item }: { item: Feature }) => (
    <View>
      <Text>{item.id}</Text>
      <Text>{item.description}</Text>
      <Text>
        {item.charges?.usesLeft} / {item.charges?.max}
      </Text>
    </View>
  );

  if (!character) {
    return (
      <View>
        <Text>Cargando personaje…</Text>
      </View>
    );
  } else {
    return (
      <ScrollView style={styles.rootContainer}>
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
              onPress={() => router.replace("/Play" as any)}
              style={genericStyles.characterCard_ActionIcon}
            >
              <MaterialCommunityIcons
                name="sword-cross"
                size={24}
                color="#da8466"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/CharacterEquipment" as any)}
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
                      {(getAbilityModifier(character.abilityScores.STR.value) >
                      0
                        ? "+"
                        : "") +
                        getAbilityModifier(character.abilityScores.STR.value)}
                    </Text>
                  </View>
                  <View style={styles.mainStatValueContainer}>
                    <Text style={styles.mainStatValue}>
                      {character.abilityScores.STR.value}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.mainStatContainer}>
                <View style={styles.mainStatBox}>
                  <View style={styles.mainStatModifierContainer}>
                    <Text style={styles.mainStatText}>DES</Text>
                    <Text style={styles.mainStatModifierValue}>
                      {(getAbilityModifier(character.abilityScores.DEX.value) >
                      0
                        ? "+"
                        : "") +
                        getAbilityModifier(character.abilityScores.DEX.value)}
                    </Text>
                  </View>
                  <View style={styles.mainStatValueContainer}>
                    <Text style={styles.mainStatValue}>
                      {character.abilityScores.DEX.value}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.mainStatContainer}>
                <View style={styles.mainStatBox}>
                  <View style={styles.mainStatModifierContainer}>
                    <Text style={styles.mainStatText}>CON</Text>
                    <Text style={styles.mainStatModifierValue}>
                      {(getAbilityModifier(character.abilityScores.CON.value) >
                      0
                        ? "+"
                        : "") +
                        getAbilityModifier(character.abilityScores.CON.value)}
                    </Text>
                  </View>
                  <View style={styles.mainStatValueContainer}>
                    <Text style={styles.mainStatValue}>
                      {character.abilityScores.CON.value}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.mainStatContainer}>
                <View style={styles.mainStatBox}>
                  <View style={styles.mainStatModifierContainer}>
                    <Text style={styles.mainStatText}>INT</Text>
                    <Text style={styles.mainStatModifierValue}>
                      {(getAbilityModifier(character.abilityScores.WIS.value) >
                      0
                        ? "+"
                        : "") +
                        getAbilityModifier(character.abilityScores.WIS.value)}
                    </Text>
                  </View>
                  <View style={styles.mainStatValueContainer}>
                    <Text style={styles.mainStatValue}>
                      {character?.abilityScores.WIS.value}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.mainStatContainer}>
                <View style={styles.mainStatBox}>
                  <View style={styles.mainStatModifierContainer}>
                    <Text style={styles.mainStatText}>SAB</Text>
                    <Text style={styles.mainStatModifierValue}>
                      {(getAbilityModifier(character.abilityScores.INT.value) >
                      0
                        ? "+"
                        : "") +
                        getAbilityModifier(character.abilityScores.INT.value)}
                    </Text>
                  </View>
                  <View style={styles.mainStatValueContainer}>
                    <Text style={styles.mainStatValue}>
                      {character?.abilityScores.INT.value}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.mainStatContainer}>
                <View style={styles.mainStatBox}>
                  <View style={styles.mainStatModifierContainer}>
                    <Text style={styles.mainStatText}>CAR</Text>
                    <Text style={styles.mainStatModifierValue}>
                      {(getAbilityModifier(character.abilityScores.CHA.value) >
                      0
                        ? "+"
                        : "") +
                        getAbilityModifier(character.abilityScores.CHA.value)}
                    </Text>
                  </View>
                  <View style={styles.mainStatValueContainer}>
                    <Text style={styles.mainStatValue}>
                      {character?.abilityScores.CHA.value}
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
                      {character.speed}
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
            <View style={genericStyles.headerContainer}>
              <Text style={genericStyles.header}>Tiradas de Salvación</Text>
            </View>

            <View style={styles.proficienciesContainer}>
              <View style={styles.proficiencyRow}>
                <View style={styles.proficiencyDetails}>
                  <ProficiencyIcon
                    hasProficiency={character.savingThrows.STR.hasProficiency}
                  />
                  <Text style={styles.proficiencyText}>Fuerza</Text>
                </View>
                <Text style={styles.proficiencyModifierBold}>
                  {PrintNumberWithSign(
                    getSavingThrowModifier(
                      character,
                      character.savingThrows.STR,
                    ),
                  )}
                </Text>
              </View>
            </View>

            <View style={styles.proficienciesContainer}>
              <View style={styles.proficiencyRow}>
                <View style={styles.proficiencyDetails}>
                  <ProficiencyIcon
                    hasProficiency={character.savingThrows.DEX.hasProficiency}
                  />
                  <Text style={styles.proficiencyText}>Destreza</Text>
                </View>
                <Text style={styles.proficiencyModifierBold}>
                  {PrintNumberWithSign(
                    getSavingThrowModifier(
                      character,
                      character.savingThrows.DEX,
                    ),
                  )}
                </Text>
              </View>
            </View>

            <View style={styles.proficienciesContainer}>
              <View style={styles.proficiencyRow}>
                <View style={styles.proficiencyDetails}>
                  <ProficiencyIcon
                    hasProficiency={character.savingThrows.CON.hasProficiency}
                  />
                  <Text style={styles.proficiencyText}>Constitución</Text>
                </View>
                <Text style={styles.proficiencyModifierBold}>
                  {PrintNumberWithSign(
                    getSavingThrowModifier(
                      character,
                      character.savingThrows.CON,
                    ),
                  )}
                </Text>
              </View>
            </View>

            <View style={styles.proficienciesContainer}>
              <View style={styles.proficiencyRow}>
                <View style={styles.proficiencyDetails}>
                  <ProficiencyIcon
                    hasProficiency={character.savingThrows.INT.hasProficiency}
                  />
                  <Text style={styles.proficiencyText}>Inteligencia</Text>
                </View>
                <Text style={styles.proficiencyModifierBold}>
                  {PrintNumberWithSign(
                    getSavingThrowModifier(
                      character,
                      character.savingThrows.INT,
                    ),
                  )}
                </Text>
              </View>
            </View>

            <View style={styles.proficienciesContainer}>
              <View style={styles.proficiencyRow}>
                <View style={styles.proficiencyDetails}>
                  <ProficiencyIcon
                    hasProficiency={character.savingThrows.WIS.hasProficiency}
                  />
                  <Text style={styles.proficiencyText}>Sabiduría</Text>
                </View>
                <Text style={styles.proficiencyModifierBold}>
                  {PrintNumberWithSign(
                    getSavingThrowModifier(
                      character,
                      character.savingThrows.WIS,
                    ),
                  )}
                </Text>
              </View>
            </View>

            <View style={styles.proficienciesContainer}>
              <View style={styles.proficiencyRow}>
                <View style={styles.proficiencyDetails}>
                  <ProficiencyIcon
                    hasProficiency={character.savingThrows.CHA.hasProficiency}
                  />
                  <Text style={styles.proficiencyText}>Carisma</Text>
                </View>
                <Text style={styles.proficiencyModifierBold}>
                  {PrintNumberWithSign(
                    getSavingThrowModifier(
                      character,
                      character.savingThrows.CHA,
                    ),
                  )}
                </Text>
              </View>
            </View>
          </View>

          {/* Skills */}
          <View style={styles.detailsSection}>
            <View style={genericStyles.headerContainer}>
              <Text style={genericStyles.header}>Habilidades</Text>
            </View>

            {/* Transform this into a FlatList */}
            <FlatList
              data={getCharacterSkillsToArray(character)}
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
}
