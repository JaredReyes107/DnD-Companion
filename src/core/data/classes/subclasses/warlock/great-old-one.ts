import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const GREAT_OLD_ONE: SubclassTemplate = {
  id: "great_old_one",
  classId: "warlock",
  source: "Player's Handbook",

  featuresByLevel: {
    1: [
      {
        id: "great_old_one_expanded_spells",
        source: "subclass" as const,
        level: 1,
        tags: ["spells"],
      },
      {
        id: "awakened_mind",
        source: "subclass" as const,
        level: 1,
        grants: [{ type: "action", id: "awakened_mind" }],
        tags: ["utility", "communication"],
      },
    ],

    6: [
      {
        id: "entropic_ward",
        source: "subclass" as const,
        level: 6,
        grants: [
          { type: "action", id: "entropic_ward" },
          { type: "resource", id: "entropic_ward" },
        ],
        tags: ["defense", "reaction"],
        // TODO: disadvantage on the attack, plus a conditional
        // follow-up advantage grant on YOUR next attack against the
        // same creature if it misses — roll-affecting throughout,
        // plus a state that persists onto a future action
        // (advantage-on-next-hit-vs-X), not modeled.
      },
    ],

    10: [
      {
        id: "thought_shield",
        source: "subclass" as const,
        level: 10,
        tags: ["passive", "defense", "resistance"],
        // Telepathy immunity + psychic resistance + reflected psychic
        // damage — TODO, not modeled, all passive/automatic riders.
        grants: [{ type: "action", id: "thought_shield" }],
      },
    ],

    14: [
      {
        id: "create_thrall",
        source: "subclass" as const,
        level: 14,
        grants: [{ type: "action", id: "create_thrall" }],
        tags: ["control", "utility"],
        // TODO: charms an incapacitated humanoid indefinitely (until
        // dispelled or reused) — condition hook + open-ended duration
        // not modeled.
      },
    ],
  },
};
