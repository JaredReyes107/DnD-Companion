import { Button, TouchableOpacity, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useCharacter } from "@/hooks/useCharacter";

import {
  getSpellAttackModifier,
  getSpellSaveDC,
} from "@/game/mechanics/spellcasting";
import { PrintNumberWithSign } from "@/lib/utilities/formater-numbers";

import { ui } from "@/localization/ui-localization-resolver";

import genericStyles from "@/stylesheets/generic.styles";
import styles from "@/stylesheets/combat/tab-actions";
import { getArmorClass } from "@/game/mechanics/armor-class";
import { cycleActionResource } from "@/game/mechanics/action-economy";

const HomeScreen = () => {
  const { character, saveCharacter } = useCharacter();

  if (!character) {
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
                saveCharacter(cycleActionResource(character, "bonus"));
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

        <View style={styles.actionBoard}>
          <View style={styles.actionBoardRow}>
            <ThemedText style={styles.actionBoardRowHeader}>
              Acciones
            </ThemedText>
            <View style={styles.actionBoardRowContent}>
              <TouchableOpacity>
                <View style={styles.actionBoardCell}>
                  <ThemedText style={styles.actionBoardCellTitle}>
                    Acción Uno
                  </ThemedText>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.actionBoardRow}>
            <ThemedText style={styles.actionBoardRowHeader}>
              Acciones adicionales
            </ThemedText>
            <View style={styles.actionBoardRowContent}>
              <TouchableOpacity>
                <View style={styles.actionBoardCell}>
                  <ThemedText style={styles.actionBoardCellTitle}>
                    Acción Extra
                  </ThemedText>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.actionBoardRow}>
            <ThemedText style={styles.actionBoardRowHeader}>
              Reacciones
            </ThemedText>
            <View style={styles.actionBoardRowContent}>
              <TouchableOpacity>
                <View style={styles.actionBoardCell}>
                  <ThemedText style={styles.actionBoardCellTitle}>
                    Esquivar
                  </ThemedText>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.actionBoardCell}>
                  <ThemedText style={styles.actionBoardCellTitle}>
                    Absorber Elementos
                  </ThemedText>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.footerSection}>
          <Button title={"Terminar turno"} onPress={() => {}} />
        </View>
      </ThemedView>
    );
  }
};

export default HomeScreen;
