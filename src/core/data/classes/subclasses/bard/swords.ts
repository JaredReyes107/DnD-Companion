import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const SWORDS: SubclassTemplate = {
  id: "swords",
  classId: "bard",
  name: "College of Swords",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    3: [
      {
        id: "bonus_proficiencies",
        label: "",
        source: "subclass" as const,
        level: 3,
        description: "",
        tags: ["choice"],
        // TODO: add proficiencies
      },
      {
        id: "fighting_style",
        label: "",
        source: "subclass" as const,
        level: 3,
        description: "",
        tags: ["choice"],
        // TODO: add fighting styles selection
      },
      {
        id: "blade_flourish",
        label: "",
        source: "subclass" as const,
        level: 3,
        description: "",
        tags: ["choice"],
        // TODO: Attack hook. +10 speed after Attack action, + enable flourish if weapon attack
      },
    ],

    6: [
      {
        id: "extra_attack",
        label: "Extra Attack",
        source: "subclass" as const,
        level: 6,
        description: "",
        tags: [],
        // TODO: Replace regular 'Attack' action
      },
    ],

    14: [
      {
        id: "masters_flourish",
        label: "Master's Flourish",
        source: "subclass" as const,
        level: 14,
        description: "",
        tags: [],
        // TODO: Enable selection on Flurishes. To spend or not Bardic Inspirations
      },
    ],
  },
};
