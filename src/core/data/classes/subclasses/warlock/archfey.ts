import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ARCHFEY: SubclassTemplate = {
  id: "archfey",
  classId: "warlock",
  source: "Player's Handbook",

  featuresByLevel: {
    1: [
      {
        id: "archfey_expanded_spells",
        source: "subclass" as const,
        level: 1,
        tags: ["spells"],
      },
      {
        id: "fey_presence",
        source: "subclass" as const,
        level: 1,
        grants: [
          { type: "action", id: "fey_presence" },
          { type: "resource", id: "fey_presence" },
        ],
        tags: ["combat", "control", "aoe"],
      },
    ],

    6: [
      {
        id: "misty_escape",
        source: "subclass" as const,
        level: 6,
        grants: [
          { type: "action", id: "misty_escape" },
          { type: "resource", id: "misty_escape" },
        ],
        tags: ["defense", "movement", "reaction"],
      },
    ],

    10: [
      {
        id: "beguiling_defenses",
        source: "subclass" as const,
        level: 10,
        grants: [{ type: "action", id: "beguiling_defenses" }],
        // TODO: Modifier. Charm inmunity
        tags: ["defense", "reaction", "control"],
      },
    ],

    14: [
      {
        id: "dark_delirium",
        source: "subclass" as const,
        level: 14,
        grants: [
          { type: "action", id: "dark_delirium" },
          { type: "resource", id: "dark_delirium" },
        ],
        tags: ["combat", "control", "concentration"],
      },
    ],
  },
};
