import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { beast_master_es } from "../subclasses/beast-master/es/beast-master-es";
import { hunter_es } from "../subclasses/hunter/es/hunter-es";

export const ranger_subclasses_es: GameLocalizationCategory = {
  // PHB
  ...beast_master_es,
  ...hunter_es,

  // XGE

  // TCE
};
