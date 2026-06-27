// src/core/entities/actions/action-trigger.ts
export type ActionTrigger =
  | "onAttackHit"
  | "onAttackMiss"
  | "onCriticalHit"
  | "onDamageTaken"
  | "onZeroHp"
  | "onLongRest"
  | "onShortRest"
  | "onSpellCast"
  | "onTurnStart"
  | "onTurnEnd";
  // grow this union as real cases arrive — don't pre-populate speculatively