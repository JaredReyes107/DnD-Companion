import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ASSASSIN: SubclassTemplate = {
  id: "assassin",
  classId: "rogue",
  source: "Player's Handbook",

  featuresByLevel: {
    3: [
      {
        id: "rogue.assassin.bonus_proficiencies_assassin",
        source: "subclass" as const,
        level: 3,
        tags: ["proficiency", "tool"],
      },
      {
        id: "rogue.assassin.assassinate",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "action", id: "assassinate" }],
        tags: ["combat"],
      },
    ],

    9: [
      {
        id: "rogue.assassin.infiltration_expertise",
        source: "subclass" as const,
        level: 9,
        grants: [{ type: "action", id: "infiltration_expertise" }],
        tags: ["roleplay", "downtime"],
      },
    ],

    13: [
      {
        id: "rogue.assassin.impostor",
        source: "subclass" as const,
        level: 13,
        grants: [{ type: "action", id: "impostor" }],
        tags: ["roleplay", "downtime"],
      },
    ],

    17: [
      {
        id: "rogue.assassin.death_strike",
        source: "subclass" as const,
        level: 17,
        grants: [{ type: "action", id: "death_strike" }],
        tags: ["passive", "combat", "damage"],
      },
    ],
  },
};
