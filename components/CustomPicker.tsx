import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

import styles from "@/stylesheets/character-creation.styles";

type Option<T> = {
  label: string;
  value: T;
};

type CustomPickerProps<T> = {
  items: Option<T>[];
  selectedValue: T | null;
  onChange: (value: T) => void;
  placeholder?: string;
};

const CustomPicker = <T extends string>({
  items,
  selectedValue,
  onChange,
  placeholder = "Selecciona una opción",
}: CustomPickerProps<T>) => {
  const [open, setOpen] = useState(false);

  return (
    <DropDownPicker
      open={open}
      value={selectedValue}
      items={items}
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
