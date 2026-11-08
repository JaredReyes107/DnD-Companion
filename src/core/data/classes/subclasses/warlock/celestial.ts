import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const CELESTIAL: SubclassTemplate = {
  id: "celestial",
  classId: "warlock",
  source: "Xanathar's Guide to Everything",
  progression: {
    1: [
      "warlock.celestial.celestial_expanded_spells",
      "warlock.celestial.bonus_cantrips",
      "warlock.celestial.healing_light",
    ],
    6: ["warlock.celestial.radiant_soul"],
    10: ["warlock.celestial.celestial_resilience"],
    14: ["warlock.celestial.searing_vengeance"],
  },

  featuresByLevel: {
    1: [
      {
        id: "warlock.celestial.celestial_expanded_spells",
        source: "subclass" as const,
        level: 1,
        tags: ["spells"],
      },
      {
        id: "warlock.celestial.bonus_cantrips",
        source: "subclass" as const,
        level: 1,
        tags: ["spells"],
      },
      {
        id: "warlock.celestial.healing_light",
        source: "subclass" as const,
        level: 1,
        grants: [
          { type: "action", id: "healing_light" },
          { type: "resource", id: "healing_light_dice" },
        ],
        tags: ["healing"],
      },
    ],

    6: [
      {
        id: "warlock.celestial.radiant_soul",
        source: "subclass" as const,
        level: 6,
        grants: [{ type: "action", id: "radiant_soul" }],
        tags: ["combat", "damage", "resistance"],
      },
    ],

    10: [
      {
        id: "warlock.celestial.celestial_resilience",
        source: "subclass" as const,
        level: 10,
        grants: [{ type: "action", id: "celestial_resilience" }],
        tags: ["defense", "combat"],
      },
    ],

    14: [
      {
        id: "warlock.celestial.searing_vengeance",
        source: "subclass" as const,
        level: 14,
        grants: [
          { type: "action", id: "searing_vengeance" },
          { type: "resource", id: "searing_vengeance" },
        ],
        tags: ["combat", "healing", "damage", "aoe", "death-saves"],
      },
    ],
  },
};
