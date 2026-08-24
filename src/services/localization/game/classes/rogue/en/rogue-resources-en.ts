import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

const subclass_resources: GameLocalizationCategory = {
  //PHB
  // XGE
  // TCE
};

export const rogue_resources_en: GameLocalizationCategory = {
  ...subclass_resources,

  sneak_attack: {
    name: "Sneak Attack",
    description: `It allows you to deal additional damage with a weapon attack. It recharges every turn.`,
  },
  stroke_of_luck: {
    name: "Stroke of Luck",
    description: `It allows you to succeed a missed attack or turn a missed ability check into a 20. It recharges on a short or long rest.`,
  },
};
