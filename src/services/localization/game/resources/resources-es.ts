import { GameLocalization } from "../../game-localization.types";
import { resources_artificer_es } from "./class/es-artificer-resources";
import { resources_barbarian_es } from "../classes/barbarian/es-barbarian-resources";
import { resources_bard_es } from "./class/es-bard-resources";
import { resources_cleric_es } from "./class/es-cleric-resources";
import { resources_druid_es } from "./class/es-druid-resources";
import { resources_fighter_es } from "./class/es-fighter-resources";
import { resources_monk_es } from "./class/es-monk-resources";
import { resources_paladin_es } from "./class/es-paladin-resources";
import { resources_ranger_es } from "./class/es-ranger-resources";
import { resources_rogue_es } from "./class/es-rogue-resources";
import { resources_sorcerer_es } from "./class/es-sorcerer-resources";
import { resources_warlock_es } from "./class/es-warlock-resources";
import { resources_wizard_es } from "./class/es-wizard-resources";
import { resources_spell_slots_es } from "./spell-slots-es";

export const resources_es: GameLocalization = {
  resources: {
    ...resources_artificer_es,
    ...resources_bard_es,
    ...resources_barbarian_es,
    ...resources_cleric_es,
    ...resources_druid_es,
    ...resources_fighter_es,
    ...resources_monk_es,
    ...resources_paladin_es,
    ...resources_ranger_es,
    ...resources_rogue_es,
    ...resources_sorcerer_es,
    ...resources_warlock_es,
    ...resources_wizard_es,

    ...resources_spell_slots_es,
  },
};
