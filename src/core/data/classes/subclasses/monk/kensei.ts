import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const KENSEI: SubclassTemplate = {
  id: "kensei",
  classId: "monk",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    3: [
      {
        id: "path_of_the_kensei",
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
        id: "one_with_the_blade",
        source: "subclass" as const,
        level: 6,
        grants: [{ type: "action", id: "deft_strike" }],
        tags: ["combat", "damage", "magic"],
      },
    ],

    11: [
      {
        id: "sharpen_the_blade",
        source: "subclass" as const,
        level: 11,
        grants: [{ type: "action", id: "sharpen_the_blade" }],
        tags: ["combat", "buff", "bonus-action"],
      },
    ],

    17: [
      {
        id: "unerring_accuracy",
        source: "subclass" as const,
        level: 17,
        grants: [{ type: "action", id: "unerring_accuracy" }],
        tags: ["combat", "reroll"],
      },
    ],
  },
};
