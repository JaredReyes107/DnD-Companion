import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { knowledge_es } from "../subclasses/knowledge/es/knowledge-es";
import { life_es } from "../subclasses/life/es/life-es";
import { light_es } from "../subclasses/light/es/light-es";
import { nature_es } from "../subclasses/nature/es/nature-es";
import { tempest_es } from "../subclasses/tempest/es/tempest-es";
import { trickery_es } from "../subclasses/trickery/es/trickery-es";
import { war_es } from "../subclasses/war/es/war-es";

export const cleric_subclasses_es: GameLocalizationCategory = {
  // PHB
  ...knowledge_es,
  ...life_es,
  ...light_es,
  ...nature_es,
  ...tempest_es,
  ...trickery_es,
  ...war_es,

  // Xanathar's

  // Tasha's
};
