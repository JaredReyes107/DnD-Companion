import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const SHARED_RESOURCES: Record<string, ResourceTemplate> = {
  channel_divinity: {
    id: "channel_divinity",
    category: "class_features",
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "channel_divinity",
        obtainedVia: { via: "class", classId: "cleric" },
      },
      {
        system: "feature",
        featureId: "channel_divinity",
        obtainedVia: { via: "class", classId: "paladin" },
      },
    ],

    max: {
      kind: "formula",
      formula: { base: { kind: "scaler", id: "channel-divinity" } },
    },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "utility"],
  },
};
