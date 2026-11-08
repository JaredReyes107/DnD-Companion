import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const KENSEI: SubclassTemplate = {
  id: "kensei",
  classId: "monk",
  source: "Xanathar's Guide to Everything",
  progression: {
    3: ["monk.kensei.path_of_the_kensei"],
    6: ["monk.kensei.one_with_the_blade"],
    11: ["monk.kensei.sharpen_the_blade"],
    17: ["monk.kensei.unerring_accuracy"],
  },

  featuresByLevel: {
    3: [
      {
        id: "monk.kensei.path_of_the_kensei",
        source: "subclass" as const,
        level: 3,
        grants: [
          { type: "action", id: "agile_parry" },
          { type: "action", id: "kensei_shot" },
        ],
        tags: ["build-choice", "proficiency", "tools", "weapon"],
        // TODO: "kensei weapon" tag system — these weapons count as monk
      },
    ],

    6: [
      {
        id: "monk.kensei.one_with_the_blade",
        source: "subclass" as const,
        level: 6,
        grants: [{ type: "action", id: "deft_strike" }],
        tags: ["combat", "damage", "magic"],
      },
    ],

    11: [
      {
        id: "monk.kensei.sharpen_the_blade",
        source: "subclass" as const,
        level: 11,
        grants: [{ type: "action", id: "sharpen_the_blade" }],
        tags: ["combat", "buff", "bonus-action"],
      },
    ],

    17: [
      {
        id: "monk.kensei.unerring_accuracy",
        source: "subclass" as const,
        level: 17,
        grants: [{ type: "action", id: "unerring_accuracy" }],
        tags: ["combat", "reroll"],
      },
    ],
  },
};
