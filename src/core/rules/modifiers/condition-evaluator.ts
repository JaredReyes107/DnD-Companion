import { Condition, ConditionType } from "../../entities/modifiers/Condition";

export interface EvaluationContext {
  targetIsRanged?: boolean;
  targetIsMelee?: boolean;
  currentHp?: number;
  maxHp?: number;
  targetStatuses?: Set<number>;
  distanceToTarget?: number;
}

export function evaluateCondition(
  condition: Condition | undefined,
  context: EvaluationContext,
): boolean {
  if (!condition) {
    return true;
  }

  switch (condition.type) {
    case ConditionType.ALWAYS:
      return true;

    case ConditionType.TARGET_IS_RANGED_ATTACK:
      return !!context.targetIsRanged;

    case ConditionType.TARGET_IS_MELEE_ATTACK:
      return !!context.targetIsMelee;

    case ConditionType.HP_BELOW_THRESHOLD:
      if (
        context.currentHp === undefined ||
        !condition.params ||
        typeof condition.params.threshold !== "number"
      ) {
        return false;
      }
      return context.currentHp < condition.params.threshold;

    case ConditionType.TARGET_HAS_STATUS:
      if (
        !context.targetStatuses ||
        !condition.params ||
        typeof condition.params.status !== "number"
      ) {
        return false;
      }
      return context.targetStatuses.has(condition.params.status);

    case ConditionType.WITHIN_RANGE:
      if (
        context.distanceToTarget === undefined ||
        !condition.params ||
        typeof condition.params.range !== "number"
      ) {
        return false;
      }
      return context.distanceToTarget <= condition.params.range;

    default:
      return false;
  }
}
