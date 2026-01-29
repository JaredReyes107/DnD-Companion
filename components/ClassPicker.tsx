import React from "react";
import CustomPicker from "@/components/CustomPicker";
import { CLASSES } from "@/game/base-data/CLASSES";
import { ui } from "@/localization/ui-resolver";

type ClassId = keyof typeof CLASSES;

type ClassPickerProps = {
  value: ClassId | null;
  onChange: (id: ClassId) => void;
};

const ClassPicker = ({ value, onChange }: ClassPickerProps) => {
  const items: ClassId[] = Object.keys(CLASSES) as ClassId[];

  return (
    <CustomPicker<ClassId>
      namespace="classes"
      items={items}
      selectedValue={value}
      onChange={onChange}
      placeholder={ui("picker.selectClass")}
    />
  );
};

export default ClassPicker;
