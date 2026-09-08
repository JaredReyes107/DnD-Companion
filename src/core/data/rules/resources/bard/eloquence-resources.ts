import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ELOQUENCE_RESOURCES: Record<string, ResourceTemplate> = {
  universal_speech: {
    id: "universal_speech",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantor: {
      system: "feature",
      featureId: "universal_speech",
      obtainedVia: {
        via: "subclass",
        classId: "bard",
        subclassId: "eloquence",
      },
    },

    scaling: { base: { kind: "fixed", value: 1 } },
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  infectious_inspiration: {
    id: "infectious_inspiration",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantor: {
      system: "feature",
      featureId: "infectious_inspiration",
      obtainedVia: {
        via: "subclass",
        classId: "bard",
        subclassId: "eloquence",
      },
    },

    scaling: { base: { kind: "scaler", id: "CHA" } },
    max: { kind: "formula", formula: { base: { kind: "scaler", id: "CHA" } } },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
