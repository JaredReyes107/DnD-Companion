import { useCharacter } from "@/utils/character-provider";
import { useFocusEffect } from "expo-router";
import { useCallback, useMemo } from "react";

import { ThemedView } from "@/components/ui/ThemedView";
import { FlatList } from "react-native";
import { ResourceSection } from "@/components/ui/ResourceSection";

import {
  groupedResourcesAsArray,
  groupResourcesByCategory,
} from "@/core/rules/character/resources-helper";

import genericStyles from "@/styles/generic.styles";
import { buildResourceContext } from "@/core/rules/character/resource-max";

const ResourcesDashboard = () => {
  const { character, saveCharacter, loading, loadCharacterById } =
    useCharacter();
  const characterId = character?.id;

  useFocusEffect(
    useCallback(() => {
      if (characterId) loadCharacterById(characterId);
    }, [characterId, loadCharacterById]),
  );

  const ctx = useMemo(
    () => (character ? buildResourceContext(character) : null),
    [character],
  );
  if (loading || !character || !ctx) return null;
  const sections = groupedResourcesAsArray(
    groupResourcesByCategory(character.resources, ctx),
  );

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
            ctx={ctx}
          />
        )}
      />
    </ThemedView>
  );
};

export default ResourcesDashboard;
