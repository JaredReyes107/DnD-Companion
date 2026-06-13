import { GameLocalization } from "../../game-localization.types";

import { barbarian_resources_en } from "../classes/barbarian/en-barbarian-resources";
// TODO: Change for the en version
import { resources_spell_slots_es } from "./spell-slots-es";

export const resources_en: GameLocalization = {
  resources: {
    ...barbarian_resources_en,

    ...resources_spell_slots_es,
  },
};
