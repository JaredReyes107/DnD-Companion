import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const HEXBLADE_RESOURCES: Record<string, ResourceTemplate> = {
  hexblades_curse: {
    id: "hexblades_curse",
    category: "subclass_features",
    max: E.n(1),

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

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["combat"],
  },
  accursed_specter: {
    id: "accursed_specter",
    category: "subclass_features",
    max: E.n(1),

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

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "summoning"],
  },
};
