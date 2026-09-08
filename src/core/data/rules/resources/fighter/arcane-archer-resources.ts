import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ARCANE_ARCHER_RESOURCES: Record<string, ResourceTemplate> = {
  arcane_shot: {
    id: "arcane_shot",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "arcane_shot",
        obtainedVia: {
          via: "subclass",
          classId: "fighter",
          subclassId: "arcane_archer",
        },
      },
    ],

    max: { kind: "value", amount: 2 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: [],
  },
};
