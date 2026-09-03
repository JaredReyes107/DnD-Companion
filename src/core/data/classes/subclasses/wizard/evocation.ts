import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const EVOCATION: SubclassTemplate = {
  id: "evocation",
  classId: "wizard",
  source: "Player's Handbook",

  featuresByLevel: {
    2: [
      {
        id: "evocation_savant",
        source: "subclass" as const,
        level: 2,
        tags: ["downtime", "spells"],
      },
      {
        id: "sculpt_spells",
        source: "subclass" as const,
        level: 2,
        tags: ["control"],
      },
    ],

    6: [
      {
        id: "potent_cantrip",
        source: "subclass" as const,
        level: 6,
        tags: ["combat", "damage"],
      },
    ],

    10: [
      {
        id: "empowered_evocation",
        source: "subclass" as const,
        level: 10,
        tags: ["combat", "damage"],
      },
    ],

    14: [
      {
        id: "overchannel",
        source: "subclass" as const,
        level: 14,
        grants: [{ type: "action", id: "overchannel" }],
        tags: ["combat", "damage"],
      },
    ],
  },
};
