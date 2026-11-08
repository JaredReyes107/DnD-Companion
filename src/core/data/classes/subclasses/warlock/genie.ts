import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const GENIE: SubclassTemplate = {
  id: "genie",
  classId: "warlock",
  source: "Tasha's Cauldron of Everything",
  progression: {
    1: ["warlock.genie.genie_expanded_spells", "warlock.genie.genies_vessel"],
    6: ["warlock.genie.elemental_gift"],
    10: ["warlock.genie.sanctuary_vessel"],
    14: ["warlock.genie.limited_wish"],
  },

  featuresByLevel: {
    1: [
      {
        id: "warlock.genie.genie_expanded_spells",
        source: "subclass" as const,
        level: 1,
        grants: [], //TODO: Choice/Pool
        tags: ["spells", "build-choice"],
        // TODO: Choice/Pool. Genie kind (dao/djinni/efreeti/marid)
      },
      {
        id: "warlock.genie.genies_vessel",
        source: "subclass" as const,
        level: 1,
        grants: [
          { type: "action", id: "replace_vessel" },
          { type: "action", id: "bottled_respite" },
          { type: "action", id: "genies_wrath" },
          { type: "resource", id: "genies_wrath" },
          { type: "resource", id: "bottled_respite" },
        ],
        tags: ["utility", "combat", "damage", "equipment"],
        // TODO: Equipment creation / Replacement
      },
    ],

    6: [
      {
        id: "warlock.genie.elemental_gift",
        source: "subclass" as const,
        level: 6,
        grants: [
          { type: "action", id: "elemental_gift_flight" },
          { type: "resource", id: "elemental_gift_flight" },
        ],
        tags: ["movement", "resistance"],
        // TODO: Damage resistance. Option dependant
      },
    ],

    10: [
      {
        id: "warlock.genie.sanctuary_vessel",
        source: "subclass" as const,
        level: 10,
        tags: ["rest", "utility", "healing"],
      },
    ],

    14: [
      {
        id: "warlock.genie.limited_wish",
        source: "subclass" as const,
        level: 14,
        grants: [
          { type: "action", id: "limited_wish" },
          { type: "resource", id: "limited_wish" },
        ],
        tags: ["spellcasting", "utility"],
        // TODO: replicates ANY 6th-level-or-lower spell
      },
    ],
  },
};
