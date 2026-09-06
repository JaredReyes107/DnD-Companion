import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { lore_actions_en } from "../subclasses/lore/en/lore-actions-en";
import { valor_actions_en } from "../subclasses/valor/en/valor-actions-en";

import { glamour_actions_en } from "../subclasses/glamour/en/glamour-actions-en";
import { swords_actions_en } from "../subclasses/swords/en/swords-actions-en";
import { whispers_actions_en } from "../subclasses/whispers/en/whispers-actions-en";

import { creation_actions_en } from "../subclasses/creation/en/creation-actions-en";
import { eloquence_actions_en } from "../subclasses/eloquence/en/eloquence-actions-en";

const bard_subclass_actions: GameLocalizationCategory = {
  // PHB
  ...lore_actions_en,
  ...valor_actions_en,

  // Xanathar's
  ...glamour_actions_en,
  ...swords_actions_en,
  ...whispers_actions_en,

  // TCE
  ...creation_actions_en,
  ...eloquence_actions_en,
};

export const bard_actions_en: GameLocalizationCategory = {
  bardic_inspiration: {
    name: "Bardic Inspiration",
  },
  countercharm: {
    name: "Countercharm",
  },

  ...bard_subclass_actions,
};
