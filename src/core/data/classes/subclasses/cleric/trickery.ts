import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const TRICKERY: SubclassTemplate = {
  id: "trickery",
  classId: "cleric",
  source: "phb",

  featuresByLevel: {
    1: [
      {
        id: "trickery_domain_spells",
        source: "subclass" as const,
        level: 1,
        tags: ["spells"],
      },
      {
        id: "blessing_of_the_trickster",
        source: "subclass" as const,
        level: 1,
        actions: ["blessing_of_the_trickster"],
        tags: ["support", "utility"],
      },
    ],

    2: [
      {
        id: "channel_divinity_invoke_duplicity",
        source: "subclass" as const,
        level: 2,
        actions: ["channel_divinity_invoke_duplicity", "control_duplicity"],
        tags: ["illusion", "utility"],
      },
    ],

    6: [
      {
        id: "channel_divinity_cloak_of_shadows",
        source: "subclass" as const,
        level: 6,
        actions: ["channel_divinity_cloak_of_shadows"],
        tags: ["stealth", "defense"],
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
        id: "improved_duplicity",
        source: "subclass" as const,
        level: 17,
        tags: ["illusion", "utility"],
        // TODO: Extends invoke_duplicity — multiple duplicates, longer range
      },
    ],
  },
};
