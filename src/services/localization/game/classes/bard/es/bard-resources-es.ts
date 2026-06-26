import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { glamour_resources_es } from "../subclasses/glamour/es/glamour-resources-es";
import { whispers_resources_es } from "../subclasses/whispers/es/whispers-resources-es";
import { creation_resources_es } from "../subclasses/creation/es/creation-resources-es";
import { eloquence_resources_es } from "../subclasses/eloquence/es/eloquence-resources-es";

const subclass_resources: GameLocalizationCategory = {
  // Xanathar's
  ...glamour_resources_es,
  ...whispers_resources_es,

  // Tasha's
  ...creation_resources_es,
  ...eloquence_resources_es,
};

export const bard_resources_es: GameLocalizationCategory = {
  bardic_inspiration: {
    name: "Inspiración bárdica",
    description: "",
  },

  ...subclass_resources,
};
