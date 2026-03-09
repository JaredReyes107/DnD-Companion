import React, { useMemo, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

import { LocalizationNamespace } from "@/services/localization/game-localization.types";
import { ui } from "@/services/localization/ui-localization-resolver";
import { getLocalizedName } from "@/services/localization/localization-helper";

import styles from "@/styles/character-creation.styles";

type CustomPickerProps<T> = {
  items: readonly T[];
  selectedValue: T | null;
  onChange: (value: T) => void;
  namespace: LocalizationNamespace;
  placeholder?: string;
};

const CustomPicker = <T extends string>({
  items,
  selectedValue,
  onChange,
  namespace,
  placeholder = ui("acton.SelectOption"),
}: CustomPickerProps<T>) => {
  const [open, setOpen] = useState(false);

  const dropdownItems = useMemo(
    () =>
      items.map((id) => ({
        value: id,
        label: getLocalizedName(namespace, id),
      })),
    [items, namespace],
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
      style={[{ backgroundColor: "#1e2021" }, styles.picker]}
      dropDownContainerStyle={{
        backgroundColor: "#333",
        borderColor: "#3e4446",
      }}
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
