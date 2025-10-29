// Libraries
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";

// Custom Components
import { loadCharacterFromStorage } from "@/lib/utilities/storage";
import { Character, Feature } from "@/types";

// Styles
import { useFonts } from "expo-font";
import { Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

// Custom Styles
import genericStyles from "@/stylesheets/GenericStyles";
import styles from "@/stylesheets/CharacterDetails";

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

  //TODO: Not styled. Not currently used. Used it another section/window for the feature details.
  const renderFeatures = ({ item }: { item: Feature }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
      <Text>
        {item.charges?.usesLeft} / {item.charges?.max}
      </Text>
    </View>
  );

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
            {character?.Name}
          </Text>
          <Text key="Raza" style={genericStyles.characterCard_Text}>
            {character?.Race}
          </Text>
          <Text key="Clase" style={genericStyles.characterCard_Text}>
            {character?.Classes.at(0)?.class.label}
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
                    {((character?.StatModifiers[0]
                      ? character?.StatModifiers[0]
                      : 0) > 0
                      ? "+"
                      : "") + character?.StatModifiers[0]}
                  </Text>
                </View>
                <View style={styles.mainStatValueContainer}>
                  <Text style={styles.mainStatValue}>
                    {character?.Stats[0]}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.mainStatContainer}>
              <View style={styles.mainStatBox}>
                <View style={styles.mainStatModifierContainer}>
                  <Text style={styles.mainStatText}>DES</Text>
                  <Text style={styles.mainStatModifierValue}>
                    {((character?.StatModifiers[1]
                      ? character?.StatModifiers[1]
                      : 0) > 0
                      ? "+"
                      : "") + character?.StatModifiers[1]}
                  </Text>
                </View>
                <View style={styles.mainStatValueContainer}>
                  <Text style={styles.mainStatValue}>
                    {character?.Stats[1]}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.mainStatContainer}>
              <View style={styles.mainStatBox}>
                <View style={styles.mainStatModifierContainer}>
                  <Text style={styles.mainStatText}>CON</Text>
                  <Text style={styles.mainStatModifierValue}>
                    {((character?.StatModifiers[2]
                      ? character?.StatModifiers[2]
                      : 0) > 0
                      ? "+"
                      : "") + character?.StatModifiers[2]}
                  </Text>
                </View>
                <View style={styles.mainStatValueContainer}>
                  <Text style={styles.mainStatValue}>
                    {character?.Stats[2]}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.mainStatContainer}>
              <View style={styles.mainStatBox}>
                <View style={styles.mainStatModifierContainer}>
                  <Text style={styles.mainStatText}>INT</Text>
                  <Text style={styles.mainStatModifierValue}>
                    {((character?.StatModifiers[3]
                      ? character?.StatModifiers[3]
                      : 0) > 0
                      ? "+"
                      : "") + character?.StatModifiers[3]}
                  </Text>
                </View>
                <View style={styles.mainStatValueContainer}>
                  <Text style={styles.mainStatValue}>
                    {character?.Stats[3]}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.mainStatContainer}>
              <View style={styles.mainStatBox}>
                <View style={styles.mainStatModifierContainer}>
                  <Text style={styles.mainStatText}>SAB</Text>
                  <Text style={styles.mainStatModifierValue}>
                    {((character?.StatModifiers[4]
                      ? character?.StatModifiers[4]
                      : 0) > 0
                      ? "+"
                      : "") + character?.StatModifiers[4]}
                  </Text>
                </View>
                <View style={styles.mainStatValueContainer}>
                  <Text style={styles.mainStatValue}>
                    {character?.Stats[4]}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.mainStatContainer}>
              <View style={styles.mainStatBox}>
                <View style={styles.mainStatModifierContainer}>
                  <Text style={styles.mainStatText}>CAR</Text>
                  <Text style={styles.mainStatModifierValue}>
                    {((character?.StatModifiers[5]
                      ? character?.StatModifiers[5]
                      : 0) > 0
                      ? "+"
                      : "") + character?.StatModifiers[5]}
                  </Text>
                </View>
                <View style={styles.mainStatValueContainer}>
                  <Text style={styles.mainStatValue}>
                    {character?.Stats[5]}
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
                    {character?.HP}
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
                    {((character?.InitiativeBonus
                      ? character?.InitiativeBonus
                      : 0) > 0
                      ? "+"
                      : "") + character?.InitiativeBonus}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.secondaryStatContainer}>
              <View style={styles.secondaryStatBox}>
                <View style={styles.secondaryStatModifier}>
                  <Text style={styles.secondaryStatText}>Velocidad</Text>
                  <Text style={styles.secondaryStatModifierValue}>
                    {character?.Speed}
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
                    {character?.ArmorClass}
                  </Text>
                  <Text style={styles.secondaryStatText}>Armadura</Text>
                </View>
              </View>
            </View>

            <View style={styles.secondaryStatContainer}>
              <View style={styles.secondaryStatBox}>
                <View style={styles.secondaryStatModifier}>
                  <Text style={styles.secondaryStatText}>Bon. De</Text>
                  <Text style={styles.secondaryStatModifierValue}>+2</Text>
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
                {!character?.SavingThrowsProficiencies[0] && (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                {character?.SavingThrowsProficiencies[0] && (
                  <MaterialIcons
                    name="circle"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                <Text style={styles.proficiencyText}>Fuerza</Text>
              </View>
              <Text style={styles.proficiencyModifierBold}>
                {((character?.SavingThrowModifiers[0]
                  ? character?.SavingThrowModifiers[0]
                  : 0) > 0
                  ? "+"
                  : "") + character?.SavingThrowModifiers[0]}
              </Text>
            </View>
          </View>

          <View style={styles.proficienciesContainer}>
            <View style={styles.proficiencyRow}>
              <View style={styles.proficiencyDetails}>
                {!character?.SavingThrowsProficiencies[1] && (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                {character?.SavingThrowsProficiencies[1] && (
                  <MaterialIcons
                    name="circle"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                <Text style={styles.proficiencyText}>Destreza</Text>
              </View>
              <Text style={styles.proficiencyModifierBold}>
                {((character?.SavingThrowModifiers[1]
                  ? character?.SavingThrowModifiers[1]
                  : 0) > 0
                  ? "+"
                  : "") + character?.SavingThrowModifiers[1]}
              </Text>
            </View>
          </View>

          <View style={styles.proficienciesContainer}>
            <View style={styles.proficiencyRow}>
              <View style={styles.proficiencyDetails}>
                {!character?.SavingThrowsProficiencies[2] && (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                {character?.SavingThrowsProficiencies[2] && (
                  <MaterialIcons
                    name="circle"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                <Text style={styles.proficiencyText}>Constitución</Text>
              </View>
              <Text style={styles.proficiencyModifierBold}>
                {((character?.SavingThrowModifiers[2]
                  ? character?.SavingThrowModifiers[2]
                  : 0) > 0
                  ? "+"
                  : "") + character?.SavingThrowModifiers[2]}
              </Text>
            </View>
          </View>

          <View style={styles.proficienciesContainer}>
            <View style={styles.proficiencyRow}>
              <View style={styles.proficiencyDetails}>
                {!character?.SavingThrowsProficiencies[3] && (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                {character?.SavingThrowsProficiencies[3] && (
                  <MaterialIcons
                    name="circle"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                <Text style={styles.proficiencyText}>Inteligencia</Text>
              </View>
              <Text style={styles.proficiencyModifierBold}>
                {((character?.SavingThrowModifiers[3]
                  ? character?.SavingThrowModifiers[3]
                  : 0) > 0
                  ? "+"
                  : "") + character?.SavingThrowModifiers[3]}
              </Text>
            </View>
          </View>

          <View style={styles.proficienciesContainer}>
            <View style={styles.proficiencyRow}>
              <View style={styles.proficiencyDetails}>
                {!character?.SavingThrowsProficiencies[4] && (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                {character?.SavingThrowsProficiencies[4] && (
                  <MaterialIcons
                    name="circle"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                <Text style={styles.proficiencyText}>Sabiduría</Text>
              </View>
              <Text style={styles.proficiencyModifierBold}>
                {((character?.SavingThrowModifiers[4]
                  ? character?.SavingThrowModifiers[4]
                  : 0) > 0
                  ? "+"
                  : "") + character?.SavingThrowModifiers[4]}
              </Text>
            </View>
          </View>

          <View style={styles.proficienciesContainer}>
            <View style={styles.proficiencyRow}>
              <View style={styles.proficiencyDetails}>
                {!character?.SavingThrowsProficiencies[5] && (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                {character?.SavingThrowsProficiencies[5] && (
                  <MaterialIcons
                    name="circle"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                <Text style={styles.proficiencyText}>Carisma</Text>
              </View>
              <Text style={styles.proficiencyModifierBold}>
                {((character?.SavingThrowModifiers[5]
                  ? character?.SavingThrowModifiers[5]
                  : 0) > 0
                  ? "+"
                  : "") + character?.SavingThrowModifiers[5]}
              </Text>
            </View>
          </View>
        </View>

        {/* Skills */}
        <View style={styles.detailsSection}>
          <View style={genericStyles.headerContainer}>
            <Text style={genericStyles.header}>Habilidades</Text>
          </View>

          <View style={styles.proficienciesContainer}>
            <View style={styles.proficiencyRow}>
              <View style={styles.proficiencyDetails}>
                {!character?.SkillProficiencies[0] && (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                {character?.SkillProficiencies[0] && (
                  <MaterialIcons
                    name="circle"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                <Text style={styles.proficiencyText}>Acrobacias</Text>
              </View>
              <Text style={styles.proficiencyModifier}>
                {((character?.SkillModifiers[0]
                  ? character?.SkillModifiers[0]
                  : 0) > 0
                  ? "+"
                  : "") + character?.SkillModifiers[0]}
              </Text>
            </View>
          </View>

          <View style={styles.proficienciesContainer}>
            <View style={styles.proficiencyRow}>
              <View style={styles.proficiencyDetails}>
                {!character?.SkillProficiencies[1] && (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                {character?.SkillProficiencies[1] && (
                  <MaterialIcons
                    name="circle"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                <Text style={styles.proficiencyText}>Arcanos</Text>
              </View>
              <Text style={styles.proficiencyModifier}>
                {((character?.SkillModifiers[1]
                  ? character?.SkillModifiers[1]
                  : 0) > 0
                  ? "+"
                  : "") + character?.SkillModifiers[1]}
              </Text>
            </View>
          </View>

          <View style={styles.proficienciesContainer}>
            <View style={styles.proficiencyRow}>
              <View style={styles.proficiencyDetails}>
                {!character?.SkillProficiencies[2] && (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                {character?.SkillProficiencies[2] && (
                  <MaterialIcons
                    name="circle"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                <Text style={styles.proficiencyText}>Atletismo</Text>
              </View>
              <Text style={styles.proficiencyModifier}>
                {((character?.SkillModifiers[2]
                  ? character?.SkillModifiers[2]
                  : 0) > 0
                  ? "+"
                  : "") + character?.SkillModifiers[2]}
              </Text>
            </View>
          </View>

          <View style={styles.proficienciesContainer}>
            <View style={styles.proficiencyRow}>
              <View style={styles.proficiencyDetails}>
                {!character?.SkillProficiencies[3] && (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                {character?.SkillProficiencies[3] && (
                  <MaterialIcons
                    name="circle"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                <Text style={styles.proficiencyText}>Engañar</Text>
              </View>
              <Text style={styles.proficiencyModifier}>
                {((character?.SkillModifiers[3]
                  ? character?.SkillModifiers[3]
                  : 0) > 0
                  ? "+"
                  : "") + character?.SkillModifiers[3]}
              </Text>
            </View>
          </View>

          <View style={styles.proficienciesContainer}>
            <View style={styles.proficiencyRow}>
              <View style={styles.proficiencyDetails}>
                {!character?.SkillProficiencies[4] && (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                {character?.SkillProficiencies[4] && (
                  <MaterialIcons
                    name="circle"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                <Text style={styles.proficiencyText}>Historia</Text>
              </View>
              <Text style={styles.proficiencyModifier}>
                {((character?.SkillModifiers[4]
                  ? character?.SkillModifiers[4]
                  : 0) > 0
                  ? "+"
                  : "") + character?.SkillModifiers[4]}
              </Text>
            </View>
          </View>

          <View style={styles.proficienciesContainer}>
            <View style={styles.proficiencyRow}>
              <View style={styles.proficiencyDetails}>
                {!character?.SkillProficiencies[5] && (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                {character?.SkillProficiencies[5] && (
                  <MaterialIcons
                    name="circle"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                <Text style={styles.proficiencyText}>Interpretación</Text>
              </View>
              <Text style={styles.proficiencyModifier}>
                {((character?.SkillModifiers[5]
                  ? character?.SkillModifiers[5]
                  : 0) > 0
                  ? "+"
                  : "") + character?.SkillModifiers[5]}
              </Text>
            </View>
          </View>

          <View style={styles.proficienciesContainer}>
            <View style={styles.proficiencyRow}>
              <View style={styles.proficiencyDetails}>
                {!character?.SkillProficiencies[6] && (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                {character?.SkillProficiencies[6] && (
                  <MaterialIcons
                    name="circle"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                <Text style={styles.proficiencyText}>Intimidación</Text>
              </View>
              <Text style={styles.proficiencyModifier}>
                {((character?.SkillModifiers[6]
                  ? character?.SkillModifiers[6]
                  : 0) > 0
                  ? "+"
                  : "") + character?.SkillModifiers[6]}
              </Text>
            </View>
          </View>

          <View style={styles.proficienciesContainer}>
            <View style={styles.proficiencyRow}>
              <View style={styles.proficiencyDetails}>
                {!character?.SkillProficiencies[7] && (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                {character?.SkillProficiencies[7] && (
                  <MaterialIcons
                    name="circle"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                <Text style={styles.proficiencyText}>Investigación</Text>
              </View>
              <Text style={styles.proficiencyModifier}>
                {((character?.SkillModifiers[7]
                  ? character?.SkillModifiers[7]
                  : 0) > 0
                  ? "+"
                  : "") + character?.SkillModifiers[7]}
              </Text>
            </View>
          </View>

          <View style={styles.proficienciesContainer}>
            <View style={styles.proficiencyRow}>
              <View style={styles.proficiencyDetails}>
                {!character?.SkillProficiencies[8] && (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                {character?.SkillProficiencies[8] && (
                  <MaterialIcons
                    name="circle"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                <Text style={styles.proficiencyText}>Juego de Manos</Text>
              </View>
              <Text style={styles.proficiencyModifier}>
                {((character?.SkillModifiers[8]
                  ? character?.SkillModifiers[8]
                  : 0) > 0
                  ? "+"
                  : "") + character?.SkillModifiers[8]}
              </Text>
            </View>
          </View>

          <View style={styles.proficienciesContainer}>
            <View style={styles.proficiencyRow}>
              <View style={styles.proficiencyDetails}>
                {!character?.SkillProficiencies[9] && (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                {character?.SkillProficiencies[9] && (
                  <MaterialIcons
                    name="circle"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                <Text style={styles.proficiencyText}>Medicina</Text>
              </View>
              <Text style={styles.proficiencyModifier}>
                {((character?.SkillModifiers[9]
                  ? character?.SkillModifiers[9]
                  : 0) > 0
                  ? "+"
                  : "") + character?.SkillModifiers[9]}
              </Text>
            </View>
          </View>

          <View style={styles.proficienciesContainer}>
            <View style={styles.proficiencyRow}>
              <View style={styles.proficiencyDetails}>
                {!character?.SkillProficiencies[10] && (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                {character?.SkillProficiencies[10] && (
                  <MaterialIcons
                    name="circle"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                <Text style={styles.proficiencyText}>Naturaleza</Text>
              </View>
              <Text style={styles.proficiencyModifier}>
                {((character?.SkillModifiers[10]
                  ? character?.SkillModifiers[10]
                  : 0) > 0
                  ? "+"
                  : "") + character?.SkillModifiers[10]}
              </Text>
            </View>
          </View>

          <View style={styles.proficienciesContainer}>
            <View style={styles.proficiencyRow}>
              <View style={styles.proficiencyDetails}>
                {!character?.SkillProficiencies[11] && (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                {character?.SkillProficiencies[11] && (
                  <MaterialIcons
                    name="circle"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                <Text style={styles.proficiencyText}>Percepción</Text>
              </View>
              <Text style={styles.proficiencyModifier}>
                {((character?.SkillModifiers[11]
                  ? character?.SkillModifiers[11]
                  : 0) > 0
                  ? "+"
                  : "") + character?.SkillModifiers[11]}
              </Text>
            </View>
          </View>

          <View style={styles.proficienciesContainer}>
            <View style={styles.proficiencyRow}>
              <View style={styles.proficiencyDetails}>
                {!character?.SkillProficiencies[12] && (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                {character?.SkillProficiencies[12] && (
                  <MaterialIcons
                    name="circle"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                <Text style={styles.proficiencyText}>Perspicacia</Text>
              </View>
              <Text style={styles.proficiencyModifier}>
                {((character?.SkillModifiers[12]
                  ? character?.SkillModifiers[12]
                  : 0) > 0
                  ? "+"
                  : "") + character?.SkillModifiers[12]}
              </Text>
            </View>
          </View>

          <View style={styles.proficienciesContainer}>
            <View style={styles.proficiencyRow}>
              <View style={styles.proficiencyDetails}>
                {!character?.SkillProficiencies[13] && (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                {character?.SkillProficiencies[13] && (
                  <MaterialIcons
                    name="circle"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                <Text style={styles.proficiencyText}>Persuasión</Text>
              </View>
              <Text style={styles.proficiencyModifier}>
                {((character?.SkillModifiers[13]
                  ? character?.SkillModifiers[13]
                  : 0) > 0
                  ? "+"
                  : "") + character?.SkillModifiers[13]}
              </Text>
            </View>
          </View>

          <View style={styles.proficienciesContainer}>
            <View style={styles.proficiencyRow}>
              <View style={styles.proficiencyDetails}>
                {!character?.SkillProficiencies[14] && (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                {character?.SkillProficiencies[14] && (
                  <MaterialIcons
                    name="circle"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                <Text style={styles.proficiencyText}>Religión</Text>
              </View>
              <Text style={styles.proficiencyModifier}>
                {((character?.SkillModifiers[14]
                  ? character?.SkillModifiers[14]
                  : 0) > 0
                  ? "+"
                  : "") + character?.SkillModifiers[14]}
              </Text>
            </View>
          </View>

          <View style={styles.proficienciesContainer}>
            <View style={styles.proficiencyRow}>
              <View style={styles.proficiencyDetails}>
                {!character?.SkillProficiencies[15] && (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                {character?.SkillProficiencies[15] && (
                  <MaterialIcons
                    name="circle"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                <Text style={styles.proficiencyText}>Sigilo</Text>
              </View>
              <Text style={styles.proficiencyModifier}>
                {((character?.SkillModifiers[15]
                  ? character?.SkillModifiers[15]
                  : 0) > 0
                  ? "+"
                  : "") + character?.SkillModifiers[15]}
              </Text>
            </View>
          </View>

          <View style={styles.proficienciesContainer}>
            <View style={styles.proficiencyRow}>
              <View style={styles.proficiencyDetails}>
                {!character?.SkillProficiencies[16] && (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                {character?.SkillProficiencies[16] && (
                  <MaterialIcons
                    name="circle"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                <Text style={styles.proficiencyText}>Supervivencia</Text>
              </View>
              <Text style={styles.proficiencyModifier}>
                {((character?.SkillModifiers[16]
                  ? character?.SkillModifiers[16]
                  : 0) > 0
                  ? "+"
                  : "") + character?.SkillModifiers[16]}
              </Text>
            </View>
          </View>

          <View style={styles.proficienciesContainer}>
            <View style={styles.proficiencyRow}>
              <View style={styles.proficiencyDetails}>
                {!character?.SkillProficiencies[17] && (
                  <MaterialIcons
                    name="radio-button-unchecked"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                {character?.SkillProficiencies[17] && (
                  <MaterialIcons
                    name="circle"
                    size={14}
                    color="#cccccc"
                  ></MaterialIcons>
                )}
                <Text style={styles.proficiencyText}>Trato con Animales</Text>
              </View>
              <Text style={styles.proficiencyModifier}>
                {((character?.SkillModifiers[17]
                  ? character?.SkillModifiers[17]
                  : 0) > 0
                  ? "+"
                  : "") + character?.SkillModifiers[17]}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
