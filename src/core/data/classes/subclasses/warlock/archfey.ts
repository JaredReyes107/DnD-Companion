import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ARCHFEY: SubclassTemplate = {
  id: "archfey",
  classId: "warlock",
  source: "Player's Handbook",
  progression: {
    1: [
      "warlock.archfey.archfey_expanded_spells",
      "warlock.archfey.fey_presence",
    ],
    6: ["warlock.archfey.misty_escape"],
    10: ["warlock.archfey.beguiling_defenses"],
    14: ["warlock.archfey.dark_delirium"],
  },

  featuresByLevel: {
    1: [
      {
        id: "warlock.archfey.archfey_expanded_spells",
        source: "subclass" as const,
        level: 1,
        tags: ["spells"],
      },
      {
        id: "warlock.archfey.fey_presence",
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
        id: "warlock.archfey.misty_escape",
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
        id: "warlock.archfey.beguiling_defenses",
        source: "subclass" as const,
        level: 10,
        grants: [{ type: "action", id: "beguiling_defenses" }],
        // TODO: Modifier. Charm inmunity
        tags: ["defense", "reaction", "control"],
      },
    ],

    14: [
      {
        id: "warlock.archfey.dark_delirium",
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
