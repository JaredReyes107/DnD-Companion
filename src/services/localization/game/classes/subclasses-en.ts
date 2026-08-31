import { GameLocalization } from "@/services/localization/game-localization.types";

import { barbarian_subclasses_en } from "./barbarian/en-barbarian-subclasses";
import { bard_subclasses_en } from "./bard/en/bard-subclasses-en";
import { cleric_subclasses_en } from "./cleric/en/cleric-subclasses-en";
import { druid_subclasses_en } from "./druid/en/druid-subclasses-en";
import { fighter_subclasses_en } from "./fighter/en/fighter-subclasses-en";
import { monk_subclasses_en } from "./monk/en/monk-subclasses-en";
import { paladin_subclasses_en } from "./paladin/en/paladin-subclasses-en";
import { ranger_subclasses_en } from "./ranger/en/ranger-subclasses-en";
import { rogue_subclasses_en } from "./rogue/en/rogue-subclasses-en";
import { sorcerer_subclasses_en } from "./sorcerer/en/sorcerer-subclasses-en";
import { warlock_subclasses_en } from "./warlock/en/warlock-subclasses-en";

export const subclasses_en: GameLocalization = {
  subclasses: {
    ...barbarian_subclasses_en,
    ...bard_subclasses_en,
    ...cleric_subclasses_en,
    ...druid_subclasses_en,
    ...fighter_subclasses_en,
    ...monk_subclasses_en,
    ...paladin_subclasses_en,
    ...ranger_subclasses_en,
    ...rogue_subclasses_en,
    ...sorcerer_subclasses_en,
    ...warlock_subclasses_en,
  },
};
