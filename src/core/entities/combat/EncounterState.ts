import { Effect } from "../modifiers/Effect";
import { AuraEffect } from "../modifiers/Aura";
import { ActionResource } from "./action-economy/ActionResource";
import { StatusCondition } from "./StatusCondition";
import { InitiativeState } from "./InitiativeState";

export interface CombatParticipant {
  id: string;
  initiative: number;
  dexModifier: number;
  statVersion: number;
  resources: ActionResource;
  statuses: StatusCondition[];
}

export interface EncounterState {
  round: number;
  activeTurn: number;
  participants: Record<string, CombatParticipant>;
  initiative: InitiativeState;
  activeEffects: Effect[];
  activeAuras: AuraEffect[];
}
