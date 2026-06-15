import { GameLocalization } from "@/services/localization/game-localization.types";

import { barbarian_subclasses_es } from "./barbarian/es-barbarian-subclasses";
import { bard_subclasses_es } from "./bard/es/bard-subclasses-en";

export const subclasses_es: GameLocalization = {
  subclasses: {
    ...barbarian_subclasses_es,
    ...bard_subclasses_es,
  },
};
