// src/core/entities/actions/action-trigger.ts
export type ActionTrigger =
  | "onSkillCheck"
  | "onSavingThrow"
  | "onAttack"
  | "onAttackHit"
  | "onAttackMiss"
  | "onCriticalHit"
  | "onDamageRoll"
  | "onDamageTaken"
  | "onZeroHp"
  | "onLongRest"
  | "onShortRest"
  | "onSpellCast"
  | "onTurnStart"
  | "onTurnEnd";
// grow this union as real cases arrive — don't pre-populate speculatively
