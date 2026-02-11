import { Character } from "./Character";
import { StatModifier } from "../templates/stats";
import { ActionResourceType } from "@/game/mechanics/action-economy";

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

  modifier: StatModifier;

  /**
   * Qué hacer si el modificador ya existe:
   * - refresh: reinicia duración
   * - override: reemplaza valor
   * - ignore: no hace nada
   */
  stacking?: "refresh" | "override" | "ignore";
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

export type Action = {
  id: string;
  sourceId: string;
  //origin: "Players Handbook", //For distinguishing official rules and homebrew
  actionSlot: ActionResourceType;
  //TODO: Replace this with the description in localization
  description?: string;

  effects: ActionEffect[];

  canExecute?: (character: Character) => boolean;
};
