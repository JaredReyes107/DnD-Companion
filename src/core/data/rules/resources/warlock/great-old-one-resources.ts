import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const GREAT_OLD_ONE_RESOURCES: Record<string, ResourceTemplate> = {
  entropic_ward: {
    id: "entropic_ward",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "entropic_ward",
        obtainedVia: {
          via: "subclass",
          classId: "warlock",
          subclassId: "great_old_one",
        },
      },
    ],

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["defense"],
  },
};
