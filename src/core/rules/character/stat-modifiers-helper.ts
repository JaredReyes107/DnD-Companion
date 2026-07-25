import { Character } from "@/core/entities/character/Character";
import {
  StatModifierInstance,
  StatModifierTemplate,
} from "@/core/entities/rules/stats.types";
import { getActiveFeatures } from "./features-helper";
import { getStatModifierTemplateById } from "@/core/data/registries/modifiers.registry";
import { getModifiersFromChoices } from "./choices-helper";

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
  const features = getActiveFeatures(character);
  const nextModifiers: Record<string, StatModifierInstance> = {};

  // Feature-granted modifiers — read grants directly off the template,
  // no registry lookup needed since getActiveFeatures already resolved them
  for (const feature of features) {
    feature.grants
      ?.filter((g) => g.type === "modifier")
      .forEach((g) => {
        const template = getStatModifierTemplateById(g.id);
        const instance = instantiateModifier(template, character, feature.id);
        const instanceKey = `${feature.id}:${g.id}`;
        nextModifiers[instanceKey] = instance;
      });
  }

  // Choice-granted modifiers — these come from selected options,
  // resolved by id since OptionTemplate is registry-backed
  const choiceModifierIds = getModifiersFromChoices(character);

  for (const modifierId of choiceModifierIds) {
    const template = getStatModifierTemplateById(modifierId);
    const instance = instantiateModifier(template, character, modifierId);
    const instanceKey = `choice:${modifierId}`;
    nextModifiers[instanceKey] = instance;
  }

  return nextModifiers;
}
