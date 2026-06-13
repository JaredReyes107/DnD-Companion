import { GameLocalization } from "@/services/localization/game-localization.types";

import { barbarian_features_es } from "@/services/localization/game/classes/barbarian/es-barbarian-features";

export const features_es: GameLocalization = {
  features: {
    ...barbarian_features_es,
  },
};
