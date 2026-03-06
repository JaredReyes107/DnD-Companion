import { ActionInstance } from "@/game/domain/actions/action-instance";

export const DEFAULT_ACTIONS: Record<string, ActionInstance> = {
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
  testBladesong: {
    id: "testBladesong",
    sourceId: "wizard_bladesinger",
    //origin: "Players Handbook", //For distinguishing official rules and homebrew
    actionSlot: "bonusAction",
    effects: [
      {
        type: "applyModifier",
        modifiers: ["bladesong_ac_bonus", "bladesong_speed_bonus"],
        //? Think about moving these (two under) to the effect template for homebrew
        durationRounds: 2,
        stacking: "refresh",
      },
    ],
  },
};
