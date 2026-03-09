import { Effect } from "../modifiers/Effect";
import { AuraEffect } from "../modifiers/Aura";

export interface CombatState {
  round: number;
  turnIndex: number;
  participants: string[];
  activeEffects: Effect[];
  activeAuras: AuraEffect[];
}
