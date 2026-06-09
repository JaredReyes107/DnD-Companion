import React from "react";
import CustomPicker from "@/components/ui/CustomPicker";
import { getSubclassesForClass } from "@/core/data/registries/subclasses.registry";
import { sortGameIdsByName } from "@/services/localization/localization-helper";
import { ui } from "@/services/localization/ui-localization-resolver";

type Props = {
  classId: string;
  value: string | null;
  onChange: (id: string) => void;
};

const SubclassPicker = ({ classId, value, onChange }: Props) => {
  const items = sortGameIdsByName(
    getSubclassesForClass(classId).map((s) => s.id),
    "subclasses",
  );

  return (
    <CustomPicker<string>
      namespace="subclasses"
      items={items}
      selectedValue={value}
      onChange={onChange}
      placeholder={ui("picker.selectSubclass")}
    />
  );
};

export default SubclassPicker;
