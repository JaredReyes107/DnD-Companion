import { View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import { useCharacter } from "@/lib/utilities/character-provider";

import styles from "../../stylesheets/combat/index.styles";
import genericStyles from "../../stylesheets/generic.styles";

const App = () => {
  const { character, loading } = useCharacter();
  //#endregion

  if (loading || !character?.combatState) {
    return (
      <View>
        <ThemedText>Cargando personaje…</ThemedText>
      </View>
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
