import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { zealot_resources_es } from "./subclasses/zealot/es/es-zealot-resources";
import { beast_resources_es } from "./subclasses/beast/es/es-beast-resources";
import { wild_magic_resources_es } from "./subclasses/wild-magic/es/es-wild-magic-resources";

const barbarian_subclass_resources_es: GameLocalizationCategory = {
  ...zealot_resources_es,

  ...beast_resources_es,
  ...wild_magic_resources_es,
};

export const barbarian_resources_es: GameLocalizationCategory = {
  rage: {
    name: "Furia",
    description: "",
  },

  ...barbarian_subclass_resources_es,
};
