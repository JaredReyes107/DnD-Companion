import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { knowledge_en } from "../subclasses/knowledge/en/knowledge-en";
import { life_en } from "../subclasses/life/en/life-en";
import { light_en } from "../subclasses/light/en/light-en";
import { nature_en } from "../subclasses/nature/en/nature-en";
import { tempest_en } from "../subclasses/tempest/en/tempest-en";
import { trickery_en } from "../subclasses/trickery/en/trickery-en";
import { war_en } from "../subclasses/war/en/war-en";

export const cleric_subclasses_en: GameLocalizationCategory = {
  // PHB
  ...knowledge_en,
  ...life_en,
  ...light_en,
  ...nature_en,
  ...tempest_en,
  ...trickery_en,
  ...war_en,

  // Xanathar's

  // Tasha's
};
