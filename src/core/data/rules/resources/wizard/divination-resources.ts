import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const DIVINATION_RESOURCES: Record<string, ResourceTemplate> = {
  portent_dice: {
    id: "portent_dice",
    category: "subclass_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "portent_dice",
        obtainedVia: {
          via: "subclass",
          classId: "wizard",
          subclassId: "divination",
        },
      },
    ],

    max: {
      kind: "formula",
      formula: { base: { kind: "scaler", id: "portent-dice" } },
    },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["utility"],
  },
  portent_turn_uses: {
    id: "portent_turn_uses",
    category: "subclass_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "portent_turn_uses",
        obtainedVia: {
          via: "subclass",
          classId: "wizard",
          subclassId: "divination",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "turnStart" }, amount: "full" }],
    tags: ["utility"],
  },

  the_third_eye: {
    id: "the_third_eye",
    category: "subclass_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "the_third_eye",
        obtainedVia: {
          via: "subclass",
          classId: "wizard",
          subclassId: "divination",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["senses"],
  },
};
