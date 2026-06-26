import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const moon_actions_en: GameLocalizationCategory = {
  combat_wild_shape_transform: {
    name: "Wild Shape",
    description:
      "You gain the ability to use Wild Shape on your turn as a bonus action, rather than as an action.",
  },
  combat_wild_shape_heal: {
    name: "Wild Shape Heal",
    description:
      "While you are transformed by Wild Shape, you can expend one spell slot to regain 1d8 hit points per level of the spell slot expended.",
  },
  elemental_wild_shape: {
    name: "Elemental Wild Shape",
    description:
      "You transform into an air elemental, an earth elemental, a fire elemental, or a water elemental.",
  },
  thousand_forms: {
    name: "Thousand Forms",
    description: "You cast the alter self spell at will.",
  },
};
