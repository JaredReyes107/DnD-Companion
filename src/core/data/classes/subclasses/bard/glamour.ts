import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const GLAMOUR: SubclassTemplate = {
  id: "glamour",
  classId: "bard",
  source: "Xanathar's Guide to Everything",
  progression: {
    3: [
      "bard.glamour.mantle_of_inspiration",
      "bard.glamour.enthralling_performance",
    ],
    6: ["bard.glamour.mantle_of_majesty"],
    14: ["bard.glamour.unbreakable_majesty"],
  },

  featuresByLevel: {
    3: [
      {
        id: "bard.glamour.mantle_of_inspiration",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "action", id: "mantle_of_inspiration" }],
        tags: [],
      },
      {
        id: "bard.glamour.enthralling_performance",
        source: "subclass" as const,
        level: 3,
        grants: [
          { type: "action", id: "enthralling_performance" },
          { type: "resource", id: "enthralling_performance" },
        ],
        tags: [],
      },
    ],

    6: [
      {
        id: "bard.glamour.mantle_of_majesty",
        source: "subclass" as const,
        level: 6,
        grants: [
          { type: "action", id: "mantle_of_majesty" },
          { type: "resource", id: "mantle_of_majesty" },
        ],
        tags: [],
      },
    ],

    14: [
      {
        id: "bard.glamour.unbreakable_majesty",
        source: "subclass" as const,
        level: 14,
        grants: [
          { type: "action", id: "unbreakable_majesty" },
          { type: "resource", id: "unbreakable_majesty" },
        ],
        tags: [],
      },
    ],
  },
};
