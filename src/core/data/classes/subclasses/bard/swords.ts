import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const SWORDS: SubclassTemplate = {
  id: "swords",
  classId: "bard",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    3: [
      {
        id: "bonus_proficiencies",
        source: "subclass" as const,
        level: 3,
        tags: ["build-choice"],
        // TODO: add proficiencies
      },
      {
        id: "fighting_style",
        source: "subclass" as const,
        level: 3,
        tags: ["build-choice"],
        // TODO: add fighting styles selection
      },
      {
        id: "blade_flourish",
        source: "subclass" as const,
        level: 3,
        tags: ["build-choice"],
        // TODO: Attack hook. +10 speed after Attack action, + enable flourish if weapon attack
      },
    ],

    6: [
      {
        id: "extra_attack",
        source: "subclass" as const,
        level: 6,
        tags: [],
        // TODO: Replace regular 'Attack' action
      },
    ],

    14: [
      {
        id: "masters_flourish",
        source: "subclass" as const,
        level: 14,
        tags: [],
        // TODO: Enable selection on Flurishes. To spend or not Bardic Inspirations
      },
    ],
  },
};
