import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const STORM_SORCERY_RESOURCES: Record<string, ResourceTemplate> = {
  wind_soul_share_flight: {
    id: "wind_soul_share_flight",
    category: "subclass_features",
    origin: { book: "XGE" },
    grantors: [
      {
        system: "feature",
        featureId: "wind_soul_share_flight",
        obtainedVia: {
          via: "subclass",
          classId: "sorcerer",
          subclassId: "storm",
        },
      },
    ],

    max: { kind: "value", amount: 1 },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["movement", "buff"],
  },
};
