import { Effect } from "../../entities/modifiers/Effect";
import { ConflictRule } from "./conflict-rules";

export class ConflictResolver {
  constructor(private rules: ConflictRule[] = []) {}

  // A pairwise conflict resolution engine intercepting effects before stacking logic
  resolve(effects: Effect[]): Effect[] {
    const result: Effect[] = [];

    for (const currentEffect of effects) {
      const conflictTuple = this.findConflict(result, currentEffect);

      if (!conflictTuple) {
        result.push(currentEffect);
        continue;
      }

      const { existing, rule } = conflictTuple;
      const resolvedEffect = rule.resolve(existing, currentEffect);

      if (resolvedEffect) {
        // Retain the survivor (e.g Shield survives Magic Missile)
        const index = result.indexOf(existing);
        if (index !== -1) result[index] = resolvedEffect;
      } else {
        // Complete cancellation (e.g Advantage + Disadvantage)
        const index = result.indexOf(existing);
        if (index !== -1) result.splice(index, 1);
      }
    }

    return result;
  }

  private findConflict(
    existingEffects: Effect[],
    current: Effect,
  ): { existing: Effect; rule: ConflictRule } | undefined {
    for (const existing of existingEffects) {
      for (const rule of this.rules) {
        if (
          rule.applies(existing, current) ||
          rule.applies(current, existing)
        ) {
          return { existing, rule };
        }
      }
    }
    return undefined;
  }
}
