import { Character } from "@/core/entities/character/Character";
import { CharacterResources } from "@/core/entities/resources/character-resources";
import { FeatureTemplate } from "@/core/entities/rules/feature-template";
import { getActiveFeatures } from "./features-helper";
import {
  getResourceRegistry,
  GroupedResources,
} from "@/core/data/registries/resources.registry";
import { getResourcesFromChoices } from "./choices-helper";
import { ResourceCategory } from "@/core/entities/rules/resource-template";
import { grantsOfType } from "../shared/grant-filters";
import { buildResourceContext, resourceMax } from "./resource-max";
import { ExprContext } from "../predicate/evaluate-predicate";

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

export type ResourceSectionData = {
  category: ResourceCategory;
  resources: GroupedResources[ResourceCategory];
};

export function groupedResourcesAsArray(
  grouped: GroupedResources,
): ResourceSectionData[] {
  return Object.entries(grouped).map(([category, resources]) => ({
    category: category as ResourceCategory,
    resources,
  }));
}
