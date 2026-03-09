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
        label: "Spellcasting",
        source: "class",
        level: 1,
        description: "You can cast wizard spells.",
        tags: ["spellcasting"],
      },
      {
        id: "arcane_recovery",
        label: "Arcane Recovery",
        source: "class",
        level: 1,
        description: "You can recover spell slots during a short rest.",
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
        label: "Spell Mastery",
        source: "class",
        level: 18,
        description: "You can cast certain spells at will.",
        tags: ["spellcasting"],
        // TODO: at-will spell system
      },
    ],

    19: [],

    20: [
      {
        id: "signature_spells",
        label: "Signature Spells",
        source: "class",
        level: 20,
        description: "You always have certain spells prepared.",
        tags: ["spellcasting"],
        // TODO: preparation override
      },
    ],
  },
};
