/* eslint-disable prettier/prettier */
import React from "react";
import CustomPicker from "@/components/CustomPicker";
import { ClassTemplate } from "@/game/types/templates/class-template";

type Props = {
  classTemplates: ClassTemplate[];
  selectedClassId: string | null;
  onChange: (classTemplateId: string) => void;
};

const ClassPicker = ({
  classTemplates,
  selectedClassId,
  onChange,
}: Props) => {
  const items = [...classTemplates]
    .sort((a, b) => a.name.localeCompare(b.name, "es"))
    .map((cls) => ({
      value: cls.id,
      label: cls.name,
    }));

  return (
    <CustomPicker<string>
      items={items}
      selectedValue={selectedClassId}
      onChange={onChange}
      placeholder="Selecciona una clase"
    />
  );
};

export default ClassPicker;
