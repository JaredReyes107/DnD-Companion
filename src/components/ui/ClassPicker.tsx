import React from "react";
import CustomPicker from "@/components/ui/CustomPicker";
import { CLASSES } from "@/core/data/rules/CLASSES";
import { sortGameIdsByName } from "@/services/localization/localization-helper";
import { ui } from "@/services/localization/ui-localization-resolver";

type ClassId = keyof typeof CLASSES;

type ClassPickerProps = {
  value: ClassId | null;
  onChange: (id: ClassId) => void;
};

const ClassPicker = ({ value, onChange }: ClassPickerProps) => {
  const items = sortGameIdsByName(Object.keys(CLASSES) as ClassId[], "classes");

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
