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
  progression: {
    1: ["warlock.otherworldly_patron", "warlock.pact_magic"],
    2: ["warlock.eldritch_invocations"],
    3: ["warlock.pact_boon"],
    11: ["warlock.mystic_arcanum_6"],
    13: ["warlock.mystic_arcanum_7"],
    15: ["warlock.mystic-arcanum_8"],
    17: ["warlock.mystic_arcanum_9"],
    20: ["warlock.eldritch_master"],
  },

  featuresByLevel: {
    1: [
      {
        id: "warlock.otherworldly_patron",
        source: "class",
        level: 1,
        tags: ["subclass"],
      },
      {
        id: "warlock.pact_magic",
        source: "class",
        level: 1,
        tags: ["spellcasting"],
      },
    ],

    2: [
      {
        id: "warlock.eldritch_invocations",
        source: "class" as const,
        level: 2,
        grants: [{ type: "choice", id: "eldritch_invocations", picks: 2 }],
        tags: ["build-choice"],
      },
    ],

    3: [
      {
        id: "warlock.pact_boon",
        source: "class" as const,
        level: 3,
        grants: [{ type: "choice", id: "pact_boon", picks: 1 }],
        tags: ["build-choice"],
      },
    ],

    11: [
      {
        id: "warlock.mystic_arcanum_6",
        source: "class",
        level: 11,
        tags: ["spellcasting"],
        // TODO: rest-hook
      },
    ],

    13: [
      {
        id: "warlock.mystic_arcanum_7",
        source: "class",
        level: 13,
        tags: ["spellcasting"],
      },
    ],

    15: [
      {
        id: "warlock.mystic-arcanum_8",
        source: "class",
        level: 15,
        tags: ["spellcasting"],
      },
    ],

    17: [
      {
        id: "warlock.mystic_arcanum_9",
        source: "class",
        level: 17,
        tags: ["spellcasting"],
      },
    ],

    20: [
      {
        id: "warlock.eldritch_master",
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
