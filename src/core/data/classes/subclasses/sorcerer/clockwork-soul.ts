import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const CLOCKWORK_SOUL: SubclassTemplate = {
  id: "clockwork_soul",
  classId: "sorcerer",
  source: "Tasha's Cauldron of Everything",

  featuresByLevel: {
    1: [
      {
        id: "clockwork_magic",
        source: "subclass" as const,
        level: 1,
        tags: ["spells"],
      },
      {
        id: "restore_balance",
        source: "subclass" as const,
        level: 1,
        grants: [
          { type: "action", id: "restore_balance" },
          { type: "resource", id: "restore_balance" },
        ],
        tags: ["control", "reaction"],
      },
    ],

    6: [
      {
        id: "bastion_of_law",
        source: "subclass" as const,
        level: 6,
        grants: [{ type: "action", id: "bastion_of_law" }],
        tags: ["defense", "buff"],
      },
    ],

    14: [
      {
        id: "trance_of_order",
        source: "subclass" as const,
        level: 14,
        grants: [
          { type: "action", id: "trance_of_order" },
          { type: "resource", id: "trance_of_order" },
        ],
        tags: ["combat", "buff", "bonus-action"],
      },
    ],

    18: [
      {
        id: "clockwork_cavalcade",
        source: "subclass" as const,
        level: 18,
        grants: [
          { type: "action", id: "clockwork_cavalcade" },
          { type: "resource", id: "clockwork_cavalcade" },
        ],
        tags: ["healing", "utility", "combat", "aoe"],
      },
    ],
  },
};
