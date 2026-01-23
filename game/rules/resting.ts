import { Character } from "../types/instances/character";
import { ResourceInstance } from "../types/instances/resource-instance";
import { getResourceRegistry } from "../registries/resources.registry";

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
  return {
    ...character,
    resources: restoreResources(character.resources, ["longRest"]),
  };
}

export function takeShortRest(character: Character): Character {
  return {
    ...character,
    resources: restoreResources(character.resources, ["shortRest"]),
  };
}
