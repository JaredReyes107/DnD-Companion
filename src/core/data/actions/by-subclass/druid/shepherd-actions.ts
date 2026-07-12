import { ActionInstance } from "@/core/entities/actions/action-instance";

export const SHEPHERD_ACTIONS: Record<string, ActionInstance> = {
  spirit_totem_summon: {
    id: "spirit_totem_summon",
    sourceId: "shepherd",
    duration: { kind: "economy", slot: "bonusAction"},
    boards: ["combat", "exploration"],
    effects: [
      {
        type: "modifyResource",
        resourceId: "spirit_totem",
        amount: -1,
      },
      // TODO: Apply modifier/duration
      // TODO: Apply creature's aura
    ],
  },
  spirit_totem_move: {
    id: "spirit_totem_move",
    sourceId: "shepherd",
    duration: { kind: "economy", slot: "bonusAction"},
    boards: ["combat", "exploration"],
    effects: [
      // Move Creature
    ],
  },
  faithful_summons: {
    id: "faithful_summons",
    sourceId: "shepherd",
    duration: { kind: "instantaneous"},
    boards: ["combat", "exploration"],
    effects: [
      {
        type: "modifyResource",
        resourceId: "faithful_summons",
        amount: -1,
      },
      // TODO: Apply modifier/duration.
      // TODO: Auto-Trigger Spell effect
    ],
  },
};
