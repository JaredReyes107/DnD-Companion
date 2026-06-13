import { GameLocalization } from "@/services/localization/game-localization.types";

import { barbarian_actions_en } from "../classes/barbarian/en-barbarian-actions";

export const actions_en: GameLocalization = {
  actions: {
    ...barbarian_actions_en,
  },
};
