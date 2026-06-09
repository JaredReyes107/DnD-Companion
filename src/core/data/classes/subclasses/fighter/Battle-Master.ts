import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

/**
 * Battle Master — Fighter subclass (Player's Handbook)
 */
export const BATTLE_MASTER: SubclassTemplate = {
  id: "battle_master",
  classId: "fighter",
  name: "B Master",
  source: "Players Handbook",

  featuresByLevel: {
    3: [
      {
        id: "combat_superiority",
        label: "Combat Superiority",
        source: "subclass",
        level: 3,
        description:
          `You learn three maneuvers of your choice which are fueled by superiority dice. You can use only one maneuver per attack. You learn two addicional maneuvers at 7th and 15th level.
          You have four superiority dice which are d8s, and they are expended when you use them. You regain all expended superiority dice when you finish a short or long rest.
          You gain another superiority dice at 7th and 15th level.
          If a menauver requires your target to make a saving throw to resist the maneuver's effects, the saving throw DC is calculated as follows:
            Maneuver save DC = 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice)`,
        resources: ["superiority_dice"],
        tags: ["choice", "resource"],
        // TODO: dice-roll hook (crit threshold override)
      },
      {
        id: 'student_of_war',
        label: "Estudiante de Guerra",
        source: "subclass",
        level: 3,
        description: "At 3rd level, you gain proficiency with one type or artisan's tools of your choice"
      }
    ],

    7: [
      {
        id: "know_your_enemy",
        label: "Know Your Enemy",
        source: "subclass",
        level: 7,
        description:
          `You can learn certain information about a creature if you spend at least 1 minute observing or interacting with it outside of combat. The DM tells you wheter the creature is your equal, supperior or inferior in  regard to two of the following characteristics:
          Strength score, Dexterity score, Constitution score, Armor Class, Current hit points, Total class levels (if any), Fighter class levels (if any)`,
        tags: ["passive"],
      },
    ],

    10: [
      {
        id: "improved_combat_superiority",
        label: "Improved Combat Superiority",
        source: "subclass",
        level: 10,
        description: "Your superiority dice turn into d10s.",
        tags: ["passive"],
      },
    ],

    15: [
      {
        id: "relentless",
        label: "Relentless",
        source: "subclass",
        level: 15,
        description: "When you roll for initiative and have no superiority dice remaining, you regain 1 superiorty die",
        tags: ["passive", "combat"],
      },
    ],

    18: [
      {
        id: "improved_combat_superiority_2",
        label: "Improved Combat Superiority",
        source: "subclass",
        level: 18,
        description: "Your superiority dice turn into d18s.",
        tags: ["passive"],
      },
    ],
  },
};
