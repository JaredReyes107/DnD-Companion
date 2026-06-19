import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const RESOURCES_CLERIC: Record<string, ResourceTemplate> = {
  channel_divinity: {
    id: "channel_divinity",
    sourceId: "cleric",
    category: "class_features",
    scalingType: "channel-divinity",
    recharge: "longRest",
    tags: ["combat", "utility"],
  },
};
