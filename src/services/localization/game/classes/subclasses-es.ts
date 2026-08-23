import { GameLocalization } from "@/services/localization/game-localization.types";

import { barbarian_subclasses_es } from "./barbarian/es-barbarian-subclasses";
import { bard_subclasses_es } from "./bard/es/bard-subclasses-es";
import { cleric_subclasses_es } from "./cleric/es/cleric-subclasses-es";
import { druid_subclasses_es } from "./druid/es/druid-subclasses-es";
import { fighter_subclasses_es } from "./fighter/es/fighter-subclasses-es";
import { monk_subclasses_es } from "./monk/es/monk-subclasses-es";
import { paladin_subclasses_es } from "./paladin/es/paladin-subclasses-es";
import { ranger_subclasses_es } from "./ranger/es/ranger-subclasses-es";

export const subclasses_es: GameLocalization = {
  subclasses: {
    ...barbarian_subclasses_es,
    ...bard_subclasses_es,
    ...cleric_subclasses_es,
    ...druid_subclasses_es,
    ...fighter_subclasses_es,
    ...monk_subclasses_es,
    ...paladin_subclasses_es,
    ...ranger_subclasses_es,
  },
};
