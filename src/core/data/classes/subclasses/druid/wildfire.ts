import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const WILDFIRE: SubclassTemplate = {
  id: "wildfire",
  classId: "druid",
  source: "tce",

  featuresByLevel: {
    2: [
      {
        id: "circle_spells_wildfire",
        source: "subclass" as const,
        level: 2,
        tags: ["spells"],
      },
      {
        id: "summon_wildfire_spirit",
        source: "subclass" as const,
        level: 2,
        grants: [
          { type: "action", id: "summon_wildfire_spirit" },
          { type: "action", id: "command_wildfire_spirit" },
        ],
        tags: ["summoning", "build-choice"],
        // TODO: Summon system
      },
    ],

    6: [
      {
        id: "enhanced_bond",
        source: "subclass" as const,
        level: 6,
        tags: ["damage", "healing", "passive"],
      },
    ],

    10: [
      {
        id: "cauterizing_flames",
        source: "subclass" as const,
        level: 10,
        grants: [
          { type: "action", id: "cauterizing_flames" },
          { type: "resource", id: "cauterizing_flames" },
        ],
        tags: ["healing", "damage", "reaction"],
      },
    ],

    14: [
      {
        id: "blazing_revival",
        source: "subclass" as const,
        level: 14,
        grants: [
          { type: "action", id: "blazing_revival" },
          { type: "resource", id: "blazing_revival" },
        ],
        tags: ["healing", "defense"],
      },
    ],
  },
};
