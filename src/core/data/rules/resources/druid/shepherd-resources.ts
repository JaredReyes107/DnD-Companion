import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const SHEPHERD_RESOURCES: Record<string, ResourceTemplate> = {
  spirit_totem: {
    id: "spirit_totem",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "spirit_totem",
        obtainedVia: {
          via: "subclass",
          classId: "druid",
          subclassId: "shepherd",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
  faithful_summons: {
    id: "faithful_summons",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "faithful_summons",
        obtainedVia: {
          via: "subclass",
          classId: "druid",
          subclassId: "shepherd",
        },
      },
    ],

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: [],
  },
};
