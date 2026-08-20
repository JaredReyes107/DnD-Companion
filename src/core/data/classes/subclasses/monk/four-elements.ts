import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const FOUR_ELEMENTS: SubclassTemplate = {
  id: "four_elements",
  classId: "monk",
  source: "Players Handbook",

  featuresByLevel: {
    3: [
      {
        id: "disciple_of_the_elements",
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
