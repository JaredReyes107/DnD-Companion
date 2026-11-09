import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ARMORER: SubclassTemplate = {
  id: "armorer",
  classId: "artificer",
  source: "Tasha's Cauldron of Everything",

  progression: {
    3: [
      "artificer.armorer.tools_of_the_trade",
      "artificer.armorer.armorer_spells",
      "artificer.armorer.arcane_armor",
      "artificer.armorer.armor_model",
    ],
    5: ["extra_attack"],
    9: ["artificer.armorer.armor_modifications"],
    15: ["artificer.armorer.perfected_armor"],
  },

  featuresByLevel: {
    3: [
      {
        id: "artificer.armorer.tools_of_the_trade",
        source: "subclass" as const,
        level: 3,
        tags: ["proficiency"],
        // TODO: Grant. heavy armor + smith's tools
      },
      {
        id: "artificer.armorer.armorer_spells",
        source: "subclass" as const,
        level: 3,
        tags: ["spells"],
      },
      {
        id: "artificer.armorer.arcane_armor",
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
        id: "artificer.armorer.armor_model",
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
        id: "artificer.armorer.armor_modifications",
        source: "subclass" as const,
        level: 9,
        tags: ["utility"],
        // TODO: Equipment. Item modifier. Armor becomes 4 armor pieces / gets 4 infusion slots
      },
    ],

    15: [
      {
        id: "artificer.armorer.perfected_armor",
        source: "subclass" as const,
        level: 15,
        tags: ["combat", "defense"],
        // TODO: Override. Each option (armor model) gets one
      },
    ],
  },
};
