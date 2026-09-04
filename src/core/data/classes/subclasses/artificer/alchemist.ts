import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ALCHEMIST: SubclassTemplate = {
  id: "alchemist",
  classId: "artificer",
  source: "Tasha's Cauldron of Everything",

  featuresByLevel: {
    3: [
      {
        id: "tool_proficiency_alchemist",
        source: "subclass" as const,
        level: 3,
        tags: ["proficiency", "tool"],
        // TODO: Choice. Tool. Grant proficiency
      },
      {
        id: "alchemist_spells",
        source: "subclass" as const,
        level: 3,
        tags: ["spells"],
      },
      {
        id: "experimental_elixir",
        source: "subclass" as const,
        level: 3,
        grants: [
          { type: "action", id: "experimental_elixir_fabricate" },
          { type: "action", id: "experimental_elixir_create" },
          { type: "resource", id: "experimental_elixir" },
        ],
        tags: ["utility", "healing", "combat"],
      },
    ],

    5: [
      {
        id: "alchemical_savant",
        source: "subclass" as const,
        level: 5,
        tags: ["combat", "healing"],
      },
    ],

    9: [
      {
        id: "restorative_reagents",
        source: "subclass" as const,
        level: 9,
        grants: [
          { type: "action", id: "cast_lesser_restoration_free" },
          { type: "resource", id: "cast_lesser_restoration_free" },
        ],
        tags: ["healing"],
      },
    ],

    15: [
      {
        id: "chemical_mastery",
        source: "subclass" as const,
        level: 15,
        grants: [
          { type: "action", id: "cast_greater_restoration_free" },
          { type: "resource", id: "cast_greater_restoration_free" },
          { type: "action", id: "cast_heal_free" },
          { type: "resource", id: "cast_heal_free" },
        ],
        tags: ["healing", "resistance", "spellcasting"],
        // TODO: Grant resistances: Acid and Poison. Inmunity to Poisoned condition
      },
    ],
  },
};
