import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const MONSTER_SLAYER: SubclassTemplate = {
  id: "monster_slayer",
  classId: "ranger",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    3: [
      {
        id: "monster_slayer_magic",
        source: "subclass" as const,
        level: 3,
        tags: ["spells"],
      },
      {
        id: "hunters_sense",
        source: "subclass" as const,
        level: 3,
        grants: [
          { type: "action", id: "hunters_sense" },
          { type: "resource", id: "hunters_sense" },
        ],
        tags: ["utility", "senses"],
      },
      {
        id: "slayers_prey",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "action", id: "slayers_prey" }],
        tags: ["combat", "damage", "buff"],
      },
    ],

    7: [
      {
        id: "supernatural_defense",
        source: "subclass" as const,
        level: 7,
        grants: [{ type: "action", id: "supernatural_defense" }],
        tags: ["passive", "defense"],
      },
    ],

    11: [
      {
        id: "magic_users_nemesis",
        source: "subclass" as const,
        level: 11,
        grants: [
          { type: "action", id: "magic_users_nemesis" },
          { type: "resource", id: "magic_users_nemesis" },
        ],
        tags: ["control", "reaction"],
      },
    ],

    15: [
      {
        id: "slayers_counter",
        source: "subclass" as const,
        level: 15,
        grants: [{ type: "action", id: "slayers_counter" }],
        tags: ["combat", "reaction"],
      },
    ],
  },
};
