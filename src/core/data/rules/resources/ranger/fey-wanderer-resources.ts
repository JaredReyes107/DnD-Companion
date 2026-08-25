import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const FEY_WANDERER_RESOURCES: Record<string, ResourceTemplate> = {
  dreadful_strikes: {
    id: "dreadful_strikes",
    sourceId: "fey_wanderer",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "perTurn",
  },
  fey_reinforcements: {
    id: "fey_reinforcements",
    sourceId: "fey_wanderer",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
  },
  misty_wanderer: {
    id: "misty_wanderer",
    sourceId: "fey_wanderer",
    category: "subclass_features",
    scalingType: "WIS",
    recharge: "longRest",
  },
};
