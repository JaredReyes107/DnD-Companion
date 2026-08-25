import { GameLocalization } from "../../game-localization.types";
import { barbarian_resources_es } from "../classes/barbarian/barbarian-resources-es";
import { bard_resources_es } from "../classes/bard/es/bard-resources-es";
import { cleric_resources_es } from "../classes/cleric/es/cleric-resources-es";
import { druid_resources_es } from "../classes/druid/es/druid-resources-es";
import { fighter_resources_es } from "../classes/fighter/es/fighter-resources-es";
import { monk_resources_es } from "../classes/monk/es/monk-resources-es";
import { paladin_resources_es } from "../classes/paladin/es/paladin-resources-es";
import { ranger_resources_es } from "../classes/ranger/es/ranger-resources-es";
import { resources_spell_slots_es } from "./spell-slots-es";
import { rogue_resources_es } from "../classes/rogue/es/rogue-resources-es";

export const resources_es: GameLocalization = {
  resources: {
    ...bard_resources_es,
    ...barbarian_resources_es,
    ...cleric_resources_es,
    ...druid_resources_es,
    ...fighter_resources_es,
    ...monk_resources_es,
    ...paladin_resources_es,
    ...ranger_resources_es,
    ...rogue_resources_es,

    ...resources_spell_slots_es,
  },
};
