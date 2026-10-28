import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const INQUISITIVE_RESOURCES: Record<string, ResourceTemplate> = {
  unerring_eye: {
    id: "unerring_eye",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("WIS")),

    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "unerring_eye",
        obtainedVia: {
          via: "subclass",
          classId: "rogue",
          subclassId: "inquisitive",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
