import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const SHADOW_MAGIC: SubclassTemplate = {
  id: "shadow_magic",
  classId: "sorcerer",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    1: [
      {
        id: "sorcerer.shadow_magic.eyes_of_the_dark",
        source: "subclass" as const,
        level: 1,
        tags: ["senses"],
        // TODO: Modifier. Darkvision 120ft
      },
      {
        id: "sorcerer.shadow_magic.strength_of_the_grave",
        source: "subclass" as const,
        level: 1,
        grants: [
          { type: "action", id: "strength_of_the_grave" },
          { type: "resource", id: "strength_of_the_grave" },
        ],
        tags: ["defense"],
      },
    ],

    3: [
      {
        id: "sorcerer.shadow_magic.eyes_of_the_dark_darkness",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "action", id: "eyes_of_the_dark_darkness" }],
        tags: ["spells"],
      },
    ],

    6: [
      {
        id: "sorcerer.shadow_magic.hound_of_ill_omen",
        source: "subclass" as const,
        level: 6,
        grants: [{ type: "action", id: "hound_of_ill_omen" }],
        tags: ["combat", "summoning"],
        // TODO: summons a creature
      },
    ],

    14: [
      {
        id: "sorcerer.shadow_magic.shadow_walk",
        source: "subclass" as const,
        level: 14,
        grants: [{ type: "action", id: "shadow_walk" }],
        tags: ["movement", "bonus-action"],
      },
    ],

    18: [
      {
        id: "sorcerer.shadow_magic.umbral_form",
        source: "subclass" as const,
        level: 18,
        grants: [{ type: "action", id: "umbral_form" }],
        tags: ["transformation", "defense", "resistance", "bonus-action"],
      },
    ],
  },
};
