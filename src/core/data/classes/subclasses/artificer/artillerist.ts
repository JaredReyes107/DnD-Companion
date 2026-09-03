import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ARTILLERIST: SubclassTemplate = {
  id: "artillerist",
  classId: "artificer",
  source: "Tasha's Cauldron of Everything",

  featuresByLevel: {
    3: [
      {
        id: "artillerist_tool_proficiency",
        source: "subclass" as const,
        level: 3,
        tags: ["proficiency", "tool"],
        // TODO: Grant. Tool proficiency, Woodcarver's tool
      },
      {
        id: "artillerist_spells",
        source: "subclass" as const,
        level: 3,
        tags: ["spells"],
      },
      {
        id: "eldritch_cannon",
        source: "subclass" as const,
        level: 3,
        grants: [
          { type: "resource", id: "eldritch_cannon_reservoir" },
          { type: "resource", id: "eldritch_cannons_limit" },
          { type: "action", id: "eldritch_cannon_create" },
          { type: "action", id: "eldritch_cannon_activate" },
          { type: "action", id: "eldritch_cannon_dismiss" },
        ],
        tags: ["combat", "summoning"],
      },
    ],

    5: [
      {
        id: "arcane_firearm",
        source: "subclass" as const,
        level: 5,
        grants: [{ type: "action", id: "arcane_firearm_create" }],
        tags: ["equipment", "combat", "damage"],
        // TODO: Equipment. Item modifier
      },
    ],

    9: [
      {
        id: "explosive_cannon",
        source: "subclass" as const,
        level: 9,
        grants: [{ type: "action", id: "eldritch_cannon_detonate" }],
        tags: ["combat", "damage", "aoe"],
        // TODO: Override. Each canon option
      },
    ],

    15: [
      {
        id: "fortified_position",
        source: "subclass" as const,
        level: 15,
        tags: ["defense", "utility"],
        // TODO: Override. Change the "create canon" and "activation" description
      },
    ],
  },
};
