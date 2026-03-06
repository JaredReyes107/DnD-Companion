import { ClassTemplate } from "@/game/data/templates/class-template";

export const WARLOCK: ClassTemplate = {
  id: "warlock",
  name: "Warlock",

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
        label: "Otherworldly Patron",
        source: "class",
        level: 1,
        description: "You form a pact with a powerful entity.",
        tags: ["subclass"],
      },
      {
        id: "pact_magic",
        label: "Pact Magic",
        source: "class",
        level: 1,
        description: "You can cast warlock spells using Pact Magic.",
        tags: ["spellcasting"],
        // TODO: pact-magic system
      },
    ],

    2: [
      {
        id: "eldritch_invocations",
        label: "Eldritch Invocations",
        source: "class",
        level: 2,
        description: "You gain magical invocations.",
        tags: ["customization"],
        // TODO: invocation system
      },
    ],

    3: [
      {
        id: "pact_boon",
        label: "Pact Boon",
        source: "class",
        level: 3,
        description: "Your patron bestows a gift upon you.",
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
        label: "Mystic Arcanum (6th)",
        source: "class",
        level: 11,
        description: "You can cast a powerful spell once per long rest.",
        tags: ["spellcasting"],
        // TODO: arcanum system
        // TODO: rest-hook
      },
    ],

    12: [],

    13: [
      {
        id: "mystic_arcanum_7",
        label: "Mystic Arcanum (7th)",
        source: "class",
        level: 13,
        description: "You gain another arcanum.",
        tags: ["spellcasting"],
      },
    ],

    14: [],

    15: [
      {
        id: "mystic-arcanum-8",
        label: "Mystic Arcanum (8th)",
        source: "class",
        level: 15,
        description: "You gain another arcanum.",
        tags: ["spellcasting"],
      },
    ],

    16: [],

    17: [
      {
        id: "mystic_arcanum_9",
        label: "Mystic Arcanum (9th)",
        source: "class",
        level: 17,
        description: "You gain your final arcanum.",
        tags: ["spellcasting"],
      },
    ],

    18: [],

    19: [],

    20: [
      {
        id: "eldritch_master",
        label: "Eldritch Master",
        source: "class",
        level: 20,
        description: "You can regain Pact Magic spell slots.",
        tags: ["spellcasting"],
        // TODO: rest-hook
      },
    ],
  },
};
