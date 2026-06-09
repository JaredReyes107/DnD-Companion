import { ActionInstance } from "@/core/entities/actions/action-instance";

export const ELDRITCH_KNIGHT_ACTIONS: Record<string, ActionInstance> = {
  summon_bonded_weapon: {
    id: "summon_bonded_weapon",
    sourceId: "eldritch_knight",
    actionSlot: "bonusAction",
    effects: [],
  },
  war_magic: {
    id: "war_magic",
    sourceId: "eldritch_knight",
    actionSlot: "bonusAction",
    effects: [],
  },
};
