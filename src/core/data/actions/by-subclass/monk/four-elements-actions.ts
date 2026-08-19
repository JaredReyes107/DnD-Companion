import { ActionInstance } from "@/core/entities/actions/action-instance";

export const FOUR_ELEMENTS_ACTIONS: Record<string, ActionInstance> = {
  elemental_attunement: {
    id: "elemental_attunement",
    sourceId: "four_elements",
    boards: ["exploration", "roleplay"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },

  // --- Disciplines ---
  // TODO: ALL are variable-ki-cost for upcasting (deferred for MVP)
  // Exception: Fangs of the fire snake, Shape the Flowing River.

  breath_of_winter: {
    id: "breath_of_winter",
    sourceId: "four_elements",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -6,
      },
    ],
  },
  clench_of_the_north_wind: {
    id: "clench_of_the_north_wind",
    sourceId: "four_elements",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -3,
      },
    ],
    // TODO: Replace with actual 'Hold Person' spell
  },
  eternal_mountain_defense: {
    id: "eternal_mountain_defense",
    sourceId: "four_elements",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -5,
      },
      // TODO: Replace with actual 'Stoneskin' spell
    ],
  },
  fangs_of_the_fire_snake: {
    id: "fangs_of_the_fire_snake",
    sourceId: "four_elements",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttack"], // TODO: When you use the attack action
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -1,
      },
    ],
  },
  fangs_of_the_fire_snake_bite: {
    id: "fangs_of_the_fire_snake_bite",
    sourceId: "four_elements",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"], // TODO: While 'Fangs of the Fire Snake' is active
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -1,
      },
    ],
  },
  fist_of_four_thunders: {
    id: "fist_of_four_thunders",
    sourceId: "four_elements",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -2,
      },
      // TODO: Replace with actual 'Thunderwave' spell
    ],
  },
  fist_of_unbroken_air: {
    id: "fist_of_unbroken_air",
    sourceId: "four_elements",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -2,
      },
    ],
  },
  flames_of_the_phoenix: {
    id: "flames_of_the_phoenix",
    sourceId: "four_elements",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -4,
      },
      // TODO: Replace with actual 'Fireball' spell
    ],
  },
  gong_of_the_summit: {
    id: "gong_of_the_summit",
    sourceId: "four_elements",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -3,
      },
      // TODO: Replace with actual 'Shatter' spell
    ],
  },
  mist_stance: {
    id: "mist_stance",
    sourceId: "four_elements",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -4,
      },
      // TODO: Replace with actual 'Gaseous Form' spell
    ],
  },
  ride_the_wind: {
    id: "ride_the_wind",
    sourceId: "four_elements",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -4,
      },
      // TODO: Replace with actual 'Fly' spell
    ],
  },
  river_of_hungry_flame: {
    id: "river_of_hungry_flame",
    sourceId: "four_elements",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -5,
      },
    ],
    // TODO: Replace with actual 'Wall of Fire' spell
  },
  rush_of_the_gale_spirits: {
    id: "rush_of_the_gale_spirits",
    sourceId: "four_elements",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -2,
      },
    ],
    // TODO: Replace with actual 'Gust of Wind' spell
  },
  shape_the_flowing_river: {
    id: "shape_the_flowing_river",
    sourceId: "four_elements",
    boards: ["exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -1,
      },
    ],
  },
  sweeping_cinder_strike: {
    id: "sweeping_cinder_strike",
    sourceId: "four_elements",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -2,
      },
      // TODO: Replace with actual 'Burning Hands' spell
    ],
  },
  water_whip: {
    id: "water_whip",
    sourceId: "four_elements",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -2,
      },
    ],
    // TODO: Variable ki expenditure for damage scaling
  },
  wave_of_rolling_earth: {
    id: "wave_of_rolling_earth",
    sourceId: "four_elements",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "ki_points",
        amount: -6,
      },
    ],
    // TODO: Replace with actual 'Wall of Stone' spell
  },
};
