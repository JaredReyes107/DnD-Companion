import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { glamour_resources_en } from "../subclasses/glamour/en/glamour-resources-en";
import { whispers_resources_en } from "../subclasses/whispers/en/whispers-resources-en";
import { creation_resources_en } from "../subclasses/creation/en/creation-resources-en";
import { eloquence_resources_en } from "../subclasses/eloquence/en/eloquence-resources-en";

const subclass_resources: GameLocalizationCategory = {
  // Xanathar's
  ...glamour_resources_en,
  ...whispers_resources_en,

  // Tasha's
  ...creation_resources_en,
  ...eloquence_resources_en,
}

export const resources_bard_en: GameLocalizationCategory = {
  bardic_inspiration: {
    name: "Inspiración bárdica",
    description: "",
  },

  ...subclass_resources,
};
