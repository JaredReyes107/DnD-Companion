import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const CHAMPION: SubclassTemplate = {
  id: "champion",
  classId: "fighter",
  progression: {
    3: ["fighter.champion.improved_critical"],
    7: ["fighter.champion.remarkable_athlete"],
    10: ["fighter.champion.additional_fighting_style"],
    15: ["fighter.champion.superior_critical"],
    18: ["fighter.champion.survivor"],
  },

  featuresByLevel: {
    3: [
      {
        id: "fighter.champion.improved_critical",
        source: "subclass" as const,
        level: 3,
        tags: ["critical"],
      },
    ],

    7: [
      {
        id: "fighter.champion.remarkable_athlete",
        source: "subclass" as const,
        level: 7,
        tags: ["skill", "ability-check"],
      },
    ],

    10: [
      {
        id: "fighter.champion.additional_fighting_style",
        source: "subclass" as const,
        level: 10,
        grants: [],
        // TODO: Add override. (+1 to number of picks)
        tags: [],
      },
    ],

    15: [
      {
        id: "fighter.champion.superior_critical",
        source: "subclass" as const,
        level: 15,
        tags: ["critical"],
      },
    ],

    18: [
      {
        id: "fighter.champion.survivor",
        source: "subclass" as const,
        level: 18,
        // TODO: Passive self-healing on turn
        tags: ["healing", "self-sustain"],
      },
    ],
  },
};
