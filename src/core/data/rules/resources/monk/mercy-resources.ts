import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const MERCY_RESOURCES: Record<string, ResourceTemplate> = {
  hand_of_ultimate_mercy: {
    id: "hand_of_ultimate_mercy",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantor: {
      system: "feature",
      featureId: "hand_of_ultimate_mercy",
      obtainedVia: { via: "subclass", classId: "monk", subclassId: "mercy" },
    },

    scaling: { base: { kind: "fixed", value: 1 } },
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
