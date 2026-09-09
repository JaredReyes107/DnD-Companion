import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const BATTLE_SMITH_RESOURCES: Record<string, ResourceTemplate> = {
  arcane_jolt: {
    id: "arcane_jolt",
    category: "subclass_features",
    origin: { book: "TCE" },
    grantors: [
      {
        system: "feature",
        featureId: "arcane_jolt",
        obtainedVia: {
          via: "subclass",
          classId: "artificer",
          subclassId: "battle_smith",
        },
      },
    ],
    max: { kind: "formula", formula: { base: { kind: "scaler", id: "INT" } } },
    min: { kind: "value", amount: 0 },
    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "damage", "healing"],
  },
};
