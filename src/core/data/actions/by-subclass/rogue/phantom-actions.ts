import { ActionInstance } from "@/core/entities/actions/action-instance";

export const PHANTOM_ACTIONS: Record<string, ActionInstance> = {
  wails_from_the_grave: {
    id: "wails_from_the_grave",
    sourceId: "phantom",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"], // Immediately after dealing Sneak Attack
    effects: [
      {
        type: "modifyResource",
        resourceId: "wails_from_the_grave",
        amount: -1,
      },
    ],
  },

  tokens_of_the_departed_capture: {
    id: "tokens_of_the_departed_capture",
    sourceId: "phantom",
    boards: ["combat", "exploration", "roleplay"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onZeroHp"], //TODO: Specifically death. Other actor
    effects: [
      {
        type: "modifyResource",
        resourceId: "soul_trinkets",
        amount: 1,
      },
    ],
    // TODO: cap enforcement testing
  },
  tokens_of_the_departed_retribution: {
    id: "tokens_of_the_departed_retribution",
    sourceId: "phantom",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"], // Immediately after dealing Sneak Attack
    effects: [
      { type: "modifyResource", resourceId: "soul_trinkets", amount: -1 },
    ],
  },
  tokens_of_the_departed_interrogate: {
    id: "tokens_of_the_departed_interrogate",
    sourceId: "phantom",
    boards: ["roleplay", "exploration", "roleplay"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      { type: "modifyResource", resourceId: "soul_trinkets", amount: -1 },
    ],
  },

  ghost_walk: {
    id: "ghost_walk",
    sourceId: "phantom",
    boards: ["combat", "exploration"],
    duration: { kind: "timed", minutes: 10 },
    effects: [{ type: "modifyResource", resourceId: "ghost_walk", amount: -1 }],
    // TODO: Resource fallback: soul_trinkets - 1.
    // TODO: Modifier: flying speed 10ft, hover, disadvantage on attacks
  },
};
