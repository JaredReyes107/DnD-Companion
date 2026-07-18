import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ORDER: SubclassTemplate = {
  id: "order",
  classId: "cleric",

  featuresByLevel: {
    1: [
      {
        id: "order_domain_spells",
        source: "subclass" as const,
        level: 1,
        tags: ["spells"],
      },
      {
        id: "bonus_proficiencies",
        source: "subclass" as const,
        level: 1,
        tags: ["skill-proficiencies", "armor-proficiencies"],
      },
      {
        id: "voice_of_authority",
        source: "subclass" as const,
        level: 1,
        grants: [{ type: "action", id: "voice_of_authority" }],
        tags: ["combat", "support"],
      },
    ],

    2: [
      {
        id: "channel_divinity_orders_demand",
        source: "subclass" as const,
        level: 2,
        grants: [{ type: "action", id: "channel_divinity_orders_demand" }],
        tags: ["combat", "crowd-control", "charm"],
      },
    ],

    6: [
      {
        id: "embodiment_of_the_law",
        source: "subclass" as const,
        level: 6,
        grants: [
          { type: "action", id: "embodiment_of_the_law" },
          { type: "resource", id: "embodiment_of_the_law" },
        ],
        tags: ["combat", "action-economy"],
      },
    ],

    8: [
      {
        id: "divine_strike",
        source: "subclass" as const,
        level: 8,
        tags: [],
      },
    ],

    17: [
      {
        id: "orders_wrath",
        source: "subclass" as const,
        level: 17,
        tags: ["passive", "damage"],
      },
    ],
  },
};
