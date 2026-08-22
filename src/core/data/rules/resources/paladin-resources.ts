import { ResourceTemplate } from "@/core/entities/rules/resource-template";

import { DEVOTION_RESOURCES } from "./paladin/devotion-resources";
import { ANCIENTS_RESOURCES } from "./paladin/ancients-resources";
import { VENGEANCE_RESOURCES } from "./paladin/vengeance-resources";

import { OATHBREAKER_RESOURCES } from "./paladin/oathbreaker-resources";

import { CONQUEST_RESOURCES } from "./paladin/conquest-resources";
import { REDEMPTION_RESOURCES } from "./paladin/redemption-resources";

import { GLORY_RESOURCES } from "./paladin/glory-resources";
import { WATCHERS_RESOURCES } from "./paladin/watchers-resources";

const RESOURCES_SUBCLASSES: Record<string, ResourceTemplate> = {
  ...DEVOTION_RESOURCES,
  ...ANCIENTS_RESOURCES,
  ...VENGEANCE_RESOURCES,

  ...OATHBREAKER_RESOURCES,

  ...CONQUEST_RESOURCES,
  ...REDEMPTION_RESOURCES,

  ...GLORY_RESOURCES,
  ...WATCHERS_RESOURCES,
};

export const PALADIN_RESOURCES: Record<string, ResourceTemplate> = {
  ...RESOURCES_SUBCLASSES,

  divine_sense: {
    id: "divine_sense",
    sourceId: "paladin",
    category: "class_features",
    scalingType: "CHA:+1",
    recharge: "longRest",
    tags: ["senses"],
  },
  lay_on_hands: {
    id: "lay_on_hands",
    sourceId: "paladin",
    category: "class_features",
    scalingType: "class-level:*5",
    recharge: "longRest",
    tags: ["combat", "healing", "cleansing"],
  },
  channel_divinity: {
    id: "channel_divinity",
    sourceId: "paladin",
    category: "class_features",
    scalingType: "fixed:1",
    recharge: "longRest",
    tags: ["combat"],
  },
  cleansing_touch: {
    id: "cleansing_touch",
    sourceId: "paladin",
    category: "class_features",
    scalingType: "CHA",
    recharge: "longRest",
    tags: ["cleansing"],
  },
};
