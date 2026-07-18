import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const LORE: SubclassTemplate = {
  id: "lore",
  classId: "bard",
  source: "Player's Handbook",

  featuresByLevel: {
    3: [
      {
        id: "cutting_words",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "action", id: "cutting_words"}],
        tags: [],
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
        id: "additional_magical_secrets",
        source: "subclass" as const,
        level: 6,
        tags: [],
        // TODO: spell list
      },
    ],

    14: [
      {
        id: "peerless_skill",
        source: "subclass" as const,
        level: 14,
        tags: [],
        // TODO: actions
      },
    ],
  },
};
