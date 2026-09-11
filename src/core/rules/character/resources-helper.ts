import { Character } from "@/core/entities/character/Character";
import { CharacterResources } from "@/core/entities/resources/character-resources";
import { FeatureTemplate } from "@/core/entities/rules/feature-template";
import { getActiveFeatures } from "./features-helper";
import {
  getResourceById,
  GroupedResources,
} from "@/core/data/registries/resources.registry";
import { getResourcesFromChoices } from "./choices-helper";
import { resolveBound } from "./resource-scaling";
import { ResourceCategory } from "@/core/entities/rules/resource-template";
import {
  buildSpellSlots,
  hasSpellcasting,
} from "@/core/entities/spellcasting/spellcasting";

export function getResourcesFromFeatures(
  features: FeatureTemplate[],
): Set<string> {
  const ids = new Set<string>();
  for (const feature of features) {
    feature.grants
      ?.filter((g) => g.type === "resource")
      .forEach((g) => ids.add(g.id));
  }
  return ids;
}

export function buildCharacterClassResources(
  character: Character,
): CharacterResources {
  const characterFeatures = getActiveFeatures(character);
  const featureResourceIds = getResourcesFromFeatures(characterFeatures);

  const choiceResourceIds = getResourcesFromChoices(character);
  const resourceIds = new Set([...featureResourceIds, ...choiceResourceIds]);

  const nextResources = { ...character.resources };

  for (const id of resourceIds) {
    if (!nextResources[id]) {
      const template = getResourceById(id);

      const max = resolveBound(template.max, character, template.grantors);
      const resolvedMin = template.min
        ? resolveBound(template.min, character, template.grantors)
        : 0;
      const min = resolvedMin === "unbounded" ? 0 : resolvedMin; // min should never realistically be unbounded

      // Unbounded resources start at 0 spent (nothing to "fill"); bounded resources start full.
      const current = max === "unbounded" ? 0 : max;

      nextResources[id] = { resourceId: id, max, current, min };
    }
  }

  return nextResources;
}

export function buildCharacterResources(
  character: Character,
): CharacterResources {
  let allResources: CharacterResources = {};

  if (hasSpellcasting(character)) {
    allResources = buildSpellSlots(character);
  }

  const classResources = buildCharacterClassResources(character);

  allResources = { ...allResources, ...classResources };

  return allResources;
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
