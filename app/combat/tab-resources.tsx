import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { FlatList } from "react-native";
import { ResourceSection } from "@/components/ResourceSection";
import { SpellSlotsSection } from "@/components/SpellSlotsSection";

import { groupResourcesByCategory } from "@/game/registries/resources.registry";
import { SpellSlotLevel } from "@/game/types/instances/spell-slot-instance";
import { groupedResourcesToArray } from "@/lib/helpers/resources-helper";

import { useCharacter } from "@/hooks/useCharacter";

import genericStyles from "@/stylesheets/generic.styles";
import styles from "@/stylesheets/combat/tab-resource";

const ProfileScreen = () => {
  const { character, saveCharacter } = useCharacter();

  if (!character) return null;

  const updateSpellSlot = (level: number, newCurrent: number) => {
    saveCharacter({
      ...character,
      spellSlots: {
        ...character.spellSlots,
        [level]: {
          ...character.spellSlots[level as SpellSlotLevel]!,
          current: newCurrent,
        },
      },
    });
  };

  const grouped = groupResourcesByCategory(character.resources);
  const sections = groupedResourcesToArray(grouped);

  return (
    <ThemedView style={[genericStyles.rootContainer, { alignItems: "center" }]}>
      <ThemedText style={styles.resourceCategoryTitle}>Spell Slots</ThemedText>
      <SpellSlotsSection
        spellSlots={character.spellSlots}
        onChange={updateSpellSlot}
      />
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
