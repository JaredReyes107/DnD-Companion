import { ResourceTemplate } from "@/game/types/templates/resource-template";

export const RESOURCES_FIGHTER: Record<string, ResourceTemplate> = {
  second_wind: {
    id: "second_wind",
    label: "Second Wind",
    sourceId: "fighter",
    category: "class_features",
    scalingType: "fixed:1",
    recharge: "shortRest",
    tags: ["combat", "healing"],
  },
  action_surge: {
    id: "action_surge",
    label: "Action Surge",
    sourceId: "fighter",
    category: "class_features",
    scalingType: "action-surge",
    recharge: "shortRest",
    tags: ["combat", "damage", "resistance"],
  },
  indomitable: {
    id: "indomitable",
    label: "Indomitable",
    sourceId: "fighter",
    category: "class_features",
    scalingType: "indomitable",
    recharge: "shortRest",
    tags: ["combat", "damage", "resistance"],
  },
};
