import { ActionInstance } from "@/core/entities/actions/action-instance";

export const BLADESINGING_ACTIONS: Record<string, ActionInstance> = {
  bladesong: {
    id: "bladesong",
    sourceId: "bladesinging",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      { type: "modifyResource", resourceId: "bladesong", amount: -1 },
      {
        type: "applyModifier",
        modifiers: ["bladesong_ac_bonus", "bladesong_speed_bonus"],
        durationRounds: 10,
        stacking: "refresh",
      },
    ],
    // TODO: Conditions for modifier/action. "Not wearing medium/heavy armor or a shield"
  },

  song_of_defense: {
    id: "song_of_defense",
    sourceId: "bladesinging",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onDamageTaken"],
    effects: [
      { type: "modifyResource", resourceId: "spell_slots", amount: -1 },
    ],
    // TODO: variable cost. Spell Slot level, no Max.
  },
};
