import { BASE_RESOURCES } from "@/game/base-data/resources";
import {
  ResourceCategory,
  ResourceTemplate,
} from "../types/templates/resource-template";
import { ResourceInstance } from "../types/instances/resource-instance";
import { CharacterResources } from "../types/instances/character-resources";
import { SPELL_SLOTS } from "../base-data/resources/spell-slots";

const homebrewResources: Record<string, ResourceTemplate> = {};

export function registerHomebrewResource(res: ResourceTemplate) {
  homebrewResources[res.id] = res;
}

export function getResourceRegistry() {
  return {
    ...SPELL_SLOTS,
    ...BASE_RESOURCES,
    ...homebrewResources,
  };
}

export function getResourceById(id: string): ResourceTemplate {
  const resource = getResourceRegistry()[id];
  if (!resource) {
    throw new Error(`Resource not found: ${id}`);
  }
  return resource;
}

export function resolveClassInstance(
  instance: ResourceInstance,
): ResourceTemplate {
  return getResourceById(instance.resourceId);
}

// ? Currently not in use
export function getResourcesByCategory(category: string) {
  return Object.values(getResourceRegistry()).filter(
    (r) => r.category === category,
  );
}

export type GroupedResources = Record<
  ResourceCategory,
  Array<{
    template: ResourceTemplate;
    instance: ResourceInstance;
  }>
>;

export function groupResourcesByCategory(
  resources: CharacterResources,
): GroupedResources {
  const grouped = {} as GroupedResources;

  const resourceTemplates = getResourceRegistry();

  for (const resourceId in resources) {
    const instance = resources[resourceId];
    const template = resourceTemplates[resourceId];

    // Defensive: resource without template = ignore or log
    if (!template) continue;

    const category = template.category;

    if (!grouped[category]) {
      grouped[category] = [];
    }

    grouped[category].push({
      template,
      instance,
    });
  }

  return grouped;
}
