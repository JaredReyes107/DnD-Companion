import { GameLocalization } from "@/services/localization/game-localization.types";

import { barbarian_actions_en } from "../classes/barbarian/en-barbarian-actions";
import { bard_actions_en } from "../classes/bard/en/bard-actions-en";
import { cleric_actions_en } from "../classes/cleric/en/cleric-actions-en";

export const actions_en: GameLocalization = {
  actions: {
    ...barbarian_actions_en,
    ...bard_actions_en,
    ...cleric_actions_en,
  },
};
