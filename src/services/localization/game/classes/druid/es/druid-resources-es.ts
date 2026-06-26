import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { land_resources_es } from "../subclasses/land/es/land-resources-es";
import { moon_resources_es } from "../subclasses/moon/es/moon-resources-es";

import { dreams_resources_es } from "../subclasses/dreams/es/dreams-resources-es";
import { shepherd_resources_es } from "../subclasses/shepherd/es/shepherd-resources-es";

import { spores_resources_es } from "../subclasses/spores/es/spores-resources-es";
import { stars_resources_es } from "../subclasses/stars/es/stars-resources-es";
import { wildfire_resources_es } from "../subclasses/wildfire/es/wildfire-resources-es";

const subclass_resources: GameLocalizationCategory = {
  //PHB
  ...land_resources_es,
  ...moon_resources_es,

  // XGE
  ...dreams_resources_es,
  ...shepherd_resources_es,

  // TCE
  ...spores_resources_es,
  ...stars_resources_es,
  ...wildfire_resources_es,
};

export const druid_resources_es: GameLocalizationCategory = {
  wild_shape: {
    name: "Forma Salvaje",
    description: "",
  },

  ...subclass_resources,
};
