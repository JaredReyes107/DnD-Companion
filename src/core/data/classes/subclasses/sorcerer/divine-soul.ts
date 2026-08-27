import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const DIVINE_SOUL: SubclassTemplate = {
  id: "divine_soul",
  classId: "sorcerer",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    1: [
      {
        id: "divine_magic",
        source: "subclass" as const,
        level: 1,
        grants: [{ type: "choice", id: "divine_magic_affinity" }],
        tags: ["spells", "build-choice"],
      },
      {
        id: "favored_by_the_gods",
        source: "subclass" as const,
        level: 1,
        grants: [
          { type: "action", id: "favored_by_the_gods" },
          { type: "resource", id: "favored_by_the_gods" },
        ],
        tags: ["utility", "bonus", "saving-throw", "attack-roll"],
        // TODO: 2d4 added to a failed save/missed attack
      },
    ],

    6: [
      {
        id: "empowered_healing",
        source: "subclass" as const,
        level: 6,
        grants: [
          { type: "action", id: "empowered_healing" },
          { type: "resource", id: "empowered_healing" },
        ],
        tags: ["healing", "combat"],
        // TODO: reroll healing dice. Only spells
      },
    ],

    14: [
      {
        id: "otherworldly_wings",
        source: "subclass" as const,
        level: 14,
        grants: [{ type: "action", id: "otherworldly_wings" }],
        tags: ["movement", "transformation", "bonus-action"],
      },
    ],

    18: [
      {
        id: "unearthly_recovery",
        source: "subclass" as const,
        level: 18,
        grants: [
          { type: "action", id: "unearthly_recovery" },
          { type: "resource", id: "unearthly_recovery" },
        ],
        tags: ["healing"],
        // TODO: conditional gate ("only usable below half HP")
      },
    ],
  },
};
