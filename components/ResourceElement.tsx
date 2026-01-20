import { View, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "@/stylesheets/combat/tab-resource";

type Props = {
  label: string;
  current: number;
  max: number;
  onChange: (newUsed: number) => void;
};

export const ResourceElement = ({ label, current, max, onChange }: Props) => {
  return (
    <View style={styles.resourceElementContainer}>
      <ThemedText style={styles.resourceElementName}>{label}</ThemedText>

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
