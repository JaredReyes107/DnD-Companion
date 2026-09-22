import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { getCheckNodeChildren } from "@/core/data/registries/check-nodes.registry";
import { resolveCheckProficiency } from "@/core/rules/character/checks-helper";
import { Ability } from "@/core/entities/rules/ability/ability.types";
import { Character } from "@/core/entities/character/Character";
import { ResolvedCharacter } from "@/core/systems/stats/stat-resolver";
import { getLocalizedName } from "@/services/localization/localization-helper";
import { PrintNumberWithSign } from "@/utils/formater-numbers";
import { AdvantageToggle } from "@/components/ui/AdvantageToggle";
import { ProficiencyIcon } from "@/components/ui/ProficiencyIcon";

type RowProps = {
  nodeId: string;
  ability: Ability;
  character: Character;
  resolvedStats: ResolvedCharacter;
  depth?: number;
};

const SavingThrowRow = ({
  nodeId,
  ability,
  character,
  resolvedStats,
  depth = 0,
}: RowProps) => {
  const [expanded, setExpanded] = useState(false);

  const children = getCheckNodeChildren(nodeId);
  const hasChildren = children.length > 0;

  return (
    <>
      <View
        style={[styles.proficienciesContainer, { paddingLeft: depth * 20 }]}
      >
        <View style={styles.proficiencyRow}>
          <View style={styles.proficiencyDetails}>
            <ProficiencyIcon
              hasProficiency={resolveCheckProficiency(character, nodeId)}
            />

            <AdvantageToggle />

            {hasChildren && (
              <TouchableOpacity onPress={() => setExpanded((e) => !e)}>
                <MaterialIcons
                  name={expanded ? "expand-less" : "expand-more"}
                  size={20}
                  color="white"
                />
              </TouchableOpacity>
            )}

            <Text style={styles.proficiencyText}>
              {depth === 0
                ? getLocalizedName("abilities", ability)
                : getLocalizedName("checkNodes", nodeId)}
            </Text>
          </View>

          <Text style={styles.proficiencyModifierBold}>
            {PrintNumberWithSign(
              resolvedStats.stats.get("check:" + nodeId)?.finalValue ?? 0,
            )}
          </Text>
        </View>
      </View>

      {expanded &&
        children.map((child) => (
          <SavingThrowRow
            key={child.id}
            nodeId={child.id}
            ability={ability}
            character={character}
            resolvedStats={resolvedStats}
            depth={depth + 1}
          />
        ))}
    </>
  );
};

type TreeProps = {
  entries: { nodeId: string; ability: Ability }[];
  character: Character;
  resolvedStats: ResolvedCharacter;
};

export const SavingThrowTree = ({
  entries,
  character,
  resolvedStats,
}: TreeProps) => (
  <View>
    {entries.map(({ nodeId, ability }) => (
      <SavingThrowRow
        key={nodeId}
        nodeId={nodeId}
        ability={ability}
        character={character}
        resolvedStats={resolvedStats}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  proficienciesContainer: {
    display: "flex",
  },
  proficiencyRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginRight: -20,
    marginLeft: -20,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 30 + 20,
    paddingLeft: 15 + 20,
    borderBottomWidth: 1,
    borderColor: "#444444",
  },
  proficiencyDetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  proficiencyText: {
    fontSize: 15,
    color: "#cccccc",
  },
  proficiencyModifierBold: {
    fontFamily: "Montserrat",
    fontSize: 14,
    fontWeight: "bold",
    color: "#cccccc",
  },
});
