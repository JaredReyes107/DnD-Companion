import { ActionInstance } from "@/core/entities/actions/action-instance";

export const STORM_SORCERY_ACTIONS: Record<string, ActionInstance> = {
  tempestuous_magic: {
    id: "tempestuous_magic",
    sourceId: "storm_sorcery",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
    //TODO: Trigger. before/after casting a 1st+ level
  },

  heart_of_the_storm: {
    id: "heart_of_the_storm",
    sourceId: "storm_sorcery",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onSpellCast"], // Fires when casting a 1st+ level lightning/thunder spell
    effects: [],
  },

  storm_guide_stop_rain: {
    id: "storm_guide_stop_rain",
    sourceId: "storm_sorcery",
    boards: ["exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },

  storm_guide_wind_direction: {
    id: "storm_guide_wind_direction",
    sourceId: "storm_sorcery",
    boards: ["exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
  },

  storms_fury: {
    id: "storms_fury",
    sourceId: "storm_sorcery",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onDamageTaken"],
    effects: [],
    // TODO: damage = sorcerer level.
  },

  wind_soul_share_flight: {
    id: "wind_soul_share_flight",
    sourceId: "storm_sorcery",
    boards: ["combat", "exploration"],
    duration: { kind: "timed", minutes: 60 },
    effects: [
      {
        type: "modifyResource",
        resourceId: "wind_soul_share_flight",
        amount: -1,
      },
    ],
    // TODO: Modifier, 1 h. reduces own flying speed to 30ft
  },
};
