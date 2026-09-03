import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const CONJURATION: SubclassTemplate = {
  id: "conjuration",
  classId: "wizard",
  source: "Player's Handbook",

  featuresByLevel: {
    2: [
      {
        id: "conjuration_savant",
        source: "subclass" as const,
        level: 2,
        tags: ["downtime", "spells"],
      },
      {
        id: "minor_conjuration",
        source: "subclass" as const,
        level: 2,
        grants: [{ type: "action", id: "minor_conjuration" }],
        tags: ["utility"],
      },
    ],

    6: [
      {
        id: "benign_transposition",
        source: "subclass" as const,
        level: 6,
        grants: [
          { type: "action", id: "benign_transposition" },
          { type: "resource", id: "benign_transposition" },
        ],
        tags: ["movement", "teleportation"],
      },
    ],

    10: [
      {
        id: "focused_conjuration",
        source: "subclass" as const,
        level: 10,
        tags: ["concentration"],
      },
    ],

    14: [
      {
        id: "durable_summons",
        source: "subclass" as const,
        level: 14,
        tags: ["summoning"],
      },
    ],
  },
};
