import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const SAMURAI_RESOURCES: Record<string, ResourceTemplate> = {
  fighting_spirit: {
    id: "fighting_spirit",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantor: {
      system: "feature",
      featureId: "fighting_spirit",
      obtainedVia: {
        via: "subclass",
        classId: "fighter",
        subclassId: "samurai",
      },
    },

    scaling: { base: { kind: "scaler", id: "PB" } },
    max: { kind: "formula", formula: { base: { kind: "scaler", id: "PB" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "buff"],
  },
  strength_before_death: {
    id: "strength_before_death",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantor: {
      system: "feature",
      featureId: "strength_before_death",
      obtainedVia: {
        via: "subclass",
        classId: "fighter",
        subclassId: "samurai",
      },
    },

    scaling: { base: { kind: "fixed", value: 1 } },
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["defense", "last-stand"],
  },
};
