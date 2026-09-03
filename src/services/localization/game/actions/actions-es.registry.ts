import { GameLocalization } from "@/services/localization/game-localization.types";

import { barbarian_actions_es } from "../classes/barbarian/es-barbarian-actions";
import { bard_actions_es } from "../classes/bard/es/bard-actions-es";
import { cleric_actions_es } from "../classes/cleric/es/cleric-actions-es";
import { druid_actions_es } from "../classes/druid/es/druid-actions-es";
import { fighter_actions_es } from "../classes/fighter/es/fighter-actions-es";
import { monk_actions_es } from "../classes/monk/es/monk-actions-es";
import { paladin_actions_es } from "../classes/paladin/es/paladin-actions-es";
import { ranger_actions_es } from "../classes/ranger/es/ranger-actions-es";
import { rogue_actions_es } from "../classes/rogue/es/rogue-actions-es";
import { sorcerer_actions_es } from "../classes/sorcerer/es/sorcerer-actions-es";
import { warlock_actions_es } from "../classes/warlock/es/warlock-actions-es";
import { wizard_actions_es } from "../classes/wizard/es/wizard-actions-es";

export const actions_es: GameLocalization = {
  actions: {
    ...barbarian_actions_es,
    ...bard_actions_es,
    ...cleric_actions_es,
    ...druid_actions_es,
    ...fighter_actions_es,
    ...monk_actions_es,
    ...paladin_actions_es,
    ...ranger_actions_es,
    ...rogue_actions_es,
    ...sorcerer_actions_es,
    ...warlock_actions_es,
    ...wizard_actions_es,
  },
};
