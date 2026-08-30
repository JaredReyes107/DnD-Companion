import { ActionInstance } from "@/core/entities/actions/action-instance";

export const FATHOMLESS_ACTIONS: Record<string, ActionInstance> = {
  tentacle_of_the_deeps_summon: {
    id: "tentacle_of_the_deeps_summon",
    sourceId: "fathomless",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "tentacle_of_the_deeps",
        amount: -1,
      },
    ],
  },

  tentacle_of_the_deeps_move_attack: {
    id: "tentacle_of_the_deeps_move_attack",
    sourceId: "fathomless",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
  },

  guardian_coil: {
    id: "guardian_coil",
    sourceId: "fathomless",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onDamageTaken"],
    effects: [],
  },

  grasping_tentacles: {
    id: "grasping_tentacles",
    sourceId: "fathomless",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "grasping_tentacles",
        amount: -1,
      },
    ],
    //TODO: Replace with actual 'Black Evard's Tentacles' spell
    //TODO: temp HP = warlock level. On this spell specifically, not source
  },

  fathomless_plunge: {
    id: "fathomless_plunge",
    sourceId: "fathomless",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "fathomless_plunge",
        amount: -1,
      },
    ],
  },
};
