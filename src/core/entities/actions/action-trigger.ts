// src/core/entities/actions/action-trigger.ts
export type ActionTrigger =
  | "onInitiativeRoll"
  | "onAttack"
  | "onAttackHit"
  | "onAttackMiss"
  | "onCriticalHit"
  | "onDamageRoll"
  | "onDamageTaken"
  | "onZeroHp"
  | "onHealingReceived"
  | "onMovement"
  | "onSavingThrow"
  | "onSkillCheck"
  | "onLongRest"
  | "onShortRest"
  | "onSpellCast"
  | "onTurnStart"
  | "onTurnEnd";
// grow this union as real cases arrive — don't pre-populate speculatively
