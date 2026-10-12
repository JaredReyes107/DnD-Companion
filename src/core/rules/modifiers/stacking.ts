import {
  ModifierInstance,
  ModifierType,
} from "../../entities/modifiers/Modifier";

export const DEFAULT_MODIFIER_PRIORITY: Record<ModifierType, number> = {
  [ModifierType.SET]: 100,
  [ModifierType.MULTIPLICATIVE]: 200,
  [ModifierType.ADDITIVE]: 300,
  [ModifierType.FLOOR]: 400,
  [ModifierType.CAP]: 500,
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
    const strongest = group.reduce((best, current) => {
      const better =
        current.type === ModifierType.CAP
          ? resolveModifierValue(current) < resolveModifierValue(best)
          : resolveModifierValue(current) > resolveModifierValue(best);
      return better ? current : best;
    });
    stackedModifiers.push(strongest);
  }

  return stackedModifiers;
}

export function sortModifiersByPriority(
  modifiers: ModifierInstance[],
): ModifierInstance[] {
  return [...modifiers].sort((a, b) => a.priority - b.priority);
}
