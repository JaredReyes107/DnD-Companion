import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const CONJURATION: SubclassTemplate = {
  id: "conjuration",
  classId: "wizard",
  source: "Player's Handbook",
  progression: {
    2: [
      "wizard.conjuration.conjuration_savant",
      "wizard.conjuration.minor_conjuration",
    ],
    6: ["wizard.conjuration.benign_transposition"],
    10: ["wizard.conjuration.focused_conjuration"],
    14: ["wizard.conjuration.durable_summons"],
  },

  featuresByLevel: {
    2: [
      {
        id: "wizard.conjuration.conjuration_savant",
        source: "subclass" as const,
        level: 2,
        tags: ["downtime", "spells"],
      },
      {
        id: "wizard.conjuration.minor_conjuration",
        source: "subclass" as const,
        level: 2,
        grants: [{ type: "action", id: "minor_conjuration" }],
        tags: ["utility"],
      },
    ],

    6: [
      {
        id: "wizard.conjuration.benign_transposition",
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
        id: "wizard.conjuration.focused_conjuration",
        source: "subclass" as const,
        level: 10,
        tags: ["concentration"],
      },
    ],

    14: [
      {
        id: "wizard.conjuration.durable_summons",
        source: "subclass" as const,
        level: 14,
        tags: ["summoning"],
      },
    ],
  },
};
