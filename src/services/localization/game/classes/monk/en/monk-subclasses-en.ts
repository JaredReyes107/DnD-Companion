import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { four_elements_en } from "../subclasses/four-elements/en/four-elements-en";
import { open_hand_en } from "../subclasses/open-hand/en/open-hand-en";
import { shadow_en } from "../subclasses/shadow/en/shadow-en";
import { drunken_master_en } from "../subclasses/drunken-master/en/drunken-master-en";
import { kensei_en } from "../subclasses/kensei/en/kensei-en";
import { sun_soul_en } from "../subclasses/sun-soul/en/sun-soul-en";
import { astral_self_en } from "../subclasses/astral-self/en/astral-self-en";
import { mercy_en } from "../subclasses/mercy/en/mercy-en";

export const monk_subclasses_en: GameLocalizationCategory = {
  // PHB
  ...four_elements_en,
  ...open_hand_en,
  ...shadow_en,

  // XGE
  ...drunken_master_en,
  ...kensei_en,
  ...sun_soul_en,

  // TCE
  ...astral_self_en,
  ...mercy_en,
};
