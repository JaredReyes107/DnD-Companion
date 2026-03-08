import { Button, FlatList, TouchableOpacity, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useCharacter } from "@/lib/utilities/character-provider";

import { ActionSection } from "@/components/ActionSection";

import { buildEncounterState } from "@/game/domain/combat/encounter-helper";
import { cycleActionResource } from "@/game/domain/combat/action-economy";
import { groupActionsBySlot } from "@/game/data/registries/actions.registry";
import { groupedActionsAsArray } from "@/lib/helpers/actions-helper";
import { resolveInCombat } from "@/game/engine/resolvers/stat-resolver";
import { advanceRound } from "@/game/mechanics/combat-runtime";

import { PrintNumberWithSign } from "@/lib/utilities/formater-numbers";
import { ui } from "@/localization/ui-localization-resolver";

import genericStyles from "@/stylesheets/generic.styles";
import styles from "@/stylesheets/combat/tab-actions";

const HomeScreen = () => {
  const { character, saveCharacter, loading } = useCharacter();

  if (loading || !character) {
    return (
      <View>
        <ThemedText>Cargando personaje…</ThemedText>
      </View>
    );
  } else {
    const encounterState = buildEncounterState([character]);
    const combatState = encounterState.participants[character.id];

    const grouped = groupActionsBySlot(character.actions);
    const sections = groupedActionsAsArray(grouped);

    const resolvedStats = resolveInCombat(character, encounterState);

    return (
      <ThemedView style={genericStyles.rootContainer}>
        <View style={styles.headerSection}>
          {/* SpellAttackModifier and SpellDC */}
          <View style={styles.statRow}>
            <View style={styles.spellcastingStatCell}>
              <ThemedText style={styles.spellcastingText}>
                Bon. de Ataque
              </ThemedText>
              <ThemedText style={styles.spellcastingValue}>
                {PrintNumberWithSign(
                  resolvedStats.stats.get("derived:spellAttackModifier")
                    ?.finalValue ?? 0,
                )}
              </ThemedText>
              <ThemedText style={styles.spellcastingText}>
                De Conjuro
              </ThemedText>
            </View>
            <View style={styles.spellcastingStatCell}>
              <ThemedText style={styles.spellcastingText}>
                CD de Conjuro
              </ThemedText>
              <ThemedText style={styles.spellcastingValue}>
                {resolvedStats.stats.get("derived:spellSaveDC")?.finalValue}
              </ThemedText>
            </View>
          </View>

          {/* Action Economy tracker */}
          <View style={styles.statRow}>
            <TouchableOpacity
              style={styles.actionSlotCell}
              onPress={() => {
                cycleActionResource(encounterState, character.id, "action");
              }}
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
              onPress={() => {
                cycleActionResource(
                  encounterState,
                  character.id,
                  "bonusAction",
                );
              }}
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
              onPress={() => {
                cycleActionResource(encounterState, character.id, "reaction");
              }}
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
        <FlatList
          contentContainerStyle={styles.actionBoard}
          data={sections}
          keyExtractor={(action) => action.slot}
          renderItem={(action) => (
            <ActionSection
              slot={action.item.slot}
              actions={action.item.actions}
              character={character}
              onUpdate={saveCharacter}
            />
          )}
        />

        <View style={styles.footerSection}>
          <Button
            title={"Comenzar nueva ronda"}
            onPress={() => {
              saveCharacter(advanceRound(character));
            }}
          />
        </View>
      </ThemedView>
    );
  }
};

export default HomeScreen;
