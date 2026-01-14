/* eslint-disable prettier/prettier */
import { ClassTemplate } from "@/game/types/templates/class-template";

export const SORCERER: ClassTemplate = {
  id: "sorcerer",
  name: "Sorcerer",

  hitDie: 6,

  primaryAbilities: ["CHA"],
  savingThrows: ["CON", "CHA"],

  spellcasting: {
    type: "full",
    ability: "CHA",
  },

  featuresByLevel: {
    1: [
      {
        id: "sorcerous-origin",
        name: "Sorcerous Origin",
        source: "class",
        level: 1,
        description: "Choose a sorcerous origin.",
        tags: ["choice"],
        combatRole: "none"
      },
      {
        id: "spellcasting-sorcerer",
        name: "Spellcasting",
        source: "class",
        level: 1,
        description: "You can cast sorcerer spells.",
        combatRole: "passive"
      },
    ],

    2: [
      {
        id: "font-of-magic",
        name: "Font of Magic",
        source: "class",
        level: 2,
        description: "You gain sorcery points that you can use to create spell slots.",
        tags: ["resource"],
        combatRole: "active"
      },
    ],

    3: [
      {
        id: "metamagic",
        name: "Metamagic",
        source: "class",
        level: 3,
        description: "You gain the ability to twist your spells to suit your needs.",
        tags: ["choice"],
        combatRole: "active"
      },
    ],
  },
};
