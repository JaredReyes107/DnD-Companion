import { Character } from "@/game/types/instances/character";
import { CharacterResources } from "@/game/types/instances/character-resources";
import { FeatureTemplate } from "@/game/types/templates/feature-template";
import { getActiveFeatures } from "./features-helper";
import {
  getResourceById,
  GroupedResources,
} from "@/game/registries/resources.registry";
import { evaluateFormula } from "./resource-scaling";
import { ResourceCategory } from "@/game/types/templates/resource-template";
import { buildSpellSlots } from "@/game/rules/spellcasting";

export function getResourcesFromFeatures(
  features: FeatureTemplate[],
): Set<string> {
  const ids = new Set<string>();

  for (const feature of features) {
    feature.resources?.forEach((id) => ids.add(id));
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
  let allResources = {};

  const spellSlots = buildSpellSlots(character);
  const classResources = buildCharacterClassResources(character);

  allResources = { ...allResources, ...spellSlots, ...classResources };

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
