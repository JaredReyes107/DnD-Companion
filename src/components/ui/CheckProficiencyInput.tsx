import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "@/styles/character-creation.styles";

type Props = {
  nodeId: string;
  label: string;
  hasProficiency: boolean;
  hasExpertise?: boolean;
  onToggleProficiency: (nodeId: string) => void;
};

const CheckProficiencyInput = ({
  nodeId,
  label,
  hasProficiency,
  onToggleProficiency,
}: Props) => {
  return (
    <View style={styles.proficienciesContainer}>
      <TouchableOpacity
        style={styles.proficiencyButton}
        onPress={() => onToggleProficiency(nodeId)}
      >
        <MaterialIcons
          name={hasProficiency ? "circle" : "radio-button-unchecked"}
          size={18}
          color="white"
        />
      </TouchableOpacity>
      <Text style={styles.statTitle}>{label}</Text>
    </View>
  );
};

export default CheckProficiencyInput;
