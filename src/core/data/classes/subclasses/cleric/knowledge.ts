import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const KNOWLEDGE: SubclassTemplate = {
  id: "knowledge",
  classId: "cleric",
  source: "phb",

  featuresByLevel: {
    1: [
      {
        id: "knowledge_domain_spells",
        source: "subclass" as const,
        level: 1,
        tags: ["spells"],
      },
      {
        id: "blessings_of_knowledge",
        source: "subclass" as const,
        level: 1,
        tags: ["languages", "skill", "proficiency"],
      },
    ],

    2: [
      {
        id: "channel_divinity_knowledge_of_the_ages",
        source: "subclass" as const,
        level: 2,
        grants: [
          { type: "action", id: "channel_divinity_knowledge_of_the_ages" },
        ],
        tags: ["skill", "proficiency", "tool"],
      },
    ],

    6: [
      {
        id: "channel_divinity_read_thoughts",
        source: "subclass" as const,
        level: 6,
        grants: [{ type: "action", id: "channel_divinity_read_thoughts" }],
        tags: ["combat", "social"],
      },
    ],

    8: [
      {
        id: "potent_spellcasting",
        source: "subclass" as const,
        level: 8,
        tags: [],
        // TODO: damage hook on cleric cantrips
      },
    ],

    17: [
      {
        id: "visions_of_the_past",
        source: "subclass" as const,
        level: 17,
        tags: [],
        // TODO: resources, actions
      },
    ],
  },
};
