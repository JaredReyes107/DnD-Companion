import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const KENSEI_RESOURCES: Record<string, ResourceTemplate> = {
  deft_strike: {
    id: "deft_strike",
    sourceId: "kensei",
    category: "subclass_features",
    max: E.n(1),
    recharge: "perTurn",
    tags: [],
  },
  unerring_acurracy: {
    id: "unerring_acurracy",
    sourceId: "kensei",
    category: "subclass_features",
    max: E.n(1),
    recharge: "perTurn",
    tags: [],
  },
};
