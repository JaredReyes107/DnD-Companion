import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const MOON: SubclassTemplate = {
  id: "moon",
  classId: "druid",
  source: "phb",

  featuresByLevel: {
    2: [
      {
        id: "combat_wild_shape",
        source: "subclass" as const,
        level: 2,
        actions: ["combat_wild_shape_heal"],
        tags: ["combat", "transformation"],
        // TODO: Healing hook (1d8 per spell slot level, bonus action while shifted)
      },
      {
        id: "circle_forms",
        source: "subclass" as const,
        level: 2,
        tags: ["transformation"],
        // TODO: Extends wild_shape — CR cap increase (CR 1 at lv2, CR = level/3 at lv6)
      },
    ],

    6: [
      {
        id: "primal_strike",
        source: "subclass" as const,
        level: 6,
        tags: ["damage", "passive"],
        // TODO: Damage type override hook (attacks in beast form count as magical)
      },
    ],

    10: [
      {
        id: "elemental_wild_shape",
        source: "subclass" as const,
        level: 10,
        actions: ["elemental_wild_shape"],
        tags: ["transformation"],
      },
    ],

    14: [
      {
        id: "thousand_forms",
        source: "subclass" as const,
        level: 14,
        actions: ["thousand_forms"],
        tags: ["spellcasting", "utility"]
      },
    ],
  },
};