import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { open_hand_en } from "../subclasses/open-hand/en/open-hand-en";
import { shadow_en } from "../subclasses/shadow/en/shadow-en";
import { four_elements_en } from "../subclasses/four-elements/en/four-elements-en";

export const monk_subclasses_en: GameLocalizationCategory = {
  // PHB
  ...open_hand_en,
  ...shadow_en,
  ...four_elements_en,

  // XGE

  // TCE
};
