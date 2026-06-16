import { ActionInstance } from "@/core/entities/actions/action-instance";

export const WHISPERS_ACTIONS: Record<string, ActionInstance> = {
  psychic_blades: {
    id: "psychic_blades",
    sourceId: "whispers",
    actionSlot: "free",
    effects: [
      {
        type: "modifyResource",
        resourceId: "bardic_inspiration",
        amount: -1,
      },
    ],
  },
  mantle_of_whispers_capture_shadow: {
    id: "mantle_of_whispers_capture_shadow",
    sourceId: "whispers",
    actionSlot: "reaction",
    effects: [
      {
        type: "modifyResource",
        resourceId: "mantle_of_whispers_capture_shadow",
        amount: -1,
      },
    ],
  },
  mantle_of_whispers_disguise: {
    id: "mantle_of_whispers_disguise",
    sourceId: "whispers",
    actionSlot: "action",
    effects: [
      {
        type: "modifyResource",
        resourceId: "mantle_of_whispers_disguise",
        amount: -1,
      },
      // TODO: Apply duration. Only enabled after a mantle_of_whispers_capture_shadow
    ],
  },
  shadow_lore: {
    id: "shadow_lore",
    sourceId: "whispers",
    actionSlot: "action",
    effects: [
      {
        type: "modifyResource",
        resourceId: "shadow_lore",
        amount: -1,
      },
    ],
  },
};
