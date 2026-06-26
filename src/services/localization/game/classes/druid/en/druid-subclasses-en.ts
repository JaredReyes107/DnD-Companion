import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { land_en } from "../subclasses/land/en/land-en";
import { moon_en } from "../subclasses/moon/en/moon-en";

import { dreams_en } from "../subclasses/dreams/en/dreams-en";
import { shepherd_en } from "../subclasses/shepherd/en/shepherd-en";

import { spores_en } from "../subclasses/spores/en/spores-en";
import { stars_en } from "../subclasses/stars/en/stars-en";
import { wildfire_en } from "../subclasses/wildfire/en/wildfire-en";

export const druid_subclasses_en: GameLocalizationCategory = {
  // PHB
  ...land_en,
  ...moon_en,

  // XGE
  ...dreams_en,
  ...shepherd_en,

  // TCE
  ...spores_en,
  ...stars_en,
  ...wildfire_en,
};
