import { ThemedView } from "@/components/ThemedView";
import { FlatList } from "react-native";
import { ResourceSection } from "@/components/ResourceSection";

import { groupResourcesByCategory } from "@/game/data/registries/resources.registry";
import { groupedResourcesAsArray } from "@/lib/helpers/resources-helper";

import { useCharacter } from "@/lib/utilities/character-provider";

import genericStyles from "@/stylesheets/generic.styles";

const ResourcesDashboard = () => {
  const { character, saveCharacter, loading } = useCharacter();

  if (loading || !character) return null;

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

export default ResourcesDashboard;
