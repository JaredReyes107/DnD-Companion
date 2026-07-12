import { Character } from "@/core/entities/character/Character";
import { ActionDuration } from "./action-duration";
import { ActionBoard } from "./action-board";
import { ActionTrigger } from "./action-trigger";

export type ModifyResourceEffect = {
  type: "modifyResource";
  resourceId: string;
  amount: number; // puede ser negativo
};

export type ConvertResourceEffect = {
  type: "convertResource";

  from: {
    resourceId: string;
    amount: number;
  };

  to: {
    resourceId: string;
    amount: number;
  };
};

export type ApplyModifierEffect = {
  type: "applyModifier";

  modifiers: string[]; //modifierId

  durationRounds?: number;

  stacking?: "overlap" | "refresh" | "override" | "ignore";

  concentration?: boolean; 
};

export type LogEffect = {
  type: "log";
  text: string;
};

export type ActionEffect =
  | ModifyResourceEffect
  | ConvertResourceEffect
  | ApplyModifierEffect
  | LogEffect;

export type ActionInstance = {
  id: string;
  sourceId: string;

  // REPLACES actionSlot. Old call sites that only cared about economy
  // pool can do: action.duration.kind === "economy" ? action.duration.slot : undefined
  duration: ActionDuration;
  trigger?: ActionTrigger[]; // when omitted: board-initiated only, the common case

  boards: ActionBoard[]; // where it renders today; ignored by economy logic entirely

  effects: ActionEffect[];
  canExecute?: (character: Character) => boolean;
};
