import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

const slot = (
  level: number,
  steps: Record<number, number>,
): ResourceTemplate => ({
  id: `spell_slot_${level}`,
  sourceId: "spellcasting", //TODO: Change depending on the source of the Spellcasting feature
  origin: { book: "PHB" },
  category: "spell_slots",
  max: E.table(E.casterLevel(), steps),
  recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
  tags: ["spellcasting"],
});

export const SPELL_SLOTS: Record<string, ResourceTemplate> = Object.fromEntries(
  [
    slot(1, { 1: 2, 2: 3, 3: 4 }),
    slot(2, { 3: 2, 4: 3 }),
    slot(3, { 5: 2, 6: 3 }),
    slot(4, { 7: 1, 8: 2, 9: 3 }),
    slot(5, { 9: 1, 10: 2, 18: 3 }),
    slot(6, { 11: 1, 19: 2 }),
    slot(7, { 13: 1, 20: 2 }),
    slot(8, { 15: 1 }),
    slot(9, { 17: 1 }),
  ].map((t) => [t.id, t]),
);
