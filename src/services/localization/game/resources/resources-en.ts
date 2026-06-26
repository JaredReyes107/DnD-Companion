import { GameLocalization } from "../../game-localization.types";

import { barbarian_resources_en } from "../classes/barbarian/en-barbarian-resources";
import { bard_resources_en } from "../classes/bard/en/bard-resources-en";
import { cleric_resources_en } from "../classes/cleric/en/cleric-resources-en";
import { druid_resources_en } from "../classes/druid/en/druid-resources-en";
// TODO: Change for the en version
import { resources_spell_slots_es } from "./spell-slots-es";

export const resources_en: GameLocalization = {
  resources: {
    ...barbarian_resources_en,
    ...bard_resources_en,
    ...cleric_resources_en,
    ...druid_resources_en,

    ...resources_spell_slots_es,
  },
};
