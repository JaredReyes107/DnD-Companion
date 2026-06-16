import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { glamour_resources_en } from "../subclasses/glamour/en/glamour-resources-en";
import { swords_resources_en } from "../subclasses/swords/en/swords-resources-en";
import { whispers_resources_en } from "../subclasses/whispers/en/whispers-resources-en";

const subclass_resources: GameLocalizationCategory = {
  // Xanathar's
  ...glamour_resources_en,
  ...swords_resources_en,
  ...whispers_resources_en,

  // Tasha's
}

export const resources_bard_en: GameLocalizationCategory = {
  bardic_inspiration: {
    name: "Inspiración bárdica",
    description: "",
  },

  ...subclass_resources,
};
