import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { lore_actions_es } from "../subclasses/lore/es/lore-actions-es";
import { valor_actions_es } from "../subclasses/valor/es/valor-actions-es";

const bard_subclass_actions: GameLocalizationCategory = {
  // PHB
  ...lore_actions_es,
  ...valor_actions_es,
};

export const bard_actions_es: GameLocalizationCategory = {
  bardic_inspiration: {
    name: "Inspiración bárdica",
  },
  countercharm: {
    name: "Contraencanto",
  },

  ...bard_subclass_actions,
};
