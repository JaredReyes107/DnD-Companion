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

import { returnNaturalNumber } from "@/lib/utilities/input-handler";
import { useCharacter } from "@/hooks/useCharacter";
import { takeLongRest, takeShortRest } from "@/game/mechanics/resting";
import {
  getCurrentHitDiceAsArray,
  getMaximumHitDice,
} from "@/lib/helpers/hit-dice-helper";
import {
  gainTempHp,
  receiveHealing,
  recoverHitDie,
  takeDamage,
  spendHitDie,
} from "@/game/mechanics/damage-and-healing";
import { cycleInitiativeOrder } from "@/game/mechanics/initiative";
import {
  addFailure,
  addSuccess,
  removeFailure,
  removeSuccess,
} from "@/game/mechanics/death-saving-throws";

import { ui } from "@/localization/ui-localization-resolver";

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

  const [spendHitDiceWindow, setSpendHitDiceWindow] = useState(false);
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
                  {ui("action.takenDamage")}
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
                    title={ui("button.confirm")}
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
                  {ui("action.newTempHp")}
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
                    title={ui("button.confirm")}
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
                  {ui("action.receivedHealing")}
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

                {/* Confirm RecoveredHp Value */}
                <View>
                  <Button
                    title={ui("button.confirm")}
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

          {/* Window: Spend HitDice Window */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={spendHitDiceWindow}
            onRequestClose={() => setSpendHitDiceWindow(false)}
          >
            <ThemedView style={styles.overlay}>
              <ThemedView style={styles.window}>
                <ThemedText style={styles.window_title}>
                  {ui("action.useHitDice")}
                </ThemedText>

                {/* Window Body */}
                <View style={styles.window_body}>
                  {getCurrentHitDiceAsArray(character).map((hitDieInstance) => {
                    const maximumDice =
                      getMaximumHitDice(character)[
                        parseInt(hitDieInstance.diceSize)
                      ];
                    return (
                      <View style={styles.window_row}>
                        <TouchableOpacity
                          style={{ marginRight: 2.5 }}
                          onPress={() =>
                            saveCharacter(
                              spendHitDie(
                                parseInt(hitDieInstance.diceSize),
                                character,
                              ),
                            )
                          }
                        >
                          <FontAwesome6
                            name="minus"
                            style={styles.window_smallIcon}
                          />
                        </TouchableOpacity>
                        <ThemedText style={styles.window_text}>
                          {hitDieInstance.diceAmount}d{hitDieInstance.diceSize}{" "}
                          / {maximumDice}d{hitDieInstance.diceSize}
                        </ThemedText>
                        <TouchableOpacity
                          style={{ marginLeft: 2.5 }}
                          onPress={() =>
                            saveCharacter(
                              recoverHitDie(
                                parseInt(hitDieInstance.diceSize),
                                character,
                              ),
                            )
                          }
                        >
                          <FontAwesome6
                            name="add"
                            style={styles.window_smallIcon}
                          />
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                </View>

                <View>
                  <Button
                    title={ui("button.confirm")}
                    onPress={() => {
                      setRecoverHpValue(0);
                      setSpendHitDiceWindow(false);
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
                <Text style={styles.blockTitle}>{ui("hp.total")}</Text>
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
                <Text style={styles.blockTitle}>{ui("hp.temporal")}</Text>
              </View>
              <View style={styles.blockBody}>
                <TouchableOpacity
                  style={styles.blockValueContainer}
                  onPress={() => setChangeTempHpWindow(true)}
                >
                  <Text style={styles.blockValueText}>
                    {character?.hitPoints.temporalHP}
                  </Text>
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
                <Text style={styles.blockTitle}>{ui("hp.short")}</Text>
              </View>
              <View style={styles.blockBody}>
                <TouchableOpacity
                  style={styles.blockButtonContainer}
                  onPress={() => {
                    {
                      saveCharacter(takeDamage(1, character));
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
                    saveCharacter(receiveHealing(1, character));
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

            {/* Initiative order and Death Saving Throws */}
            <View style={styles.sharedSection}>
              {(() => {
                const value = `${character.combatState.initiativeOrder}`;
                const [before, after] =
                  ui("initiative.order").split(" {value} ");

                return (
                  <TouchableOpacity
                    style={[
                      styles.initiativeOrderSection,
                      styles.sharedSectionLeft,
                    ]}
                    onPress={() => {
                      saveCharacter(cycleInitiativeOrder(character));
                    }}
                  >
                    <ThemedText style={styles.initiativeOrderTitle}>
                      {before}
                    </ThemedText>
                    <ThemedText style={styles.initiativeOrderText}>
                      {value}
                    </ThemedText>
                    <ThemedText style={styles.initiativeOrderTitle}>
                      {after}
                    </ThemedText>
                  </TouchableOpacity>
                );
              })()}

              <View
                style={[styles.deathThrowsSection, styles.sharedSectionRight]}
              >
                <ThemedText
                  style={
                    character.hitPoints.currentHP == 0
                      ? styles.deathThrowsTitle
                      : [styles.deathThrowsTitle, styles.deathThrowsDisabled]
                  }
                >
                  {ui("savingThrows.full")}
                </ThemedText>
                <View style={styles.deathThrowsBody}>
                  <View style={styles.deathThrowsSubsection}>
                    <ThemedText
                      style={
                        character.hitPoints.currentHP == 0
                          ? styles.deathThrowsText
                          : [styles.deathThrowsText, styles.deathThrowsDisabled]
                      }
                    >
                      Éxitos
                    </ThemedText>
                    <View style={styles.deathThrowsTally}>
                      <TouchableOpacity
                        style={{ marginRight: 2.5 }}
                        onPress={() => saveCharacter(removeSuccess(character))}
                      >
                        <FontAwesome6
                          name="minus"
                          style={
                            character.hitPoints.currentHP == 0
                              ? styles.deathThrowsTallyButton
                              : [
                                  styles.deathThrowsTallyButton,
                                  styles.deathThrowsDisabled,
                                ]
                          }
                        />
                      </TouchableOpacity>
                      <FontAwesome
                        name={
                          character.combatState?.deathSaves.successes >= 1
                            ? "check-circle"
                            : "circle-o"
                        }
                        style={
                          character.hitPoints.currentHP == 0
                            ? styles.deathThrowsTallyIcon
                            : [
                                styles.deathThrowsTallyIcon,
                                styles.deathThrowsDisabled,
                              ]
                        }
                      />
                      <FontAwesome
                        name={
                          character.combatState?.deathSaves.successes >= 2
                            ? "check-circle"
                            : "circle-o"
                        }
                        style={
                          character.hitPoints.currentHP == 0
                            ? styles.deathThrowsTallyIcon
                            : [
                                styles.deathThrowsTallyIcon,
                                styles.deathThrowsDisabled,
                              ]
                        }
                      />
                      <FontAwesome
                        name={
                          character.combatState?.deathSaves.successes >= 3
                            ? "check-circle"
                            : "circle-o"
                        }
                        style={
                          character.hitPoints.currentHP == 0
                            ? styles.deathThrowsTallyIcon
                            : [
                                styles.deathThrowsTallyIcon,
                                styles.deathThrowsDisabled,
                              ]
                        }
                      />
                      <TouchableOpacity
                        style={{ marginLeft: 2.5 }}
                        onPress={() => saveCharacter(addSuccess(character))}
                      >
                        <FontAwesome6
                          name="add"
                          style={
                            character.hitPoints.currentHP == 0
                              ? styles.deathThrowsTallyButton
                              : [
                                  styles.deathThrowsTallyButton,
                                  styles.deathThrowsDisabled,
                                ]
                          }
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.deathThrowsSubsection}>
                    <ThemedText
                      style={
                        character.hitPoints.currentHP == 0
                          ? styles.deathThrowsText
                          : [styles.deathThrowsText, styles.deathThrowsDisabled]
                      }
                    >
                      Fallos
                    </ThemedText>
                    <View style={styles.deathThrowsTally}>
                      <TouchableOpacity
                        style={{ marginRight: 2.5 }}
                        onPress={() => saveCharacter(removeFailure(character))}
                      >
                        <FontAwesome6
                          name="minus"
                          style={
                            character.hitPoints.currentHP == 0
                              ? styles.deathThrowsTallyButton
                              : [
                                  styles.deathThrowsTallyButton,
                                  styles.deathThrowsDisabled,
                                ]
                          }
                        />
                      </TouchableOpacity>
                      <FontAwesome
                        name={
                          character.combatState?.deathSaves.failures >= 1
                            ? "times-circle"
                            : "circle-o"
                        }
                        style={
                          character.hitPoints.currentHP == 0
                            ? styles.deathThrowsTallyIcon
                            : [
                                styles.deathThrowsTallyIcon,
                                styles.deathThrowsDisabled,
                              ]
                        }
                      />
                      <FontAwesome
                        name={
                          character.combatState?.deathSaves.failures >= 2
                            ? "times-circle"
                            : "circle-o"
                        }
                        style={
                          character.hitPoints.currentHP == 0
                            ? styles.deathThrowsTallyIcon
                            : [
                                styles.deathThrowsTallyIcon,
                                styles.deathThrowsDisabled,
                              ]
                        }
                      />
                      <FontAwesome
                        name={
                          character.combatState?.deathSaves.failures >= 3
                            ? "times-circle"
                            : "circle-o"
                        }
                        style={
                          character.hitPoints.currentHP == 0
                            ? styles.deathThrowsTallyIcon
                            : [
                                styles.deathThrowsTallyIcon,
                                styles.deathThrowsDisabled,
                              ]
                        }
                      />
                      <TouchableOpacity
                        style={{ marginLeft: 2.5 }}
                        onPress={() => saveCharacter(addFailure(character))}
                      >
                        <FontAwesome6
                          name="add"
                          style={
                            character.hitPoints.currentHP == 0
                              ? styles.deathThrowsTallyButton
                              : [
                                  styles.deathThrowsTallyButton,
                                  styles.deathThrowsDisabled,
                                ]
                          }
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            {/* HitDie and Resting */}
            <View style={styles.sharedSection}>
              <TouchableOpacity
                style={[styles.hitDieSection, styles.sharedSectionLeft]}
                onPress={() => setSpendHitDiceWindow(true)}
              >
                <ThemedText style={styles.hitDieTitle}>
                  {ui("hp.hitDice")}
                </ThemedText>
                <View style={styles.hitDieBody}>
                  {getCurrentHitDiceAsArray(character).map((hitDieInstance) => (
                    <ThemedText style={styles.hitDieText}>
                      {hitDieInstance.diceAmount}d{hitDieInstance.diceSize}
                    </ThemedText>
                  ))}
                </View>
              </TouchableOpacity>

              <View style={[styles.restSection, styles.sharedSectionRight]}>
                <TouchableOpacity
                  onPress={() => saveCharacter(takeLongRest(character))}
                  style={styles.restButton}
                >
                  <FontAwesome6 name="campground" style={styles.restIcon} />
                  <ThemedText style={styles.restText}>
                    {ui("rest.long")}
                  </ThemedText>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => saveCharacter(takeShortRest(character))}
                  style={styles.restButton}
                >
                  <Ionicons name="bonfire" style={styles.restIcon} />
                  <ThemedText style={styles.restText}>
                    {ui("rest.short")}
                  </ThemedText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ThemedView>
    );
  }
};

export default App;
