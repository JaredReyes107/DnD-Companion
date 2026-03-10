export enum ActionType {
  ACTION,
  BONUS_ACTION,
  REACTION,
  MOVEMENT,
  FREE,
  LEGENDARY,
}

export interface ActionResource {
  actions: number;
  bonusActions: number;
  reactions: number;
  movementRemaining: number;
}

export interface CombatTurnState {
  combatantId: string;
  resources: ActionResource;
}

export interface LegendaryResource {
  remaining: number;
}
