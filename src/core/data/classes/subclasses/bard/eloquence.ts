import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ELOQUENCE: SubclassTemplate = {
  id: "eloquence",
  classId: "bard",
  source: "Tasha's Cauldron of Everything",

  featuresByLevel: {
    3: [
      {
        id: "silver_tongue",
        source: "subclass" as const,
        level: 3,
        tags: ["passive", "social"],
      },
      {
        id: "unsettling_words",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "action", id: "unsettling_words" }],
        tags: ["combat", "debuff"],
      },
    ],

    6: [
      {
        id: "unfailing_inspiration",
        source: "subclass" as const,
        level: 6,
        tags: ["passive", "utility"],
      },
      {
        id: "universal_speech",
        source: "subclass" as const,
        level: 6,
        grants: [
          { type: "action", id: "universal_speech" },
          { type: "resource", id: "universal_speech" },
        ],
        tags: [],
      },
    ],

    14: [
      {
        id: "infectious_inspiration",
        source: "subclass" as const,
        level: 14,
        grants: [
          { type: "action", id: "infectious_inspiration" },
          { type: "resource", id: "infectious_inspiration" },
        ],
        tags: ["utility"],
      },
    ],
  },
};
