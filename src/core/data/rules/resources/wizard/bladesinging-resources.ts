import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const BLADESINGING_RESOURCES: Record<string, ResourceTemplate> = {
  bladesong: {
    id: "bladesong",
    sourceId: "bladesinging",
    category: "subclass_features",
    max: E.pb(),
    recharge: "longRest",
    tags: ["combat", "buff"],
  },
};
