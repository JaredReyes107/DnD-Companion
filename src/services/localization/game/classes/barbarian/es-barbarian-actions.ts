import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { berserker_actions_es } from "./subclasses/berserker/es/es-berserker-actions";
import { ancestral_guardian_actions_es } from "./subclasses/ancestral-guardian/es/es-ancestral-guardian-actions";
import { zealot_actions_es } from "./subclasses/zealot/es/es-zealot-actions";

const barbarian_subclass_actions_es: GameLocalizationCategory = {
  ...berserker_actions_es,
  ...ancestral_guardian_actions_es,
  ...zealot_actions_es,
};

export const barbarian_actions_es: GameLocalizationCategory = {
  rage: {
    name: "Furia",
    description: "",
  },

  ...barbarian_subclass_actions_es,
};
