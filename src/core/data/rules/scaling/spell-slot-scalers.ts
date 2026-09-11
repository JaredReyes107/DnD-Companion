import { registerScaling } from "@/core/data/registries/resource-scaling.registry";
import { getTotalCasterLevel } from "@/core/entities/spellcasting/spellcasting";
import { getTotalPactCasterLevel } from "@/core/rules/spellcasting/pact-magic-helper";

const STANDARD_SPELL_SLOTS: number[][] = [
  [2],
  [3],
  [4, 2],
  [4, 3],
  [4, 3, 2],
  [4, 3, 3],
  [4, 3, 3, 1],
  [4, 3, 3, 2],
  [4, 3, 3, 3, 1],
  [4, 3, 3, 3, 2],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 2, 1, 1],
];

const PACT_MAGIC_TABLE: Record<number, { tier: number; slots: number }> = {
  1: { tier: 1, slots: 1 },
  2: { tier: 1, slots: 2 },
  3: { tier: 2, slots: 2 },
  4: { tier: 2, slots: 2 },
  5: { tier: 3, slots: 2 },
  6: { tier: 3, slots: 2 },
  7: { tier: 4, slots: 2 },
  8: { tier: 4, slots: 2 },
  9: { tier: 5, slots: 2 },
  10: { tier: 5, slots: 2 },
  11: { tier: 5, slots: 3 },
  12: { tier: 5, slots: 3 },
  13: { tier: 5, slots: 3 },
  14: { tier: 5, slots: 3 },
  15: { tier: 5, slots: 3 },
  16: { tier: 5, slots: 3 },
  17: { tier: 5, slots: 4 },
  18: { tier: 5, slots: 4 },
  19: { tier: 5, slots: 4 },
  20: { tier: 5, slots: 4 },
};

export function registerSpellSlotScalings() {
  for (let tier = 1; tier <= 9; tier++) {
    registerScaling(`spell-slot-tier-${tier}`, ({ character }) => {
      const level = getTotalCasterLevel(character);
      const row = STANDARD_SPELL_SLOTS[level - 1];
      return row?.[tier - 1] ?? 0;
    });
  }

  registerScaling("pact-slot-tier", ({ character }) => {
    const level = getTotalPactCasterLevel(character);
    return PACT_MAGIC_TABLE[level]?.tier ?? 0;
  });

  registerScaling("pact-slot-count", ({ character }) => {
    const level = getTotalPactCasterLevel(character);
    return PACT_MAGIC_TABLE[level]?.slots ?? 0;
  });
}
