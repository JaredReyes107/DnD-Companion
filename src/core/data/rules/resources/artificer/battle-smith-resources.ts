import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const BATTLE_SMITH_RESOURCES: Record<string, ResourceTemplate> = {
  arcane_jolt: {
    id: "arcane_jolt",
    category: "subclass_features",
    max: E.max(E.n(1), E.mod("INT")),

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

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "damage", "healing"],
  },
};
