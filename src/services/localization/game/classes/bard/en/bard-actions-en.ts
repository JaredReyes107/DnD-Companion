import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { lore_actions_en } from "../subclasses/lore/en/lore-actions-en";
import { valor_actions_en } from "../subclasses/valor/en/valor-actions-en";

const bard_subclass_actions: GameLocalizationCategory = {
  // PHB
  ...lore_actions_en,
  ...valor_actions_en,
};

export const bard_actions_en: GameLocalizationCategory = {
  bardic_inspiration: {
    name: "Inspiración bárdica",
  },
  countercharm: {
    name: "Contraencanto",
  },

  ...bard_subclass_actions,
};
