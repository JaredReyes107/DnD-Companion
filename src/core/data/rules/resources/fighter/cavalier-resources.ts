import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const CAVALIER_RESOURCES: Record<string, ResourceTemplate> = {
  unwavering_mark_retaliate: {
    id: "unwavering_mark_retaliate",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "unwavering_mark_retaliate",
        obtainedVia: {
          via: "subclass",
          classId: "fighter",
          subclassId: "cavalier",
        },
      },
    ],

    max: { kind: "formula", formula: { base: { kind: "scaler", id: "CHA" } } },
    min: { kind: "value", amount: 0 },

    // Gates the retaliation attack only — marking a creature on hit is free.
    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "tank"],
  },
  warding_maneuver: {
    id: "warding_maneuver",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "warding_maneuver",
        obtainedVia: {
          via: "subclass",
          classId: "fighter",
          subclassId: "cavalier",
        },
      },
    ],

    max: { kind: "formula", formula: { base: { kind: "scaler", id: "CON" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["defense", "damage-reduction", "reaction"],
  },
  vigilant_defender: {
    id: "vigilant_defender",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "vigilant_defender",
        obtainedVia: {
          via: "subclass",
          classId: "fighter",
          subclassId: "cavalier",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "roundStart" }, amount: "full" }],
    tags: ["combat", "reaction"],
  },
};
