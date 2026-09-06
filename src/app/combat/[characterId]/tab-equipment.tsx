import { View } from "react-native";
//import { useLocalSearchParams } from "expo-router";

import { ThemedText } from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";

import { useCharacter } from "@/utils/character-provider";

import styles from "@/styles/combat/index.styles";
import genericStyles from "@/styles/generic.styles";

const App = () => {
  //const { characterId } = useLocalSearchParams<{ characterId: string }>();
  const { character, loading } = useCharacter();

  if (loading || !character?.combatState) {
    return (
      <ThemedView>
        <ThemedText>Cargando personaje…</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView
      style={[
        genericStyles.rootContainer,
        { paddingHorizontal: "5%", alignItems: "center" },
      ]}
    >
      <View style={styles.headerContainer}></View>

      <View style={styles.mainBody}></View>
    </ThemedView>
  );
};

export default App;
