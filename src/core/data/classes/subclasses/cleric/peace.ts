import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const PEACE: SubclassTemplate = {
  id: "peace",
  classId: "cleric",

  featuresByLevel: {
    1: [
      {
        id: "peace_domain_spells",
        source: "subclass" as const,
        level: 1,
        tags: ["spells"],
      },
      {
        id: "emboldening_bond",
        source: "subclass" as const,
        level: 1,
        grants: [{ type: "action", id: "emboldening_bond"}, { type: "resource", id: "emboldening_bond"}],
        tags: [
          "support",
          "throw-bonus",
          "attack-throw",
          "skill-check",
          "saving-throw",
        ],
      },
      {
        id: "implement_of_peace",
        source: "subclass" as const,
        level: 1,
        tags: ["skill-proficiencies"],
      },
    ],

    2: [
      {
        id: "channel_divinity_balm_of_peace",
        source: "subclass" as const,
        level: 2,
        grants: [{ type: "action", id: "channel_divinity_balm_of_peace"}],
        tags: ["healing", "movement"],
      },
    ],

    6: [
      {
        id: "protective_bond",
        source: "subclass" as const,
        level: 6,
        grants: [{ type: "action", id: "protective_bond"}],
        tags: ["defense", "damage-redirection"],
      },
    ],

    8: [
      {
        id: "potent_spellcasting",
        source: "subclass" as const,
        level: 8,
        tags: [],
      },
    ],

    17: [
      {
        id: "expansive_bond",
        source: "subclass" as const,
        level: 17,
        tags: [],
        // TODO: Override to increase range and add the resistance
      },
    ],
  },
};
