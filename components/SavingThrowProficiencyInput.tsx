import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Ability,
  SavingThrowInstance,
} from "@/game/types/templates/abilities-scores";

import styles from "@/stylesheets/character-creation.styles";

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
          size={16}
          color="white"
        />
      </TouchableOpacity>

      <Text style={styles.statTitle}>{label}</Text>
    </View>
  );
};

export default SavingThrowProficiencyInput;
