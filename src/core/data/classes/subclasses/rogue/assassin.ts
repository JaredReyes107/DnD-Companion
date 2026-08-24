import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ASSASSIN: SubclassTemplate = {
  id: "assassin",
  classId: "rogue",
  source: "Player's Handbook",

  featuresByLevel: {
    3: [
      {
        id: "bonus_proficiencies_assassin",
        source: "subclass" as const,
        level: 3,
        tags: ["proficiency", "tool"],
      },
      {
        id: "assassinate",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "action", id: "assassinate" }],
        tags: ["combat"],
      },
    ],

    9: [
      {
        id: "infiltration_expertise",
        source: "subclass" as const,
        level: 9,
        grants: [{ type: "action", id: "infiltration_expertise" }],
        tags: ["roleplay", "downtime"],
      },
    ],

    13: [
      {
        id: "impostor",
        source: "subclass" as const,
        level: 13,
        grants: [{ type: "action", id: "impostor" }],
        tags: ["roleplay", "downtime"],
      },
    ],

    17: [
      {
        id: "death_strike",
        source: "subclass" as const,
        level: 17,
        grants: [{ type: "action", id: "death_strike" }],
        tags: ["passive", "combat", "damage"],
      },
    ],
  },
};
