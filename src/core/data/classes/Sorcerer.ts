import { ClassTemplate } from "@/core/entities/rules/class-template";

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
        source: "class",
        level: 1,
        tags: ["subclass"],
        combatRole: "none",
      },
      {
        id: "spellcasting_sorcerer",
        source: "class",
        level: 1,
      },
    ],

    2: [
      {
        id: "font_of_magic",
        source: "class",
        level: 2,
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
        source: "class",
        level: 3,
        tags: ["build-choice"],
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
        source: "class",
        level: 10,
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
        source: "class",
        level: 17,
        tags: ["spellcasting"],
      },
    ],

    18: [],

    19: [],

    20: [
      {
        id: "sorcerous_restoration",
        source: "class",
        level: 20,
        tags: ["resource"],
        // TODO: rest-hook
      },
    ],
  },
};
