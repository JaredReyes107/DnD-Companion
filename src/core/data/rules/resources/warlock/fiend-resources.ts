import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const FIEND_RESOURCES: Record<string, ResourceTemplate> = {
  dark_ones_own_luck: {
    id: "dark_ones_own_luck",
    sourceId: "fiend",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "shortRest",
    tags: ["utility"],
  },

  hurl_through_hell: {
    id: "hurl_through_hell",
    sourceId: "fiend",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: ["combat", "control"],
  },
};
