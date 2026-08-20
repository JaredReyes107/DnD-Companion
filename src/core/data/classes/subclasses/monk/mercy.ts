import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const MERCY: SubclassTemplate = {
  id: "mercy",
  classId: "monk",
  source: "Tasha's Cauldron of Everything",

  featuresByLevel: {
    3: [
      {
        id: "implements_of_mercy",
        source: "subclass" as const,
        level: 3,
        tags: ["proficiency", "tool", "skill"],
      },
      {
        id: "hand_of_healing",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "action", id: "hand_of_healing" }],
        tags: ["healing"],
      },
      {
        id: "hand_of_harm",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "action", id: "hand_of_harm" }],
        tags: ["combat", "damage"],
      },
    ],

    6: [
      {
        id: "physicians_touch",
        source: "subclass" as const,
        level: 6,
        //TODO: Overrides Hand of Healing (Description only) and Hand of Harm (Description only)
        tags: ["healing", "debuff", "combat"],
      },
    ],

    11: [
      {
        id: "flurry_of_healing_and_harm",
        source: "subclass" as const,
        level: 11,
        //TODO: Overrides Flurry of Blows. Purely descriptive
        tags: ["healing", "combat", "passive", "resistance"],
      },
    ],

    17: [
      {
        id: "hand_of_ultimate_mercy",
        source: "subclass" as const,
        level: 17,
        grants: [
          { type: "action", id: "hand_of_ultimate_mercy" },
          { type: "resource", id: "hand_of_ultimate_mercy" },
        ],
        tags: ["healing", "revival"],
      },
    ],
  },
};
