/* eslint-disable prettier/prettier */
import { ClassTemplate } from "@/game/types/templates/ClassTemplate";

export const BARD: ClassTemplate = {
  id: "bard",
  name: "Bard",

  hitDie: 8,

  primaryAbilities: ["CHA"],
  savingThrows: ["DEX", "CHA"],

  spellcasting: {
    type: "full",
    ability: "CHA",
  },

  featuresByLevel: {
    1: [
      {
        id: "bardic-inspiration",
        name: "Bardic Inspiration",
        source: "class",
        level: 1,
        description: "You can inspire others through stirring words or music.",
        tags: ["resource", "support"],
        combatRole: "active"
      },
      {
        id: "spellcasting-bard",
        name: "Spellcasting",
        source: "class",
        level: 1,
        description: "You can cast bard spells.",
        combatRole: "passive"
      },
    ],

    2: [
      {
        id: "jack-of-all-trades",
        name: "Jack of All Trades",
        source: "class",
        level: 2,
        description: "Add half your proficiency bonus to any ability check you aren't proficient in.",
        tags: ["passive"],
        combatRole: "passive"
      },
      {
        id: "song-of-rest",
        name: "Song of Rest",
        source: "class",
        level: 2,
        description: "Your music helps revitalize wounded allies during a short rest.",
        combatRole: "none"
      },
    ],

    3: [
      {
        id: "bard-college",
        name: "Bard College",
        source: "class",
        level: 3,
        description: "Choose a bard college.",
        tags: ["choice"],
        combatRole: "none"
      },
    ],
  },
};
