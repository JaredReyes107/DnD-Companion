import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { land_es } from "../subclasses/land/es/land-es";
import { moon_es } from "../subclasses/moon/es/moon-es";

import { dreams_es } from "../subclasses/dreams/es/dreams-es";
import { shepherd_es } from "../subclasses/shepherd/es/shepherd-es";

import { spores_es } from "../subclasses/spores/es/spores-es";
import { stars_es } from "../subclasses/stars/es/stars-es";
import { wildfire_es } from "../subclasses/wildfire/es/wildfire-es";

export const druid_subclasses_es: GameLocalizationCategory = {
  // PHB
  ...land_es,
  ...moon_es,

  // XGE
  ...dreams_es,
  ...shepherd_es,

  // TCE
  ...spores_es,
  ...stars_es,
  ...wildfire_es,
};
