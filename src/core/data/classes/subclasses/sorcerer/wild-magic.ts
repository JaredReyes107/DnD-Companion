import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const WILD_MAGIC_SORCERER: SubclassTemplate = {
  id: "wild_magic_sorcerer",
  classId: "sorcerer",
  source: "Player's Handbook",

  featuresByLevel: {
    1: [
      {
        id: "sorcerer.wild_magic_sorcerer.wild_magic_surge",
        source: "subclass" as const,
        level: 1,
        grants: [{ type: "action", id: "wild_magic_surge" }],
        tags: [],
      },
      {
        id: "sorcerer.wild_magic_sorcerer.tides_of_chaos",
        source: "subclass" as const,
        level: 1,
        grants: [
          { type: "action", id: "tides_of_chaos" },
          { type: "resource", id: "tides_of_chaos" },
        ],
        tags: ["utility", "advantage", "skill", "attack", "saving-throw"],
      },
    ],

    6: [
      {
        id: "sorcerer.wild_magic_sorcerer.bend_luck",
        source: "subclass" as const,
        level: 6,
        grants: [{ type: "action", id: "bend_luck" }],
        tags: ["control", "reaction"],
      },
    ],

    14: [
      {
        id: "sorcerer.wild_magic_sorcerer.controlled_chaos",
        source: "subclass" as const,
        level: 14,
        //TODO: Override. Extends Wild Magic Surge. Grants "advantage" on the roll
        tags: [],
      },
    ],

    18: [
      {
        id: "sorcerer.wild_magic_sorcerer.spell_bombardment",
        source: "subclass" as const,
        level: 18,
        grants: [{ type: "action", id: "spell_bombardment" }],
        tags: ["combat", "damage"],
      },
    ],
  },
};
