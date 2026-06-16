import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { glamour_resources_es } from "../subclasses/glamour/es/glamour-resources-es";
import { swords_resources_es } from "../subclasses/swords/es/swords-resources-es";
import { whispers_resources_es } from "../subclasses/whispers/es/whispers-resources-es";

const subclass_resources: GameLocalizationCategory = {
  // Xanathar's
  ...glamour_resources_es,
  ...swords_resources_es,
  ...whispers_resources_es,

  // Tasha's
}

export const resources_bard_es: GameLocalizationCategory = {
  bardic_inspiration: {
    name: "Inspiración bárdica",
    description: "",
  },

  ...subclass_resources,
};
