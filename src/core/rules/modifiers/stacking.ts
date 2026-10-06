import {
  ModifierInstance,
  ModifierType,
} from "../../entities/modifiers/Modifier";

export const DEFAULT_MODIFIER_PRIORITY: Record<ModifierType, number> = {
  [ModifierType.SET]: 100,
  [ModifierType.MULTIPLICATIVE]: 200,
  [ModifierType.ADDITIVE]: 300,
  [ModifierType.ADVANTAGE]: 400,
  [ModifierType.DISADVANTAGE]: 500,
  [ModifierType.REROLL]: 600,
};

export function resolveModifierValue(modifier: ModifierInstance): number {
  return modifier.value;
}

export function applyStackingRules(
  modifiers: ModifierInstance[],
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
      const highest = group.reduce((prev, current) =>
        resolveModifierValue(current) > resolveModifierValue(prev)
          ? current
          : prev,
      );
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
