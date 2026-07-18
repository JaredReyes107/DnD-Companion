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
        grants: [{ type: "action", id: "psychic_blades" }],
        tags: ["combat", "damage"],
      },
      {
        id: "words_of_terror",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "resource", id: "words_of_terror" }],
        tags: ["deception"],
      },
    ],

    6: [
      {
        id: "mantle_of_whispers",
        source: "subclass" as const,
        level: 6,
        grants: [
          { type: "resource", id: "mantle_of_whispers_capture_shadow" },
          { type: "action", id: "mantle_of_whispers_capture_shadow" },
          { type: "resource", id: "mantle_of_whispers_disguise" },
          { type: "action", id: "mantle_of_whispers_disguise" },
        ],
        tags: ["roleplay", "deception"],
      },
    ],

    14: [
      {
        id: "shadow_lore",
        source: "subclass" as const,
        level: 14,
        grants: [
          { type: "action", id: "shadow_lore" },
          { type: "resource", id: "shadow_lore" },
        ],
        tags: ["deception"],
      },
    ],
  },
};
