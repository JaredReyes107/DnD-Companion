import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ARCANE_TRICKSTER_RESOURCES: Record<string, ResourceTemplate> = {
  spell_thief: {
    id: "spell_thief",
    category: "subclass_features",
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

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: [],
  },
};
