import { ResourceTemplate } from "@/game/types/templates/resource-template";

export const RESOURCES_CLERIC: Record<string, ResourceTemplate> = {
  channel_divinity: {
    id: "channel_divinity",
    label: "Channel Divinity",
    sourceId: "cleric",
    category: "class_features",
    scalingType: "channel-divinity",
    recharge: "longRest",
    tags: ["combat", "utility"],
  },
};
