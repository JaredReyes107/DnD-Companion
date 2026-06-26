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
        actions: ["summon_wildfire_spirit", "command_wildfire_spirit"],
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
        resources: ["cauterizing_flames"],
        actions: ["cauterizing_flames"],
        tags: ["healing", "damage", "reaction"],
      },
    ],

    14: [
      {
        id: "blazing_revival",
        source: "subclass" as const,
        level: 14,
        resources: ["blazing_revival"],
        actions: ["blazing_revival"],
        tags: ["healing", "defense"],
      },
    ],
  }
};