import { Character } from "@/core/entities/character/Character";
import { buildCombatState } from "@/core/rules/combat/combat-helper";
import { ResourceInstance } from "@/core/entities/resources/resource-instance";
import {
  RestoreRule,
  RestoreAmount,
} from "@/core/entities/rules/resource-template";
import { getResourceRegistry } from "../../data/registries/resources.registry";
import { TimingTrigger } from "@/core/entities/rules/trigger";
import { evaluateComparator } from "@/core/rules/shared/comparator-helper";
import { resetChoicesForTrigger } from "./choices-helper";

/**
 * Resolves what an instance's `current` becomes after applying one
 * RestoreAmount. Handles the "unbounded" max sentinel (never clamps
 * upward against it) and clamps delta/reset results within [min, max].
 */
function applyRestoreAmount(
  instance: ResourceInstance,
  amount: RestoreAmount,
): number {
  if (amount === "full") {
    return instance.max === "unbounded" ? instance.current : instance.max;
  }

  if (amount.kind === "reset") {
    return instance.max === "unbounded"
      ? amount.value
      : Math.min(amount.value, instance.max);
  }

  // delta — negative values model decay
  const next = instance.current + amount.value;
  const upperClamped =
    instance.max === "unbounded" ? next : Math.min(next, instance.max);
  return Math.max(upperClamped, instance.min);
}

/**
 * Finds the first RestoreRule matching a trigger type in `priority`, checked
 * in order. This is what lets a long rest prefer a resource's own "longRest"
 * rule over a "shortRest" rule when both exist, instead of applying both or
 * applying the wrong one.
 */

function findMatchingRule(
  rules: RestoreRule[],
  priority: TimingTrigger["type"][],
  currentValue: number,
): RestoreRule | undefined {
  for (const triggerType of priority) {
    const candidate = rules.find((rule) => {
      if (rule.trigger.type !== triggerType) return false;
      if (!rule.when) return true;
      return evaluateComparator(
        currentValue,
        rule.when.operator,
        rule.when.value,
      );
    });
    if (candidate) return candidate;
  }
  return undefined;
}

function restoreResources(
  resources: Record<string, ResourceInstance>,
  triggerPriority: TimingTrigger["type"][],
): Record<string, ResourceInstance> {
  const updated: Record<string, ResourceInstance> = {};
  const RESOURCE_DEFINITIONS = getResourceRegistry();

  for (const [key, instance] of Object.entries(resources)) {
    const definition = RESOURCE_DEFINITIONS[instance.resourceId];

    if (!definition) {
      // TODO[RESOURCE_SAFETY]: Decide how to handle missing definitions
      updated[key] = instance;
      continue;
    }

    const rule = findMatchingRule(
      definition.recharge,
      triggerPriority,
      instance.current,
    );

    updated[key] = rule
      ? { ...instance, current: applyRestoreAmount(instance, rule.amount) }
      : instance;
  }

  return updated;
}

export function takeLongRest(character: Character): Character {
  return {
    ...character,
    hitPoints: {
      ...character.hitPoints,
      temporalHP: 0,
      currentHP: character.hitPoints.currentMaximumHP,
    },
    combatState: buildCombatState(character),
    resources: restoreResources(character.resources, ["longRest", "shortRest"]),
    featureChoices: resetChoicesForTrigger(character, "longRest"),
  };
}

export function takeShortRest(character: Character): Character {
  return {
    ...character,
    resources: restoreResources(character.resources, ["shortRest"]),
    featureChoices: resetChoicesForTrigger(character, "shortRest"),
  };
}

/** "roundStart" — start of this character's own turn. */
export function startOwnTurn(character: Character): Character {
  return {
    ...character,
    resources: restoreResources(character.resources, ["roundStart"]),
    featureChoices: resetChoicesForTrigger(character, "roundStart"),
  };
}

/**
 * "turnEnd" — end of this character's own turn. Currently simulated
 */
export function endOwnTurn(character: Character): Character {
  return {
    ...character,
    resources: restoreResources(character.resources, ["turnEnd"]),
    featureChoices: resetChoicesForTrigger(character, "turnEnd"),
  };
}

/**
 * "turnStart" — start of any entity's turn
 */
export function startAnyTurn(character: Character): Character {
  return {
    ...character,
    resources: restoreResources(character.resources, ["turnStart"]),
    featureChoices: resetChoicesForTrigger(character, "turnStart"),
  };
}
