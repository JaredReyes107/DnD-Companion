import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { zealot_resources_en } from "./subclasses/zealot/en/en-zealot-resources";

const barbarian_subclass_resources_en: GameLocalizationCategory = {
  ...zealot_resources_en,
};

export const barbarian_resources_en: GameLocalizationCategory = {
  rage: {
    name: "Rage",
    description: "",
  },

  ...barbarian_subclass_resources_en,
};
