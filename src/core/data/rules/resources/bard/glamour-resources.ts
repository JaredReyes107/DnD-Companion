import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const GLAMOUR_RESOURCES: Record<string, ResourceTemplate> = {
  mantle_of_majesty: {
    id: "mantle_of_majesty",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantor: {
      system: "feature",
      featureId: "mantle_of_majesty",
      obtainedVia: { via: "subclass", classId: "bard", subclassId: "glamour" },
    },

    scaling: { base: { kind: "fixed", value: 1 } },
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "support"],
  },
  unbreakable_majesty: {
    id: "unbreakable_majesty",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantor: {
      system: "feature",
      featureId: "unbreakable_majesty",
      obtainedVia: { via: "subclass", classId: "bard", subclassId: "glamour" },
    },

    scaling: { base: { kind: "fixed", value: 1 } },
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat"],
  },
};
