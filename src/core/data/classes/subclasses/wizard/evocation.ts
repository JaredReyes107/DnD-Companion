import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const EVOCATION: SubclassTemplate = {
  id: "evocation",
  classId: "wizard",
  source: "Player's Handbook",

  featuresByLevel: {
    2: [
      {
        id: "wizard.evocation.evocation_savant",
        source: "subclass" as const,
        level: 2,
        tags: ["downtime", "spells"],
      },
      {
        id: "wizard.evocation.sculpt_spells",
        source: "subclass" as const,
        level: 2,
        tags: ["control"],
      },
    ],

    6: [
      {
        id: "wizard.evocation.potent_cantrip",
        source: "subclass" as const,
        level: 6,
        tags: ["combat", "damage"],
      },
    ],

    10: [
      {
        id: "wizard.evocation.empowered_evocation",
        source: "subclass" as const,
        level: 10,
        tags: ["combat", "damage"],
      },
    ],

    14: [
      {
        id: "wizard.evocation.overchannel",
        source: "subclass" as const,
        level: 14,
        grants: [
          { type: "action", id: "overchannel" },
          { type: "resource", id: "overchannel" },
        ],
        tags: ["combat", "damage"],
      },
    ],
  },
};
