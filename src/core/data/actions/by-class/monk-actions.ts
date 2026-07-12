import { ActionInstance } from "@/core/entities/actions/action-instance";

export const MONK_ACTIONS: Record<string, ActionInstance> = {
  flurry_of_blows: {
    id: "flurry_of_blows",
    sourceId: "monk",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
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
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
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
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
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
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
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
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [],
  },
  stunning_strike: {
    id: "stunning_strike",
    sourceId: "monk",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
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
    boards: ["combat", "roleplay", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
  diamond_soul: {
    id: "diamond_soul",
    sourceId: "monk",
    boards: ["combat", "roleplay", "exploration"],
    duration: { kind: "instantaneous" },
    // TODO: Option when making a saving throw
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
    boards: ["combat", "exploration", "downtime"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -4,
      },
      {
        type: "applyModifier",
        modifiers: ["empty_body_invisibility"],
        durationRounds: 10,
      },
    ],
  },
  empty_body_astral_projection: {
    id: "empty_body_astral_projection",
    sourceId: "monk",
    boards: ["roleplay", "exploration", "downtime"],
    duration: { kind: "timed", minutes: 60 },
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -8,
      },
    ],
  },
};
