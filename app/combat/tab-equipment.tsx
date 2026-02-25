import { View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import { useCharacter } from "@/lib/utilities/character-provider";

import styles from "../../stylesheets/combat/index.styles";
import genericStyles from "../../stylesheets/generic.styles";

const App = () => {
  const { character, saveCharacter, loading } = useCharacter();
  //#endregion

  if (loading || !character) {
    return (
      <View>
        <ThemedText>Cargando personaje…</ThemedText>
      </View>
    );
  } else if (!character.combatState) {
    return (
      <View>
        <ThemedText>Cargando personaje…</ThemedText>
      </View>
    );
  } else {
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
  }
};

export default App;
