import { GameLocalization } from "@/services/localization/game-localization.types";

import { es_artificer_actions } from "./by-class/es-artificer-actions";
import { barbarian_actions_es } from "../classes/barbarian/es-barbarian-actions";
import { bard_actions_es } from "../classes/bard/es/bard-actions-es";
import { cleric_actions_es } from "../classes/cleric/es/cleric-actions-es";
import { druid_actions_es } from "../classes/druid/es/druid-actions-es";
import { es_fighter_actions } from "./by-class/es-fighter-actions";
import { es_monk_actions } from "./by-class/es-monk-actions";
import { es_paladin_actions } from "./by-class/es-paladin-actions";
import { es_ranger_actions } from "./by-class/es-ranger-actions";
import { es_rogue_actions } from "./by-class/es-rogue-actions";
import { es_sorcerer_actions } from "./by-class/es-sorcerer-actions";
import { es_warlock_actions } from "./by-class/es-warlock-actions";
import { es_wizard_actions } from "./by-class/es-wizard-actions";

export const actions_es: GameLocalization = {
  actions: {
    ...es_artificer_actions,
    ...barbarian_actions_es,
    ...bard_actions_es,
    ...cleric_actions_es,
    ...druid_actions_es,
    ...es_fighter_actions,
    ...es_monk_actions,
    ...es_paladin_actions,
    ...es_ranger_actions,
    ...es_rogue_actions,
    ...es_sorcerer_actions,
    ...es_warlock_actions,
    ...es_wizard_actions,
  },
};
