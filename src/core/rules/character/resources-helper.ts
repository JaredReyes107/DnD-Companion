import { Character } from "@/core/entities/character/Character";
import { CharacterResources } from "@/core/entities/resources/character-resources";
import { FeatureTemplate } from "@/core/entities/rules/feature-template";
import { getActiveFeatures } from "./features-helper";
import {
  getResourceById,
  GroupedResources,
} from "@/core/data/registries/resources.registry";
import { evaluateFormula } from "./resource-scaling";
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
  const characterFeatures = getActiveFeatures(character.classes);

  const resourceIds = getResourcesFromFeatures(characterFeatures);

  const nextResources = { ...character.resources };

  // Añadir recursos faltantes
  for (const id of resourceIds) {
    if (!nextResources[id]) {
      const template = getResourceById(id);
      const charges = evaluateFormula(template, character);

      nextResources[id] = {
        resourceId: id,
        max: charges,
        current: charges,
      };
    }
  }

  // Eliminar recursos que ya no deberían existir
  /*
  for (const id of Object.keys(nextResources)) {
    if (!resourceIds.has(id)) {
      delete nextResources[id];
    }
  }
  */

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
