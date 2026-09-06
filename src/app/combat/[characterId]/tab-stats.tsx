import { FontAwesome, FontAwesome6, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  Button,
  TextInput,
} from "react-native";

import { ThemedText } from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";

import { returnNaturalNumber } from "@/utils/input-handler";
import { useCharacter } from "@/utils/character-provider";
import { takeLongRest, takeShortRest } from "@/core/rules/character/resting";
import {
  getCurrentHitDiceAsArray,
  getMaximumHitDice,
} from "@/core/rules/character/hit-dice-helper";
import {
  gainTempHp,
  receiveHealing,
  recoverHitDie,
  takeDamage,
  spendHitDie,
} from "@/core/rules/combat/damage-and-healing";
import { cycleInitiativeOrder } from "@/core/entities/combat/initiative";
import {
  addFailure,
  addSuccess,
  removeFailure,
  removeSuccess,
} from "@/core/entities/combat/death-saving-throws";

import { ui } from "@/services/localization/ui-localization-resolver";

import styles from "@/styles/combat/index.styles";
import genericStyles from "@/styles/generic.styles";

const TabStats = () => {
  const { character, saveCharacter, loading } = useCharacter();

  const totalHP =
    (character?.hitPoints.temporalHP ?? 0) +
    (character?.hitPoints.currentHP ?? 0);

  //#region UI state
  const [dmgTakenWindow, setDmgTakenWindow] = useState(false);
  const [dmgTakenValue, setDmgTakenValue] = useState(0);

  const [changeTempHpWindow, setChangeTempHpWindow] = useState(false);
  const [changeTempHpValue, setChangeTempHpValue] = useState(0);

  const [recoverHpWindow, setRecoverHpWindow] = useState(false);
  const [recoverHpValue, setRecoverHpValue] = useState(0);

  const [spendHitDiceWindow, setSpendHitDiceWindow] = useState(false);
  //#endregion

  // character-provider guarantees combatState is populated after loading.
  // The only valid pending states are: still loading, or character not found.
  if (loading || !character || !character.combatState) {
    return (
      <ThemedView style={genericStyles.rootContainer}>
        <ThemedText>Cargando personaje…</ThemedText>
      </ThemedView>
    );
  }

  const { combatState } = character;

  return (
    <ThemedView
      style={[
        genericStyles.rootContainer,
        { paddingHorizontal: "5%", alignItems: "center" },
      ]}
    >
      <View style={styles.headerContainer} />

      <View style={styles.mainBody}>
        {/* Modal: Damage Taken */}
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

              <View style={styles.window_body}>
                <View style={styles.window_container}>
                  <TextInput
                    style={styles.window_inputField}
                    keyboardType="numeric"
                    placeholder="0"
                    placeholderTextColor="#d8d4cf"
                    value={dmgTakenValue === 0 ? "" : String(dmgTakenValue)}
                    onChangeText={(text) =>
                      setDmgTakenValue(returnNaturalNumber(text))
                    }
                  />
                </View>

                <View style={styles.window_grid}>
                  <TouchableOpacity
                    style={[
                      styles.window_grid_button,
                      styles.window_grid_buttonLeft,
                    ]}
                    onPress={() => setDmgTakenValue((v) => Math.floor(v / 2))}
                  >
                    <Text style={styles.window_grid_button_text}>/ 2</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.window_grid_button,
                      styles.window_grid_buttonRight,
                    ]}
                    onPress={() => setDmgTakenValue((v) => v * 2)}
                  >
                    <Text style={styles.window_grid_button_text}>x 2</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <Button
                title={ui("button.confirm")}
                onPress={() => {
                  saveCharacter(takeDamage(dmgTakenValue, character));
                  setDmgTakenValue(0);
                  setDmgTakenWindow(false);
                }}
              />
            </ThemedView>
          </ThemedView>
        </Modal>

        {/* Modal: Temporal HP */}
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

              <View style={styles.window_body}>
                <View style={styles.window_container}>
                  <TextInput
                    style={styles.window_inputField}
                    keyboardType="numeric"
                    placeholder="0"
                    placeholderTextColor="#d8d4cf"
                    value={
                      changeTempHpValue === 0 ? "" : String(changeTempHpValue)
                    }
                    onChangeText={(text) =>
                      setChangeTempHpValue(returnNaturalNumber(text))
                    }
                  />
                </View>
              </View>

              <Button
                title={ui("button.confirm")}
                onPress={() => {
                  saveCharacter(gainTempHp(changeTempHpValue, character));
                  setChangeTempHpValue(0);
                  setChangeTempHpWindow(false);
                }}
              />
            </ThemedView>
          </ThemedView>
        </Modal>

        {/* Modal: Healing */}
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

              <View style={styles.window_body}>
                <View style={styles.window_container}>
                  <TextInput
                    style={styles.window_inputField}
                    keyboardType="numeric"
                    placeholder="0"
                    placeholderTextColor="#d8d4cf"
                    value={recoverHpValue === 0 ? "" : String(recoverHpValue)}
                    onChangeText={(text) =>
                      setRecoverHpValue(returnNaturalNumber(text))
                    }
                  />
                </View>
              </View>

              <Button
                title={ui("button.confirm")}
                onPress={() => {
                  saveCharacter(receiveHealing(recoverHpValue, character));
                  setRecoverHpValue(0);
                  setRecoverHpWindow(false);
                }}
              />
            </ThemedView>
          </ThemedView>
        </Modal>

        {/* Modal: Hit Dice */}
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

              <View style={styles.window_body}>
                {getCurrentHitDiceAsArray(character).map((hitDieInstance) => {
                  const maximumDice =
                    getMaximumHitDice(character)[
                      parseInt(hitDieInstance.diceSize)
                    ];
                  return (
                    <View
                      key={hitDieInstance.diceSize}
                      style={styles.window_row}
                    >
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
                        {hitDieInstance.diceAmount}d{hitDieInstance.diceSize} /{" "}
                        {maximumDice}d{hitDieInstance.diceSize}
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

              <Button
                title={ui("button.confirm")}
                onPress={() => setSpendHitDiceWindow(false)}
              />
            </ThemedView>
          </ThemedView>
        </Modal>

        {/* HP Blocks */}
        <View style={styles.mainSection}>
          {/* Total HP */}
          <View style={[styles.blockContainer, { backgroundColor: "#466BC2" }]}>
            <View style={[styles.blockHeader, { backgroundColor: "#2d52a8" }]}>
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
          <View style={[styles.blockContainer, { backgroundColor: "#27B086" }]}>
            <View style={[styles.blockHeader, { backgroundColor: "#348b71" }]}>
              <Text style={styles.blockTitle}>{ui("hp.temporal")}</Text>
            </View>
            <View style={styles.blockBody}>
              <TouchableOpacity
                style={styles.blockValueContainer}
                onPress={() => setChangeTempHpWindow(true)}
              >
                <Text style={styles.blockValueText}>
                  {character.hitPoints.temporalHP}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Current HP */}
          <View style={[styles.blockContainer, { backgroundColor: "#d32f2f" }]}>
            <View style={[styles.blockHeader, { backgroundColor: "#bb3131" }]}>
              <Text style={styles.blockTitle}>{ui("hp.short")}</Text>
            </View>
            <View style={styles.blockBody}>
              <TouchableOpacity
                style={styles.blockButtonContainer}
                onPress={() => saveCharacter(takeDamage(1, character))}
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
                onPress={() => saveCharacter(receiveHealing(1, character))}
              >
                <FontAwesome6
                  name="add"
                  style={[styles.blockButtonIcon, styles.blockButtonIconRight]}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Initiative order and Death Saves */}
          <View style={styles.sharedSection}>
            {(() => {
              const value = `${combatState.initiativeOrder}`;
              const [before, after] = ui("initiative.order").split(" {value} ");
              return (
                <TouchableOpacity
                  style={[
                    styles.initiativeOrderSection,
                    styles.sharedSectionLeft,
                  ]}
                  onPress={() => saveCharacter(cycleInitiativeOrder(character))}
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
                  character.hitPoints.currentHP === 0
                    ? styles.deathThrowsTitle
                    : [styles.deathThrowsTitle, styles.deathThrowsDisabled]
                }
              >
                {ui("savingThrows.death")}
              </ThemedText>

              <View style={styles.deathThrowsBody}>
                {/* Successes */}
                <View style={styles.deathThrowsSubsection}>
                  <ThemedText
                    style={
                      character.hitPoints.currentHP === 0
                        ? styles.deathThrowsText
                        : [styles.deathThrowsText, styles.deathThrowsDisabled]
                    }
                  >
                    {ui("savingThrows.successes")}
                  </ThemedText>
                  <View style={styles.deathThrowsTally}>
                    <TouchableOpacity
                      style={{ marginRight: 2.5 }}
                      onPress={() => saveCharacter(removeSuccess(character))}
                    >
                      <FontAwesome6
                        name="minus"
                        style={
                          character.hitPoints.currentHP === 0
                            ? styles.deathThrowsTallyButton
                            : [
                                styles.deathThrowsTallyButton,
                                styles.deathThrowsDisabled,
                              ]
                        }
                      />
                    </TouchableOpacity>
                    {[1, 2, 3].map((n) => (
                      <FontAwesome
                        key={n}
                        name={
                          combatState.deathSaves.successes >= n
                            ? "check-circle"
                            : "circle-o"
                        }
                        style={
                          character.hitPoints.currentHP === 0
                            ? styles.deathThrowsTallyIcon
                            : [
                                styles.deathThrowsTallyIcon,
                                styles.deathThrowsDisabled,
                              ]
                        }
                      />
                    ))}
                    <TouchableOpacity
                      style={{ marginLeft: 2.5 }}
                      onPress={() => saveCharacter(addSuccess(character))}
                    >
                      <FontAwesome6
                        name="add"
                        style={
                          character.hitPoints.currentHP === 0
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

                {/* Failures */}
                <View style={styles.deathThrowsSubsection}>
                  <ThemedText
                    style={
                      character.hitPoints.currentHP === 0
                        ? styles.deathThrowsText
                        : [styles.deathThrowsText, styles.deathThrowsDisabled]
                    }
                  >
                    {ui("savingThrows.failures")}
                  </ThemedText>
                  <View style={styles.deathThrowsTally}>
                    <TouchableOpacity
                      style={{ marginRight: 2.5 }}
                      onPress={() => saveCharacter(removeFailure(character))}
                    >
                      <FontAwesome6
                        name="minus"
                        style={
                          character.hitPoints.currentHP === 0
                            ? styles.deathThrowsTallyButton
                            : [
                                styles.deathThrowsTallyButton,
                                styles.deathThrowsDisabled,
                              ]
                        }
                      />
                    </TouchableOpacity>
                    {[1, 2, 3].map((n) => (
                      <FontAwesome
                        key={n}
                        name={
                          combatState.deathSaves.failures >= n
                            ? "times-circle"
                            : "circle-o"
                        }
                        style={
                          character.hitPoints.currentHP === 0
                            ? styles.deathThrowsTallyIcon
                            : [
                                styles.deathThrowsTallyIcon,
                                styles.deathThrowsDisabled,
                              ]
                        }
                      />
                    ))}
                    <TouchableOpacity
                      style={{ marginLeft: 2.5 }}
                      onPress={() => saveCharacter(addFailure(character))}
                    >
                      <FontAwesome6
                        name="add"
                        style={
                          character.hitPoints.currentHP === 0
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

          {/* Hit Dice + Rests */}
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
                  <ThemedText
                    key={hitDieInstance.diceSize}
                    style={styles.hitDieText}
                  >
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
};

export default TabStats;
