import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const LIFE: SubclassTemplate = {
  id: "life",
  classId: "cleric",
  source: "phb",

  featuresByLevel: {
    1: [
      {
        id: "bonus_proficiencies",
        source: "subclass" as const,
        level: 1,
        tags: ["armor-proficiencies"],
      },
      {
        id: "life_domain_spells",
        source: "subclass" as const,
        level: 1,
        tags: ["spells"],
      },
      {
        id: "disciple_of_life",
        source: "subclass" as const,
        level: 1,
        tags: ["healing", "skills", "proficiency"],
        // TODO: Healing hook
      },
    ],

    2: [
      {
        id: "channel_divinity_preserve_life",
        source: "subclass" as const,
        level: 2,
        grants: [{ type: "action", id: "channel_divinity_preserve_life" }],
        tags: ["healing"],
      },
    ],

    6: [
      {
        id: "blessed_healer",
        source: "subclass" as const,
        level: 6,
        tags: ["healing", "self-sustain"],
        // TODO: Healing hook
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
        id: "supreme_healing",
        source: "subclass" as const,
        level: 17,
        tags: ["healing"],
        // Healing hook
      },
    ],
  },
};
