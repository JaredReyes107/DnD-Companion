import { BASE_RESOURCES } from "@/core/data/rules/resources";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";
import { ResourceInstance } from "@/core/entities/resources/resource-instance";
import { SPELL_SLOTS } from "../rules/resources/spell-slots";

const homebrewResources: Record<string, ResourceTemplate> = {};

let cached: Record<string, ResourceTemplate> | null = null;

export function registerHomebrewResource(res: ResourceTemplate) {
  homebrewResources[res.id] = res;
  cached = null;
}
export function getResourceRegistry(): Record<string, ResourceTemplate> {
  return (cached ??= {
    ...SPELL_SLOTS,
    ...BASE_RESOURCES,
    ...homebrewResources,
  });
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
