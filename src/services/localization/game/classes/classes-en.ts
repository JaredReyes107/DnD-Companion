import { GameLocalization } from "../../game-localization.types";

import { barbarian_en } from "./barbarian/en-barbarian";
import { bard_en } from "./bard/en/bard-en";
import { cleric_en } from "./cleric/en/cleric-en";
import { druid_en } from "./druid/en/druid-en";
import { fighter_en } from "./fighter/en/fighter-en";
import { monk_en } from "./monk/en/monk-en";
import { paladin_en } from "./paladin/en/paladin-en";

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
    ranger: {
      name: "Ranger",
      description:
        "A skilled hunter and tracker who excels at survival, ranged combat, and nature magic.",
    },
    rogue: {
      name: "Rogue",
      description:
        "A specialist in stealth and precision, adept at exploiting an enemy’s weaknesses.",
    },
    sorcerer: {
      name: "Sorcerer",
      description:
        "A spellcaster whose magical power is innate, born of a bloodline or extraordinary event.",
    },
    warlock: {
      name: "Warlock",
      description:
        "A wielder of magic who gains power through a pact with a supernatural entity.",
    },
    wizard: {
      name: "Wizard",
      description:
        "A scholar of arcane magic who learns and masters spells through study and preparation.",
    },
  },
};
