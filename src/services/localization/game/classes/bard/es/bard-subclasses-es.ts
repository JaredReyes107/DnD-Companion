import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { lore_es } from "../subclasses/lore/es/lore-es";
import { valor_es } from "../subclasses/valor/es/valor-es";
import { glamour_es } from "../subclasses/glamour/es/glamour-es";
import { swords_es } from "../subclasses/swords/es/swords-es";
import { whispers_es } from "../subclasses/whispers/es/whispers-es";
import { creation_es } from "../subclasses/creation/es/creation-en";
import { eloquence_es } from "../subclasses/eloquence/es/eloquence-es";

export const bard_subclasses_es: GameLocalizationCategory = {
  // PHB
  ...lore_es,
  ...valor_es,

  // Xanathar's
  ...glamour_es,
  ...swords_es,
  ...whispers_es,

  // Tasha's
  ...creation_es,
  ...eloquence_es,
};
