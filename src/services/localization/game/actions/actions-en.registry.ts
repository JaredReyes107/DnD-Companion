import { GameLocalization } from "@/services/localization/game-localization.types";

import { default_actions_en } from "./default-actions-en";

import { barbarian_actions_en } from "../classes/barbarian/en-barbarian-actions";
import { bard_actions_en } from "../classes/bard/en/bard-actions-en";
import { cleric_actions_en } from "../classes/cleric/en/cleric-actions-en";
import { druid_actions_en } from "../classes/druid/en/druid-actions-en";
import { fighter_actions_en } from "../classes/fighter/en/fighter-actions-en";
import { monk_actions_en } from "../classes/monk/en/monk-actions-en";
import { paladin_actions_en } from "../classes/paladin/en/paladin-actions-en";
import { ranger_actions_en } from "../classes/ranger/en/ranger-actions-en";
import { rogue_actions_en } from "../classes/rogue/en/rogue-actions-en";
import { sorcerer_actions_en } from "../classes/sorcerer/en/sorcerer-actions-en";
import { warlock_actions_en } from "../classes/warlock/en/warlock-actions-en";
import { wizard_actions_en } from "../classes/wizard/en/wizard-actions-en";
import { artificer_actions_en } from "../classes/artificer/en/artificer-actions-en";

export const actions_en: GameLocalization = {
  actions: {
    ...default_actions_en,

    ...barbarian_actions_en,
    ...bard_actions_en,
    ...cleric_actions_en,
    ...druid_actions_en,
    ...fighter_actions_en,
    ...monk_actions_en,
    ...paladin_actions_en,
    ...ranger_actions_en,
    ...rogue_actions_en,
    ...sorcerer_actions_en,
    ...warlock_actions_en,
    ...wizard_actions_en,
    ...artificer_actions_en,
  },
};
