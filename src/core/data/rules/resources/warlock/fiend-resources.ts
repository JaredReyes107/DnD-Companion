import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const FIEND_RESOURCES: Record<string, ResourceTemplate> = {
  dark_ones_own_luck: {
    id: "dark_ones_own_luck",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "dark_ones_own_luck",
        obtainedVia: {
          via: "subclass",
          classId: "warlock",
          subclassId: "fiend",
        },
      },
    ],

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["utility"],
  },
  hurl_through_hell: {
    id: "hurl_through_hell",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "hurl_through_hell",
        obtainedVia: {
          via: "subclass",
          classId: "warlock",
          subclassId: "fiend",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "control"],
  },
};
