import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const HEXBLADE: SubclassTemplate = {
  id: "hexblade",
  classId: "warlock",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    1: [
      {
        id: "warlock.hexblade.hexblade_expanded_spells",
        source: "subclass" as const,
        level: 1,
        tags: ["spells"],
      },
      {
        id: "warlock.hexblade.hex_warrior",
        source: "subclass" as const,
        level: 1,
        grants: [{ type: "action", id: "hex_warrior" }],
        tags: ["proficiency", "combat"],
      },
      {
        id: "warlock.hexblade.hexblades_curse",
        source: "subclass" as const,
        level: 1,
        grants: [
          { type: "action", id: "hexblades_curse" },
          { type: "resource", id: "hexblades_curse" },
        ],
        tags: ["combat", "buff", "debuff"],
      },
    ],

    6: [
      {
        id: "warlock.hexblade.accursed_specter",
        source: "subclass" as const,
        level: 6,
        grants: [
          { type: "action", id: "accursed_specter" },
          { type: "resource", id: "accursed_specter" },
        ],
        tags: ["combat", "summoning", "control"],
      },
    ],

    10: [
      {
        id: "warlock.hexblade.armor_of_hexes",
        source: "subclass" as const,
        level: 10,
        grants: [{ type: "action", id: "armor_of_hexes" }],
        tags: ["defense", "reaction"],
      },
    ],

    14: [
      {
        id: "warlock.hexblade.master_of_hexes",
        source: "subclass" as const,
        level: 14,
        grants: [{ type: "action", id: "master_of_hexes" }],
        tags: ["combat", "buff"],
      },
    ],
  },
};
