import { GameLocalization } from "@/services/localization/game-localization.types";

import { barbarian_features_en } from "@/services/localization/game/classes/barbarian/en-barbarian-features";

export const features_en: GameLocalization = {
  features: {
    ...barbarian_features_en,
  },
};
