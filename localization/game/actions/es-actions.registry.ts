import { GameLocalization } from "@/localization/game-localization.types";

import { es_artificer_actions } from "./by-class/es-artificer-actions";
import { es_barbarian_actions } from "./by-class/es-barbarian-actions";
import { es_bard_actions } from "./by-class/es-bard-actions";
import { es_cleric_actions } from "./by-class/es-cleric-actions";
import { es_druid_actions } from "./by-class/es-druid-actions";
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
    ...es_barbarian_actions,
    ...es_bard_actions,
    ...es_cleric_actions,
    ...es_druid_actions,
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
