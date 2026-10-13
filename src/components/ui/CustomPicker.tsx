import React, { useMemo, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

import { LocalizationNamespace } from "@/services/localization/game-localization.types";
import { ui } from "@/services/localization/ui-localization-resolver";
import {
  getLocalizedName,
  getLocalizedShortName,
} from "@/services/localization/localization-helper";

import styles from "@/styles/character-creation.styles";

type CustomPickerProps<T> = {
  items: readonly T[];
  selectedValue: T | null;
  onChange: (value: T) => void;
  namespace: LocalizationNamespace;
  placeholder?: string;
  useShortName?: boolean;
  compact?: boolean; // tighter gap between label and dropdown arrow
};

const CustomPicker = <T extends string>({
  items,
  selectedValue,
  onChange,
  namespace,
  placeholder = ui("acton.SelectOption"),
  useShortName = false,
  compact = false,
}: CustomPickerProps<T>) => {
  const [open, setOpen] = useState(false);

  const dropdownItems = useMemo(
    () =>
      items.map((id) => ({
        value: id,
        label: useShortName
          ? (getLocalizedShortName(namespace, id) ??
            getLocalizedName(namespace, id))
          : getLocalizedName(namespace, id),
      })),
    [items, namespace, useShortName],
  );

  return (
    <DropDownPicker
      open={open}
      value={selectedValue}
      items={dropdownItems}
      setOpen={setOpen}
      setValue={(cb) => {
        const next = typeof cb === "function" ? cb(selectedValue) : cb;
        if (next !== null && next !== selectedValue) {
          onChange(next);
        }
      }}
      setItems={() => {}}
      placeholder={placeholder}
      theme="DARK"
      style={[
        styles.picker,
        compact && {
          justifyContent: "center",
          paddingVertical: 0,
          paddingHorizontal: 2,
          width: 65,
        },
      ]}
      listMode="MODAL"
      modalTitle={placeholder}
      modalAnimationType="fade"
      textStyle={styles.pickerText}
      // Hover/press effect
      listItemContainerStyle={{
        backgroundColor: "#222",
      }}
      selectedItemLabelStyle={{
        fontWeight: "bold",
        color: "#00c0ff",
      }}
      selectedItemContainerStyle={{
        backgroundColor: "#444",
      }}
    />
  );
};

export default CustomPicker;
