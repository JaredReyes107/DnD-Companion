import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "@/styles/character-creation.styles";
import { SkillInstance } from "@/core/entities/character/skill-instance";
import { getLocalizedName } from "@/services/localization/localization-helper";

type Props = {
  skillId: string;
  skillInstance: SkillInstance;
  onToggleProficiency: (skillId: string) => void;
  onToggleExpertise: (skillId: string) => void;
};

const SkillProficiencyInput = ({
  skillId,
  skillInstance,
  onToggleProficiency,
  onToggleExpertise,
}: Props) => {
  const { hasProficiency, hasExpertise } = skillInstance;

  return (
    <View style={styles.proficienciesContainer}>
      <TouchableOpacity
        style={styles.proficiencyButton}
        onPress={() => onToggleProficiency(skillId)}
      >
        <MaterialIcons
          name={hasProficiency ? "circle" : "radio-button-unchecked"}
          size={18}
          color="white"
        />
      </TouchableOpacity>
      {hasProficiency && (
        <TouchableOpacity
          style={styles.proficiencyButton}
          onPress={() => onToggleExpertise(skillId)}
        >
          <MaterialIcons
            name={hasExpertise ? "circle" : "radio-button-unchecked"}
            size={18}
            color="white"
          />
        </TouchableOpacity>
      )}
      {!hasProficiency && (
        <TouchableOpacity style={styles.proficiencyButton} onPress={() => null}>
          <MaterialIcons
            name={hasExpertise ? "circle" : "radio-button-unchecked"}
            size={18}
            color="#808080"
          />
        </TouchableOpacity>
      )}
      <Text style={styles.statTitle}>
        {getLocalizedName("skills", skillId)}
      </Text>
    </View>
  );
};

export default SkillProficiencyInput;
