import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { berserker_actions_en } from "./subclasses/berserker/en/en-berserker-actions";
import { ancestral_guardian_actions_en } from "./subclasses/ancestral-guardian/en/en-ancestral-guardian-actions";
import { zealot_actions_en } from "./subclasses/zealot/en/en-zealot-actions";

const barbarian_subclass_actions_en: GameLocalizationCategory = {
  ...berserker_actions_en,
  ...ancestral_guardian_actions_en,
  ...zealot_actions_en,
};

export const barbarian_actions_en: GameLocalizationCategory = {
  rage: {
    name: "Rage",
    description: "",
  },

  ...barbarian_subclass_actions_en,
};
