import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { beast_master_en } from "../subclasses/beast-master/en/beast-master-en";
import { hunter_en } from "../subclasses/hunter/en/hunter-en";

export const ranger_subclasses_en: GameLocalizationCategory = {
  // PHB
  ...beast_master_en,
  ...hunter_en,

  // XGE

  // TCE
};
