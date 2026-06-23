import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const TWILIGHT: SubclassTemplate = {
  id: "twilight",
  classId: "cleric",
  source: "tce",

  featuresByLevel: {
    1: [
      {
        id: "bonus_proficiencies",
        source: "subclass" as const,
        level: 1,
        tags: ["armor-proficiencies", "weapon-proficiencies"],
      },
      {
        id: "domain_spells",
        source: "subclass" as const,
        level: 1,
        tags: ["spells"],
      },
      {
        id: "eyes_of_night",
        source: "subclass" as const,
        level: 1,
        resources: ["eyes_of_night"],
        actions: ["eyes_of_night"],
        tags: ["utility", "support"],
        // TODO: Apply modifier for Darkvision (300ft, allies within 10ft)
      },
      {
        id: "vigilant_blessing",
        source: "subclass" as const,
        level: 1,
        actions: ["vigilant_blessing"],
        tags: ["support"],
        // TODO: Advantage on initiative hook. Ends when used again or after initiative is rolled.
      },
    ],

    2: [
      {
        id: "channel_divinity_twilight_sanctuary",
        source: "subclass" as const,
        level: 2,
        actions: ["channel_divinity_twilight_sanctuary"],
        tags: ["support", "defense"],
        // TODO: Sanctuary hook (Aura-like effect) (temp HP or end fear/charm within 30ft)
      },
    ],

    6: [
      {
        id: "steps_of_night",
        source: "subclass" as const,
        level: 6,
        resources: ["steps_of_night"],
        actions: ["steps_of_night"],
        tags: ["movement"],
      },
    ],

    8: [
      {
        id: "divine_strike",
        source: "subclass" as const,
        level: 8,
        tags: ["damage"],
        // TODO: Extra Damage 
      },
    ],

    17: [
      {
        id: "twilight_shroud",
        source: "subclass" as const,
        level: 17,
        tags: ["defense"],
        // TODO: Extends twilight_sanctuary — grants medium cover status
      },
    ],
  },
};
