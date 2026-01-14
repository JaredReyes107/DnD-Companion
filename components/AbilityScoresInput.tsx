import { MaterialIcons } from "@expo/vector-icons";
import { View, TouchableOpacity, Text } from "react-native";

import styles from "@/stylesheets/character-creation.styles";

type Props = {
  label: string;
  score: number;
  onChange: (delta: number) => void;
};

const AbilityScoreInput = ({ label, score, onChange }: Props) => {
  return (
    <View style={styles.statContainer}>
      <Text style={styles.statTitle}>{label}</Text>

      <View style={styles.statDetailsContainer}>
        <Text style={styles.statValue}>{score}</Text>

        <View style={styles.statDetailsButtonsContainer}>
          <TouchableOpacity
            style={styles.statDetailsButtons}
            disabled={score <= 0}
            onPress={() => onChange(-1)}
          >
            <MaterialIcons name="remove" size={12} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.statDetailsButtons}
            disabled={score >= 20}
            onPress={() => onChange(+1)}
          >
            <MaterialIcons name="add" size={12} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AbilityScoreInput;
