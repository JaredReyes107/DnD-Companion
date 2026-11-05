import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ORDER_RESOURCES: Record<string, ResourceTemplate> = {
  embodiment_of_the_law: {
    id: "embodiment_of_the_law",
    category: "subclass_features",
    origin: { book: "TCE" },
    max: E.max(E.n(1), E.mod("WIS")),

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
