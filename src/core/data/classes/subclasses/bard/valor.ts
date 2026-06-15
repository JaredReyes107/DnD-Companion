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
        label: "Combat Inspiration",
        source: "subclass" as const,
        level: 3,
        description: "",
        tags: ["subclass"],
      },
      {
        id: "extra_proficiencies",
        label: "Extra Proficiencies",
        source: "subclass" as const,
        level: 3,
        description: "",
        tags: ["subclass", "skills", "proficiency"],
        // TODO: Add the handler for proficiency
      },
    ],

    6: [
      {
        id: "extra_attack",
        label: "Extra Attack",
        source: "subclass" as const,
        level: 6,
        description: "",
        tags: [],
        // TODO: Replace regular 'Attack' action
      },
    ],

    14: [
      {
        id: "battle_magic",
        label: "Battle Magic",
        source: "subclass" as const,
        level: 14,
        description: "",
        actions: ["battle_magic"],
        tags: [],
      },
    ],
  },
};
