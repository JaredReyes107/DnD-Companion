import { ActionInstance } from "@/core/entities/actions/action-instance";

export const STARS_ACTIONS: Record<string, ActionInstance> = {
  star_map_guiding_bolt: {
    id: "star_map_guiding_bolt",
    sourceId: "stars",
    actionSlot: "action",
    effects: [
      {
        type: "modifyResource",
        resourceId: "star_map_guiding_bolt",
        amount: -1,
      },
    ],
  },
  starry_form: {
    id: "starry_form",
    sourceId: "stars",
    actionSlot: "bonusAction",
    effects: [
      {
        type: "modifyResource",
        resourceId: "wild_shape",
        amount: -1,
      },
    ],
    // TODO: transformation hook -> Selection menu -> Modifier/Status (choose Archer/Chalice/Dragon)
  },
  cosmic_omen: {
    id: "cosmic_omen",
    sourceId: "stars",
    actionSlot: "reaction",
    effects: [
      {
        type: "modifyResource",
        resourceId: "cosmic_omen",
        amount: -1,
      },
    ],
    // TODO: add/subtract d6 hook based on Weal/Woe roll
  },
};