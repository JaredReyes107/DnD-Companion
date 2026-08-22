import { GameLocalization } from "@/services/localization/game-localization.types";

import { barbarian_actions_en } from "../classes/barbarian/en-barbarian-actions";
import { bard_actions_en } from "../classes/bard/en/bard-actions-en";
import { cleric_actions_en } from "../classes/cleric/en/cleric-actions-en";
import { druid_actions_en } from "../classes/druid/en/druid-actions-en";
import { fighter_actions_en } from "../classes/fighter/en/fighter-actions-en";
import { monk_actions_en } from "../classes/monk/en/monk-actions-en";
import { paladin_actions_en } from "../classes/paladin/en/paladin-actions-en";

export const actions_en: GameLocalization = {
  actions: {
    ...barbarian_actions_en,
    ...bard_actions_en,
    ...cleric_actions_en,
    ...druid_actions_en,
    ...fighter_actions_en,
    ...monk_actions_en,
    ...paladin_actions_en,
  },
};
