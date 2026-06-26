import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { land_resources_en } from "../subclasses/land/en/land-resources-en";
import { moon_resources_en } from "../subclasses/moon/en/moon-resources-en";

import { dreams_resources_en } from "../subclasses/dreams/en/dreams-resources-en";
import { shepherd_resources_en } from "../subclasses/shepherd/en/shepherd-resources-en";

import { spores_resources_en } from "../subclasses/spores/en/spores-resources-en";
import { stars_resources_en } from "../subclasses/stars/en/stars-resources-en";
import { wildfire_resources_en } from "../subclasses/wildfire/en/wildfire-resources-en";

const subclass_resources: GameLocalizationCategory = {
  //PHB
  ...land_resources_en,
  ...moon_resources_en,

  // XGE
  ...dreams_resources_en,
  ...shepherd_resources_en,

  // TCE
  ...spores_resources_en,
  ...stars_resources_en,
  ...wildfire_resources_en,
};

export const druid_resources_en: GameLocalizationCategory = {
  wild_shape: {
    name: "Wild Shape",
    description: "",
  },

  ...subclass_resources,
};
