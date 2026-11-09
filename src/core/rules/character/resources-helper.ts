import { Character } from "@/core/entities/character/Character";
import { CharacterResources } from "@/core/entities/resources/character-resources";
import { ResolvedGrant } from "@/core/entities/rules/grantor";
import { getGrantPaths } from "./features-helper";
import { getResourceRegistry } from "@/core/data/registries/resources.registry";
import { getResourcesFromChoices } from "./choices-helper";
import {
  ResourceCategory,
  ResourceTemplate,
} from "@/core/entities/rules/resource-template";
import { resolvedGrantsWithSources } from "../shared/grant-filters";
import {
  buildResourceContext,
  resolvedResource,
  ResourceContext,
  resourceMax,
} from "./resource-max";
import { ExprContext } from "../predicate/evaluate-predicate";
import { ResourceInstance } from "@/core/entities/resources/resource-instance";

export type ResourceEntry = {
  template: ResourceTemplate;
  instance: ResourceInstance;
};
export type GroupedResources = Partial<
  Record<ResourceCategory, ResourceEntry[]>
>;

export function getResourcesFromFeatures(grants: ResolvedGrant[]) {
  return resolvedGrantsWithSources(grants, "resource", false);
}

export function buildCharacterClassResources(
  character: Character,
): CharacterResources {
  const grants = getGrantPaths(character);
  const ids = new Set([
    ...getResourcesFromFeatures(grants).map(({ id }) => id),
    ...getResourcesFromChoices(grants).map(({ id }) => id),
  ]);
  const next = { ...character.resources };
  for (const id of ids) {
    if (!next[id]) next[id] = { resourceId: id, spent: 0 };
  }
  return next;
}

/** Slot resources are data: tables over casterLevel / class level. Zero-max slots are skipped. */
export function buildSpellSlotResources(
  character: Character,
  ctx: ExprContext = buildResourceContext(character),
): CharacterResources {
  const next = { ...character.resources };
  for (const r of Object.values(getResourceRegistry())) {
    if (r.category !== "spell_slots" && r.category !== "pact_slots") continue;
    if (next[r.id]) continue;
    if (resourceMax(character, r.id, ctx) === 0) continue;
    next[r.id] = { resourceId: r.id, spent: 0 };
  }
  return next;
}

export function buildCharacterResources(
  character: Character,
): CharacterResources {
  return {
    ...buildSpellSlotResources(character),
    ...buildCharacterClassResources(character),
  };
}

export function groupResourcesByCategory(
  resources: CharacterResources,
  ctx: ResourceContext,
): GroupedResources {
  const grouped: GroupedResources = {};
  for (const [id, instance] of Object.entries(resources)) {
    const template = resolvedResource(id, ctx);
    if (!template) continue; // instance of removed content
    (grouped[template.category] ??= []).push({ template, instance });
  }
  return grouped;
}

export type ResourceSectionData = {
  category: ResourceCategory;
  resources: ResourceEntry[];
};
export function groupedResourcesAsArray(
  grouped: GroupedResources,
): ResourceSectionData[] {
  return (Object.entries(grouped) as [ResourceCategory, ResourceEntry[]][]).map(
    ([category, resources]) => ({ category, resources }),
  );
}
