import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const VALOR: SubclassTemplate = {
  id: "valor",
  classId: "bard",
  name: "College of Valor",
  source: "Player's Handbook",

  featuresByLevel: {
    3: [
      {
        id: "combat_inspiration",
        source: "subclass" as const,
        level: 3,
        tags: ["subclass"],
      },
      {
        id: "extra_proficiencies",
        source: "subclass" as const,
        level: 3,
        tags: ["subclass", "skills", "proficiency"],
        // TODO: Add the handler for proficiency
      },
    ],

    6: [
      {
        id: "extra_attack",
        source: "subclass" as const,
        level: 6,
        tags: [],
        // TODO: Replace regular 'Attack' action
      },
    ],

    14: [
      {
        id: "battle_magic",
        source: "subclass" as const,
        level: 14,
        actions: ["battle_magic"],
        tags: [],
      },
    ],
  },
};
