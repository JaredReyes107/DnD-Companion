import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const FORGE: SubclassTemplate = {
  id: "forge",
  classId: "cleric",
  source: "xge",

  featuresByLevel: {
    1: [
      {
        id: "bonus_proficiencies_forge",
        source: "subclass" as const,
        level: 1,
        tags: ["tool-proficiencies", "armor-proficiencies"],
      },
      {
        id: "domain_spells",
        source: "subclass" as const,
        level: 1,
        tags: ["spells"],
      },
      {
        id: "blessing_of_the_forge",
        source: "subclass" as const,
        level: 1,
        tags: ["ritual", "support"],
        // TODO: Magic weapon/armor +1 hook. Done on long rest
      },
    ],

    2: [
      {
        id: "channel_divinity_artisans_blessing",
        source: "subclass" as const,
        level: 2,
        grants: [{ type: "action", id: "channel_divinity_artisans_blessing" }],
        tags: ["utility"],
        // TODO: Item creation hook (1-minute ritual)
      },
    ],

    6: [
      {
        id: "soul_of_the_forge",
        source: "subclass" as const,
        level: 6,
        tags: ["defense"],
        // TODO: Resistance hook (fire) + AC bonus while in heavy armor
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
        id: "saint_of_forge_and_fire",
        source: "subclass" as const,
        level: 17,
        tags: ["defense"],
        // TODO: Resistance hook upgrade (fire immunity + nonmagical B/P/S resistance, requires heavy armor)
      },
    ],
  },
};
