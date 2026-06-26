import { GameLocalization } from "../../game-localization.types";
import { resources_artificer_es } from "./class/es-artificer-resources";
import { barbarian_resources_es } from "../classes/barbarian/barbarian-resources-es";
import { bard_resources_es } from "../classes/bard/es/bard-resources-es";
import { cleric_resources_es } from "../classes/cleric/es/cleric-resources-es";
import { druid_resources_es } from "../classes/druid/es/druid-resources-es";
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
    ...bard_resources_es,
    ...barbarian_resources_es,
    ...cleric_resources_es,
    ...druid_resources_es,
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
