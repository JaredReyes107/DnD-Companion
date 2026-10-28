import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ARCHFEY_RESOURCES: Record<string, ResourceTemplate> = {
  fey_presence: {
    id: "fey_presence",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "fey_presence",
        obtainedVia: {
          via: "subclass",
          classId: "warlock",
          subclassId: "archfey",
        },
      },
    ],

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["combat", "control"],
  },
  misty_escape: {
    id: "misty_escape",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "misty_escape",
        obtainedVia: {
          via: "subclass",
          classId: "warlock",
          subclassId: "archfey",
        },
      },
    ],

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["defense", "movement"],
  },
  dark_delirium: {
    id: "dark_delirium",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "dark_delirium",
        obtainedVia: {
          via: "subclass",
          classId: "warlock",
          subclassId: "archfey",
        },
      },
    ],

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["combat", "control"],
  },
};
