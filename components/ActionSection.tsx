import React from "react";
import { View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ActionElement } from "./ActionElement";

import { Character } from "@/game/types/instances/Character";
import { Action } from "@/game/types/instances/action";

import styles from "@/stylesheets/combat/tab-actions";
import {
  ActionResourceType,
  decreaseActionResource,
} from "@/game/mechanics/action-economy";
import { executeAction } from "@/game/mechanics/take-action";

type Props = {
  slot: ActionResourceType;
  actions: Action[];
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

  const handleAction = (action: Action) => {
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
            label={action.id}
            onUse={() => handleAction(action)}
          />
        ))}
      </View>
    </View>
  );
};
