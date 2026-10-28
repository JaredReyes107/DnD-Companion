import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const WAR_RESOURCES: Record<string, ResourceTemplate> = {
  war_priest: {
    id: "war_priest",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("WIS")),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "war_priest",
        obtainedVia: { via: "subclass", classId: "cleric", subclassId: "war" },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
