import React from "react";
import { Button, Modal, View } from "react-native";
import { ThemedText } from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";
import { ActionElement } from "@/components/ui/ActionElement";
import { ui } from "@/services/localization/ui-localization-resolver";
import boardStyles from "@/styles/combat/index.styles";
import styles from "@/styles/combat/tab-actions";

export type CostBoardEntry = {
  key: string;
  label: string;
  isAvailable: boolean;
};

type Props = {
  visible: boolean;
  title: string;
  entries: CostBoardEntry[];
  onPick: (key: string) => void;
  onClose: () => void;
};

export const CostBoard = ({
  visible,
  title,
  entries,
  onPick,
  onClose,
}: Props) => (
  <Modal
    animationType="fade"
    transparent
    visible={visible}
    onRequestClose={onClose}
  >
    <ThemedView style={boardStyles.overlay}>
      <ThemedView style={boardStyles.window}>
        <ThemedText style={boardStyles.window_title}>{title}</ThemedText>
        <View style={styles.actionBoardRowContent}>
          {entries.map((e) => (
            <ActionElement
              key={e.key}
              label={e.label}
              isAvailable={e.isAvailable}
              onUse={() => onPick(e.key)}
            />
          ))}
        </View>
        <Button title={ui("button.cancel")} onPress={onClose} />
      </ThemedView>
    </ThemedView>
  </Modal>
);
