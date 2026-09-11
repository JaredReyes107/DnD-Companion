import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const CELESTIAL_RESOURCES: Record<string, ResourceTemplate> = {
  healing_light_dice: {
    id: "healing_light_dice",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "healing_light_dice",
        obtainedVia: {
          via: "subclass",
          classId: "warlock",
          subclassId: "celestial",
        },
      },
    ],
    max: {
      kind: "formula",
      formula: {
        base: { kind: "scaler", id: "class-level", param: "warlock" },
        steps: [{ op: "add", value: 1 }],
      },
    },
    min: { kind: "value", amount: 0 },
    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["healing"],
  },
  searing_vengeance: {
    id: "searing_vengeance",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "searing_vengeance",
        obtainedVia: {
          via: "subclass",
          classId: "warlock",
          subclassId: "celestial",
        },
      },
    ],
    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },
    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "healing"],
  },
};
