import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const OPEN_HAND_RESOURCES: Record<string, ResourceTemplate> = {
  wholeness_of_body: {
    id: "wholeness_of_body",
    category: "subclass_features",
    origin: { book: "PHB" },
    grantor: {
      system: "feature",
      featureId: "wholeness_of_body",
      obtainedVia: {
        via: "subclass",
        classId: "monk",
        subclassId: "open_hand",
      },
    },

    scaling: { base: { kind: "fixed", value: 1 } },
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
