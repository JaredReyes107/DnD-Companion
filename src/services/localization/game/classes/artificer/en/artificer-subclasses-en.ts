import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { alchemist_en } from "../subclasses/alchemist/en/alchemist-en";
import { armorer_en } from "../subclasses/armorer/en/armorer-en";
import { artillerist_en } from "../subclasses/artillerist/en/artillerist-en";
import { battle_smith_en } from "../subclasses/battle-smith/en/battle-smith-en";

export const artificer_subclasses_en: GameLocalizationCategory = {
  // TCE
  ...alchemist_en,
  ...armorer_en,
  ...artillerist_en,
  ...battle_smith_en,
};
