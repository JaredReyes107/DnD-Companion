import { getRawBase } from "@/core/rules/character/abilities-modifiers";
import {
  refreshModifierPool,
  collectModifierPool,
} from "@/core/rules/character/modifiers-pool";
import {
  serializeStatModel,
  matchesStatTarget,
} from "@/core/rules/shared/stat-targeting";
import {
  ResolvedStat,
  buildEvaluationContext,
  resolveStat,
} from "@/core/systems/stats/resolve-stats";
import { Character } from "../character/Character";
import { ModifierInstance } from "../modifiers/Modifier";
import { ABILITIES, AbilityScores } from "./ability/ability.types";
import { StatModel } from "./stats.types";

export type ResolvedBase = {
  abilityScores: AbilityScores; // after modifiers
  proficiencyBonus: number; // after modifiers
};

export type BaseResolution = {
  base: ResolvedBase;
  stats: Map<string, ResolvedStat>;
};

export function resolveBase(
  character: Character,
  runtime: ModifierInstance[] = [],
): BaseResolution {
  const raw = getRawBase(character);
  // Stage-1 formulas see the RAW base: they can't depend on each other.
  const pool = refreshModifierPool(
    collectModifierPool(character, runtime),
    character,
    raw,
  );
  const evalContext = buildEvaluationContext(character);
  const stats = new Map<string, ResolvedStat>();

  const resolveOne = (model: StatModel, baseValue: number): number => {
    const id = serializeStatModel(model);
    const relevant = pool.filter((m) =>
      matchesStatTarget(m.statModel, model, {}),
    );
    const resolved = resolveStat(id, baseValue, relevant, evalContext);
    stats.set(id, resolved);
    return resolved.finalValue;
  };

  const abilityScores = {} as AbilityScores;
  for (const ability of ABILITIES) {
    abilityScores[ability] = resolveOne(
      { type: "ability", ability },
      raw.abilityScores[ability],
    );
  }
  const proficiencyBonus = resolveOne(
    { type: "derived", key: "proficiencyBonus" },
    raw.proficiencyBonus,
  );

  return { base: { abilityScores, proficiencyBonus }, stats };
}
