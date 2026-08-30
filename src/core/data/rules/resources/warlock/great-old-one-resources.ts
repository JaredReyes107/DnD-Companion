import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const GREAT_OLD_ONE_RESOURCES: Record<string, ResourceTemplate> = {
  entropic_ward: {
    id: "entropic_ward",
    sourceId: "great_old_one",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "shortRest",
    tags: ["defense"],
  },
};
