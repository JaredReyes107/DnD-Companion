import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const TEMPEST: SubclassTemplate = {
  id: "tempest",
  classId: "cleric",
  source: "phb",

  featuresByLevel: {
    1: [
      {
        id: "bonus_proficiencies",
        source: "subclass" as const,
        level: 1,
        tags: ["armor-proficiencies", "weapon-proficiencies"],
      },
      {
        id: "wrath_of_the_storm",
        source: "subclass" as const,
        level: 1,
        grants: [{ type: "action", id: "wrath_of_the_storm"}, { type: "resource", id: "wrath_of_the_storm"}],
        tags: ["reaction", "damage"],
        // TODO: Damage hook (2d8 lightning or thunder, DEX save halves)
      },
      {
        id: "tempest_domain_spells",
        source: "subclass" as const,
        level: 1,
        tags: ["spells"],
      },
    ],

    2: [
      {
        id: "channel_divinity_destructive_wrath",
        source: "subclass" as const,
        level: 2,
        grants: [{ type: "action", id: "channel_divinity_destructive_wrath"}],
        tags: ["damage"],
        // TODO: Damage hook (max lightning/thunder damage roll)
      },
    ],

    6: [
      {
        id: "thunderbolt_strike",
        source: "subclass" as const,
        level: 6,
        tags: ["damage", "movement"],
        // TODO: Damage hook. Push 10ft on lightning damage dealt
      },
    ],

    8: [
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
        id: "stormborn",
        source: "subclass" as const,
        level: 17,
        tags: ["movement"],
        // TODO: Movement hook (flying speed during storms / underwater)
      },
    ],
  },
};
