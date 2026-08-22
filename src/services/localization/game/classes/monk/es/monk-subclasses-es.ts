import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { four_elements_es } from "../subclasses/four-elements/es/four-elements-es";
import { open_hand_es } from "../subclasses/open-hand/es/open-hand-es";
import { shadow_es } from "../subclasses/shadow/es/shadow-es";
import { drunken_master_es } from "../subclasses/drunken-master/es/drunken-master-es";
import { kensei_es } from "../subclasses/kensei/es/kensei-es";
import { sun_soul_es } from "../subclasses/sun-soul/es/sun-soul-es";
import { astral_self_es } from "../subclasses/astral-self/es/astral-self-es";
import { mercy_es } from "../subclasses/mercy/es/mercy-es";

export const monk_subclasses_es: GameLocalizationCategory = {
  // PHB
  ...four_elements_es,
  ...open_hand_es,
  ...shadow_es,

  // XGE
  ...drunken_master_es,
  ...kensei_es,
  ...sun_soul_es,

  // TCE
  ...astral_self_es,
  ...mercy_es,
};
