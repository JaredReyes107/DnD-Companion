import { GameLocalization } from "@/services/localization/game-localization.types";

import { barbarian_subclasses_es } from "./barbarian/es-barbarian-subclasses";
import { bard_subclasses_es } from "./bard/es/bard-subclasses-es";
import { cleric_subclasses_es } from "./cleric/es/cleric-subclasses-es";
import { druid_subclasses_es } from "./druid/es/druid-subclasses-es";
import { fighter_subclasses_es } from "./fighter/es/fighter-subclasses-es";
import { monk_subclasses_es } from "./monk/es/monk-subclasses-es";
import { paladin_subclasses_es } from "./paladin/es/paladin-subclasses-es";
import { ranger_subclasses_es } from "./ranger/es/ranger-subclasses-es";
import { rogue_subclasses_es } from "./rogue/es/rogue-subclasses-es";
import { sorcerer_subclasses_es } from "./sorcerer/es/sorcerer-subclasses-es";
import { warlock_subclasses_es } from "./warlock/es/warlock-subclasses-es";
import { artificer_subclasses_es } from "./artificer/es/artificer-subclasses-es";

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
    ...rogue_subclasses_es,
    ...sorcerer_subclasses_es,
    ...warlock_subclasses_es,
    ...artificer_subclasses_es,
  },
};
