export enum IntentType {
  ATTACK = "ATTACK",
  CAST_SPELL = "CAST_SPELL",
  MOVE = "MOVE",
  READY_ACTION = "READY_ACTION",
  REACTION = "REACTION",
}

export interface CombatIntent {
  id: string;
  type: IntentType;
  actorId: string;
  targetId?: string;
  payload?: { ruleId?: string; [key: string]: unknown };
}
