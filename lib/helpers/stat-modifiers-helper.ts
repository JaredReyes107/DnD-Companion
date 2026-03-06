import { Character } from "@/game/domain/character/Character";
import {
  StatModifierInstance,
  StatModifierTemplate,
} from "@/game/data/templates/stats.types";
import { getActiveFeatures } from "./features-helper";
import { getFeatureTemplateById } from "@/game/data/registries/features.registry";
import { getStatModifierTemplateById } from "@/game/data/registries/modifiers.registry";

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

    featureTemplate.modifiers?.forEach((modifierId) => {
      const template = getStatModifierTemplateById(modifierId);

      const instance = instantiateModifier(
        template,
        character,
        feature.id, // source is feature
      );

      const instanceKey = `${feature.id}:${modifierId}`;

      nextModifiers[instanceKey] = instance;
    });
  }

  return nextModifiers;
}
