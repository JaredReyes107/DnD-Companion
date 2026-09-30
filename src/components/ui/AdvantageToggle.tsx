import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AdvantageState } from "@/core/entities/character/advantage-state";

const ADVANTAGE_ICON: Record<
  AdvantageState,
  keyof typeof MaterialIcons.glyphMap
> = {
  none: "remove",
  advantage: "arrow-upward",
  disadvantage: "arrow-downward",
};
const ADVANTAGE_COLOR: Record<AdvantageState, string> = {
  none: "#888",
  advantage: "#4CAF50",
  disadvantage: "#d32f2f",
};

type Props = {
  state: AdvantageState;
  size?: number;
};

export const AdvantageToggle = ({ state, size = 16 }: Props) => (
  <View
    style={{
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <MaterialIcons
      name={ADVANTAGE_ICON[state]}
      size={size}
      color={ADVANTAGE_COLOR[state]}
    />
  </View>
);
