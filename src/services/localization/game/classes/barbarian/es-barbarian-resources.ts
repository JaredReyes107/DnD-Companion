import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { zealot_resources_es } from "./subclasses/zealot/es/es-zealot-resources";

const barbarian_subclass_resources_es: GameLocalizationCategory = {
  ...zealot_resources_es,
};

export const resources_barbarian_es: GameLocalizationCategory = {
  rage: {
    name: "Furia",
    description: "",
  },

  ...barbarian_subclass_resources_es,
};
