import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const GLORY_RESOURCES: Record<string, ResourceTemplate> = {
  glorious_defense: {
    id: "glorious_defense",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "glorious_defense",
        obtainedVia: {
          via: "subclass",
          classId: "paladin",
          subclassId: "glory",
        },
      },
    ],

    max: { kind: "formula", formula: { base: { kind: "scaler", id: "CHA" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  living_legend: {
    id: "living_legend",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "living_legend",
        obtainedVia: {
          via: "subclass",
          classId: "paladin",
          subclassId: "glory",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  living_legend_precise_attack: {
    id: "living_legend_precise_attack",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "living_legend_precise_attack",
        obtainedVia: {
          via: "subclass",
          classId: "paladin",
          subclassId: "glory",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "roundStart" }, amount: "full" }],
    tags: [],
  },
};
