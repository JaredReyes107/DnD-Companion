import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const WAR: SubclassTemplate = {
  id: "war",
  classId: "cleric",
  source: "phb",

  progression: {
    1: [
      "cleric.war.bonus_proficiencies_war",
      "cleric.war.war_domain_spells",
      "cleric.war.war_priest",
    ],
    2: ["cleric.war.channel_divinity_guided_strike"],
    6: ["cleric.war.channel_divinity_war_gods_blessing"],
    8: ["blessed_strikes", "cleric.war.divine_strike"],
    17: ["cleric.war.avatar_of_battle"],
  },

  featuresByLevel: {
    1: [
      {
        id: "cleric.war.bonus_proficiencies_war",
        source: "subclass" as const,
        level: 1,
        tags: ["armor", "proficiency", "weapon"],
      },
      {
        id: "cleric.war.war_domain_spells",
        source: "subclass" as const,
        level: 1,
        tags: ["spells"],
      },
      {
        id: "cleric.war.war_priest",
        source: "subclass" as const,
        level: 1,
        grants: [
          { type: "action", id: "war_priest" },
          { type: "resource", id: "war_priest" },
        ],
        tags: ["combat"],
        // TODO: Bonus action weapon attack hook (on Attack action use)
      },
    ],

    2: [
      {
        id: "cleric.war.channel_divinity_guided_strike",
        source: "subclass" as const,
        level: 2,
        grants: [{ type: "action", id: "channel_divinity_guided_strike" }],
        tags: ["combat"],
        // TODO: +10 to attack roll hook
      },
    ],

    6: [
      {
        id: "cleric.war.channel_divinity_war_gods_blessing",
        source: "subclass" as const,
        level: 6,
        grants: [{ type: "action", id: "channel_divinity_war_gods_blessing" }],
        tags: ["reaction", "support"],
        // TODO: +10 to ally's attack roll hook
      },
    ],

    8: [
      {
        id: "blessed_strikes",
        source: "subclass" as const,
        level: 8,
        tags: ["damage"],
        // TODO: Damage hook. Damage scaling
      },
      {
        id: "cleric.war.divine_strike",
        source: "subclass" as const,
        level: 8,
        tags: ["damage"],
        // TODO: Damage hook. Damage scaling
      },
    ],

    17: [
      {
        id: "cleric.war.avatar_of_battle",
        source: "subclass" as const,
        level: 17,
        tags: ["defense"],
        // TODO: Resistance hook (nonmagical B/P/S damage)
      },
    ],
  },
};
