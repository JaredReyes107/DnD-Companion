import { Condition } from "../../entities/modifiers/Condition";

export interface EvaluationContext {
  targetIsRanged?: boolean;
  targetIsMelee?: boolean;
  currentHp?: number;
  maxHp?: number;
  targetStatuses?: Set<number>;
  distanceToTarget?: number;
  // Pre-extracted resource currents (resourceId → current value).
  // Populated by the stat resolver from character.resources before resolution runs.
  resources?: Record<string, number>;
}

export function evaluateCondition(
  condition: Condition | undefined,
  context: EvaluationContext,
): boolean {
  if (!condition) return true;

  switch (condition.type) {
    case "always":
      return true;

    case "targetIsRangedAttack":
      return !!context.targetIsRanged;

    case "targetIsMeleeAttack":
      return !!context.targetIsMelee;

    case "hpBelowThreshold":
      return context.currentHp !== undefined
        ? context.currentHp < condition.threshold
        : false;

    case "targetHasStatus":
      return context.targetStatuses?.has(condition.status) ?? false;

    case "withinRange":
      return context.distanceToTarget !== undefined
        ? context.distanceToTarget <= condition.range
        : false;

    case "resourceAtLeast": {
      const current = context.resources?.[condition.resourceId];
      return current !== undefined ? current >= condition.minimum : false;
    }
  }
}
