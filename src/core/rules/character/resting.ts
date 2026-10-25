import { Character } from "@/core/entities/character/Character";
import { buildCombatState } from "@/core/rules/combat/combat-helper";
import { ResourceInstance } from "@/core/entities/resources/resource-instance";
import { resetChoicesForTrigger } from "./choices-helper";
import { onLongRest, onShortRest } from "@/core/systems/combat/combat-triggers";
import {
  buildResourceContext,
  ResourceContext,
  resourceRecharge,
} from "./resource-max";

function restoreResources(
  resources: Record<string, ResourceInstance>,
  rechargeTypes: string[],
  ctx: ResourceContext,
): Record<string, ResourceInstance> {
  const updated: Record<string, ResourceInstance> = {};
  for (const [key, instance] of Object.entries(resources)) {
    const recharge = resourceRecharge(instance.resourceId, ctx);
    // TODO[RESOURCE_SAFETY]: unknown definitions are left untouched
    updated[key] =
      recharge && rechargeTypes.includes(recharge)
        ? { ...instance, spent: 0 }
        : instance;
  }
  return updated;
}

export function takeLongRest(character: Character): Character {
  const ctx = buildResourceContext(character);
  const rested: Character = {
    ...character,
    hitPoints: {
      ...character.hitPoints,
      temporalHP: 0,
      currentHP: character.hitPoints.currentMaximumHP,
    },
    combatState: buildCombatState(character),
    resources: restoreResources(
      character.resources,
      ["longRest", "shortRest"],
      ctx,
    ),
    featureChoices: resetChoicesForTrigger(character, "onLongRest"),
  };
  return onLongRest(rested);
}

export function takeShortRest(character: Character): Character {
  const rested: Character = {
    ...character,
    resources: restoreResources(
      character.resources,
      ["shortRest"],
      buildResourceContext(character),
    ),
    featureChoices: resetChoicesForTrigger(character, "onShortRest"),
  };
  return onShortRest(rested);
}
