import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const SAMURAI: SubclassTemplate = {
  id: "samurai",
  classId: "fighter",

  featuresByLevel: {
    3: [
      {
        id: "fighter.samurai.bonus_proficiency_samurai",
        source: "subclass" as const,
        level: 3,
        tags: ["skill", "proficiency", "language"],
      },
      {
        id: "fighter.samurai.fighting_spirit",
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
        id: "fighter.samurai.elegant_courtier",
        source: "subclass" as const,
        level: 7,
        tags: ["skill", "roleplay"],
      },
    ],

    10: [
      {
        id: "fighter.samurai.tireless_spirit",
        source: "subclass" as const,
        level: 10,
        tags: [],
      },
    ],

    15: [
      {
        id: "fighter.samurai.rapid_strike",
        source: "subclass" as const,
        level: 15,
        grants: [{ type: "action", id: "rapid_strike" }],
        tags: ["combat", "build-choice"],
      },
    ],

    18: [
      {
        id: "fighter.samurai.strength_before_death",
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
