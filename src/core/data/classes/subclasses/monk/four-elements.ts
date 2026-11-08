import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const FOUR_ELEMENTS: SubclassTemplate = {
  id: "four_elements",
  classId: "monk",
  source: "Players Handbook",
  progression: {
    3: ["monk.four_elements.disciple_of_the_elements"],
  },

  featuresByLevel: {
    3: [
      {
        id: "monk.four_elements.disciple_of_the_elements",
        source: "subclass",
        level: 3,
        grants: [
          { type: "action", id: "elemental_attunement" },
          { type: "choice", id: "four_elements_disciplines" },
        ],
        tags: ["spellcasting", "build-choice"],
      },
    ],
  },
};
