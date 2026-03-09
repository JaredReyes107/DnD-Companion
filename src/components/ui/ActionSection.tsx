import React from "react";
import { View } from "react-native";
import { ThemedText } from "@/components/ui/ThemedText";
import { ActionElement } from "./ActionElement";

import { Character } from "@/core/entities/character/Character";
import { ActionInstance } from "@/core/entities/actions/action-instance";

import {
  ActionResourceType,
  decreaseActionResource,
} from "@/core/entities/combat/action-economy";
import {
  executeAction,
  isActionAvailable,
} from "@/core/systems/combat/action-execution/take-action";
import { getLocalizedName } from "@/services/localization/localization-helper";

import styles from "@/styles/combat/tab-actions";

type Props = {
  slot: ActionResourceType;
  actions: ActionInstance[];
  character: Character;
  onUpdate: (updated: Character) => void;
};

export const ActionSection = ({
  slot,
  actions,
  character,
  onUpdate,
}: Props) => {
  if (actions.length === 0) return null;

  const handleAction = (action: ActionInstance) => {
    onUpdate(decreaseActionResource(character, action.actionSlot));

    executeAction(action, { character, dispatch: onUpdate });
  };

  return (
    <View style={styles.actionBoardRow}>
      <ThemedText style={styles.actionBoardRowHeader}>{slot}</ThemedText>
      <View style={styles.actionBoardRowContent}>
        {actions.map((action) => (
          <ActionElement
            key={action.id}
            label={getLocalizedName("actions", action.id)}
            isAvailable={isActionAvailable(character, action)}
            onUse={() => handleAction(action)}
          />
        ))}
      </View>
    </View>
  );
};
