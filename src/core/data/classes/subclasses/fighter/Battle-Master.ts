import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

/**
 * Battle Master — Fighter subclass (Player's Handbook)
 */
export const BATTLE_MASTER: SubclassTemplate = {
  id: "battle_master",
  classId: "fighter",
  source: "Players Handbook",

  featuresByLevel: {
    3: [
      {
        id: "combat_superiority",
        source: "subclass",
        level: 3,
        grants: [{ type: "resource", id: "superiority_dice" }],
        tags: ["choice", "resource"],
        // TODO: dice-roll hook (crit threshold override)
      },
      {
        id: "student_of_war",
        source: "subclass",
        level: 3,
      },
    ],

    7: [
      {
        id: "know_your_enemy",
        source: "subclass",
        level: 7,
        tags: ["passive"],
      },
    ],

    10: [
      {
        id: "improved_combat_superiority",
        source: "subclass",
        level: 10,
        tags: ["passive"],
      },
    ],

    15: [
      {
        id: "relentless",
        source: "subclass",
        level: 15,
        tags: ["passive", "combat"],
      },
    ],

    18: [
      {
        id: "improved_combat_superiority_2",
        source: "subclass",
        level: 18,
        tags: ["passive"],
      },
    ],
  },
};
