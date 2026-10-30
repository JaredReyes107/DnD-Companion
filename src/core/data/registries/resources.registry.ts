import { BASE_RESOURCES } from "@/core/data/rules/resources";
import { ResourceTemplate } from "@/core/entities/rules/resource-template";
import { ResourceInstance } from "@/core/entities/resources/resource-instance";
import { SPELL_SLOTS } from "../rules/resources/spell-slots";

const homebrewResources: Record<string, ResourceTemplate> = {};

let cached: Record<string, ResourceTemplate> | null = null;

/** Structural problems that would otherwise fail silently (a group member without a rank is never a candidate). */
export function validateResourceTemplate(t: ResourceTemplate): string[] {
  const errors: string[] = [];
  if (t.groups?.some((g) => g.trim() === "")) errors.push("empty group name");
  if (t.groups?.length && !t.rank)
    errors.push("belongs to groups but has no rank");
  return errors;
}

export function registerHomebrewResource(res: ResourceTemplate) {
  const errors = validateResourceTemplate(res);
  if (errors.length)
    throw new Error(`Resource ${res.id} is invalid: ${errors.join("; ")}`);
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
