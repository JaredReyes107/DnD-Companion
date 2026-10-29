import { Character } from "@/core/entities/character/Character";
import { CharacterResources } from "@/core/entities/resources/character-resources";
import { FeatureTemplate } from "@/core/entities/rules/feature-template";
import { getActiveFeatures } from "./features-helper";
import { getResourceRegistry } from "@/core/data/registries/resources.registry";
import { getResourcesFromChoices } from "./choices-helper";
import {
  ResourceCategory,
  ResourceTemplate,
} from "@/core/entities/rules/resource-template";
import { grantsOfType } from "../shared/grant-filters";
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

export function getResourcesFromFeatures(
  features: FeatureTemplate[],
): Set<string> {
  const ids = new Set<string>();
  for (const feature of features) {
    grantsOfType(feature.grants, "resource").forEach((g) => ids.add(g.id));
  }
  return ids;
}

export function buildCharacterClassResources(
  character: Character,
): CharacterResources {
  const ids = new Set([
    ...getResourcesFromFeatures(getActiveFeatures(character)),
    ...getResourcesFromChoices(character),
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
