import { Character } from "@/core/entities/character/Character";
import {
  ModifierInstance,
  ModifierType,
} from "@/core/entities/modifiers/Modifier";
import {
  EvaluationContext,
  evaluateCondition,
} from "@/core/rules/modifiers/condition-evaluator";
import {
  applyStackingRules,
  sortModifiersByPriority,
} from "@/core/rules/modifiers/stacking";

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
  context: EvaluationContext,
): ResolvedStat {
  const activeModifiers = modifiers.filter((mod) =>
    evaluateCondition(mod.condition, context),
  );
  const stacked = applyStackingRules(activeModifiers);
  const ordered = sortModifiersByPriority(stacked);

  let finalValue = baseValue;

  for (const mod of ordered) {
    switch (mod.type) {
      case ModifierType.SET:
        finalValue = mod.value;
        break;
      case ModifierType.ADDITIVE:
        finalValue += mod.value;
        break;
      case ModifierType.MULTIPLICATIVE:
        finalValue *= mod.value;
        break;
      case ModifierType.FLOOR:
        finalValue = Math.max(finalValue, mod.value);
        break;
      case ModifierType.CAP:
        finalValue = Math.min(finalValue, mod.value);
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

export function buildEvaluationContext(
  character: Character,
): EvaluationContext {
  return { character };
}
