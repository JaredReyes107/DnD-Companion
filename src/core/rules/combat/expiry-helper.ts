import { ExpiryCondition } from "@/core/entities/rules/duration/expiry-condition";
import { CombatState } from "@/core/entities/combat/combat-state";
import { RuntimeModifierInstance } from "@/core/entities/rules/stats.types";
import { AdvantageInstance } from "@/core/entities/rules/advantage/advantage-instance";
import { Character } from "@/core/entities/character/Character";

export type ExpiryEvent =
  | { type: "roundAdvanced"; newRound: number }
  | { type: "zeroHp" }
  | { type: "actionTaken"; actionId: string }
  | { type: "longRest" }
  | { type: "shortRest" };

export function isExpiredByEvent(
  conditions: ExpiryCondition[] | undefined,
  event: ExpiryEvent,
): boolean {
  if (!conditions) return false;

  return conditions.some((condition) => {
    switch (condition.type) {
      case "endOfRound":
        return (
          event.type === "roundAdvanced" && event.newRound > condition.round
        );
      case "onZeroHp":
        return event.type === "zeroHp";
      case "onAnyAction":
        return event.type === "actionTaken";
      case "onSpecificAction":
        return (
          event.type === "actionTaken" && event.actionId === condition.actionId
        );
      case "onLongRest":
        return event.type === "longRest";
      case "onShortRest":
        return event.type === "shortRest";
    }
  });
}

/**
 * Sweeps both runtimeModifiers and runtimeAdvantageInstances against a
 * single event, in one pass. This is now the one place either record
 * type gets filtered by expiry — call sites should never filter
 * runtimeModifiers/runtimeAdvantageInstances by hand.
 */
export function sweepExpiredByEvent(
  combatState: CombatState,
  event: ExpiryEvent,
): CombatState {
  const nextModifiers: Record<string, RuntimeModifierInstance> = {};
  for (const [id, instance] of Object.entries(combatState.runtimeModifiers)) {
    if (!isExpiredByEvent(instance.expiryConditions, event))
      nextModifiers[id] = instance;
  }

  const nextAdvantage: Record<string, AdvantageInstance> = {};
  for (const [id, instance] of Object.entries(
    combatState.runtimeAdvantageInstances,
  )) {
    if (!isExpiredByEvent(instance.expiryConditions, event))
      nextAdvantage[id] = instance;
  }

  return {
    ...combatState,
    runtimeModifiers: nextModifiers,
    runtimeAdvantageInstances: nextAdvantage,
  };
}

export function sweepExpiredPassiveAdvantage(
  character: Character,
  event: ExpiryEvent,
): Character {
  const next: Record<string, AdvantageInstance> = {};
  for (const [id, instance] of Object.entries(
    character.checks.passiveAdvantageInstances,
  )) {
    if (!isExpiredByEvent(instance.expiryConditions, event))
      next[id] = instance;
  }
  return {
    ...character,
    checks: { ...character.checks, passiveAdvantageInstances: next },
  };
}
