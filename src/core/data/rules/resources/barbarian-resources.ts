import { ResourceTemplate } from "@/core/entities/rules/resource-template";

import { ZEALOT_RESOURCES } from "./barbarian/zealot-resources";
import { BEAST_RESOURCES } from "./barbarian/beast-resources";
import { WILD_MAGIC_RESOURCES } from "./barbarian/wild-magic-resources";

const SUBCLASSES_RESOURCES: Record<string, ResourceTemplate> = {
  ...ZEALOT_RESOURCES,
  ...BEAST_RESOURCES,
  ...WILD_MAGIC_RESOURCES,
};

export const BARBARIAN_RESOURCES: Record<string, ResourceTemplate> = {
  rage: {
    id: "rage",
    category: "class_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "rage",
        obtainedVia: { via: "class", classId: "barbarian" },
      },
    ],

    max: {
      kind: "conditional",
      when: {
        base: { kind: "scaler", id: "class-level" },
        operator: ">=",
        value: 20,
      },
      ifTrue: { kind: "unbounded" },
      ifFalse: {
        kind: "formula",
        formula: { base: { kind: "scaler", id: "rage" } },
      },
    },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
  },

  ...SUBCLASSES_RESOURCES,
};
