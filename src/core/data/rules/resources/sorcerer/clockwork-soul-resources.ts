import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const CLOCKWORK_SOUL_RESOURCES: Record<string, ResourceTemplate> = {
  restore_balance: {
    id: "restore_balance",
    sourceId: "clockwork_soul",
    category: "subclass_features",
    scalingType: "PB",
    recharge: "longRest",
    tags: [],
  },
  trance_of_order: {
    id: "trance_of_order",
    sourceId: "clockwork_soul",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: [],
  },
  clockwork_cavalcade: {
    id: "clockwork_cavalcade",
    sourceId: "clockwork_soul",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: [],
  },
};
