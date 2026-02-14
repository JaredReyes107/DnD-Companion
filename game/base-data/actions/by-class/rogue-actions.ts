import { Action } from "@/game/types/instances/action";

export const ROGUE_ACTIONS: Record<string, Action> = {
  cunning_action_dash: {
    id: "cunning_action_dash",
    sourceId: "rogue",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "bonusAction",
    effects: [],
  },
  cunning_action_disengage: {
    id: "cunning_action_disengage",
    sourceId: "rogue",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "bonusAction",
    effects: [],
  },
  cunning_action_hide: {
    id: "cunning_action_hide",
    sourceId: "rogue",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "bonusAction",
    effects: [],
  },
  uncanny_dodge: {
    id: "uncanny_dodge",
    sourceId: "rogue",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "reaction",
    effects: [],
  },
};
