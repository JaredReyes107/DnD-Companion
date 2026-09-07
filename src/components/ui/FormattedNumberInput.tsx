import React, { useState } from "react";
import { TextInput, TextInputProps, StyleProp, TextStyle } from "react-native";
import {
  formatNaturalNumber,
  returnNaturalNumber,
} from "@/utils/input-handler";

type Props = {
  value: number;
  onChange: (value: number) => void;
  style?: StyleProp<TextStyle>;
  format?: (value: number) => string;
  parse?: (text: string) => number;
} & Omit<
  TextInputProps,
  "value" | "onChangeText" | "onChange" | "onFocus" | "onBlur"
>;
/**
 * A numeric TextInput that only applies display formatting (e.g. thousands
 * separators) once the user finishes editing, instead of on every keystroke.
 * While focused, it shows the raw digits the user is typing so the cursor
 * position and typing feel aren't disrupted by formatted re-renders.
 */
export const FormattedNumberInput = ({
  value,
  onChange,
  style,
  format = formatNaturalNumber,
  parse = returnNaturalNumber,
  ...rest
}: Props) => {
  // Non-null while the field is focused and being edited.
  const [draft, setDraft] = useState<string | null>(null);

  const displayValue = draft ?? format(value);

  return (
    <TextInput
      keyboardType="numeric"
      placeholder="0"
      value={displayValue}
      onFocus={() => setDraft(String(value))}
      onChangeText={(text) => setDraft(text.replace(/\D/g, ""))}
      onBlur={() => {
        if (draft !== null) {
          onChange(parse(draft));
        }
        setDraft(null);
      }}
      style={style}
      {...rest}
    />
  );
};
