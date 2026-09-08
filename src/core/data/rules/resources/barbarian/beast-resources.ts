import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const BEAST_RESOURCES: Record<string, ResourceTemplate> = {
  infectious_fury: {
    id: "infectious_fury",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantor: {
      system: "feature",
      featureId: "infectious_fury",
      obtainedVia: {
        via: "subclass",
        classId: "barbarian",
        subclassId: "beast",
      },
    },

    scaling: { base: { kind: "scaler", id: "PB" } },
    max: { kind: "formula", formula: { base: { kind: "scaler", id: "PB" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat"],
  },
  call_the_hunt: {
    id: "call_the_hunt",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantor: {
      system: "feature",
      featureId: "call_the_hunt",
      obtainedVia: {
        via: "subclass",
        classId: "barbarian",
        subclassId: "beast",
      },
    },

    scaling: { base: { kind: "scaler", id: "PB" } },
    max: { kind: "formula", formula: { base: { kind: "scaler", id: "PB" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "support"],
  },
};
