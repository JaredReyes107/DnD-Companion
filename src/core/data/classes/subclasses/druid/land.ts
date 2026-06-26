import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const LAND: SubclassTemplate = {
  id: "land",
  classId: "druid",
  source: "phb",

  featuresByLevel: {
    2: [
      {
        id: "bonus_cantrip",
        source: "subclass" as const,
        level: 2,
        tags: ["spells"],
      },
      {
        id: "natural_recovery",
        source: "subclass" as const,
        level: 2,
        resources: ["natural_recovery"],
        actions: ["natural_recovery"],
        tags: ["spellcasting", "resource"],
        // TODO: Spell slot recovery hook, on short rest (total levels up to half druid level, rounded up)
      },
    ],

    3: [
      {
        id: "circle_spells_land",
        source: "subclass" as const,
        level: 3,
        tags: ["spells", "build-choice"],
        // TODO: Terrain choice system (Arctic/Coast/Desert/Forest/Grassland/Mountain/Swamp/Underdark)
        // TODO: Spell list expands again at lv5, lv7, lv9 — needs spell registry integration
      },
    ],

    6: [
      {
        id: "lands_stride",
        source: "subclass" as const,
        level: 6,
        tags: ["movement", "defense"],
        // TODO: Difficult terrain movement hook
        // TODO: Saving throw advantage hook (plants, magical sleep)
      },
    ],

    10: [
      {
        id: "natures_ward",
        source: "subclass" as const,
        level: 10,
        tags: ["defense"],
        // TODO: Condition immunity hook (poison, disease)
        // TODO: Condition immunity hook (charm/fright from elementals or fey)
      },
    ],

    14: [
      {
        id: "natures_sanctuary",
        source: "subclass" as const,
        level: 14,
        tags: ["defense"],
        // TODO: WIS save hook on beasts/plants attempting to attack you
      },
    ],
  },
};
