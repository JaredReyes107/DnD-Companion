import {
  ModifierInstance,
  ModifierType,
} from "../../entities/modifiers/Modifier";
import {
  EvaluationContext,
  evaluateCondition,
} from "../../rules/modifiers/condition-evaluator";
import {
  applyStackingRules,
  sortModifiersByPriority,
  resolveModifierValue,
} from "../../rules/modifiers/stacking";

export interface ResolvedStat {
  statId: string;
  baseValue: number;
  finalValue: number;
  activeModifiers: ModifierInstance[];
}

export function resolveStat(
  statId: string,
  baseValue: number,
  modifiers: ModifierInstance[],
  context: EvaluationContext = {},
): ResolvedStat {
  const activeModifiers = modifiers.filter((mod) =>
    evaluateCondition(mod.condition, context),
  );
  const stacked = applyStackingRules(activeModifiers, context);
  const ordered = sortModifiersByPriority(stacked);

  let finalValue = baseValue;

  for (const mod of ordered) {
    const modValue = resolveModifierValue(mod, context);
    switch (mod.type) {
      case ModifierType.SET:
        finalValue = modValue;
        break;
      case ModifierType.ADDITIVE:
        finalValue += modValue;
        break;
      case ModifierType.MULTIPLICATIVE:
        finalValue *= modValue;
        break;
      case ModifierType.ADVANTAGE:
      case ModifierType.DISADVANTAGE:
      case ModifierType.REROLL:
        break;
    }
  }

  return {
    statId,
    baseValue,
    finalValue: Math.floor(finalValue),
    activeModifiers: ordered,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export function resolveOutOfCombat(_character: any): any {
  return { stats: new Map() };
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export function resolveInCombat(_character: any, _encounterState: any): any {
  return { stats: new Map() };
}
