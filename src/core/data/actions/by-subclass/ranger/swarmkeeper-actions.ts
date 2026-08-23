import { ActionInstance } from "@/core/entities/actions/action-instance";

export const SWARMKEEPER_ACTIONS: Record<string, ActionInstance> = {
  gathered_swarm_damage: {
    id: "gathered_swarm_damage",
    sourceId: "swarmkeeper",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"],
    effects: [
      { type: "modifyResource", resourceId: "gathered_swarm", amount: -1 },
    ],
  },

  gathered_swarm_push: {
    id: "gathered_swarm_push",
    sourceId: "swarmkeeper",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"],
    effects: [
      { type: "modifyResource", resourceId: "gathered_swarm", amount: -1 },
    ],
  },

  gathered_swarm_self_move: {
    id: "gathered_swarm_self_move",
    sourceId: "swarmkeeper",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"],
    effects: [
      { type: "modifyResource", resourceId: "gathered_swarm", amount: -1 },
    ],
  },

  writhing_tide: {
    id: "writhing_tide",
    sourceId: "swarmkeeper",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      { type: "modifyResource", resourceId: "writhing_tide", amount: -1 },
    ],
    // TODO: Modifier: Flying speed 10ft + hover — Ends early if incapacitated
  },

  swarming_dispersal: {
    id: "swarming_dispersal",
    sourceId: "swarmkeeper",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onDamageTaken"],
    effects: [
      {
        type: "modifyResource",
        resourceId: "swarming_dispersal",
        amount: -1,
      },
    ],
    // TODO: resistance to the triggering damage
  },
};
