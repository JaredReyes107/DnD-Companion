import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const WILD_MAGIC_RESOURCES: Record<string, ResourceTemplate> = {
  magic_awareness: {
    id: "magic_awareness",
    sourceId: "wild_magic",
    category: "subclass_features",
    scalingType: "PB",
    recharge: "longRest",
    tags: ["utility"],
  },
  bolstering_magic: {
    id: "bolstering_magic",
    sourceId: "wild_magic",
    category: "subclass_features",
    scalingType: "PB",
    recharge: "longRest",
    tags: ["support", "utility"],
  },
};
