import { Button, FlatList, TouchableOpacity, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useCharacter } from "@/lib/utilities/character-provider";

import { ActionSection } from "@/components/ActionSection";

import {
  getSpellAttackModifier,
  getSpellSaveDC,
} from "@/game/mechanics/spellcasting";
import { getArmorClass } from "@/game/mechanics/armor-class";
import { cycleActionResource } from "@/game/mechanics/action-economy";
import { groupActionsBySlot } from "@/game/registries/actions.registry";
import { groupedActionsAsArray } from "@/lib/helpers/actions-helper";

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
  } else if (!character.combatState) {
    return (
      <View>
        <ThemedText>Cargando personaje…</ThemedText>
      </View>
    );
  } else {
    const grouped = groupActionsBySlot(character.actions);
    const sections = groupedActionsAsArray(grouped);

    return (
      <ThemedView style={genericStyles.rootContainer}>
        <View style={styles.headerSection}>
          {/* AC and Speed */}
          <View style={styles.statRow}>
            {(() => {
              const value = `${getArmorClass(character)}`;
              const [before, after] = ui("ac.segmented").split(" {value} ");

              return (
                <View style={styles.primaryStatCell}>
                  <ThemedText style={styles.primaryStatText}>
                    {before}
                  </ThemedText>
                  <ThemedText style={styles.primaryStatValue}>
                    {value}
                  </ThemedText>
                  <ThemedText style={styles.primaryStatText}>
                    {after}
                  </ThemedText>
                </View>
              );
            })()}
            <View style={styles.primaryStatCell}>
              <ThemedText style={styles.primaryStatText}>
                {ui("stats.speed")}
              </ThemedText>
              <ThemedText style={styles.primaryStatValue}>
                {character.baseSpeed}
              </ThemedText>
              <ThemedText style={styles.primaryStatText}>
                {ui("measurements.feet")}
              </ThemedText>
            </View>
          </View>

          {/* SpellAttackModifier and SpellDC */}
          <View style={styles.statRow}>
            <View style={styles.spellcastingStatCell}>
              <ThemedText style={styles.spellcastingText}>
                Bon. de Ataque
              </ThemedText>
              <ThemedText style={styles.spellcastingValue}>
                {PrintNumberWithSign(getSpellAttackModifier(character))}
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
                {getSpellSaveDC(character)}
              </ThemedText>
            </View>
          </View>

          {/* Action Economy tracker */}
          <View style={styles.statRow}>
            <TouchableOpacity
              style={styles.actionSlotCell}
              onPress={() => {
                saveCharacter(cycleActionResource(character, "action"));
              }}
            >
              <View style={styles.actionSlotContent}>
                <ThemedText style={styles.actionSlotText}>Acción</ThemedText>
                <ThemedText style={styles.actionSlotValue}>
                  {character.combatState.actionEconomy.actions.current}
                </ThemedText>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionSlotCell}
              onPress={() => {
                saveCharacter(cycleActionResource(character, "bonusAction"));
              }}
            >
              <View style={styles.actionSlotContent}>
                <ThemedText style={styles.actionSlotText}>
                  Acción extra
                </ThemedText>
                <ThemedText style={styles.actionSlotValue}>
                  {character.combatState.actionEconomy.bonusActions.current}
                </ThemedText>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionSlotCell}
              onPress={() => {
                saveCharacter(cycleActionResource(character, "reaction"));
              }}
            >
              <View style={styles.actionSlotContent}>
                <ThemedText style={styles.actionSlotText}>Reacción</ThemedText>
                <ThemedText style={styles.actionSlotValue}>
                  {character.combatState.actionEconomy.reactions.current}
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
          <Button title={"Terminar turno"} onPress={() => {}} />
        </View>
      </ThemedView>
    );
  }
};

export default HomeScreen;
