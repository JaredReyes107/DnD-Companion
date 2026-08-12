import { ClassTemplate } from "@/core/entities/rules/class-template";

export const WARLOCK: ClassTemplate = {
  id: "warlock",

  hitDie: 8,

  primaryAbilities: ["CHA"],
  savingThrows: ["INT", "CHA"],

  spellcastingTemplate: {
    id: "warlock_spellcasting",
    ability: "CHA",
    kind: "pact",
  },

  featuresByLevel: {
    1: [
      {
        id: "otherworldly_patron",
        source: "class",
        level: 1,
        tags: ["subclass"],
      },
      {
        id: "pact_magic",
        source: "class",
        level: 1,
        tags: ["spellcasting"],
        // TODO: pact-magic system
      },
    ],

    2: [
      {
        id: "eldritch_invocations",
        source: "class",
        level: 2,
        tags: ["customization"],
        // TODO: invocation system
      },
    ],

    3: [
      {
        id: "pact_boon",
        source: "class",
        level: 3,
        tags: ["build-choice"],
        // TODO: pact-specific systems
      },
    ],

    4: [],

    5: [],

    6: [],

    7: [],

    8: [],

    9: [],

    10: [],

    11: [
      {
        id: "mystic_arcanum_6",
        source: "class",
        level: 11,
        tags: ["spellcasting"],
        // TODO: arcanum system
        // TODO: rest-hook
      },
    ],

    12: [],

    13: [
      {
        id: "mystic_arcanum_7",
        source: "class",
        level: 13,
        tags: ["spellcasting"],
      },
    ],

    14: [],

    15: [
      {
        id: "mystic-arcanum-8",
        source: "class",
        level: 15,
        tags: ["spellcasting"],
      },
    ],

    16: [],

    17: [
      {
        id: "mystic_arcanum_9",
        source: "class",
        level: 17,
        tags: ["spellcasting"],
      },
    ],

    18: [],

    19: [],

    20: [
      {
        id: "eldritch_master",
        source: "class",
        level: 20,
        tags: ["spellcasting"],
        // TODO: rest-hook
      },
    ],
  },
};
