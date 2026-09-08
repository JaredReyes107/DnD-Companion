import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ZEALOT_RESOURCES: Record<string, ResourceTemplate> = {
  zealous_presence: {
    id: "zealous_presence",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantor: {
      system: "feature",
      featureId: "zealous_presence",
      obtainedVia: {
        via: "subclass",
        classId: "barbarian",
        subclassId: "zealot",
      },
    },

    scaling: { base: { kind: "fixed", value: 1 } },
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "support"],
  },
  fanatical_focus: {
    id: "fanatical_focus",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantor: {
      system: "feature",
      featureId: "fanatical_focus",
      obtainedVia: {
        via: "subclass",
        classId: "barbarian",
        subclassId: "zealot",
      },
    },

    scaling: { base: { kind: "fixed", value: 1 } },
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [],
    tags: ["defense"],
  },
};
