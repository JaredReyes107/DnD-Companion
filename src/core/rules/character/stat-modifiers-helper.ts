import { Character } from "@/core/entities/character/Character";
import {
  StatModifierInstance,
  StatModifierTemplate,
} from "@/core/entities/rules/stats.types";
import { getActiveFeatures } from "./features-helper";
import { getFeatureTemplateById } from "@/core/data/registries/features.registry";
import { getStatModifierTemplateById } from "@/core/data/registries/modifiers.registry";

export function instantiateModifier(
  template: StatModifierTemplate,
  character: Character,
  sourceId: string,
): StatModifierInstance {
  const value =
    typeof template.value === "function"
      ? template.value(character)
      : template.value;

  return {
    templateId: template.id,
    sourceId,
    statModel: template.statModel,
    mode: template.mode,
    value,
  };
}

export function buildCharacterPassiveModifiers(
  character: Character,
): Record<string, StatModifierInstance> {
  const features = getActiveFeatures(character.classes);

  const nextModifiers: Record<string, StatModifierInstance> = {};

  for (const feature of features) {
    const featureTemplate = getFeatureTemplateById(feature.id);

    featureTemplate.grants
      ?.filter((g) => g.type === "modifier")
      .forEach((g) => {
        const template = getStatModifierTemplateById(g.id);
        const instance = instantiateModifier(template, character, feature.id);
        const instanceKey = `${feature.id}:${g.id}`;
        nextModifiers[instanceKey] = instance;
      });
  }

  return nextModifiers;
}
