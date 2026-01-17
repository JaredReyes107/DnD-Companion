import { View, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "@/stylesheets/combat/tab-resource";

type Props = {
  level: number;
  used: number;
  max: number;
  onChange: (newUsed: number) => void;
};

export const SpellSlotElement = ({ level, used, max, onChange }: Props) => {
  return (
    <View style={styles.resourceElementContainer}>
      <ThemedText style={[styles.resourceElementName, { width: 80 }]}>
        Lv {level}
      </ThemedText>

      <ThemedText>
        {max - used} / {max}
      </ThemedText>

      <View style={{ flexDirection: "row", gap: 12 }}>
        <TouchableOpacity onPress={() => used < max && onChange(used + 1)}>
          <MaterialIcons name="remove" size={18} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => used > 0 && onChange(used - 1)}>
          <MaterialIcons name="add" size={18} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
