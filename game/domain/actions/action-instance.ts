import { Character } from "../../domain/character/Character";
import { ActionResourceType } from "@/game/domain/combat/action-economy";

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
  //origin: "Players Handbook", //For distinguishing official rules and homebrew
  actionSlot: ActionResourceType;
  //TODO: Replace this with the description in localization
  description?: string;

  effects: ActionEffect[];

  canExecute?: (character: Character) => boolean;
};
