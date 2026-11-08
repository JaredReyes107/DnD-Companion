import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const SWORDS: SubclassTemplate = {
  id: "swords",
  classId: "bard",
  source: "Xanathar's Guide to Everything",
  progression: {
    3: [
      "bard.swords.bonus_proficiencies_swords",
      "bard.swords.fighting_style",
      "bard.swords.blade_flourish",
    ],
    6: ["extra_attack"],
    14: ["bard.swords.masters_flourish"],
  },

  featuresByLevel: {
    3: [
      {
        id: "bard.swords.bonus_proficiencies_swords",
        source: "subclass" as const,
        level: 3,
        tags: ["build-choice"],
        // TODO: add proficiencies
      },
      {
        id: "bard.swords.fighting_style",
        source: "subclass" as const,
        level: 3,
        tags: ["build-choice"],
        // TODO: add fighting styles selection
      },
      {
        id: "bard.swords.blade_flourish",
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
        id: "bard.swords.masters_flourish",
        source: "subclass" as const,
        level: 14,
        tags: [],
        // TODO: Enable selection on Flurishes. To spend or not Bardic Inspirations
      },
    ],
  },
};
