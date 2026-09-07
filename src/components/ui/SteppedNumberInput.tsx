import React, { useState } from "react";
import { View, TextInput, StyleProp, ViewStyle, TextStyle } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import SmoothCounterButton from "./SmoothCounterButton";
import { clamp } from "@/utils/input-handler";

type Props = {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  containerStyle?: StyleProp<ViewStyle>;
  valueStyle?: StyleProp<TextStyle>;
  buttonsContainerStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonIconSize?: number;
};

/**
 * A numeric value with +/- step buttons AND direct manual entry, both
 * constrained to the same [min, max] range. Buttons apply immediately;
 * manual entry buffers as free text while focused (see FormattedNumberInput
 * for why) and clamps/commits on blur.
 */
const SteppedNumberInput = ({
  value,
  onChange,
  min,
  max,
  step = 1,
  containerStyle,
  valueStyle,
  buttonsContainerStyle,
  buttonStyle,
  buttonIconSize = 12,
}: Props) => {
  const [draft, setDraft] = useState<string | null>(null);

  const commitDraft = () => {
    if (draft === null) return;
    const parsed = parseInt(draft, 10);
    const next = Number.isFinite(parsed) ? clamp(parsed, min, max) : value;
    if (next !== value) onChange(next);
    setDraft(null);
  };

  const step_ = (delta: number) => onChange(clamp(value + delta, min, max));

  return (
    <View style={containerStyle}>
      <TextInput
        keyboardType="numeric"
        value={draft ?? String(value)}
        onFocus={() => setDraft(String(value))}
        onChangeText={(text) => setDraft(text.replace(/\D/g, ""))}
        onBlur={commitDraft}
        onSubmitEditing={commitDraft}
        style={valueStyle}
      />

      <View style={buttonsContainerStyle}>
        <SmoothCounterButton
          style={buttonStyle}
          disabled={value <= min}
          onPress={() => step_(-step)}
        >
          <MaterialIcons name="remove" size={buttonIconSize} color="white" />
        </SmoothCounterButton>

        <SmoothCounterButton
          style={buttonStyle}
          disabled={value >= max}
          onPress={() => step_(step)}
        >
          <MaterialIcons name="add" size={buttonIconSize} color="white" />
        </SmoothCounterButton>
      </View>
    </View>
  );
};

export default SteppedNumberInput;
