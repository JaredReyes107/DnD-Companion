import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const SCOUT: SubclassTemplate = {
  id: "scout",
  classId: "rogue",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    3: [
      {
        id: "skirmisher",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "action", id: "skirmisher" }],
        tags: ["defense", "movement", "reaction"],
      },
      {
        id: "survivalist",
        source: "subclass" as const,
        level: 3,
        tags: ["proficiency", "skill", "expertise"],
      },
    ],

    9: [
      {
        id: "superior_mobility",
        source: "subclass" as const,
        level: 9,
        tags: ["movement"],
        // TODO: +10ft walking speed. +10ft to climbing and swimming, if present
      },
    ],

    13: [
      {
        id: "ambush_master",
        source: "subclass" as const,
        level: 13,
        grants: [{ type: "action", id: "ambush_master" }],
        tags: ["combat", "initiative"],
        //TODO: Advantage on initiative
      },
    ],

    17: [
      {
        id: "sudden_strike",
        source: "subclass" as const,
        level: 17,
        grants: [{ type: "action", id: "sudden_strike" }],
        tags: ["combat", "damage", "bonus-action"],
      },
    ],
  },
};
