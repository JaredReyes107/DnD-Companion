import { SpellSlotsSection } from "@/components/SpellSlotsSection";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SpellSlotLevel } from "@/game/types/instances/spell-slot-instance";
import { useCharacter } from "@/hooks/useCharacter";

import genericStyles from "@/stylesheets/generic.styles";

const ProfileScreen = () => {
  const { character, saveCharacter } = useCharacter();

  if (!character) return null;

  const updateSpellSlot = (level: number, newUsed: number) => {
    saveCharacter({
      ...character,
      spellSlots: {
        ...character.spellSlots,
        [level]: {
          ...character.spellSlots[level as SpellSlotLevel]!,
          used: newUsed,
        },
      },
    });
  };

  return (
    <ThemedView style={[genericStyles.rootContainer, { alignItems: "center" }]}>
      <ThemedText>Spell Slots</ThemedText>
      <SpellSlotsSection
        spellSlots={character.spellSlots}
        onChange={updateSpellSlot}
      />
    </ThemedView>
  );
};

export default ProfileScreen;
