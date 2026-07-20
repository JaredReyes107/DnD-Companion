import { Character } from "@/core/entities/character/Character";
import { OptionGrant } from "@/core/entities/rules/option-template";
import { getOptionById } from "@/core/data/registries/options.registry";
import { getChoicePoolById } from "@/core/data/registries/choice-pools.registry";

/**
 * Returns all OptionGrants earned by the character's current selections,
 * filtered to a specific grant type.
 *
 * This is the parallel of getResourcesFromFeatures / getActionsFromFeatures
 * but sourced from character.featureChoices rather than featuresByLevel.
 */
function getGrantsFromChoices(
  character: Character,
  type: OptionGrant["type"],
): Set<string> {
  const ids = new Set<string>();

  if (!character.featureChoices) return ids;

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

  // picksAtLevel is cumulative totals keyed by level.
  // Find the highest threshold the character has reached.
  const earnedPicks = Object.entries(pool.picksAtLevel)
    .filter(([level]) => Number(level) <= currentLevel)
    .reduce((max, [, picks]) => Math.max(max, picks), 0);

  return earnedPicks;
}

/**
 * Returns pools that are unlocked for the character but have unfilled picks.
 * Used by the UI to know when to prompt the character to make a selection.
 *
 * Only surfaces onLevelUp pools — onLongRest and onShortRest are handled
 * by their respective rest flows, and onActivation is deferred entirely.
 */
export function getUnfilledChoices(
  character: Character,
): Array<{ poolId: string; totalPicks: number; currentPicks: number }> {
  const unfilled: Array<{
    poolId: string;
    totalPicks: number;
    currentPicks: number;
  }> = [];

  if (!character.featureChoices) return unfilled;

  for (const [poolId, instance] of Object.entries(character.featureChoices)) {
    const pool = getChoicePoolById(poolId);

    if (pool.selectionTrigger !== "onLevelUp") continue;

    const totalPicks = getTotalPicksForPool(character, poolId);
    const currentPicks = instance.selectedOptionIds.length;

    if (currentPicks < totalPicks) {
      unfilled.push({ poolId, totalPicks, currentPicks });
    }
  }

  return unfilled;
}
