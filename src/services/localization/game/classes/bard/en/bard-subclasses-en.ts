import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { lore_en } from "../subclasses/lore/en/lore-en";
import { valor_en } from "../subclasses/valor/en/valor-en";
import { glamour_en } from "../subclasses/glamour/en/glamour-en";
import { swords_en } from "../subclasses/swords/en/swords-en";
import { whispers_en } from "../subclasses/whispers/en/whispers-en";
import { creation_en } from "../subclasses/creation/en/creation-en";
import { eloquence_en } from "../subclasses/eloquence/en/eloquence-en";

export const bard_subclasses_en: GameLocalizationCategory = {
  // PHB
  ...lore_en,
  ...valor_en,

  // Xanathar's
  ...glamour_en,
  ...swords_en,
  ...whispers_en,
  
  // Tasha's
  ...creation_en,
  ...eloquence_en,
};
