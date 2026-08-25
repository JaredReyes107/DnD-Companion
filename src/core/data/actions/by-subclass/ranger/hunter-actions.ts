import { ActionInstance } from "@/core/entities/actions/action-instance";

export const HUNTER_ACTIONS: Record<string, ActionInstance> = {
  colossus_slayer: {
    id: "colossus_slayer",
    sourceId: "hunter",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [],
  },
  giant_killer: {
    id: "giant_killer",
    sourceId: "hunter",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [],
  },
  horde_breaker: {
    id: "horde_breaker",
    sourceId: "hunter",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [],
  },
  volley: {
    id: "volley",
    sourceId: "hunter",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
  whirlwind_attack: {
    id: "whirlwind_attack",
    sourceId: "hunter",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },
  stand_against_the_tide: {
    id: "stand_against_the_tide",
    sourceId: "hunter",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [],
  },
  uncanny_dodge_hunter: {
    id: "uncanny_dodge_hunter",
    sourceId: "hunter",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    effects: [],
  },
};
