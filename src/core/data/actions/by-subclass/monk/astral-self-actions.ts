import { ActionInstance } from "@/core/entities/actions/action-instance";

export const ASTRAL_SELF_ACTIONS: Record<string, ActionInstance> = {
  arms_of_the_astral_self: {
    id: "arms_of_the_astral_self",
    sourceId: "astral_self",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      { type: "modifyResource", resourceId: "ki_points", amount: -1 },
      //TODO: Modifier (Astral Self). 10 minutes, incapacitated or die
    ],
  },

  astral_visage: {
    id: "astral_visage",
    sourceId: "astral_self",
    boards: ["combat", "exploration", "roleplay"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -1,
      },
      //TODO: Modifier (Astral Visage). 10 minutes, incapacitated or die
    ],
  },

  deflect_energy: {
    id: "deflect_energy",
    sourceId: "astral_self",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    // TODO: Only if 'Body of the Astral Self' is active
    trigger: ["onDamageTaken"], // TODO: filter to acid/cold/fire/force/lightning/thunder only
    effects: [
      // TODO: damage reduction roll (1d10 + WIS, min 1)
    ],
  },

  awakened_astral_self: {
    id: "awakened_astral_self",
    sourceId: "astral_self",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -5,
      },
      {
        type: "applyModifier",
        modifiers: ["astral_self_ac_bonus"],
        durationRounds: 100,
        stacking: "refresh",
      },
      //TODO: Modifier (Awakened Astral Self). 10 minutes, incapacitated or die
    ],
  },
};
