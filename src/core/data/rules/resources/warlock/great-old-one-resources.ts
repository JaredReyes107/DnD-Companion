import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const GREAT_OLD_ONE_RESOURCES: Record<string, ResourceTemplate> = {
  entropic_ward: {
    id: "entropic_ward",
    category: "subclass_features",
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
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },
    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["defense"],
  },
};
