import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { knowledge_resources_en } from "../subclasses/knowledge/en/knowledge-resources-en";
import { life_resources_en } from "../subclasses/life/en/life-resources-en";
import { light_resources_en } from "../subclasses/light/en/light-resources-en";
import { nature_resources_en } from "../subclasses/nature/en/nature-resources-en";
import { tempest_resources_en } from "../subclasses/tempest/en/tempest-resources-en";
import { trickery_resources_en } from "../subclasses/trickery/en/trickery-resources-en";
import { war_resources_en } from "../subclasses/war/en/war-resources-en";

const subclass_resources: GameLocalizationCategory = {
  //PHB
  ...knowledge_resources_en,
  ...life_resources_en,
  ...light_resources_en,
  ...nature_resources_en,
  ...tempest_resources_en,
  ...trickery_resources_en,
  ...war_resources_en,
  
  // Xanathar's

  // Tasha's
};

export const cleric_resources_en: GameLocalizationCategory = {
  channel_divinity: {
    name: "Channel Divinity",
    description: "",
  },

  ...subclass_resources,
};
