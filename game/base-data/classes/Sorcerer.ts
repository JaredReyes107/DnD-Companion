/* eslint-disable prettier/prettier */
import { ClassTemplate } from "@/game/types/templates/class-template";

export const SORCERER: ClassTemplate = {
  id: "sorcerer",
  name: "Sorcerer",

  hitDie: 6,

  primaryAbilities: ["CHA"],
  savingThrows: ["CON", "CHA"],

  spellcastingTemplate: {
    id: "sorcerer_spellcasting",
    ability: "CHA",
    kind: "standard",
    progression: "full",
  },

  featuresByLevel: {
    1: [
      {
        id: "sorcerous-origin",
        label: "Sorcerous Origin",
        source: "class",
        level: 1,
        description: "Choose a sorcerous origin.",
        tags: ["subclass"],
        combatRole: "none"
      },
      {
        id: "spellcasting-sorcerer",
        label: "Spellcasting",
        source: "class",
        level: 1,
        description: "You can cast sorcerer spells.",
        combatRole: "passive"
      },
    ],

    2: [
      {
        id: "font-of-magic",
        label: "Font of Magic",
        source: "class",
        level: 2,
        description: "You gain sorcery points that you can use to create spell slots.",
        tags: ["resource"],
        combatRole: "active",
        resources: ["sorcery_points"]
      },
    ],

    3: [
      {
        id: "metamagic",
        label: "Metamagic",
        source: "class",
        level: 3,
        description: "You gain the ability to twist your spells to suit your needs.",
        tags: ["choice"],
        combatRole: "active"
      },
    ],
  },
};
