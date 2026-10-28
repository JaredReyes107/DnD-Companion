import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const GLAMOUR_RESOURCES: Record<string, ResourceTemplate> = {
  mantle_of_majesty: {
    id: "mantle_of_majesty",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "mantle_of_majesty",
        obtainedVia: {
          via: "subclass",
          classId: "bard",
          subclassId: "glamour",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "support"],
  },
  enthralling_performance: {
    id: "enthralling_performance",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "enthralling_performance",
        obtainedVia: {
          via: "subclass",
          classId: "bard",
          subclassId: "glamour",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["roleplay"],
  },
  unbreakable_majesty: {
    id: "unbreakable_majesty",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "unbreakable_majesty",
        obtainedVia: {
          via: "subclass",
          classId: "bard",
          subclassId: "glamour",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat"],
  },
};
