import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { getLanguageNodeChildren } from "@/core/data/registries/language-nodes.registry";
import { resolveLanguageMode } from "@/core/rules/character/languages-helper";
import {
  LANGUAGE_MODES,
  LanguageMode,
} from "@/core/entities/character/language-state";
import { Character } from "@/core/entities/character/Character";
import { getLocalizedName } from "@/services/localization/localization-helper";

// One glyph per mode, always rendered — filled when the character has
// that mode (through this node or an ancestor), hollow otherwise.
const MODE_ICON: Record<LanguageMode, keyof typeof MaterialIcons.glyphMap> = {
  speak: "record-voice-over",
  readWrite: "menu-book",
  understand: "hearing",
};

type RowProps = {
  nodeId: string;
  character: Character;
  depth?: number;
};

const LanguageProficiencyRow = ({ nodeId, character, depth = 0 }: RowProps) => {
  const [expanded, setExpanded] = useState(false);

  const children = getLanguageNodeChildren(nodeId);
  const hasChildren = children.length > 0;

  return (
    <>
      <View style={[styles.row, { paddingLeft: 8 + depth * 20 }]}>
        {hasChildren ? (
          <TouchableOpacity onPress={() => setExpanded((e) => !e)}>
            <MaterialIcons
              name={expanded ? "expand-less" : "expand-more"}
              size={18}
              color="white"
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.chevronSpacer} />
        )}

        <View style={styles.modeIcons}>
          {LANGUAGE_MODES.map((mode) => (
            <MaterialIcons
              key={mode}
              name={MODE_ICON[mode]}
              size={14}
              color={
                resolveLanguageMode(character, nodeId, mode)
                  ? "#cccccc"
                  : "#4a4a4a"
              }
            />
          ))}
        </View>

        <Text style={styles.label}>
          {getLocalizedName("languages", nodeId)}
        </Text>
      </View>

      {expanded &&
        children.map((child) => (
          <LanguageProficiencyRow
            key={child.id}
            nodeId={child.id}
            character={character}
            depth={depth + 1}
          />
        ))}
    </>
  );
};

type TreeProps = {
  rootNodeIds: string[];
  character: Character;
};

export const LanguageProficiencyTree = ({
  rootNodeIds,
  character,
}: TreeProps) => (
  <View>
    {rootNodeIds.map((nodeId) => (
      <LanguageProficiencyRow
        key={nodeId}
        nodeId={nodeId}
        character={character}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 4,
  },
  chevronSpacer: {
    width: 18,
  },
  modeIcons: {
    flexDirection: "row",
    gap: 3,
  },
  label: {
    color: "#cccccc",
    fontSize: 14,
  },
});
