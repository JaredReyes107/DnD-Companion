import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const WAR: SubclassTemplate = {
  id: "war",
  classId: "cleric",
  source: "phb",

  featuresByLevel: {
    1: [
      {
        id: "bonus_proficiencies_war",
        source: "subclass" as const,
        level: 1,
        tags: ["armor-proficiencies", "weapon-proficiencies"],
      },
      {
        id: "war_domain_spells",
        source: "subclass" as const,
        level: 1,
        tags: ["spells"],
      },
      {
        id: "war_priest",
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
        id: "channel_divinity_guided_strike",
        source: "subclass" as const,
        level: 2,
        grants: [{ type: "action", id: "channel_divinity_guided_strike" }],
        tags: ["combat"],
        // TODO: +10 to attack roll hook
      },
    ],

    6: [
      {
        id: "channel_divinity_war_gods_blessing",
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
        id: "divine_strike",
        source: "subclass" as const,
        level: 8,
        tags: ["damage"],
        // TODO: Damage hook. Damage scaling
      },
    ],

    17: [
      {
        id: "avatar_of_battle",
        source: "subclass" as const,
        level: 17,
        tags: ["defense"],
        // TODO: Resistance hook (nonmagical B/P/S damage)
      },
    ],
  },
};
