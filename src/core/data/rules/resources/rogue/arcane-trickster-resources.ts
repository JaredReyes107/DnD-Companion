import { E } from "@/core/entities/rules/expr/expr";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ARCANE_TRICKSTER_RESOURCES: Record<string, ResourceTemplate> = {
  spell_thief: {
    id: "spell_thief",
    category: "subclass_features",
    max: E.n(1),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "spell_thief",
        obtainedVia: {
          via: "subclass",
          classId: "rogue",
          subclassId: "arcane_trickster",
        },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
