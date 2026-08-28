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
      },
    ],

    2: [
      {
        id: "eldritch_invocations",
        source: "class" as const,
        level: 2,
        grants: [{ type: "choice", id: "eldritch_invocations" }],
        tags: ["build-choice"],
      },
    ],

    3: [
      {
        id: "pact_boon",
        source: "class" as const,
        level: 3,
        grants: [{ type: "choice", id: "pact_boon" }],
        tags: ["build-choice"],
      },
    ],

    11: [
      {
        id: "mystic_arcanum_6",
        source: "class",
        level: 11,
        tags: ["spellcasting"],
        // TODO: rest-hook
      },
    ],

    13: [
      {
        id: "mystic_arcanum_7",
        source: "class",
        level: 13,
        tags: ["spellcasting"],
      },
    ],

    15: [
      {
        id: "mystic-arcanum_8",
        source: "class",
        level: 15,
        tags: ["spellcasting"],
      },
    ],

    17: [
      {
        id: "mystic_arcanum_9",
        source: "class",
        level: 17,
        tags: ["spellcasting"],
      },
    ],

    20: [
      {
        id: "eldritch_master",
        source: "class" as const,
        level: 20,
        grants: [
          { type: "resource", id: "eldritch_master" },
          { type: "action", id: "eldritch_master" },
        ],
        tags: ["utility"],
      },
    ],
  },
};
