import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ARCHFEY_RESOURCES: Record<string, ResourceTemplate> = {
  fey_presence: {
    id: "fey_presence",
    sourceId: "archfey",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "shortRest",
    tags: ["combat", "control"],
  },

  misty_escape: {
    id: "misty_escape",
    sourceId: "archfey",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "shortRest",
    tags: ["defense", "movement"],
  },

  dark_delirium: {
    id: "dark_delirium",
    sourceId: "archfey",
    category: "subclass_features",
    scalingType: "fixed:1",
    recharge: "shortRest",
    tags: ["combat", "control"],
  },
};
