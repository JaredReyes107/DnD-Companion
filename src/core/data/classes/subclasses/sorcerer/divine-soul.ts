import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const DIVINE_SOUL: SubclassTemplate = {
  id: "divine_soul",
  classId: "sorcerer",
  source: "Xanathar's Guide to Everything",
  progression: {
    1: [
      "sorcerer.divine_soul.divine_magic",
      "sorcerer.divine_soul.favored_by_the_gods",
    ],
    6: ["sorcerer.divine_soul.empowered_healing"],
    14: ["sorcerer.divine_soul.otherworldly_wings"],
    18: ["sorcerer.divine_soul.unearthly_recovery"],
  },

  featuresByLevel: {
    1: [
      {
        id: "sorcerer.divine_soul.divine_magic",
        source: "subclass" as const,
        level: 1,
        grants: [], //TODO: Choice/Pool
        tags: ["spells", "build-choice"],
      },
      {
        id: "sorcerer.divine_soul.favored_by_the_gods",
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
        id: "sorcerer.divine_soul.empowered_healing",
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
        id: "sorcerer.divine_soul.otherworldly_wings",
        source: "subclass" as const,
        level: 14,
        grants: [{ type: "action", id: "otherworldly_wings" }],
        tags: ["movement", "transformation", "bonus-action"],
      },
    ],

    18: [
      {
        id: "sorcerer.divine_soul.unearthly_recovery",
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
