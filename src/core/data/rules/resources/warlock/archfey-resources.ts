import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ARCHFEY_RESOURCES: Record<string, ResourceTemplate> = {
  fey_presence: {
    id: "fey_presence",
    category: "subclass_features",
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
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },
    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["combat", "control"],
  },
  misty_escape: {
    id: "misty_escape",
    category: "subclass_features",
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
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },
    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["defense", "movement"],
  },
  dark_delirium: {
    id: "dark_delirium",
    category: "subclass_features",
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
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },
    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["combat", "control"],
  },
};
