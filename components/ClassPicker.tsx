import React from "react";
import CustomPicker from "@/components/CustomPicker";
import { ClassTemplate } from "@/game/types/templates/ClassTemplate";

type Props = {
  classTemplates: ClassTemplate[];
  selectedClassId: string | null;
  onChange: (classTemplateId: string) => void;
};

export default function ClassPicker({
  classTemplates,
  selectedClassId,
  onChange,
}: Props) {
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
}
