import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "./ThemedText";

import { SpellSlotInstance } from "@/game/domain/spellcasting/spell-slot-instance";
import { SpellSlotElement } from "./SpellSlotElement";

import styles from "@/stylesheets/combat/tab-resource";

type Props = {
  spellSlots: Record<number, SpellSlotInstance>;
  onChange: (level: number, current: number) => void;
};

export const SpellSlotsSection = ({ spellSlots, onChange }: Props) => {
  const levels = Object.keys(spellSlots)
    .map(Number)
    .sort((a, b) => a - b);

  if (levels.length === 0) return null;

  return (
    <ThemedView style={styles.resourceCategoryContainer}>
      <ThemedText style={styles.resourceCategoryTitle}>Spell Slots</ThemedText>
      <ThemedView style={styles.resourceElementsList}>
        {levels.map((level) => {
          const slot = spellSlots[level];
          return (
            <SpellSlotElement
              key={level}
              level={level}
              current={slot.current}
              max={slot.max}
              onChange={(v) => onChange(level, v)}
            />
          );
        })}
      </ThemedView>
    </ThemedView>
  );
};
