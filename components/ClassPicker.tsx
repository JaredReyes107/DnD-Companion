import React from 'react';
import CustomPicker from '@/components/CustomPicker';
import { CLASSES } from '@/constants/Classes';
import { ClassName } from "@/types/Class";

type Props = {
  selectedClass: ClassName | null;
  onChange: (value: ClassName) => void;
};

export default function ClassPicker({ selectedClass, onChange }: Props) {
  const sortedItems = Object.values(CLASSES)
    .sort((a, b) => a.label.localeCompare(b.label, 'es')) // locale-aware for accented letters
    .map((cls) => ({
      value: cls.value,
      label: cls.label,
    }));

  return (
    <CustomPicker<ClassName>
      items={sortedItems}
      selectedValue={selectedClass}
      onChange={onChange}
      placeholder="Selecciona una clase"
    />
  );
}
