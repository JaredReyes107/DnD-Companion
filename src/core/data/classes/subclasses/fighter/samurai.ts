import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const SAMURAI: SubclassTemplate = {
  id: "samurai",
  classId: "fighter",

  featuresByLevel: {
    3: [
      {
        id: "bonus_proficiency_samurai",
        source: "subclass" as const,
        level: 3,
        tags: ["skill", "proficiency", "language"],
      },
      {
        id: "fighting_spirit",
        source: "subclass" as const,
        level: 3,
        grants: [
          { type: "action", id: "fighting_spirit" },
          { type: "resource", id: "fighting_spirit" },
        ],
        tags: ["combat", "temporary-hit-points", "advantage"],
      },
    ],

    7: [
      {
        id: "elegant_courtier",
        source: "subclass" as const,
        level: 7,
        tags: ["skill", "roleplay"],
      },
    ],

    10: [
      {
        id: "tireless_spirit",
        source: "subclass" as const,
        level: 10,
        grants: [{ type: "action", id: "tireless_spirit" }],
        tags: [],
      },
    ],

    15: [
      {
        id: "rapid_strike",
        source: "subclass" as const,
        level: 15,
        grants: [{ type: "action", id: "rapid_strike" }],
        tags: ["combat", "build-choice"],
      },
    ],

    18: [
      {
        id: "strength_before_death",
        source: "subclass" as const,
        level: 18,
        grants: [
          { type: "action", id: "strength_before_death" },
          { type: "resource", id: "strength_before_death" },
        ],
        tags: ["defense", "last-stand"],
      },
    ],
  },
};
