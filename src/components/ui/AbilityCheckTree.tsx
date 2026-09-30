import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { getCheckNodeChildren } from "@/core/data/registries/check-nodes.registry";
import {
  resolveCheckProficiency,
  resolveCheckExpertise,
  setCheckAbilityOverride,
  resolveRequiredCheckAbility,
} from "@/core/rules/character/checks-helper";
import {
  ABILITIES,
  Ability,
} from "@/core/entities/rules/ability/ability.types";
import { Character } from "@/core/entities/character/Character";
import { ResolvedCharacter } from "@/core/systems/stats/stat-resolver";
import {
  getLocalizedName,
  sortGameIdsByName,
} from "@/services/localization/localization-helper";
import { PrintNumberWithSign } from "@/utils/formater-numbers";
import { AdvantageToggle } from "@/components/ui/AdvantageToggle";
import CustomPicker from "@/components/ui/CustomPicker";
import { LocalizationNamespace } from "@/services/localization/game-localization.types";
import { proficiencyExpertiseIcon } from "./ProficiencyIcon";
import { resolveAdvantageState } from "@/core/rules/character/advantage-helper";

type RowProps = {
  nodeId: string;
  namespace: LocalizationNamespace;
  character: Character;
  resolvedStats: ResolvedCharacter;
  onUpdate: (updated: Character) => void;
  onToggleProficiency: (nodeId: string) => void;
  showAbilityPicker?: boolean;
  showAdvantage?: boolean;
  showValue?: boolean;
  sortChildren?: boolean;
  depth?: number;
};

const AbilityCheckRow = ({
  nodeId,
  namespace,
  character,
  resolvedStats,
  onUpdate,
  onToggleProficiency,
  showAbilityPicker = true,
  showAdvantage = true,
  showValue = true,
  sortChildren = false,
  depth = 0,
}: RowProps) => {
  const [expanded, setExpanded] = useState(false);

  const rawChildren = getCheckNodeChildren(nodeId);
  const children = sortChildren
    ? sortGameIdsByName(
        rawChildren.map((c) => c.id),
        namespace,
      ).map((id) => rawChildren.find((c) => c.id === id)!)
    : rawChildren;
  const hasChildren = children.length > 0;
  const isLeaf = !hasChildren;

  const ability =
    isLeaf && showAbilityPicker
      ? resolveRequiredCheckAbility(character, nodeId)
      : undefined;
  const proficient = resolveCheckProficiency(character, nodeId);
  const expertise = resolveCheckExpertise(character, nodeId);
  const finalValue =
    resolvedStats.stats.get("check:" + nodeId)?.finalValue ?? 0;

  return (
    <>
      <View
        style={[styles.proficienciesContainer, { paddingLeft: depth * 20 }]}
      >
        <View style={styles.proficiencyRow}>
          <View style={styles.proficiencyLeft}>
            <View style={styles.proficiencyIcons}>
              {hasChildren && (
                <TouchableOpacity onPress={() => setExpanded((e) => !e)}>
                  <MaterialIcons
                    name={expanded ? "expand-less" : "expand-more"}
                    size={20}
                    color="white"
                  />
                </TouchableOpacity>
              )}

              {isLeaf && (
                <>
                  <TouchableOpacity onPress={() => onToggleProficiency(nodeId)}>
                    {proficiencyExpertiseIcon(proficient, expertise)}
                  </TouchableOpacity>

                  {showAdvantage && (
                    <AdvantageToggle
                      state={resolveAdvantageState(character, nodeId)}
                    />
                  )}
                </>
              )}
            </View>

            <Text style={styles.proficiencyText}>
              {getLocalizedName(namespace, nodeId)}
            </Text>
          </View>

          <View style={styles.proficiencyRight}>
            {isLeaf && showAbilityPicker && ability && (
              <View style={styles.abilityPicker}>
                <CustomPicker<Ability>
                  namespace="abilities"
                  items={ABILITIES}
                  selectedValue={ability}
                  onChange={(newAbility) =>
                    onUpdate(
                      setCheckAbilityOverride(character, nodeId, newAbility),
                    )
                  }
                  useShortName
                  compact
                />
              </View>
            )}

            {isLeaf && showValue && ability && (
              <Text
                style={[
                  styles.proficiencyModifier,
                  { width: 24, textAlign: "center" },
                ]}
              >
                {PrintNumberWithSign(finalValue)}
              </Text>
            )}
          </View>
        </View>
      </View>

      {expanded &&
        children.map((child) => (
          <AbilityCheckRow
            key={child.id}
            nodeId={child.id}
            namespace={namespace}
            character={character}
            resolvedStats={resolvedStats}
            onUpdate={onUpdate}
            onToggleProficiency={onToggleProficiency}
            showAbilityPicker={showAbilityPicker}
            showValue={showValue}
            sortChildren={sortChildren}
            depth={depth + 1}
          />
        ))}
    </>
  );
};

type TreeProps = {
  rootNodeIds: string[];
  namespace: LocalizationNamespace;
  character: Character;
  resolvedStats: ResolvedCharacter;
  onUpdate: (updated: Character) => void;
  onToggleProficiency: (nodeId: string) => void;
  showAbilityPicker?: boolean;
  showAdvantage?: boolean;
  showValue?: boolean;
  sortRoots?: boolean;
  sortChildren?: boolean;
};

export const AbilityCheckTree = ({
  rootNodeIds,
  namespace,
  character,
  resolvedStats,
  onUpdate,
  onToggleProficiency,
  showAbilityPicker = true,
  showAdvantage = true,
  showValue = true,
  sortRoots = false,
  sortChildren = false,
}: TreeProps) => {
  const roots = sortRoots
    ? sortGameIdsByName(rootNodeIds, namespace)
    : rootNodeIds;

  return (
    <View>
      {roots.map((nodeId) => (
        <AbilityCheckRow
          key={nodeId}
          nodeId={nodeId}
          namespace={namespace}
          character={character}
          resolvedStats={resolvedStats}
          onUpdate={onUpdate}
          onToggleProficiency={onToggleProficiency}
          showAbilityPicker={showAbilityPicker}
          showAdvantage={showAdvantage}
          showValue={showValue}
          sortChildren={sortChildren}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  proficienciesContainer: {
    display: "flex",
  },
  proficiencyRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: -20,
    marginLeft: -20,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 25,
    paddingLeft: 25,
    borderBottomWidth: 1,
    borderColor: "#444444",
  },
  proficiencyLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  proficiencyIcons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  proficiencyRight: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  proficiencyText: {
    fontSize: 15,
    color: "#cccccc",
  },
  proficiencyModifier: {
    fontFamily: "Montserrat",
    fontSize: 14,
    color: "#cccccc",
    marginLeft: -25,
  },
  abilityPicker: {
    justifyContent: "center",
    width: 90,
  },
});
