import { Character } from "@/core/entities/character/Character";
import {
  ModifierTemplate,
  ModifierInstance,
  ModifierValue,
  ModifierEvalContext,
} from "@/core/entities/modifiers/Modifier";
import { DEFAULT_MODIFIER_PRIORITY } from "../modifiers/stacking";
import { getModifiersFromChoices } from "./choices-helper";
import {
  getModifierTemplateById,
  lookupModifierTemplate,
} from "@/core/data/registries/modifiers.registry";
import { getActiveFeatures } from "./features-helper";
import { grantsOfType } from "@/core/rules/shared/grant-filters";
import * as Crypto from "expo-crypto";
import { ResolvedBase } from "@/core/entities/rules/resolved-base";
import { getRawBase } from "./abilities-modifiers";

function evaluate(value: ModifierValue, ctx: ModifierEvalContext): number {
  return typeof value === "function" ? value(ctx) : value;
}

export function instantiateModifier(
  template: ModifierTemplate,
  character: Character,
  sourceId: string,
): ModifierInstance {
  const ctx: ModifierEvalContext = {
    character,
    resolved: getRawBase(character),
  };
  return {
    id: Crypto.randomUUID(),
    templateId: template.id,
    sourceId,
    statModel: template.statModel,
    type: template.type,
    value: evaluate(template.value, ctx),
    priority:
      template.priority !== undefined
        ? evaluate(template.priority, ctx)
        : DEFAULT_MODIFIER_PRIORITY[template.type],
    condition: template.condition,
    effectId: template.effectId,
    tags: template.tags,
  };
}

/** Re-evaluates value and priority against the resolved base. Instances
 *  without a registered template keep their baked numbers. */
export function refreshModifierInstance(
  instance: ModifierInstance,
  character: Character,
  resolved: ResolvedBase,
): ModifierInstance {
  const template = lookupModifierTemplate(instance.templateId);
  if (!template) return instance;
  const ctx: ModifierEvalContext = { character, resolved };
  return {
    ...instance,
    value: evaluate(template.value, ctx),
    priority:
      template.priority !== undefined
        ? evaluate(template.priority, ctx)
        : instance.priority,
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
