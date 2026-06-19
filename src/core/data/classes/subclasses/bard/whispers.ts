import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const WHISPERS: SubclassTemplate = {
  id: "whispers",
  classId: "bard",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    3: [
      {
        id: "psychic_blades",
        source: "subclass" as const,
        level: 3,
        actions: ["psychic_blades"],
        tags: ["combat", "damage"],
      },
      {
        id: "words_of_terror",
        source: "subclass" as const,
        level: 3,
        resources: ["words_of_terror"],
        tags: ["deception"],
      },
    ],

    6: [
      {
        id: "mantle_of_whispers",
        source: "subclass" as const,
        level: 6,
        resources: [
          "mantle_of_whispers_capture_shadow",
          "mantle_of_whispers_disguise",
        ],
        actions: [
          "mantle_of_whispers_capture_shadow",
          "mantle_of_whispers_disguise",
        ],
        tags: ["roleplay", "deception"],
      },
    ],

    14: [
      {
        id: "shadow_lore",
        source: "subclass" as const,
        level: 14,
        resources: ["shadow_lore"],
        actions: ["shadow_lore"],
        tags: ["deception"],
      },
    ],
  },
};
