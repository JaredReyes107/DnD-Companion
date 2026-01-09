import React, { useEffect, useState } from "react";
import DropDownPicker, { ItemType } from "react-native-dropdown-picker";

import styles from "@/stylesheets/CharacterCreation";

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

export default function CustomPicker<T extends string>({
  items,
  selectedValue,
  onChange,
  placeholder = "Selecciona una opción",
}: CustomPickerProps<T>) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<T | null>(selectedValue);

  useEffect(() => {
    if (value !== null) {
      onChange(value);
    }
  }, [value]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={() => {}}
      placeholder={value ?? placeholder}
      listMode="MODAL"
      modalTitle={placeholder}
      modalAnimationType="fade"
      theme="DARK"
      style={[{ backgroundColor: "#1e2021" }, styles.picker]}
      dropDownContainerStyle={{
        backgroundColor: "#333",
        borderColor: "#3e4446",
        zIndex: 1000,
      }}
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
}
