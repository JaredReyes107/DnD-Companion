import { GameLocalization } from "@/services/localization/game-localization.types";

import { barbarian_subclasses_en } from "./barbarian/en-barbarian-subclasses";
import { bard_subclasses_en } from "./bard/en/bard-subclasses-en";
import { cleric_subclasses_en } from "./cleric/en/cleric-subclasses-en";
import { druid_subclasses_en } from "./druid/en/druid-subclasses-en";
import { fighter_subclasses_en } from "./fighter/en/fighter-subclasses-en";
import { monk_subclasses_en } from "./monk/en/monk-subclasses-en";

export const subclasses_en: GameLocalization = {
  subclasses: {
    ...barbarian_subclasses_en,
    ...bard_subclasses_en,
    ...cleric_subclasses_en,
    ...druid_subclasses_en,
    ...fighter_subclasses_en,
    ...monk_subclasses_en,
  },
};
