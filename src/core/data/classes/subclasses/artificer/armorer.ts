import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ARMORER: SubclassTemplate = {
  id: "armorer",
  classId: "artificer",
  source: "Tasha's Cauldron of Everything",

  featuresByLevel: {
    3: [
      {
        id: "tools_of_the_trade",
        source: "subclass" as const,
        level: 3,
        tags: ["proficiency"],
        // TODO: Grant. heavy armor + smith's tools
      },
      {
        id: "armorer_spells",
        source: "subclass" as const,
        level: 3,
        tags: ["spells"],
      },
      {
        id: "arcane_armor",
        source: "subclass" as const,
        level: 3,
        grants: [
          { type: "action", id: "arcane_armor_create" },
          { type: "action", id: "arcane_armor_don_doff" },
        ],
        tags: ["equipment", "utility"],
        // TODO: Equipment. Item modifier
      },
      {
        id: "armor_model",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "action", id: "change_armor_model" }],
        tags: ["build-choice"],
        // TODO. Equipment. Item modifier with grants
      },
    ],

    5: [
      {
        id: "extra_attack",
        source: "subclass" as const,
        level: 5,
        tags: ["combat"],
        //TODO: Override. Base attack action
      },
    ],

    9: [
      {
        id: "armor_modifications",
        source: "subclass" as const,
        level: 9,
        tags: ["utility"],
        // TODO: Equipment. Item modifier. Armor becomes 4 armor pieces / gets 4 infusion slots
      },
    ],

    15: [
      {
        id: "perfected_armor",
        source: "subclass" as const,
        level: 15,
        tags: ["combat", "defense"],
        // TODO: Override. Each option (armor model) gets one
      },
    ],
  },
};
