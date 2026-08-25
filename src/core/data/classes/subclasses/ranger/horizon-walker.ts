import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const HORIZON_WALKER: SubclassTemplate = {
  id: "horizon_walker",
  classId: "ranger",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    3: [
      {
        id: "horizon_walker_magic",
        source: "subclass" as const,
        level: 3,
        tags: ["spells"],
      },
      {
        id: "detect_portal",
        source: "subclass" as const,
        level: 3,
        grants: [
          { type: "resource", id: "detect_portal" },
          { type: "action", id: "detect_portal" },
        ],
        tags: ["utility", "senses"],
      },
      {
        id: "planar_warrior",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "action", id: "planar_warrior" }],
        tags: ["combat", "damage", "buff"],
      },
    ],

    7: [
      {
        id: "ethereal_step",
        source: "subclass" as const,
        level: 7,
        grants: [
          { type: "resource", id: "ethereal_step" },
          { type: "action", id: "ethereal_step" },
        ],
        tags: ["utility", "movement", "spells"],
      },
    ],

    11: [
      {
        id: "distant_strike",
        source: "subclass" as const,
        level: 11,
        grants: [{ type: "action", id: "distant_strike" }],
        // TODO: Grant override for Attack: Append description, replace the action.
        tags: ["passive", "combat", "movement"],
      },
    ],

    15: [
      {
        id: "spectral_defense",
        source: "subclass" as const,
        level: 15,
        grants: [{ type: "action", id: "spectral_defense" }],
        tags: ["defense", "reaction", "resistance"],
      },
    ],
  },
};
