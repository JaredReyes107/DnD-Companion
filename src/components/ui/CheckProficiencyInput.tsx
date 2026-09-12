import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "@/styles/character-creation.styles";

type Props = {
  nodeId: string;
  label: string;
  hasProficiency: boolean;
  hasExpertise?: boolean;
  showExpertise?: boolean;
  onToggleProficiency: (nodeId: string) => void;
  onToggleExpertise?: (nodeId: string) => void;
};

const CheckProficiencyInput = ({
  nodeId,
  label,
  hasProficiency,
  hasExpertise = false,
  showExpertise = false,
  onToggleProficiency,
  onToggleExpertise,
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

      {showExpertise && hasProficiency && (
        <TouchableOpacity
          style={styles.proficiencyButton}
          onPress={() => onToggleExpertise?.(nodeId)}
        >
          <MaterialIcons
            name={hasExpertise ? "circle" : "radio-button-unchecked"}
            size={18}
            color="white"
          />
        </TouchableOpacity>
      )}

      {showExpertise && !hasProficiency && (
        <View style={styles.proficiencyButton}>
          <MaterialIcons
            name="radio-button-unchecked"
            size={18}
            color="#808080"
          />
        </View>
      )}

      <Text style={styles.statTitle}>{label}</Text>
    </View>
  );
};

export default CheckProficiencyInput;
