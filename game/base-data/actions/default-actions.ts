import { Action } from "@/game/types/instances/action";

export const DEFAULT_ACTIONS: Record<string, Action> = {
  attack: {
    id: "attack",
    sourceId: "default",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "action",
    effects: [],
  },
  dash: {
    id: "dash",
    sourceId: "default",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "action",
    effects: [],
  },
  disengage: {
    id: "disengage",
    sourceId: "default",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "action",
    effects: [],
  },
  dodge: {
    id: "dodge",
    sourceId: "default",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "action",
    effects: [],
  },
  help: {
    id: "help",
    sourceId: "default",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "action",
    effects: [],
  },
  hide: {
    id: "hide",
    sourceId: "default",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "action",
    effects: [],
  },
  ready: {
    id: "ready",
    sourceId: "default",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "action",
    effects: [],
  },
};
