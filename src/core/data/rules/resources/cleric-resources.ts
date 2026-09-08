import { ResourceTemplate } from "@/core/entities/rules/resource-template";

import { LIGHT_RESOURCES } from "./cleric/light-resources";
import { TEMPEST_RESOURCES } from "./cleric/tempest-resources";
import { WAR_RESOURCES } from "./cleric/war-resources";

import { GRAVE_RESOURCES } from "./cleric/grave-resources";

import { ORDER_RESOURCES } from "./cleric/order-resources";
import { PEACE_RESOURCES } from "./cleric/peace-resources";
import { TWILIGHT_RESOURCES } from "./cleric/twilight-resources";

export const subclass_resources: Record<string, ResourceTemplate> = {
  // PHB
  ...LIGHT_RESOURCES,
  ...TEMPEST_RESOURCES,
  ...WAR_RESOURCES,

  // XGE
  ...GRAVE_RESOURCES,

  // TCE
  ...ORDER_RESOURCES,
  ...PEACE_RESOURCES,
  ...TWILIGHT_RESOURCES,
};

export const CLERIC_RESOURCES: Record<string, ResourceTemplate> = {
  channel_divinity: {
    id: "channel_divinity",
    category: "class_features",
    origin: { book: "PHB" },
    grantor: {
      system: "feature",
      featureId: "channel_divinity",
      obtainedVia: { via: "class", classId: "cleric" },
    },

    scaling: { base: { kind: "scaler", id: "channel-divinity" } },
    max: {
      kind: "formula",
      formula: { base: { kind: "scaler", id: "channel-divinity" } },
    },
    min: { kind: "value", amount: 0 },

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["combat", "utility"],
  },

  ...subclass_resources,
};
