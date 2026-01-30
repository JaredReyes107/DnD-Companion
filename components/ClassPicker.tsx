import React from "react";
import CustomPicker from "@/components/CustomPicker";
import { CLASSES } from "@/game/base-data/CLASSES";
import { sortGameIdsByName } from "@/lib/helpers/localization-helper";
import { ui } from "@/localization/ui-localization-resolver";

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
