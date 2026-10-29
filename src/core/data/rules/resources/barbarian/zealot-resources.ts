import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ZEALOT_RESOURCES: Record<string, ResourceTemplate> = {
  divine_fury: {
    id: "divine_fury",
    sourceId: "zealot",
    category: "subclass_features",
    max: E.n(1),

    tags: ["combat"],
    origin: { book: "XGE" },
    recharge: [],
  },
  zealous_presence: {
    id: "zealous_presence",
    category: "subclass_features",
    origin: { book: "XGE" },
    max: E.n(1),
    grantors: [
      {
        system: "feature",
        featureId: "zealous_presence",
        obtainedVia: {
          via: "subclass",
          classId: "barbarian",
          subclassId: "zealot",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "support"],
  },
  fanatical_focus: {
    id: "fanatical_focus",
    category: "subclass_features",
    max: E.n(1),

    tags: ["defense"],
    origin: {
      book: "XGE",
    },
    // TODO: Once per rage
    recharge: [],
  },
};
