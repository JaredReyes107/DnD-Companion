import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const SPORES_RESOURCES: Record<string, ResourceTemplate> = {
  fungal_infestation: {
    id: "fungal_infestation",
    sourceId: "spores",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("WIS")),
    recharge: "longRest",
    tags: [],
  },
};
