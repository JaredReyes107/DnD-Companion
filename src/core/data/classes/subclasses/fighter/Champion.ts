import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const CHAMPION: SubclassTemplate = {
  id: "champion",
  classId: "fighter",

  featuresByLevel: {
    3: [
      {
        id: "improved_critical",
        source: "subclass" as const,
        level: 3,
        tags: ["critical"],
      },
    ],

    7: [
      {
        id: "remarkable_athlete",
        source: "subclass" as const,
        level: 7,
        tags: ["skill", "ability-check"],
      },
    ],

    10: [
      {
        id: "additional_fighting_style",
        source: "subclass" as const,
        level: 10,
        grants: [{ type: "choice", id: "fighting_style" }],
        tags: [],
      },
    ],

    15: [
      {
        id: "superior_critical",
        source: "subclass" as const,
        level: 15,
        tags: ["critical"],
      },
    ],

    18: [
      {
        id: "survivor",
        source: "subclass" as const,
        level: 18,
        // TODO: Passive self-healing on turn
        tags: ["healing", "self-sustain"],
      },
    ],
  },
};
