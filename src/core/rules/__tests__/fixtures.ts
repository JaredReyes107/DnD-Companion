import { Character } from "@/core/entities/character/Character";
import { ABILITIES } from "@/core/entities/rules/ability/ability.types";
import { buildCombatState } from "@/core/rules/combat/combat-helper";

export type ClassSpec = [classId: string, level: number, subclassId?: string];

export function makeChar(
  classes: ClassSpec[],
  spent: Record<string, number> = {},
  inCombat = false,
): Character {
  const c = {
    classes: {
      order: classes.map((_, i) => `c${i}`),
      byId: Object.fromEntries(
        classes.map(([classId, level, subclassId], i) => [
          `c${i}`,
          { classId, level, subclassId },
        ]),
      ),
    },
    resources: Object.fromEntries(
      Object.entries(spent).map(([id, s]) => [
        id,
        { resourceId: id, spent: s },
      ]),
    ),
    features: {},
    featureChoices: {},
    statModifiers: {},
    checks: { passiveAdvantageInstances: {} },
    hitPoints: { currentHP: 10, currentMaximumHP: 10, temporalHP: 0 },
    baseAbilityScores: Object.fromEntries(ABILITIES.map((a) => [a, 10])),
    actionLimits: { actions: 1, bonusActions: 1, reactions: 1 },
  } as unknown as Character;
  return inCombat ? { ...c, combatState: buildCombatState(c) } : c;
}
