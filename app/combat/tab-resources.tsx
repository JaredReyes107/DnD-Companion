import { ThemedView } from "@/components/ThemedView";
import { FlatList } from "react-native";
import { ResourceSection } from "@/components/ResourceSection";

import { groupResourcesByCategory } from "@/game/registries/resources.registry";
import { groupedResourcesAsArray } from "@/lib/helpers/resources-helper";

import { useCharacter } from "@/hooks/useCharacter";

import genericStyles from "@/stylesheets/generic.styles";
//import styles from "@/stylesheets/combat/tab-resource";

const ProfileScreen = () => {
  const { character, saveCharacter } = useCharacter();

  if (!character) return null;

  const grouped = groupResourcesByCategory(character.resources);
  const sections = groupedResourcesAsArray(grouped);

  return (
    <ThemedView
      style={[
        genericStyles.rootContainer,
        { alignItems: "center", paddingHorizontal: 15 },
      ]}
    >
      <FlatList
        data={sections}
        keyExtractor={(item) => item.category}
        renderItem={({ item }) => (
          <ResourceSection
            category={item.category}
            resources={item.resources}
            character={character}
            onUpdate={saveCharacter}
          />
        )}
      />
    </ThemedView>
  );
};

export default ProfileScreen;
