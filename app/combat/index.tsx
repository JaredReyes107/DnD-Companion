import {
  Entypo,
  FontAwesome,
  FontAwesome6,
  Ionicons,
} from "@expo/vector-icons";
//import { Image } from "expo-image";
import { router } from "expo-router";
import React, { useState } from "react";
import { Text, View, TouchableOpacity, Modal, Button } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import { useCharacter } from "@/hooks/useCharacter";
import { takeLongRest, takeShortRest } from "@/game/rules/resting";

import styles from "../../stylesheets/combat/index.styles";
import genericStyles from "../../stylesheets/generic.styles";

const App = () => {
  const { character, saveCharacter } = useCharacter();

  const totalHP =
    (character?.hitPoints.temporalHP ?? 0) +
    (character?.hitPoints.currentHP ?? 0);

  //#region DMG Taken Window
  const [dmgTakenWindow, setDmgTakenWindow] = useState(false);
  const [dmgTakenValue, setDmgTakenValue] = useState(0);
  //const [dmgTakenField, setDmgTakenField] = useState(0);

  //#endregion

  if (!character) {
    return (
      <View>
        <Text>Cargando personaje…</Text>
      </View>
    );
  } else {
    return (
      <ThemedView
        style={[
          genericStyles.rootContainer,
          { paddingHorizontal: "5%", alignItems: "center" },
        ]}
      >
        <View style={styles.headerContainer}>
          {/* Button: Go back */}
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
                <ThemedText style={styles.window_title}>
                  Daño recibido
                </ThemedText>

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
                      <Text
                        style={[styles.blockButtonIcon, { marginTop: -10 }]}
                      >
                        −
                      </Text>
                    </TouchableOpacity>

                    <Text style={styles.damageTaken_Input}>
                      {dmgTakenValue}
                    </Text>
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
                      <Text
                        style={[styles.blockButtonIcon, { marginTop: -10 }]}
                      >
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>

                  {/* Damage Types Board */}
                  <View style={styles.damageTypes_Grid}>
                    {/*
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
            <View
              style={[styles.blockContainer, { backgroundColor: "#466BC2" }]}
            >
              <View
                style={[styles.blockHeader, { backgroundColor: "#2d52a8" }]}
              >
                <Text style={styles.blockTitle}>HP Total</Text>
              </View>
              <View style={styles.blockBody}>
                <TouchableOpacity
                  style={styles.blockValueContainer}
                  onPress={() => setDmgTakenWindow(true)}
                >
                  <Text style={styles.blockValueText}>{totalHP}</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* Temporal HP */}
            <View
              style={[
                styles.blockContainer,
                { backgroundColor: "#27B086" /*'#9c27b0'*/ },
              ]}
            >
              <View
                style={[
                  styles.blockHeader,
                  { backgroundColor: "#348b71" /*'#9c27b0'*/ },
                ]}
              >
                <Text style={styles.blockTitle}>HP Temporal</Text>
              </View>
              <View style={styles.blockBody}>
                <TouchableOpacity
                  style={styles.blockButtonContainer}
                  onPress={() => {
                    saveCharacter({
                      ...character,
                      hitPoints: {
                        ...character.hitPoints,
                        temporalHP: Math.max(
                          0,
                          character.hitPoints.temporalHP - 1,
                        ),
                      },
                    });
                  }}
                >
                  <FontAwesome6
                    name="minus"
                    style={[styles.blockButtonIcon, styles.blockButtonIconLeft]}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.blockValueContainer}>
                  <Text style={styles.blockValueText}>
                    {character?.hitPoints.temporalHP}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.blockButtonContainer}
                  onPress={() => {
                    saveCharacter({
                      ...character,
                      hitPoints: {
                        ...character.hitPoints,
                        temporalHP: character.hitPoints.temporalHP + 1,
                      },
                    });
                  }}
                >
                  <FontAwesome6
                    name="add"
                    style={[
                      styles.blockButtonIcon,
                      styles.blockButtonIconRight,
                    ]}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* Current HP */}
            <View
              style={[styles.blockContainer, { backgroundColor: "#d32f2f" }]}
            >
              <View
                style={[styles.blockHeader, { backgroundColor: "#bb3131" }]}
              >
                <Text style={styles.blockTitle}>HP</Text>
              </View>
              <View style={styles.blockBody}>
                <TouchableOpacity
                  style={styles.blockButtonContainer}
                  onPress={() => {
                    {
                      saveCharacter({
                        ...character,
                        hitPoints: {
                          ...character.hitPoints,
                          currentHP: Math.max(
                            0,
                            character.hitPoints.currentHP - 1,
                          ),
                        },
                      });
                    }
                  }}
                >
                  <FontAwesome6
                    name="minus"
                    style={[styles.blockButtonIcon, styles.blockButtonIconLeft]}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.blockValueContainer}>
                  <Text style={styles.blockValueText}>
                    {character.hitPoints.currentHP}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.blockButtonContainer}
                  onPress={() => {
                    saveCharacter({
                      ...character,
                      hitPoints: {
                        ...character.hitPoints,
                        currentHP: Math.min(
                          character.hitPoints.currentMaximumHP,
                          character.hitPoints.currentHP + 1,
                        ),
                      },
                    });
                  }}
                >
                  <FontAwesome6
                    name="add"
                    style={[
                      styles.blockButtonIcon,
                      styles.blockButtonIconRight,
                    ]}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Extra Section: Rests and Death Saving Throws */}
            <View style={styles.extraSection}>
              <View style={styles.restSection}>
                <TouchableOpacity
                  onPress={() => saveCharacter(takeLongRest(character))}
                  style={styles.restButton}
                >
                  <FontAwesome6 name="campground" style={styles.restIcon} />
                  <ThemedText style={styles.restText}>
                    Descanso largo
                  </ThemedText>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => saveCharacter(takeShortRest(character))}
                  style={styles.restButton}
                >
                  <Ionicons name="bonfire" style={styles.restIcon} />
                  <ThemedText style={styles.restText}>
                    Descanso corto
                  </ThemedText>
                </TouchableOpacity>
              </View>

              <View style={styles.deathThrowsSection}>
                <ThemedText style={styles.deathThrowsTitle}>TSM</ThemedText>
                <View style={styles.deathThrowsBody}>
                  <View style={styles.deathThrowsSubsection}>
                    <ThemedText style={styles.deathThrowsText}>
                      Éxitos
                    </ThemedText>
                    <View style={styles.deathThrowsTally}>
                      <FontAwesome
                        name="check-circle"
                        size={20}
                        color="#FFFFFF"
                      />
                      <FontAwesome
                        name="check-circle"
                        size={20}
                        color="#FFFFFF"
                      />
                      <FontAwesome name="circle-o" size={20} color="#FFFFFF" />
                    </View>
                  </View>
                  <View style={styles.deathThrowsSubsection}>
                    <ThemedText style={styles.deathThrowsText}>
                      Fallos
                    </ThemedText>
                    <View style={styles.deathThrowsTally}>
                      <FontAwesome
                        name="times-circle"
                        size={20}
                        color="#FFFFFF"
                      />
                      <FontAwesome name="circle-o" size={20} color="#FFFFFF" />
                      <FontAwesome name="circle-o" size={20} color="#FFFFFF" />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ThemedView>
    );
  }
};

export default App;
