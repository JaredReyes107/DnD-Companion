import { View, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "@/stylesheets/combat/tab-resource";

type Props = {
  level: number;
  max: number;
  current: number;
  onChange: (newUsed: number) => void;
};

export const SpellSlotElement = ({ level, max, current, onChange }: Props) => {
  return (
    <View style={styles.resourceElementContainer}>
      <ThemedText style={styles.resourceElementName}>Lv {level}</ThemedText>

      <ThemedText style={styles.resourceElementValues}>
        {current} / {max}
      </ThemedText>

      <View style={styles.resourceElementButtonsContainer}>
        <TouchableOpacity onPress={() => current > 0 && onChange(current - 1)}>
          <MaterialIcons name="remove" size={18} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => current < max && onChange(current + 1)}
        >
          <MaterialIcons name="add" size={18} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
