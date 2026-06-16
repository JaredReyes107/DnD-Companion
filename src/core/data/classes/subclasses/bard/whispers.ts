import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const WHISPERS: SubclassTemplate = {
  id: "whispers",
  classId: "bard",
  name: "College of Whispers",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    3: [
      {
        id: "psychic_blades",
        label: "",
        source: "subclass" as const,
        level: 3,
        description: "",
        actions: ["psychic_blades"],
        tags: ["combat", "damage"],
      },
      {
        id: "words_of_terror",
        label: "",
        source: "subclass" as const,
        level: 3,
        description: "",
        resources: ["words_of_terror"],
        tags: ["deception"],
      },
    ],

    6: [
      {
        id: "mantle_of_whispers",
        label: "Mantle of Whispers",
        source: "subclass" as const,
        level: 6,
        description: "",
        resources: ["mantle_of_whispers_capture_shadow", "mantle_of_whispers_disguise"],
        actions: ["mantle_of_whispers_capture_shadow", "mantle_of_whispers_disguise"],
        tags: ["roleplay", "deception"],
      },
    ],

    14: [
      {
        id: "shadow_lore",
        label: "Shadow Lore",
        source: "subclass" as const,
        level: 14,
        description: "",
        resources: ["shadow_lore"],
        actions: ["shadow_lore"],
        tags: ["deception"],
      },
    ],
  },
};
