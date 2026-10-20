import { Character } from "@/core/entities/character/Character";
import { buildCombatState } from "@/core/rules/combat/combat-helper";
import { ResourceInstance } from "@/core/entities/resources/resource-instance";
import { getResourceRegistry } from "../../data/registries/resources.registry";
import { resetChoicesForTrigger } from "./choices-helper";
import { onLongRest, onShortRest } from "@/core/systems/combat/combat-triggers";

function restoreResources(
  resources: Record<string, ResourceInstance>,
  rechargeTypes: string[],
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

    const shouldRestore = rechargeTypes.includes(definition.recharge);

    updated[key] = shouldRestore
      ? { ...instance, current: instance.max }
      : instance;
  }

  return updated;
}

export function takeLongRest(character: Character): Character {
  const rested: Character = {
    ...character,
    hitPoints: {
      ...character.hitPoints,
      temporalHP: 0,
      currentHP: character.hitPoints.currentMaximumHP,
    },
    combatState: buildCombatState(character),
    resources: restoreResources(character.resources, ["longRest", "shortRest"]),
    featureChoices: resetChoicesForTrigger(
      {
        ...character,
        featureChoices: resetChoicesForTrigger(character, "onShortRest"),
      },
      "onLongRest",
    ),
  };
  return onLongRest(rested);
}

export function takeShortRest(character: Character): Character {
  const rested: Character = {
    ...character,
    resources: restoreResources(character.resources, ["shortRest"]),
    featureChoices: resetChoicesForTrigger(character, "onShortRest"),
  };
  return onShortRest(rested);
}
