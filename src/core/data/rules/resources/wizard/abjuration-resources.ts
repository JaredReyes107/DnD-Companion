import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ABJURATION_RESOURCES: Record<string, ResourceTemplate> = {
  arcane_ward_create: {
    id: "arcane_ward_create",
    category: "subclass_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "arcane_ward_create",
        obtainedVia: {
          via: "subclass",
          classId: "wizard",
          subclassId: "abjuration",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["defense"],
  },

  arcane_ward_hp: {
    id: "arcane_ward_hp",
    category: "subclass_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "arcane_ward_hp",
        obtainedVia: {
          via: "subclass",
          classId: "wizard",
          subclassId: "abjuration",
        },
      },
    ],

    max: {
      kind: "formula",
      formula: {
        base: { kind: "scaler", id: "class-level", param: "wizard" },
        steps: [
          { op: "multiply", value: 2 },
          { op: "add", scalerId: "INT" },
        ],
      },
    },
    min: { kind: "value", amount: 0 },

    recharge: [],
    tags: ["defense"],
  },
};
