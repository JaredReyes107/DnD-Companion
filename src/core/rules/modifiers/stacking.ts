import {
  ModifierInstance,
  ModifierType,
} from "../../entities/modifiers/Modifier";

export const MODIFIER_PRIORITY = {
  [ModifierType.SET]: 100,
  [ModifierType.MULTIPLICATIVE]: 200,
  [ModifierType.ADDITIVE]: 300,
  [ModifierType.ADVANTAGE]: 400,
  [ModifierType.DISADVANTAGE]: 500,
  [ModifierType.REROLL]: 600,
};

export function resolveModifierValue(
  modifier: ModifierInstance,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  context?: any,
): number {
  if (typeof modifier.value === "function") {
    return modifier.value(context);
  }
  return modifier.value;
}

export function applyStackingRules(
  modifiers: ModifierInstance[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  context?: any,
): ModifierInstance[] {
  const groupedByEffect = new Map<string, ModifierInstance[]>();
  const independentModifiers: ModifierInstance[] = [];

  for (const mod of modifiers) {
    if (mod.effectId) {
      if (!groupedByEffect.has(mod.effectId)) {
        groupedByEffect.set(mod.effectId, []);
      }
      groupedByEffect.get(mod.effectId)!.push(mod);
    } else {
      independentModifiers.push(mod);
    }
  }

  const stackedModifiers: ModifierInstance[] = [...independentModifiers];

  for (const group of groupedByEffect.values()) {
    if (group.length === 1) {
      stackedModifiers.push(group[0]);
    } else {
      const highest = group.reduce((prev, current) => {
        const prevValue = resolveModifierValue(prev, context);
        const currValue = resolveModifierValue(current, context);
        return currValue > prevValue ? current : prev;
      }, group[0]);

      stackedModifiers.push(highest);
    }
  }

  return stackedModifiers;
}

export function sortModifiersByPriority(
  modifiers: ModifierInstance[],
): ModifierInstance[] {
  return [...modifiers].sort((a, b) => a.priority - b.priority);
}
