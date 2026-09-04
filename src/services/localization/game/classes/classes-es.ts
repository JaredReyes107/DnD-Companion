import { GameLocalization } from "../../game-localization.types";

import { artificer_es } from "./artificer/es/artificer-es";
import { barbarian_es } from "./barbarian/es-barbarian";
import { bard_es } from "./bard/es/bard-es";
import { cleric_es } from "./cleric/es/cleric-es";
import { druid_es } from "./druid/es/druid-es";
import { fighter_es } from "./fighter/es/fighter-es";
import { monk_es } from "./monk/es/monk-es";
import { paladin_es } from "./paladin/es/paladin-es";
import { ranger_es } from "./ranger/es/ranger-es";
import { rogue_es } from "./rogue/es/rogue-es";
import { sorcerer_es } from "./sorcerer/es/sorcerer-es";
import { warlock_es } from "./warlock/es/warlock-es";
import { wizard_es } from "./wizard/es/wizard-es";

export const classes_es: GameLocalization = {
  classes: {
    ...artificer_es,
    ...barbarian_es,
    ...bard_es,
    ...cleric_es,
    ...druid_es,
    ...fighter_es,
    ...monk_es,
    ...paladin_es,
    ...monk_es,
    ...ranger_es,
    ...rogue_es,
    ...sorcerer_es,
    ...warlock_es,
    ...wizard_es,
  },
};
