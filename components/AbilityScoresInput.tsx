import { MaterialIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";

import styles from "@/stylesheets/character-creation.styles";
import SmoothCounterButton from "./SmoothCounterButton";

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
          <SmoothCounterButton
            style={styles.statDetailsButtons}
            disabled={score <= 0}
            onPress={() => onChange(-1)}
          >
            <MaterialIcons name="remove" size={12} color="white" />
          </SmoothCounterButton>

          <SmoothCounterButton
            style={styles.statDetailsButtons}
            onPress={() => onChange(+1)}
            disabled={score >= 30}
          >
            <MaterialIcons name="add" size={12} color="white" />
          </SmoothCounterButton>
        </View>
      </View>
    </View>
  );
};

export default AbilityScoreInput;
