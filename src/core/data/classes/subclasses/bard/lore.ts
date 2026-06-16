import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const LORE: SubclassTemplate = {
  id: "lore",
  classId: "bard",
  name: "College of Lore",
  source: "Player's Handbook",

  featuresByLevel: {
    3: [
      {
        id: "cutting_words",
        label: "Cutting Words",
        source: "subclass" as const,
        level: 3,
        description: "",
        actions: ["cutting_words"],
        tags: [],
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
        id: "additional_magical_secrets",
        label: "Additional Magical Secrets",
        source: "subclass" as const,
        level: 6,
        description: "",
        tags: [],
        // TODO: spell list
      },
    ],

    14: [
      {
        id: "peerless_skill",
        label: "Peerless Skill",
        source: "subclass" as const,
        level: 14,
        description: "",
        tags: [],
        // TODO: actions
      },
    ],
  },
};
