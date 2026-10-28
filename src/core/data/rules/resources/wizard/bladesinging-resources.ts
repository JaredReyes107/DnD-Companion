import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const BLADESINGING_RESOURCES: Record<string, ResourceTemplate> = {
  bladesong: {
    id: "bladesong",
    category: "subclass_features",
    max: E.pb(),

    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "bladesong",
        obtainedVia: {
          via: "subclass",
          classId: "wizard",
          subclassId: "bladesinging",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "buff"],
  },
};
