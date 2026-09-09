import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const HEXBLADE_RESOURCES: Record<string, ResourceTemplate> = {
  hexblades_curse: {
    id: "hexblades_curse",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "hexblades_curse",
        obtainedVia: {
          via: "subclass",
          classId: "warlock",
          subclassId: "hexblade",
        },
      },
    ],
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },
    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["combat"],
  },
  accursed_specter: {
    id: "accursed_specter",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "accursed_specter",
        obtainedVia: {
          via: "subclass",
          classId: "warlock",
          subclassId: "hexblade",
        },
      },
    ],
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },
    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "summoning"],
  },
};
