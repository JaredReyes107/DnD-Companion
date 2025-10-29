import {
  Entypo,
  FontAwesome,
  FontAwesome6,
  Ionicons,
} from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Modal, Button } from "react-native";

import * as CombatEngine from "../../lib/utilities/CombatEngine";
import { loadCharacterFromStorage } from "../../lib/utilities/storage";
import styles from "../../stylesheets/combat/index";
import genericStyles from "../../stylesheets/GenericStyles";
import { Character } from "../../types";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function App() {
  let baseCharacter;
  const [character, setCharacter] = useState<Character>();

  const totalHP = (character?.TempHP ?? 0) + (character?.CurrentHP ?? 0);

  //#region DMG Taken Window
  const [dmgTakenWindow, setDmgTakenWindow] = useState(false);
  const [dmgTakenValue, setDmgTakenValue] = useState(0);
  //const [dmgTakenField, setDmgTakenField] = useState(0);

  //#endregion

  const fetchCharacter = async () => {
    const selectedCharacter = await loadCharacterFromStorage();
    if (selectedCharacter) {
      baseCharacter = selectedCharacter;
      console.log(selectedCharacter.CurrentHP);

      setCharacter(selectedCharacter);

      CombatEngine.startCombat(selectedCharacter);
    }
  };

  const updateCharacter = (changes: Partial<typeof character>) => {
    setCharacter((prev) => {
      if (!prev) return prev; // or maybe throw if character is required
      return { ...prev, ...changes };
    });
  };

  //Load details of the selected character whenever this view is loaded
  useEffect(() => {
    fetchCharacter();
  }, []);

  return (
    <ThemedView style={[genericStyles.rootContainer, { alignItems: "center" }]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => {
            router.replace("./");
          }}
        >
          <Entypo name="arrow-with-circle-left" size={36} color={"#FFFFFF"} />
        </TouchableOpacity>
      </View>

      <View style={styles.mainBody}>
        {/* Window: Total Damage Taken Window */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={dmgTakenWindow}
          onRequestClose={() => setDmgTakenWindow(false)}
        >
          <ThemedView style={styles.overlay}>
            <ThemedView style={styles.window}>
              <ThemedText style={styles.window_title}>Daño recibido</ThemedText>

              {/* Window Body */}
              <View style={styles.window_body}>
                {/* Damage Taken Input Field */}
                <View style={styles.damageTaken_Container}>
                  <TouchableOpacity
                    onPress={() =>
                      setDmgTakenValue(
                        dmgTakenValue > 0 ? dmgTakenValue - 1 : 0,
                      )
                    }
                  >
                    <Text style={[styles.blockButton, { marginTop: -10 }]}>
                      −
                    </Text>
                  </TouchableOpacity>

                  <Text style={styles.damageTaken_Input}>{dmgTakenValue}</Text>
                  {/*
                  <TextInput
                    keyboardType='numeric'
                    placeholder={dmgTakenValue.toString()}
                    onChangeText={(text) => {
                      const parsedValue = parseInt(text);
                      setDmgTakenValue(isNaN(parsedValue) ? 0 : parsedValue);
                    }}
                    style={styles.damageTaken_Input}
                  />
                  */}

                  <TouchableOpacity
                    onPress={() => setDmgTakenValue(dmgTakenValue + 1)}
                  >
                    <Text style={[styles.blockButton, { marginTop: -10 }]}>
                      +
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* Damage Types Board */}
                <View style={styles.damageTypes_Grid}>
                  <TouchableOpacity style={styles.damageTypes_Button}>
                    <Image
                      source={require("@/assets/images/damageTypes/Icon_Bludgeoning.png")}
                      style={styles.damageTypes_Icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.damageTypes_Button}>
                    <Image
                      source={require("@/assets/images/damageTypes/Icon_Piercing.png")}
                      style={styles.damageTypes_Icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.damageTypes_Button}>
                    <Image
                      source={require("@/assets/images/damageTypes/Icon_Slashing.png")}
                      style={styles.damageTypes_Icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.damageTypes_Button}>
                    <Image
                      source={require("@/assets/images/damageTypes/Icon_Acid.png")}
                      style={styles.damageTypes_Icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.damageTypes_Button}>
                    <Image
                      source={require("@/assets/images/damageTypes/Icon_Cold.png")}
                      style={styles.damageTypes_Icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.damageTypes_Button}>
                    <Image
                      source={require("@/assets/images/damageTypes/Icon_Fire.png")}
                      style={styles.damageTypes_Icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.damageTypes_Button}>
                    <Image
                      source={require("@/assets/images/damageTypes/Icon_Force.png")}
                      style={styles.damageTypes_Icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.damageTypes_Button}>
                    <Image
                      source={require("@/assets/images/damageTypes/Icon_Lightning.png")}
                      style={styles.damageTypes_Icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.damageTypes_Button}>
                    <Image
                      source={require("@/assets/images/damageTypes/Icon_Necrotic.png")}
                      style={styles.damageTypes_Icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.damageTypes_Button}>
                    <Image
                      source={require("@/assets/images/damageTypes/Icon_Radiant.png")}
                      style={styles.damageTypes_Icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.damageTypes_Button}>
                    <Image
                      source={require("@/assets/images/damageTypes/Icon_Thunder.png")}
                      style={styles.damageTypes_Icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.damageTypes_Button}>
                    <Image
                      source={require("@/assets/images/damageTypes/Icon_Poison.png")}
                      style={styles.damageTypes_Icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.damageTypes_Button}>
                    <Image
                      source={require("@/assets/images/damageTypes/Icon_Psychic.png")}
                      style={styles.damageTypes_Icon}
                    />
                  </TouchableOpacity>
                  {/* NOTE: True Damage Button
                  <TouchableOpacity style={styles.damageTypes_Button}>
                    <Image 
                      source={require('@/assets/images/damageTypes/Icon_True.png')} 
                      style={styles.damageTypes_Icon} 
                    />
                  </TouchableOpacity>
                  */}
                </View>
              </View>

              {/* Confirm Damage */}
              <View>
                <Button
                  title="Confirmar"
                  onPress={() => setDmgTakenWindow(false)}
                />
              </View>
            </ThemedView>
          </ThemedView>
        </Modal>

        {/* Main Body: HP Blocks */}
        <View style={styles.mainSection}>
          {/* Total HP */}
          <View style={[styles.blockContainer, { backgroundColor: "#466BC2" }]}>
            <Text style={styles.blockButton} />
            <TouchableOpacity
              style={styles.blockCenter}
              onPress={() => setDmgTakenWindow(true)}
            >
              <Text style={styles.blockTitle}>HP Total</Text>
              <Text style={styles.blockValue}>{totalHP}</Text>
            </TouchableOpacity>
            <Text style={styles.blockButton} />
          </View>
          {/* Temporal HP */}
          <View
            style={[
              styles.blockContainer,
              { backgroundColor: "#27B086" /*'#9c27b0'*/ },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                if (character?.TempHP != undefined) {
                  const modifiedCharacter = character;
                  modifiedCharacter.TempHP = Math.max(0, character?.TempHP - 1);

                  updateCharacter(modifiedCharacter);
                }
              }}
            >
              <Text style={styles.blockButton}>−</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.blockCenter}>
              <Text style={styles.blockTitle}>HP Temporal</Text>
              <Text style={styles.blockValue}>
                {character?.TempHP ? character?.TempHP : 0}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (character?.TempHP != undefined) {
                  const modifiedCharacter = character;
                  modifiedCharacter.TempHP = character?.TempHP + 1;

                  updateCharacter(modifiedCharacter);
                }
              }}
            >
              <Text style={styles.blockButton}>+</Text>
            </TouchableOpacity>
          </View>
          {/* Current HP */}
          <View style={[styles.blockContainer, { backgroundColor: "#d32f2f" }]}>
            <TouchableOpacity
              onPress={() => {
                if (character?.CurrentHP != undefined) {
                  const modifiedCharacter = character;
                  modifiedCharacter.CurrentHP = Math.max(
                    0,
                    character?.CurrentHP - 1,
                  );

                  updateCharacter(modifiedCharacter);
                }
              }}
            >
              <Text style={styles.blockButton}>−</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.blockCenter}>
              <Text style={styles.blockTitle}>HP</Text>
              <Text style={styles.blockValue}>
                {character?.CurrentHP ? character.CurrentHP : 0}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (character?.CurrentHP != undefined) {
                  const modifiedCharacter = character;
                  modifiedCharacter.CurrentHP = Math.min(
                    character.HP,
                    character?.CurrentHP + 1,
                  );

                  updateCharacter(modifiedCharacter);
                }
              }}
            >
              <Text style={styles.blockButton}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Extra Section: Rests and Death Saving Throws */}
        <View style={styles.extraSection}>
          <View style={styles.restSection}>
            <TouchableOpacity
              onPress={() =>
                character
                  ? updateCharacter(CombatEngine.takeLongRest(character))
                  : {}
              }
              style={styles.restButton}
            >
              <FontAwesome6 name="campground" size={48} color="#FFFFFF" />
              <ThemedText style={styles.restText}>Descanso largo</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                character
                  ? updateCharacter(CombatEngine.takeShortRest(character))
                  : {}
              }
              style={styles.restButton}
            >
              <Ionicons name="bonfire" size={48} color="#FFFFFF" />
              <ThemedText style={styles.restText}>Descanso corto</ThemedText>
            </TouchableOpacity>
          </View>

          <View style={styles.deathThrowsSection}>
            <ThemedText style={styles.deathThrowsTitle}>
              Tiradas de Salvación de Muerte
            </ThemedText>
            <View style={styles.deathThrowsBody}>
              <View style={styles.deathThrowsSubsection}>
                <ThemedText style={styles.deathThrowsText}>Éxitos</ThemedText>
                <View style={styles.deathThrowsTally}>
                  <FontAwesome name="check-circle" size={20} color="#FFFFFF" />
                  <FontAwesome name="check-circle" size={20} color="#FFFFFF" />
                  <FontAwesome name="circle-o" size={20} color="#FFFFFF" />
                </View>
              </View>
              <View style={styles.deathThrowsSubsection}>
                <ThemedText style={styles.deathThrowsText}>Fallos</ThemedText>
                <View style={styles.deathThrowsTally}>
                  <FontAwesome name="times-circle" size={20} color="#FFFFFF" />
                  <FontAwesome name="circle-o" size={20} color="#FFFFFF" />
                  <FontAwesome name="circle-o" size={20} color="#FFFFFF" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ThemedView>
  );
}
