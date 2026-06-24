import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const SHEPHERD_RESOURCES: Record<string, ResourceTemplate> = {
  spirit_totem: {
    id: "spirit_totem",
    sourceId: "shepherd",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: [],
  },
  faithful_summons: {
    id: "faithful_summons",
    sourceId: "shepherd",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "shortRest",
    tags: [],
  },
};
