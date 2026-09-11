import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const WAR_MAGIC_RESOURCES: Record<string, ResourceTemplate> = {
  power_surge: {
    id: "power_surge",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "power_surge",
        obtainedVia: {
          via: "subclass",
          classId: "wizard",
          subclassId: "war_magic",
        },
      },
    ],

    max: { kind: "formula", formula: { base: { kind: "scaler", id: "INT" } } },
    min: { kind: "value", amount: 0 },

    recharge: [
      { trigger: { type: "longRest" }, amount: { kind: "reset", value: 1 } },
      {
        trigger: { type: "shortRest" },
        when: { operator: "==", value: 0 },
        amount: { kind: "reset", value: 1 },
      },
    ],
    tags: ["combat", "damage"],
  },
  power_surge_turn_uses: {
    id: "power_surge_turn_uses",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "power_surge_turn_uses",
        obtainedVia: {
          via: "subclass",
          classId: "wizard",
          subclassId: "war_magic",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "turnStart" }, amount: "full" }],
    tags: ["combat", "damage"],
  },
};
