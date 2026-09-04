import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { alchemist_es } from "../subclasses/alchemist/es/alchemist-es";
import { armorer_es } from "../subclasses/armorer/es/armorer-es";
import { artillerist_es } from "../subclasses/artillerist/es/artillerist-es";
import { battle_smith_es } from "../subclasses/battle-smith/es/battle-smith-es";

export const artificer_subclasses_es: GameLocalizationCategory = {
  // TCE
  ...alchemist_es,
  ...armorer_es,
  ...artillerist_es,
  ...battle_smith_es,
};
