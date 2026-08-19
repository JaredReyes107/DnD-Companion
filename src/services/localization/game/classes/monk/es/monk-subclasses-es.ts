import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { open_hand_es } from "../subclasses/open-hand/es/open-hand-es";
import { shadow_es } from "../subclasses/shadow/es/shadow-es";
import { four_elements_es } from "../subclasses/four-elements/es/four-elements-es";

export const monk_subclasses_es: GameLocalizationCategory = {
  // PHB
  ...open_hand_es,
  ...shadow_es,
  ...four_elements_es,

  // XGE

  // TCE
};
