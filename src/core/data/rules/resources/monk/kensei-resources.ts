import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const KENSEI_RESOURCES: Record<string, ResourceTemplate> = {
  deft_strike: {
    id: "deft_strike",
    sourceId: "kensei",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "perTurn",
    tags: [],
  },
  unerring_acurracy: {
    id: "unerring_acurracy",
    sourceId: "kensei",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "perTurn",
    tags: [],
  },
};
