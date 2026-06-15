import { GameLocalization } from "../../game-localization.types";

import { barbarian_es } from "./barbarian/es-barbarian";
import { bard_en } from "./bard/en/bard-en";

export const classes_en: GameLocalization = {
  classes: {
    artificer: {
      name: "Artificer",
      description:
        "An expert inventor who blends magic and technology to create infusions, devices, and magical items.",
    },
    ...barbarian_es,
    ...bard_en,
    cleric: {
      name: "Cleric",
      description:
        "A divine champion who channels the power of a deity to heal, protect, and smite foes.",
    },
    druid: {
      name: "Druid",
      description:
        "A guardian of nature who draws power from spirits and the primal forces of the world.",
    },
    fighter: {
      name: "Fighter",
      description:
        "A versatile combatant, skilled in physical combat and the use of weapons and armor.",
    },
    monk: {
      name: "Monk",
      description:
        "A disciplined warrior who channels inner energy to perform extraordinary physical feats.",
    },
    paladin: {
      name: "Paladin",
      description:
        "A holy warrior bound by a sacred oath, combining martial prowess and divine power.",
    },
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
