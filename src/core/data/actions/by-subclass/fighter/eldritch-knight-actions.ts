import { ActionInstance } from "@/core/entities/actions/action-instance";

export const ELDRITCH_KNIGHT_ACTIONS: Record<string, ActionInstance> = {
  weapon_bond_summon: {
    id: "summon_bonded_weapon",
    sourceId: "eldritch_knight",
    actionSlot: "bonusAction",
    effects: [],
  },
};