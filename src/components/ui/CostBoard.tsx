import React from "react";
import { Button, Modal, View } from "react-native";
import { ThemedText } from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";
import { ActionElement } from "@/components/ui/ActionElement";
import SteppedNumberInput from "@/components/ui/SteppedNumberInput";
import { ui } from "@/services/localization/ui-localization-resolver";
import boardStyles from "@/styles/combat/index.styles";
import formStyles from "@/styles/character-creation.styles";
import styles from "@/styles/combat/tab-actions";

export type CostBoardEntry = {
  key: string;
  label: string;
  isAvailable: boolean;
};
export type CostStepperRow = {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
};
export type CostStepper = {
  rows: CostStepperRow[];
  canConfirm: boolean;
  onChange: (id: string, value: number) => void;
  onConfirm: () => void;
  onBack: () => void;
};

type Props = {
  visible: boolean;
  title: string;
  entries: CostBoardEntry[];
  stepper?: CostStepper | null;
  onPick: (key: string) => void;
  onClose: () => void;
};

export const CostBoard = ({
  visible,
  title,
  entries,
  stepper,
  onPick,
  onClose,
}: Props) => (
  <Modal
    animationType="fade"
    transparent
    visible={visible}
    onRequestClose={stepper ? stepper.onBack : onClose}
  >
    <ThemedView style={boardStyles.overlay}>
      <ThemedView style={boardStyles.window}>
        <ThemedText style={boardStyles.window_title}>{title}</ThemedText>

        {stepper ? (
          <>
            {stepper.rows.map((row) => (
              <View key={row.id} style={{ alignItems: "center", gap: 6 }}>
                {row.label !== "" && <ThemedText>{row.label}</ThemedText>}
                <SteppedNumberInput
                  value={row.value}
                  onChange={(v) => stepper.onChange(row.id, v)}
                  min={row.min}
                  max={row.max}
                  containerStyle={[
                    formStyles.counterContainer,
                    { minWidth: 220 },
                  ]}
                  valueStyle={formStyles.counterInput}
                  buttonsContainerStyle={formStyles.counterButtonsContainer}
                  buttonStyle={formStyles.counterButton}
                />
              </View>
            ))}
            <Button
              title={ui("button.confirm")}
              onPress={stepper.onConfirm}
              disabled={!stepper.canConfirm}
            />
            <Button title={ui("button.cancel")} onPress={stepper.onBack} />
          </>
        ) : (
          <>
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
          </>
        )}
      </ThemedView>
    </ThemedView>
  </Modal>
);
