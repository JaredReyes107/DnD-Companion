import { ActionInstance } from "@/core/entities/actions/action-instance";

import { LAND_ACTIONS } from "../by-subclass/druid/land-actions";
import { MOON_ACTIONS } from "../by-subclass/druid/moon-actions";

import { DREAMS_ACTIONS } from "../by-subclass/druid/dreams-actions";
import { SHEPHERD_ACTIONS } from "../by-subclass/druid/shepherd-actions";

import { SPORES_ACTIONS } from "../by-subclass/druid/spores-actions";
import { STARS_ACTIONS } from "../by-subclass/druid/stars-actions";
import { WILDFIRE_ACTIONS } from "../by-subclass/druid/wildfire-actions";

export const SUBCLASS_ACTIONS: Record<string, ActionInstance> = {
  ...LAND_ACTIONS,
  ...MOON_ACTIONS,

  ...DREAMS_ACTIONS,
  ...SHEPHERD_ACTIONS,

  ...SPORES_ACTIONS,
  ...STARS_ACTIONS,
  ...WILDFIRE_ACTIONS,
};

export const DRUID_ACTIONS: Record<string, ActionInstance> = {
  wild_shape: {
    id: "wild_shape",
    sourceId: "druid",

    duration: { kind: "economy", slot: "action" },
    boards: ["combat", "roleplay"],
    effects: [
      {
        type: "modifyResource",
        resourceId: "wild_shape",
        amount: -1,
      },
    ],
  },
};
