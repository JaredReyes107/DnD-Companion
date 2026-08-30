import { ActionInstance } from "@/core/entities/actions/action-instance";

export const CELESTIAL_ACTIONS: Record<string, ActionInstance> = {
  healing_light: {
    id: "healing_light",
    sourceId: "celestial",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "healing_light_dice",
        amount: -1,
        // TODO: variable resource
      },
    ],
  },

  radiant_soul: {
    id: "radiant_soul",
    sourceId: "celestial",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onSpellCast"],
    effects: [],
  },

  celestial_resilience: {
    id: "celestial_resilience",
    sourceId: "celestial",
    boards: ["downtime"],
    duration: { kind: "instantaneous" },
    effects: [],
    // TODO: temp HP for self (warlock level + CHA mod) and up to five
    // chosen creatures (half warlock level + CHA mod)
  },

  searing_vengeance: {
    id: "searing_vengeance",
    sourceId: "celestial",
    boards: ["combat"],
    //TODO: New trigger. On death saving throw (before)
    duration: { kind: "instantaneous" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "searing_vengeance",
        amount: -1,
      },
    ],
  },
};
