import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const HUNTER: SubclassTemplate = {
  id: "hunter",
  classId: "ranger",
  source: "Player's Handbook",

  featuresByLevel: {
    3: [
      {
        id: "hunters_prey",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "choice", id: "hunters_prey" }],
        tags: ["build-choice", "combat"],
      },
    ],

    7: [
      {
        id: "defensive_tactics",
        source: "subclass" as const,
        level: 7,
        grants: [{ type: "choice", id: "defensive_tactics" }],
        tags: ["build-choice", "defense", "passive"],
      },
    ],

    11: [
      {
        id: "multiattack",
        source: "subclass" as const,
        level: 11,
        grants: [{ type: "choice", id: "multiattack" }],
        tags: ["build-choice", "combat"],
      },
    ],

    15: [
      {
        id: "superior_hunters_defense",
        source: "subclass" as const,
        level: 15,
        grants: [{ type: "choice", id: "superior_hunters_defense" }],
        tags: ["build-choice", "defense"],
      },
    ],
  },
};
