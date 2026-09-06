import { Button, ScrollView, TouchableOpacity, View } from "react-native";
import { ThemedView } from "@/components/ui/ThemedView";
import { ThemedText } from "@/components/ui/ThemedText";
import { useCharacter } from "@/utils/character-provider";

import { ActionSection } from "@/components/ui/ActionSection";

import { cycleActionResource } from "@/core/entities/combat/action-economy";
import { groupActionsBySlot } from "@/core/data/registries/actions.registry";
import { groupedActionsAsArray } from "@/core/rules/combat/actions-helper";
import { resolveInCombat } from "@/core/systems/stats/stat-resolver";
import { advanceRound } from "@/core/rules/combat/combat-runtime";

import { PrintNumberWithSign } from "@/utils/formater-numbers";
import { ui } from "@/services/localization/ui-localization-resolver";

import genericStyles from "@/styles/generic.styles";
import styles from "@/styles/combat/tab-actions";

const TabActions = () => {
  const { character, encounter, saveCharacter, saveEncounter, loading } =
    useCharacter();

  if (loading || !character || !encounter || !character.combatState) {
    return (
      <ThemedView style={genericStyles.rootContainer}>
        <ThemedText>Cargando personaje…</ThemedText>
      </ThemedView>
    );
  }

  const combatState = encounter.participants[character.id];
  const resolvedStats = resolveInCombat(character, encounter);

  const grouped = groupActionsBySlot(character.actions);
  const sections = groupedActionsAsArray(grouped);

  return (
    <ThemedView style={genericStyles.rootContainer}>
      <View style={styles.headerSection}>
        <View style={styles.primaryStatCell}>
          <ThemedText style={styles.primaryStatText}>Bon. de Ataque</ThemedText>
          <ThemedText style={styles.primaryStatValue}>
            {PrintNumberWithSign(
              resolvedStats.stats.get("derived:spellAttackModifier")
                ?.finalValue ?? 0,
            )}
          </ThemedText>
          <ThemedText style={styles.primaryStatText}>De Conjuro</ThemedText>
        </View>
        <View style={styles.spellcastingStatCell}>
          <ThemedText style={styles.spellcastingText}>CD de Conjuro</ThemedText>
          <ThemedText style={styles.spellcastingValue}>
            {resolvedStats.stats.get("derived:spellSaveDC")?.finalValue}
          </ThemedText>
        </View>
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
