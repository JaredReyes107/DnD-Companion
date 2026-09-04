import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { lore_actions_es } from "../subclasses/lore/es/lore-actions-es";
import { valor_actions_es } from "../subclasses/valor/es/valor-actions-es";

import { glamour_actions_es } from "../subclasses/glamour/es/glamour-actions-es";
import { swords_actions_es } from "../subclasses/swords/es/swords-actions-es";
import { whispers_actions_es } from "../subclasses/whispers/es/whispers-actions-es";

import { creation_actions_es } from "../subclasses/creation/es/creation-actions-es";
import { eloquence_actions_es } from "../subclasses/eloquence/es/eloquence-actions-es";

const bard_subclass_actions: GameLocalizationCategory = {
  // PHB
  ...lore_actions_es,
  ...valor_actions_es,

  // Xanathar's
  ...glamour_actions_es,
  ...swords_actions_es,
  ...whispers_actions_es,

  // TCE
  ...creation_actions_es,
  ...eloquence_actions_es,
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
