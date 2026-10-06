import { Button, ScrollView, TouchableOpacity, View } from "react-native";
import { ThemedView } from "@/components/ui/ThemedView";
import { ThemedText } from "@/components/ui/ThemedText";
import { useCharacter } from "@/utils/character-provider";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";

import { ActionSection } from "@/components/ui/ActionSection";

import { cycleActionResource } from "@/core/entities/combat/action-economy";
import { groupActionsBySlot } from "@/core/data/registries/actions.registry";
import { groupedActionsAsArray } from "@/core/rules/combat/actions-helper";
import { resolveInCombat } from "@/core/systems/stats/stat-resolver";
import { advanceRound } from "@/core/rules/combat/combat-runtime";
import { getCharacterSpellcastingSources } from "@/core/entities/spellcasting/spellcasting";

import { PrintNumberWithSign } from "@/utils/formater-numbers";
import { ui } from "@/services/localization/ui-localization-resolver";

import genericStyles from "@/styles/generic.styles";
import styles from "@/styles/combat/tab-actions";
import { getLocalizedName } from "@/services/localization/localization-helper";

const TabActions = () => {
  const {
    character,
    encounter,
    saveCharacter,
    saveEncounter,
    loading,
    loadCharacterById,
  } = useCharacter();
  const [spellcastingSourceIndex, setSpellcastingSourceIndex] = useState(0);

  useFocusEffect(
    useCallback(() => {
      if (character?.id) loadCharacterById(character.id);
    }, [character?.id, loadCharacterById]),
  );

  if (loading || !character || !encounter || !character.combatState) {
    return (
      <ThemedView style={genericStyles.rootContainer}>
        <ThemedText>Cargando personaje…</ThemedText>
      </ThemedView>
    );
  }

  const combatState = encounter.participants[character.id];
  const resolvedStats = resolveInCombat(character, encounter);

  const spellcastingSources = getCharacterSpellcastingSources(character);
  const activeSource =
    spellcastingSources[spellcastingSourceIndex % spellcastingSources.length];

  const cycleSpellcastingSource = () => {
    if (spellcastingSources.length <= 1) return;
    setSpellcastingSourceIndex((i) => (i + 1) % spellcastingSources.length);
  };

  const grouped = groupActionsBySlot(character.actions);
  const sections = groupedActionsAsArray(grouped);

  return (
    <ThemedView style={genericStyles.rootContainer}>
      <View style={styles.headerSection}>
        <TouchableOpacity
          style={styles.primaryStatCell}
          onPress={cycleSpellcastingSource}
          disabled={spellcastingSources.length === 0}
        >
          <ThemedText style={styles.primaryStatText}>Bon. de Ataque</ThemedText>
          <ThemedText style={styles.primaryStatValue}>
            {activeSource
              ? PrintNumberWithSign(
                  resolvedStats.stats.get(
                    `spellcasting:${activeSource.sourceId}:attackModifier`,
                  )?.finalValue ?? 0,
                )
              : "—"}
          </ThemedText>
          <ThemedText style={styles.primaryStatText}>
            {activeSource
              ? getLocalizedName("classes", activeSource.sourceId)
              : "De Conjuro"}
          </ThemedText>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.spellcastingStatCell}
          onPress={cycleSpellcastingSource}
          disabled={spellcastingSources.length === 0}
        >
          <ThemedText style={styles.spellcastingText}>CD de Conjuro</ThemedText>
          <ThemedText style={styles.spellcastingValue}>
            {activeSource
              ? resolvedStats.stats.get(
                  `spellcasting:${activeSource.sourceId}:saveDC`,
                )?.finalValue
              : "—"}
          </ThemedText>
        </TouchableOpacity>
      </View>

      {/* Action Economy tracker */}
      <View>
        <View style={styles.statRow}>
          <TouchableOpacity
            style={styles.actionSlotCell}
            onPress={() =>
              saveEncounter(
                cycleActionResource(encounter, character.id, "action"),
              )
            }
          >
            <View style={styles.actionSlotContent}>
              <ThemedText style={styles.actionSlotText}>
                {ui("actionEconomy.action")}
              </ThemedText>
              <ThemedText style={styles.actionSlotValue}>
                {combatState.actionEconomy.actions.current}
              </ThemedText>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionSlotCell}
            onPress={() =>
              saveEncounter(
                cycleActionResource(encounter, character.id, "bonusAction"),
              )
            }
          >
            <View style={styles.actionSlotContent}>
              <ThemedText style={styles.actionSlotText}>
                {ui("actionEconomy.bonusAction")}
              </ThemedText>
              <ThemedText style={styles.actionSlotValue}>
                {combatState.actionEconomy.bonusActions.current}
              </ThemedText>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionSlotCell}
            onPress={() =>
              saveEncounter(
                cycleActionResource(encounter, character.id, "reaction"),
              )
            }
          >
            <View style={styles.actionSlotContent}>
              <ThemedText style={styles.actionSlotText}>
                {ui("actionEconomy.reaction")}
              </ThemedText>
              <ThemedText style={styles.actionSlotValue}>
                {combatState.actionEconomy.reactions.current}
              </ThemedText>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Action Board */}
      <View style={{ flex: 1, marginVertical: 7.5 }}>
        <ScrollView contentContainerStyle={styles.actionBoard}>
          {sections.map((item) => (
            <ActionSection
              key={item.slot}
              slot={item.slot}
              actions={item.actions}
              character={character}
              onUpdate={saveCharacter}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.footerSection}>
        <Button
          title={ui("timeIntervals.startRound")}
          onPress={() => saveCharacter(advanceRound(character))}
        />
      </View>
    </ThemedView>
  );
};

export default TabActions;
