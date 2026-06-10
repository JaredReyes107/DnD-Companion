import { GameLocalization } from "@/services/localization/game-localization.types";

import { barbarian_subclasses_en } from "./barbarian/en-barbarian-subclasses";

export const subclasses_en: GameLocalization = {
  subclasses: {
    ...barbarian_subclasses_en,
  },
};
