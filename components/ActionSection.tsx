import React from "react";
import { View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ActionElement } from "./ActionElement";

import { Character } from "@/game/domain/character/Character";
import { ActionInstance } from "@/game/domain/actions/action-instance";

import styles from "@/stylesheets/combat/tab-actions";
import {
  ActionResourceType,
  decreaseActionResource,
} from "@/game/domain/combat/action-economy";
import {
  executeAction,
  isActionAvailable,
} from "@/game/engine/action-execution/take-action";
import { getLocalizedName } from "@/lib/helpers/localization-helper";

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
