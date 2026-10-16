import { Character } from "@/core/entities/character/Character";
import { CharacterResources } from "@/core/entities/resources/character-resources";
import { FeatureTemplate } from "@/core/entities/rules/feature-template";
import { getActiveFeatures } from "./features-helper";
import {
  getResourceById,
  GroupedResources,
} from "@/core/data/registries/resources.registry";
import { getResourcesFromChoices } from "./choices-helper";
import { evaluateFormula } from "./resource-scaling";
import { ResourceCategory } from "@/core/entities/rules/resource-template";
import {
  buildSpellSlots,
  hasSpellcasting,
} from "@/core/entities/spellcasting/spellcasting";
import { grantsOfType } from "../shared/grant-filters";

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

  const fresh: CharacterResources = {};
  for (const id of ids) {
    const max = evaluateFormula(getResourceById(id), character);
    fresh[id] = { resourceId: id, max, current: max };
  }
  return fresh; // pure derivation, no carry-over
}

/**
 * Keeps player-spent state for resources that still exist; drops the rest.
 * If max grew (PB bump, Master of Runes), the new capacity arrives available.
 * If it shrank, current is clamped.
 */
function reconcileResources(
  fresh: CharacterResources,
  previous: CharacterResources,
): CharacterResources {
  const out: CharacterResources = {};
  for (const [id, next] of Object.entries(fresh)) {
    const prev = previous[id];
    if (!prev) {
      out[id] = next;
      continue;
    }
    const bothFinite = Number.isFinite(prev.max) && Number.isFinite(next.max);
    const gained = bothFinite ? Math.max(0, next.max - prev.max) : 0;
    out[id] = {
      ...next,
      current: Math.min(next.max, prev.current + gained),
    };
  }
  return out;
}

export function buildCharacterResources(
  character: Character,
): CharacterResources {
  const fresh: CharacterResources = {
    ...(hasSpellcasting(character) ? buildSpellSlots(character) : {}),
    ...buildCharacterClassResources(character),
  };
  return reconcileResources(fresh, character.resources);
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
