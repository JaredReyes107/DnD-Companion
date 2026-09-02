import { GameLocalization } from "../../game-localization.types";

import { barbarian_en } from "./barbarian/en-barbarian";
import { bard_en } from "./bard/en/bard-en";
import { cleric_en } from "./cleric/en/cleric-en";
import { druid_en } from "./druid/en/druid-en";
import { fighter_en } from "./fighter/en/fighter-en";
import { monk_en } from "./monk/en/monk-en";
import { paladin_en } from "./paladin/en/paladin-en";
import { ranger_en } from "./ranger/en/ranger-en";
import { rogue_en } from "./rogue/en/rogue-en";
import { sorcerer_en } from "./sorcerer/en/sorcerer-en";
import { warlock_en } from "./warlock/en/warlock-en";
import { wizard_en } from "./wizard/en/wizard-en";

export const classes_en: GameLocalization = {
  classes: {
    artificer: {
      name: "Artificer",
      description:
        "An expert inventor who blends magic and technology to create infusions, devices, and magical items.",
    },
    ...barbarian_en,
    ...bard_en,
    ...cleric_en,
    ...druid_en,
    ...fighter_en,
    ...monk_en,
    ...paladin_en,
    ...ranger_en,
    ...rogue_en,
    ...sorcerer_en,
    ...warlock_en,
    ...wizard_en,
  },
};
