import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const NATURE: SubclassTemplate = {
  id: "nature",
  classId: "cleric",

  featuresByLevel: {
    1: [
      {
        id: "cleric.nature.acolyte_of_nature",
        source: "subclass" as const,
        level: 1,
        tags: ["proficiency", "skill", "spells"],
      },
      {
        id: "cleric.nature.bonus_proficiencies_nature",
        source: "subclass" as const,
        level: 1,
        tags: ["proficiency", "armor"],
      },

      {
        id: "cleric.nature.nature_domain_spells",
        source: "subclass" as const,
        level: 1,
        tags: ["spells"],
      },
    ],

    2: [
      {
        id: "cleric.nature.channel_divinity_charm_animals_and_plants",
        source: "subclass" as const,
        level: 2,
        grants: [
          { type: "action", id: "channel_divinity_charm_animals_and_plants" },
        ],
        tags: [],
      },
    ],

    6: [
      {
        id: "cleric.nature.dampen_elements",
        source: "subclass" as const,
        level: 6,
        grants: [{ type: "action", id: "dampen_elements" }],
        tags: [],
      },
    ],

    8: [
      {
        id: "cleric.nature.divine_strike",
        source: "subclass" as const,
        level: 8,
        tags: [],
        // TODO: damage hook
      },
    ],

    17: [
      {
        id: "cleric.nature.master_of_nature",
        source: "subclass" as const,
        level: 17,
        grants: [{ type: "action", id: "master_of_nature" }],
        tags: [],
      },
    ],
  },
};
