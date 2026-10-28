import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const WAR_MAGIC_RESOURCES: Record<string, ResourceTemplate> = {
  power_surge: {
    id: "power_surge",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("INT")),
    // TODO: Resets to 1 on longRest, not max
    // TODO: Gains 1 if = 0 on shortRest

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
    max: E.max(E.n(1), E.mod("INT")),

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

    recharge: [{ trigger: { type: "turnStart" }, amount: "full" }],
    tags: ["combat", "damage"],
  },
};
