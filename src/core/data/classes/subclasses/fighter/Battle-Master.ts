import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const BATTLE_MASTER: SubclassTemplate = {
  id: "battle_master",
  classId: "fighter",
  progression: {
    3: [
      "fighter.battle_master.combat_superiority",
      "fighter.battle_master.student_of_war",
    ],
    7: ["fighter.battle_master.know_your_enemy"],
    15: ["fighter.battle_master.relentless"],
  },

  featuresByLevel: {
    3: [
      {
        id: "fighter.battle_master.combat_superiority",
        source: "subclass" as const,
        level: 3,
        grants: [
          { type: "choice", id: "maneuvers" },
          { type: "resource", id: "superiority_dice" },
        ],
        tags: ["combat"],
      },
      {
        id: "fighter.battle_master.student_of_war",
        source: "subclass" as const,
        level: 3,
        tags: ["proficiency", "tool"],
      },
    ],

    7: [
      {
        id: "fighter.battle_master.know_your_enemy",
        source: "subclass" as const,
        level: 7,
        grants: [{ type: "action", id: "know_your_enemy" }],
        tags: ["utility"],
      },
    ],

    15: [
      {
        id: "fighter.battle_master.relentless",
        source: "subclass" as const,
        level: 15,
        tags: ["combat"],
      },
    ],
  },
};
