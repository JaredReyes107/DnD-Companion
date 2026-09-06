import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ability } from "@/core/entities/rules/ability/ability.types";
import { SavingThrowInstance } from "@/core/entities/rules/saving-throw/saving-throw-instance";

import styles from "@/styles/character-creation.styles";

type Props = {
  ability: Ability;
  label: string;
  savingThrow: SavingThrowInstance;
  onToggleProficiency: (ability: Ability) => void;
};

const SavingThrowProficiencyInput = ({
  ability,
  label,
  savingThrow,
  onToggleProficiency,
}: Props) => {
  return (
    <View style={styles.proficienciesContainer}>
      <TouchableOpacity
        style={styles.proficiencyButton}
        onPress={() => onToggleProficiency(ability)}
      >
        <MaterialIcons
          name={
            savingThrow.hasProficiency ? "circle" : "radio-button-unchecked"
          }
          size={18}
          color="white"
        />
      </TouchableOpacity>

      <Text style={styles.statTitle}>{label}</Text>
    </View>
  );
};

export default SavingThrowProficiencyInput;
