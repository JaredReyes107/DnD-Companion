/* eslint-disable prettier/prettier */
import { MaterialIcons } from "@expo/vector-icons";

export const ProficiencyIcon = ({ hasProficiency: proficient }: { hasProficiency: boolean }) => (
  <MaterialIcons
    name={proficient ? "circle" : "radio-button-unchecked"}
    size={14}
    color="#cccccc"
  />
);
