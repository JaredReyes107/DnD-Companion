import { Character } from "@/core/entities/character/Character";
import {
  ModifierTemplate,
  ModifierInstance,
  ModifierValue,
} from "@/core/entities/modifiers/Modifier";
import { DEFAULT_MODIFIER_PRIORITY } from "../modifiers/stacking";
import { getModifiersFromChoices } from "./choices-helper";
import { getModifierTemplateById } from "@/core/data/registries/modifiers.registry";
import { getActiveFeatures } from "./features-helper";
import { grantsOfType } from "@/core/rules/shared/grant-filters";

function resolveModifierValue(
  value: ModifierValue,
  character: Character,
): number {
  return typeof value === "function" ? value({ character }) : value;
}

export function instantiateModifier(
  template: ModifierTemplate,
  character: Character,
  sourceId: string,
): ModifierInstance {
  const value = resolveModifierValue(template.value, character);
  const priority =
    template.priority !== undefined
      ? resolveModifierValue(template.priority, character)
      : DEFAULT_MODIFIER_PRIORITY[template.type];

  return {
    id: crypto.randomUUID(),
    templateId: template.id,
    sourceId,
    statModel: template.statModel,
    type: template.type,
    value,
    priority,
    condition: template.condition,
    effectId: template.effectId,
    concentration: template.concentration,
  };
}

export function buildCharacterPassiveModifiers(
  character: Character,
): Record<string, ModifierInstance> {
  const features = getActiveFeatures(character);
  const nextModifiers: Record<string, ModifierInstance> = {};

  for (const feature of features) {
    grantsOfType(feature.grants, "modifier").forEach((g) => {
      const template = getModifierTemplateById(g.id);
      const instance = instantiateModifier(template, character, feature.id);
      nextModifiers[`${feature.id}:${g.id}`] = instance;
    });
  }

  const choiceModifierIds = getModifiersFromChoices(character);
  for (const modifierId of choiceModifierIds) {
    const template = getModifierTemplateById(modifierId);
    const instance = instantiateModifier(template, character, modifierId);
    nextModifiers[`choice:${modifierId}`] = instance;
  }

  return nextModifiers;
}
