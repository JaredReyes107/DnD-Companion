import { ClassTemplate } from "@/core/entities/rules/class-template";

export const WIZARD: ClassTemplate = {
  id: "wizard",
  name: "Wizard",

  hitDie: 6,

  primaryAbilities: ["INT"],
  savingThrows: ["INT", "WIS"],

  spellcastingTemplate: {
    id: "wizard_spellcasting",
    ability: "INT",
    kind: "standard",
    progression: "full",
  },

  featuresByLevel: {
    1: [
      {
        id: "spellcasting_wizard",
        source: "class",
        level: 1,
        tags: ["spellcasting"],
      },
      {
        id: "arcane_recovery",
        source: "class",
        level: 1,
        tags: ["spellcasting"],
        // TODO: rest-hook
        // TODO: spell-slot recovery
      },
    ],

    2: [],

    3: [],

    4: [],

    5: [],

    6: [],

    7: [],

    8: [],

    9: [],

    10: [],

    11: [],

    12: [],

    13: [],

    14: [],

    15: [],

    16: [],

    17: [],

    18: [
      {
        id: "spell_mastery",
        source: "class",
        level: 18,
        tags: ["spellcasting"],
        // TODO: at-will spell system
      },
    ],

    19: [],

    20: [
      {
        id: "signature_spells",
        source: "class",
        level: 20,
        tags: ["spellcasting"],
        // TODO: preparation override
      },
    ],
  },
};
