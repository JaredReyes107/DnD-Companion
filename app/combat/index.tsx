import {
  Entypo,
  FontAwesome,
  FontAwesome6,
  Ionicons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  Button,
  TextInput,
} from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import { resolveClassInstance } from "@/game/registries/classes.registry";
import { returnNaturalNumber } from "@/lib/utilities/input-handler";
import { useCharacter } from "@/hooks/useCharacter";
import { takeLongRest, takeShortRest } from "@/game/mechanics/resting";
import {
  gainTempHp,
  receiveHealing,
  takeDamage,
} from "@/game/mechanics/damage-and-healing";
import {
  addFailure,
  addSuccess,
  removeFailure,
  removeSuccess,
} from "@/game/mechanics/death-saving-throws";

import styles from "../../stylesheets/combat/index.styles";
import genericStyles from "../../stylesheets/generic.styles";

const App = () => {
  const { character, saveCharacter } = useCharacter();

  const totalHP =
    (character?.hitPoints.temporalHP ?? 0) +
    (character?.hitPoints.currentHP ?? 0);

  //#region UI variables
  const [dmgTakenWindow, setDmgTakenWindow] = useState(false);
  const [dmgTakenValue, setDmgTakenValue] = useState(0);

  const [changeTempHpWindow, setChangeTempHpWindow] = useState(false);
  const [changeTempHpValue, setChangeTempHpValue] = useState(0);

  const [recoverHpWindow, setRecoverHpWindow] = useState(false);
  const [recoverHpValue, setRecoverHpValue] = useState(0);
  //#endregion

  if (!character) {
    return (
      <View>
        <Text>Cargando personaje…</Text>
      </View>
    );
  } else if (!character.combatState) {
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
          {/* Window: Damage Taken Window */}
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
                  <View style={styles.window_container}>
                    <TextInput
                      style={styles.window_inputField}
                      keyboardType="numeric"
                      placeholder="0"
                      placeholderTextColor="#d8d4cf"
                      value={dmgTakenValue === 0 ? "" : String(dmgTakenValue)}
                      onChangeText={(text: string) => {
                        setDmgTakenValue(returnNaturalNumber(text));
                      }}
                    />
                  </View>

                  {/* Damage Multipliers */}
                  <View style={styles.window_grid}>
                    <TouchableOpacity
                      style={[
                        styles.window_grid_button,
                        styles.window_grid_buttonLeft,
                      ]}
                      onPress={() => {
                        setDmgTakenValue((value) => Math.floor(value / 2));
                      }}
                    >
                      <Text style={styles.window_grid_button_text}>/ 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.window_grid_button,
                        styles.window_grid_buttonRight,
                      ]}
                      onPress={() => {
                        setDmgTakenValue((value) => value * 2);
                      }}
                    >
                      <Text style={styles.window_grid_button_text}>x 2</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Confirm Damage */}
                <View>
                  <Button
                    title="Confirmar"
                    onPress={() => {
                      saveCharacter(takeDamage(dmgTakenValue, character));
                      setDmgTakenValue(0);
                      setDmgTakenWindow(false);
                    }}
                  />
                </View>
              </ThemedView>
            </ThemedView>
          </Modal>

          {/* Window: Change TempHP Window */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={changeTempHpWindow}
            onRequestClose={() => setChangeTempHpWindow(false)}
          >
            <ThemedView style={styles.overlay}>
              <ThemedView style={styles.window}>
                <ThemedText style={styles.window_title}>
                  Vida temporal nueva
                </ThemedText>

                {/* Window Body */}
                <View style={styles.window_body}>
                  {/* TempHp Input Field */}
                  <View style={styles.window_container}>
                    <TextInput
                      style={styles.window_inputField}
                      keyboardType="numeric"
                      placeholder="0"
                      placeholderTextColor="#d8d4cf"
                      value={
                        changeTempHpValue === 0 ? "" : String(changeTempHpValue)
                      }
                      onChangeText={(text: string) => {
                        setChangeTempHpValue(returnNaturalNumber(text));
                      }}
                    />
                  </View>
                </View>

                {/* Confirm TempHp Value */}
                <View>
                  <Button
                    title="Confirmar"
                    onPress={() => {
                      saveCharacter(gainTempHp(changeTempHpValue, character));
                      setChangeTempHpValue(0);
                      setChangeTempHpWindow(false);
                    }}
                  />
                </View>
              </ThemedView>
            </ThemedView>
          </Modal>

          {/* Window: Change CurrentHP Window */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={recoverHpWindow}
            onRequestClose={() => setRecoverHpWindow(false)}
          >
            <ThemedView style={styles.overlay}>
              <ThemedView style={styles.window}>
                <ThemedText style={styles.window_title}>
                  Curación recibida
                </ThemedText>

                {/* Window Body */}
                <View style={styles.window_body}>
                  {/* RecoverHp Input Field */}
                  <View style={styles.window_container}>
                    <TextInput
                      style={styles.window_inputField}
                      keyboardType="numeric"
                      placeholder="0"
                      placeholderTextColor="#d8d4cf"
                      value={recoverHpValue === 0 ? "" : String(recoverHpValue)}
                      onChangeText={(text: string) => {
                        setRecoverHpValue(returnNaturalNumber(text));
                      }}
                    />
                  </View>
                </View>

                {/* Confirm RecoverHp Value */}
                <View>
                  <Button
                    title="Confirmar"
                    onPress={() => {
                      saveCharacter(receiveHealing(recoverHpValue, character));
                      setRecoverHpValue(0);
                      setRecoverHpWindow(false);
                    }}
                  />
                </View>
              </ThemedView>
            </ThemedView>
          </Modal>

          {/* Blocks and Buttons */}
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
                <TouchableOpacity
                  style={styles.blockValueContainer}
                  onPress={() => setChangeTempHpWindow(true)}
                >
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
                <TouchableOpacity
                  style={styles.blockValueContainer}
                  onPress={() => setRecoverHpWindow(true)}
                >
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

            {/* Rests and Initiative order */}
            <View style={styles.sharedSection}>
              <TouchableOpacity style={styles.initiativeOrderSection}>
                <ThemedText style={styles.initiativeOrderTitle}>
                  Orden de
                </ThemedText>
                <ThemedText style={styles.initiativeOrderText}>2</ThemedText>
                <ThemedText style={styles.initiativeOrderTitle}>
                  Iniciativa
                </ThemedText>
              </TouchableOpacity>

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
            </View>

            {/* HitDie and Death Saving Throws */}
            <View style={styles.sharedSection}>
              <TouchableOpacity style={styles.hitDieSection}>
                <ThemedText style={styles.hitDieTitle}>
                  Dados de Golpe
                </ThemedText>
                <View style={styles.hitDieBody}>
                  {Object.values(character.classes.byId).map(
                    (classInstance) => (
                      <ThemedText style={styles.hitDieText}>
                        {classInstance.level}d
                        {resolveClassInstance(classInstance).hitDie}
                      </ThemedText>
                    ),
                  )}
                </View>
              </TouchableOpacity>

              <View style={styles.deathThrowsSection}>
                <ThemedText style={styles.deathThrowsTitle}>
                  Tiradas de Salvación
                </ThemedText>
                <View style={styles.deathThrowsBody}>
                  <View style={styles.deathThrowsSubsection}>
                    <ThemedText style={styles.deathThrowsText}>
                      Éxitos
                    </ThemedText>
                    <View style={styles.deathThrowsTally}>
                      <TouchableOpacity
                        style={{ marginRight: 2.5 }}
                        onPress={() => saveCharacter(removeSuccess(character))}
                      >
                        <FontAwesome6
                          name="minus"
                          style={styles.deathThrowsTallyButton}
                        />
                      </TouchableOpacity>
                      <FontAwesome
                        name={
                          character.combatState?.deathSaves.successes >= 1
                            ? "check-circle"
                            : "circle-o"
                        }
                        style={styles.deathThrowsTallyIcon}
                      />
                      <FontAwesome
                        name={
                          character.combatState?.deathSaves.successes >= 2
                            ? "check-circle"
                            : "circle-o"
                        }
                        style={styles.deathThrowsTallyIcon}
                      />
                      <FontAwesome
                        name={
                          character.combatState?.deathSaves.successes >= 3
                            ? "check-circle"
                            : "circle-o"
                        }
                        style={styles.deathThrowsTallyIcon}
                      />
                      <TouchableOpacity
                        style={{ marginLeft: 2.5 }}
                        onPress={() => saveCharacter(addSuccess(character))}
                      >
                        <FontAwesome6
                          name="add"
                          style={styles.deathThrowsTallyButton}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.deathThrowsSubsection}>
                    <ThemedText style={styles.deathThrowsText}>
                      Fallos
                    </ThemedText>
                    <View style={styles.deathThrowsTally}>
                      <TouchableOpacity
                        style={{ marginRight: 2.5 }}
                        onPress={() => saveCharacter(removeFailure(character))}
                      >
                        <FontAwesome6
                          name="minus"
                          style={styles.deathThrowsTallyButton}
                        />
                      </TouchableOpacity>
                      <FontAwesome
                        name={
                          character.combatState?.deathSaves.failures >= 1
                            ? "times-circle"
                            : "circle-o"
                        }
                        style={styles.deathThrowsTallyIcon}
                      />
                      <FontAwesome
                        name={
                          character.combatState?.deathSaves.failures >= 2
                            ? "times-circle"
                            : "circle-o"
                        }
                        style={styles.deathThrowsTallyIcon}
                      />
                      <FontAwesome
                        name={
                          character.combatState?.deathSaves.failures >= 3
                            ? "times-circle"
                            : "circle-o"
                        }
                        style={styles.deathThrowsTallyIcon}
                      />
                      <TouchableOpacity
                        style={{ marginLeft: 2.5 }}
                        onPress={() => saveCharacter(addFailure(character))}
                      >
                        <FontAwesome6
                          name="add"
                          style={styles.deathThrowsTallyButton}
                        />
                      </TouchableOpacity>
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
