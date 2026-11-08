import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const TWILIGHT: SubclassTemplate = {
  id: "twilight",
  classId: "cleric",
  source: "tce",
  progression: {
    1: [
      "cleric.twilight.bonus_proficiencies_twilight",
      "cleric.twilight.domain_spells",
      "cleric.twilight.eyes_of_night",
      "cleric.twilight.vigilant_blessing",
    ],
    2: ["cleric.twilight.channel_divinity_twilight_sanctuary"],
    6: ["cleric.twilight.steps_of_night"],
    8: ["cleric.twilight.divine_strike"],
    17: ["cleric.twilight.twilight_shroud"],
  },

  featuresByLevel: {
    1: [
      {
        id: "cleric.twilight.bonus_proficiencies_twilight",
        source: "subclass" as const,
        level: 1,
        tags: ["armor", "weapon", "proficiency"],
      },
      {
        id: "cleric.twilight.domain_spells",
        source: "subclass" as const,
        level: 1,
        tags: ["spells"],
      },
      {
        id: "cleric.twilight.eyes_of_night",
        source: "subclass" as const,
        level: 1,
        grants: [
          { type: "action", id: "eyes_of_night" },
          { type: "resource", id: "eyes_of_night" },
        ],
        tags: ["utility", "support"],
        // TODO: Apply modifier for Darkvision (300ft, allies within 10ft)
      },
      {
        id: "cleric.twilight.vigilant_blessing",
        source: "subclass" as const,
        level: 1,
        grants: [{ type: "action", id: "vigilant_blessing" }],
        tags: ["support"],
        // TODO: Advantage on initiative hook. Ends when used again or after initiative is rolled.
      },
    ],

    2: [
      {
        id: "cleric.twilight.channel_divinity_twilight_sanctuary",
        source: "subclass" as const,
        level: 2,
        grants: [{ type: "action", id: "channel_divinity_twilight_sanctuary" }],
        tags: ["support", "defense"],
        // TODO: Sanctuary hook (Aura-like effect) (temp HP or end fear/charm within 30ft)
      },
    ],

    6: [
      {
        id: "cleric.twilight.steps_of_night",
        source: "subclass" as const,
        level: 6,
        grants: [{ type: "resource", id: "steps_of_the_night" }],
        tags: ["movement"],
      },
    ],

    8: [
      {
        id: "cleric.twilight.divine_strike",
        source: "subclass" as const,
        level: 8,
        tags: ["damage"],
        // TODO: Extra Damage
      },
    ],

    17: [
      {
        id: "cleric.twilight.twilight_shroud",
        source: "subclass" as const,
        level: 17,
        tags: ["defense"],
        // TODO: Extends twilight_sanctuary — grants medium cover status
      },
    ],
  },
};
