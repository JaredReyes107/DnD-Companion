import { ResourceTemplate } from "@/core/entities/rules/resource-template";
import { E } from "@/core/entities/rules/expr/expr";

export const CELESTIAL_RESOURCES: Record<string, ResourceTemplate> = {
  healing_light_dice: {
    id: "healing_light_dice",
    category: "subclass_features",
    max: E.add(E.classLevel("warlock"), E.n(1)),

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

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["healing"],
  },
  searing_vengeance: {
    id: "searing_vengeance",
    category: "subclass_features",
    max: E.n(1),

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

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "healing"],
  },
};
