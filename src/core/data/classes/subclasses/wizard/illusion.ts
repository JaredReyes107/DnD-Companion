import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ILLUSION: SubclassTemplate = {
  id: "illusion",
  classId: "wizard",
  source: "Player's Handbook",

  featuresByLevel: {
    2: [
      {
        id: "illusion_savant",
        source: "subclass" as const,
        level: 2,
        tags: ["proficiency", "passive"],
      },
      {
        id: "improved_minor_illusion",
        source: "subclass" as const,
        level: 2,
        tags: ["spells", "passive"],
        // TODO: Overrides spell 'Minor Illusion'
      },
    ],

    6: [
      {
        id: "malleable_illusions",
        source: "subclass" as const,
        level: 6,
        grants: [{ type: "action", id: "malleable_illusions" }],
        tags: ["utility", "spells"],
      },
    ],

    10: [
      {
        id: "illusory_self",
        source: "subclass" as const,
        level: 10,
        grants: [
          { type: "action", id: "illusory_self" },
          { type: "resource", id: "illusory_self" },
        ],
        tags: ["defense", "reaction"],
      },
    ],

    14: [
      {
        id: "illusory_reality",
        source: "subclass" as const,
        level: 14,
        grants: [{ type: "action", id: "illusory_reality" }],
        tags: ["utility", "spells", "bonus-action"],
      },
    ],
  },
};
