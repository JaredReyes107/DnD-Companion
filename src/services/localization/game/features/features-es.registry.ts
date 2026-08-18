import { GameLocalization } from "@/services/localization/game-localization.types";

import { barbarian_features_es } from "@/services/localization/game/classes/barbarian/es-barbarian-features";
import { bard_features_es } from "../classes/bard/es/bard-features-es";
import { cleric_features_es } from "../classes/cleric/es/cleric-features-es";
import { druid_features_es } from "../classes/druid/es/druid-features-es";
import { fighter_features_es } from "../classes/fighter/es/fighter-features-es";

export const features_es: GameLocalization = {
  features: {
    ...barbarian_features_es,
    ...bard_features_es,
    ...cleric_features_es,
    ...druid_features_es,
    ...fighter_features_es,
  },
};
