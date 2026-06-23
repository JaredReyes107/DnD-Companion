import { GameLocalization } from "@/services/localization/game-localization.types";

import { barbarian_subclasses_en } from "./barbarian/en-barbarian-subclasses";
import { bard_subclasses_en } from "./bard/en/bard-subclasses-en";
import { cleric_subclasses_en } from "./cleric/en/cleric-subclasses-en";

export const subclasses_en: GameLocalization = {
  subclasses: {
    ...barbarian_subclasses_en,
    ...bard_subclasses_en,
    ...cleric_subclasses_en,
  },
};
