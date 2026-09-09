import { Character } from "@/core/entities/character/Character";
import { ChoiceInstance } from "@/core/entities/character/choice-instance";
import { OptionGrant } from "@/core/entities/rules/option-template";
import { TimingTrigger } from "@/core/entities/rules/trigger";
import { getOptionById } from "@/core/data/registries/options.registry";
import { getChoicePoolById } from "@/core/data/registries/choice-pools.registry";
import { getActiveFeatures } from "./features-helper";

/**
 * Returns all OptionGrants earned by the character's current selections,
 * filtered to a specific grant type.
 */

function getGrantsFromChoices(
  character: Character,
  type: OptionGrant["type"],
): Set<string> {
  const ids = new Set<string>();

  for (const instance of Object.values(character.featureChoices)) {
    for (const optionId of instance.selectedOptionIds) {
      const option = getOptionById(optionId);
      option.grants
        ?.filter((g) => g.type === type)
        .forEach((g) => ids.add(g.id));
    }
  }

  return ids;
}

// ---------------------------------------------------------------------------
// Grant resolution — consumed by build functions
// ---------------------------------------------------------------------------

export function getResourcesFromChoices(character: Character): Set<string> {
  return getGrantsFromChoices(character, "resource");
}

export function getActionsFromChoices(character: Character): Set<string> {
  return getGrantsFromChoices(character, "action");
}

export function getModifiersFromChoices(character: Character): Set<string> {
  return getGrantsFromChoices(character, "modifier");
}

/**
 * Returns how many picks a character is entitled to for a given pool
 * at their current class level.
 *
 * Returns 0 if the character doesn't have the class that owns the pool,
 * or if they haven't reached any unlock threshold yet.
 */

export function getTotalPicksForPool(
  character: Character,
  poolId: string,
): number {
  const pool = getChoicePoolById(poolId);

  const classInstance = Object.values(character.classes.byId).find(
    (c) => c.classId === pool.classId,
  );

  if (!classInstance) return 0;

  const currentLevel = classInstance.level;

  return Object.entries(pool.picksAtLevel)
    .filter(([level]) => Number(level) <= currentLevel)
    .reduce((max, [, picks]) => Math.max(max, picks), 0);
}

export function getUnfilledChoices(
  character: Character,
): Array<{ poolId: string; totalPicks: number; currentPicks: number }> {
  const unfilled: Array<{
    poolId: string;
    totalPicks: number;
    currentPicks: number;
  }> = [];

  for (const [poolId, instance] of Object.entries(character.featureChoices)) {
    const pool = getChoicePoolById(poolId);

    // Only surface onLevelUp pools here — rest and activation pools
    // are handled by their respective flows
    if (pool.selectionTrigger !== "onLevelUp") continue;

    const totalPicks = getTotalPicksForPool(character, poolId);
    const currentPicks = instance.selectedOptionIds.length;

    if (currentPicks < totalPicks) {
      unfilled.push({ poolId, totalPicks, currentPicks });
    }
  }

  return unfilled;
}

/**
 * Bootstrapping — ensures featureChoices is seeded for all unlocked pools
 *
 * Walks all active features, finds every { type: "choice" } grant, and
 * ensures character.featureChoices has a ChoiceInstance for each pool.
 *
 * Never overwrites existing selections — safe to call on every save.
 * Returns a new featureChoices record (does not mutate the character).
 *
 * Also removes pools that are no longer granted by any active feature,
 * which handles the case where a homebrew feature is removed or a
 * character is rebuilt.
 */
export function bootstrapFeatureChoices(
  character: Character,
): Record<string, ChoiceInstance> {
  const features = getActiveFeatures(character);

  // Collect all pool IDs currently granted by active features
  const grantedPoolIds = new Set<string>();

  for (const feature of features) {
    feature.grants
      ?.filter((g) => g.type === "choice")
      .forEach((g) => grantedPoolIds.add(g.id));
  }

  const next: Record<string, ChoiceInstance> = {};

  for (const poolId of grantedPoolIds) {
    const existing = character.featureChoices[poolId];

    if (existing) {
      // Preserve existing selections — never overwrite
      next[poolId] = existing;
    } else {
      // New pool unlocked — seed with empty selections
      next[poolId] = {
        poolId,
        selectedOptionIds: [],
      };
    }
  }

  // Pools not in grantedPoolIds are intentionally omitted —
  // this removes pools whose granting feature was removed.

  return next;
}

/**
 * Clears selectedOptionIds for all pools with the given selectionTrigger.
 * Returns a new featureChoices record (does not mutate).
 */
export function resetChoicesForTrigger(
  character: Character,
  trigger: TimingTrigger["type"],
): Record<string, ChoiceInstance> {
  const next = { ...character.featureChoices };

  for (const poolId of Object.keys(next)) {
    const pool = getChoicePoolById(poolId);

    if (pool.selectionTrigger === trigger) {
      next[poolId] = {
        ...next[poolId],
        selectedOptionIds: [],
      };
    }
  }

  return next;
}
