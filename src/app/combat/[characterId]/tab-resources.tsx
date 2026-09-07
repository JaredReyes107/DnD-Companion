import { useCharacter } from "@/utils/character-provider";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";

import { ThemedView } from "@/components/ui/ThemedView";
import { FlatList } from "react-native";
import { ResourceSection } from "@/components/ui/ResourceSection";

import { groupResourcesByCategory } from "@/core/data/registries/resources.registry";
import { groupedResourcesAsArray } from "@/core/rules/character/resources-helper";

import genericStyles from "@/styles/generic.styles";

const ResourcesDashboard = () => {
  const { character, saveCharacter, loading, loadCharacterById } =
    useCharacter();
  const characterId = character?.id;

  useFocusEffect(
    useCallback(() => {
      if (characterId) loadCharacterById(characterId);
    }, [characterId, loadCharacterById]),
  );

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
