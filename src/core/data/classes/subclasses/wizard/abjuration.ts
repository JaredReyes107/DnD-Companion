import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ABJURATION: SubclassTemplate = {
  id: "abjuration",
  classId: "wizard",
  source: "Player's Handbook",

  featuresByLevel: {
    2: [
      {
        id: "abjuration_savant",
        source: "subclass" as const,
        level: 2,
        tags: ["downtime", "spells"],
      },
      {
        id: "arcane_ward",
        source: "subclass" as const,
        level: 2,
        grants: [
          { type: "action", id: "arcane_ward_create" },
          { type: "action", id: "arcane_ward_recharge" },
          { type: "resource", id: "arcane_ward_create" },
          { type: "resource", id: "arcane_ward_hp" },
        ],
        tags: ["defense", "self-sustain"],
      },
    ],

    6: [
      {
        id: "projected_ward",
        source: "subclass" as const,
        level: 6,
        grants: [{ type: "action", id: "projected_ward" }],
        tags: ["defense", "reaction"],
      },
    ],

    10: [
      {
        id: "improved_abjuration",
        source: "subclass" as const,
        level: 10,
        tags: ["utility"],
      },
    ],

    14: [
      {
        id: "spell_resistance",
        source: "subclass" as const,
        level: 14,
        //TODO: Grant modifier (Descriptive. Advantage + Resistance against spells)
        tags: ["defense", "resistance", "advantage"],
      },
    ],
  },
};
