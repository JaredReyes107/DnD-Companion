import { Character } from "@/core/entities/character/Character";
import { CharacterResources } from "@/core/entities/resources/character-resources";
import { FeatureTemplate } from "@/core/entities/rules/feature-template";
import { getActiveFeatures } from "./features-helper";
import {
  getResourceById,
  getResourceRegistry,
  GroupedResources,
} from "@/core/data/registries/resources.registry";
import { getResourcesFromChoices } from "./choices-helper";
import { ResourceCategory } from "@/core/entities/rules/resource-template";
import { grantsOfType } from "../shared/grant-filters";
import { buildResourceContext, resolveResourceMax } from "./resource-max";

export function getResourcesFromFeatures(
  features: FeatureTemplate[],
): Set<string> {
  const ids = new Set<string>();
  for (const feature of features) {
    grantsOfType(feature.grants, "resource").forEach((g) => ids.add(g.id));
  }
  return ids;
}

function addMissingResources(
  character: Character,
  ids: Set<string>,
  opts: { skipZero?: boolean } = {},
): CharacterResources {
  const ctx = buildResourceContext(character);
  const next = { ...character.resources };
  for (const id of ids) {
    if (next[id]) continue; // TODO(stale-max): existing instances aren't refreshed (commit 3.6)
    const max = resolveResourceMax(getResourceById(id), ctx);
    if (opts.skipZero && max === 0) continue;
    next[id] = { resourceId: id, max, current: max };
  }
  return next;
}

export function buildCharacterClassResources(
  character: Character,
): CharacterResources {
  const ids = new Set([
    ...getResourcesFromFeatures(getActiveFeatures(character)),
    ...getResourcesFromChoices(character),
  ]);
  return addMissingResources(character, ids);
}

/** Slot resources are data like any other: a table over casterLevel / class level.
 *  Non-casters evaluate to 0 and are skipped, so no per-class gating is needed. */
export function buildSpellSlotResources(
  character: Character,
): CharacterResources {
  const ids = Object.values(getResourceRegistry())
    .filter((r) => r.category === "spell_slots" || r.category === "pact_slots")
    .map((r) => r.id);
  return addMissingResources(character, new Set(ids), { skipZero: true });
}

export function buildCharacterResources(
  character: Character,
): CharacterResources {
  // Slots first so class resources can't shadow them, same precedence as before.
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
