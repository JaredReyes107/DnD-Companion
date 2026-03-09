import { ActionInstance } from "@/core/entities/actions/action-instance";

export const MONK_ACTIONS: Record<string, ActionInstance> = {
  flurry_of_blows: {
    id: "flurry_of_blows",
    sourceId: "monk",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "bonusAction",
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -1,
      },
    ],
  },
  patient_defense: {
    id: "patient_defense",
    sourceId: "monk",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "bonusAction",
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -1,
      },
    ],
  },
  step_of_the_wind: {
    id: "step_of_the_wind",
    sourceId: "monk",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "bonusAction",
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -1,
      },
    ],
  },
  deflect_missiles: {
    id: "deflect_missiles",
    sourceId: "monk",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "reaction",
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -1,
      },
    ],
  },
  slow_fall: {
    id: "slow_fall",
    sourceId: "monk",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "reaction",
    //TODO: This should be an option when taking damage
    effects: [],
  },
  stunning_strike: {
    id: "stunning_strike",
    sourceId: "monk",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "free",
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -1,
      },
    ],
  },
  stillness_of_mind: {
    id: "stillness_of_mind",
    sourceId: "monk",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "action",
    effects: [],
  },
  diamond_soul: {
    id: "diamond_soul",
    sourceId: "monk",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "free",
    //? TODO: This should be an option when making a saving throw
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -1,
      },
    ],
  },
  empty_body_invisibility: {
    id: "empty_body_invisibility",
    sourceId: "monk",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "action",
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -4,
      },
    ],
  },
  empty_body_astral_projection: {
    id: "empty_body_astral_projection",
    sourceId: "monk",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "action",
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -8,
      },
    ],
  },
};
