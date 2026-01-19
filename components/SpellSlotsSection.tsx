import { ThemedView } from "@/components/ThemedView";
import { SpellSlots } from "@/game/types/instances/spell-slot-instance";
import { SpellSlotElement } from "./SpellSlotElement";

import styles from "@/stylesheets/combat/tab-resource";

type Props = {
  spellSlots: SpellSlots;
  onChange: (level: number, current: number) => void;
};

export const SpellSlotsSection = ({ spellSlots, onChange }: Props) => {
  const levels = Object.keys(spellSlots)
    .map(Number)
    .sort((a, b) => a - b);

  if (levels.length === 0) return null;

  return (
    <ThemedView style={{ marginTop: 10 }}>
      <ThemedView style={styles.resourceCategoryContainer}>
        {levels.map((level) => {
          const slot = spellSlots[level as keyof SpellSlots]!;
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
