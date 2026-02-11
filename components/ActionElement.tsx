import { View, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";

import styles from "@/stylesheets/combat/tab-actions";

type Props = {
  label: string;
  onUse: () => void;
};

export const ActionElement = ({ label, onUse }: Props) => {
  return (
    <TouchableOpacity onPress={onUse}>
      <View style={styles.actionBoardCell}>
        <ThemedText style={styles.actionBoardCellTitle}>{label}</ThemedText>
      </View>
    </TouchableOpacity>
  );
};
