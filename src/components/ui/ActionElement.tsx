import { View, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ui/ThemedText";

import styles from "@/styles/combat/tab-actions";

type Props = {
  label: string;
  isAvailable: boolean;
  onUse: () => void;
};

export const ActionElement = ({ label, isAvailable, onUse }: Props) => {
  return (
    <TouchableOpacity onPress={isAvailable ? onUse : () => {}}>
      <View
        style={
          isAvailable
            ? styles.actionBoardCell
            : [styles.actionBoardCell, styles.actionBoardCellDisabled]
        }
      >
        <ThemedText style={styles.actionBoardCellTitle}>{label}</ThemedText>
      </View>
    </TouchableOpacity>
  );
};
