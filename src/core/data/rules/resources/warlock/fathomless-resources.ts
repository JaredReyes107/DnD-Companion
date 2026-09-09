import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const FATHOMLESS_RESOURCES: Record<string, ResourceTemplate> = {
  tentacle_of_the_deeps: {
    id: "tentacle_of_the_deeps",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "tentacle_of_the_deeps",
        obtainedVia: {
          via: "subclass",
          classId: "warlock",
          subclassId: "fathomless",
        },
      },
    ],
    max: { kind: "formula", formula: { base: { kind: "scaler", id: "PB" } } },
    min: { kind: "value", amount: 0 },
    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "damage"],
  },
  grasping_tentacles: {
    id: "grasping_tentacles",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "grasping_tentacles",
        obtainedVia: {
          via: "subclass",
          classId: "warlock",
          subclassId: "fathomless",
        },
      },
    ],
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },
    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["spells", "control"],
  },
  fathomless_plunge: {
    id: "fathomless_plunge",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "fathomless_plunge",
        obtainedVia: {
          via: "subclass",
          classId: "warlock",
          subclassId: "fathomless",
        },
      },
    ],
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },
    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["movement"],
  },
};
