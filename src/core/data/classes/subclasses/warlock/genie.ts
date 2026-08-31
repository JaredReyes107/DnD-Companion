import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const GENIE: SubclassTemplate = {
  id: "genie",
  classId: "warlock",
  source: "Tasha's Cauldron of Everything",

  featuresByLevel: {
    1: [
      {
        id: "genie_expanded_spells",
        source: "subclass" as const,
        level: 1,
        grants: [{ type: "choice", id: "genie_patron_kind" }],
        tags: ["spells", "build-choice"],
        // TODO: Choice/Pool. Genie kind (dao/djinni/efreeti/marid)
      },
      {
        id: "genies_vessel",
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
        id: "elemental_gift",
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
        id: "sanctuary_vessel",
        source: "subclass" as const,
        level: 10,
        tags: ["rest", "utility", "healing"],
      },
    ],

    14: [
      {
        id: "limited_wish",
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
