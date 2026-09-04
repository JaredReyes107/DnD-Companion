import { View, Text } from "react-native";
import styles from "@/styles/character-creation.styles";
import SteppedNumberInput from "./SteppedNumberInput";

type Props = {
  label: string;
  score: number;
  onChange: (score: number) => void; // now absolute value, not delta
};

const AbilityScoreInput = ({ label, score, onChange }: Props) => {
  return (
    <View style={styles.statContainer}>
      <Text style={styles.statTitle}>{label}</Text>

      <SteppedNumberInput
        value={score}
        onChange={onChange}
        min={0}
        max={30}
        containerStyle={styles.statDetailsContainer}
        valueStyle={styles.statValue}
        buttonsContainerStyle={styles.statDetailsButtonsContainer}
        buttonStyle={styles.statDetailsButtons}
      />
    </View>
  );
};

export default AbilityScoreInput;
