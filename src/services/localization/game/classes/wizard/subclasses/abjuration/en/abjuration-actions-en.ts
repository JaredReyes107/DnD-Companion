import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const abjuration_actions_en: GameLocalizationCategory = {
  arcane_ward_create: {
    name: "Create Arcane Ward",
    description: `When you cast an abjuration spell of 1st level or higher, you create a magical ward on yourself that lasts until you finish a long rest. The ward has hit points equal to twice your wizard level + your Intelligence modifier. Whenever you take damage, the ward takes the damage instead. If this damage reduces the ward to 0 hit points, you take any remaining damage. While the ward has 0 hit points, it can't absorb damage.`,
  },
  arcane_ward_recharge: {
    name: "Repair Arcane Ward",
    description: `When you cast an abjuration spell of 1st level or higher, your arcane ward regains hit points equal to twice the level of the spell.`,
  },
  projected_ward: {
    name: "Projected Ward",
    description: `When a creature you can see within 30 feet of you takes damage, you can use your reaction to have your Arcane Ward absorb the damage. If this damage reduces the ward to 0 hit points, the protected creature takes the remaining damage.`,
  },
};
