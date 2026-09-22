import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export type AdvantageState = "none" | "advantage" | "disadvantage";

const nextAdvantageState = (s: AdvantageState): AdvantageState =>
  s === "none" ? "advantage" : s === "advantage" ? "disadvantage" : "none";

// Placeholder only — no resolved advantage/disadvantage source exists
// yet (ModifierType.ADVANTAGE sourced modifiers aren't built). State is
// local and resets on remount; nothing persists it.
const ADVANTAGE_ICON: Record<
  AdvantageState,
  keyof typeof MaterialIcons.glyphMap
> = {
  none: "remove", // neutral dash
  advantage: "arrow-upward",
  disadvantage: "arrow-downward",
};
const ADVANTAGE_COLOR: Record<AdvantageState, string> = {
  none: "#888",
  advantage: "#4CAF50",
  disadvantage: "#d32f2f",
};

type Props = {
  size?: number;
};

export const AdvantageToggle = ({ size = 16 }: Props) => {
  const [state, setState] = useState<AdvantageState>("none");

  return (
    <TouchableOpacity
      onPress={() => setState(nextAdvantageState(state))}
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
    </TouchableOpacity>
  );
};
