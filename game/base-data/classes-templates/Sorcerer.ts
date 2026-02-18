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
        id: "sorcerous_origin",
        label: "Sorcerous Origin",
        source: "class",
        level: 1,
        description: "Choose a sorcerous origin.",
        tags: ["subclass"],
        combatRole: "none",
      },
      {
        id: "spellcasting_sorcerer",
        label: "Spellcasting",
        source: "class",
        level: 1,
        description: "You can cast sorcerer spells.",
      },
    ],

    2: [
      {
        id: "font_of_magic",
        label: "Font of Magic",
        source: "class",
        level: 2,
        description:
          "You gain sorcery points that you can use to create spell slots.",
        combatRole: "active",
        resources: ["sorcery_points"],
        actions: [
          "font_of_magic_to_spellslots",
          "font_of_magic_from_spellslots",
        ],
        tags: ["resource"],
      },
    ],

    3: [
      {
        id: "metamagic",
        label: "Metamagic",
        source: "class",
        level: 3,
        description:
          "You gain the ability to twist your spells to suit your needs.",
        tags: ["choice"],
        // TODO: metamagic system
        // TODO: spell-hook
      },
    ],

    4: [],

    5: [],

    6: [],

    7: [],

    8: [],

    9: [],

    10: [
      {
        id: "metamagic_improvement",
        label: "Metamagic Improvement",
        source: "class",
        level: 10,
        description: "You learn additional Metamagic options.",
        tags: ["spellcasting"],
        // TODO: metamagic system
      },
    ],

    11: [],

    12: [],

    13: [],

    14: [],

    15: [],

    16: [],

    17: [
      {
        id: "metamagic_improvement_2",
        label: "Metamagic Improvement",
        source: "class",
        level: 17,
        description: "You learn even more Metamagic options.",
        tags: ["spellcasting"],
      },
    ],

    18: [],

    19: [],

    20: [
      {
        id: "sorcerous_restoration",
        label: "Sorcerous Restoration",
        source: "class",
        level: 20,
        description: "You regain sorcery points on a short rest.",
        tags: ["resource"],
        // TODO: rest-hook
      },
    ],
  },
};
