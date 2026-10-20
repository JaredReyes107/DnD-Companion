import { Character } from "@/core/entities/character/Character";
import {
  ModifierTemplate,
  ModifierInstance,
  ModifierValue,
  ModifierType,
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
import { ExprContext, evaluateExpr } from "../predicate/evaluate-predicate";

const NEUTRAL: Record<ModifierType, number> = {
  [ModifierType.ADDITIVE]: 0,
  [ModifierType.MULTIPLICATIVE]: 1,
  [ModifierType.SET]: 0,
  [ModifierType.FLOOR]: -1e9,
  [ModifierType.CAP]: 1e9,
};

function evaluateValue(
  v: ModifierValue,
  ctx: ExprContext,
  type: ModifierType,
): number {
  if (typeof v === "number") return v;
  return evaluateExpr(v, ctx) ?? NEUTRAL[type];
}
function evaluatePriority(
  t: ModifierTemplate,
  ctx: ExprContext,
  fallback: number,
): number {
  if (t.priority === undefined) return fallback;
  return typeof t.priority === "number"
    ? t.priority
    : (evaluateExpr(t.priority, ctx) ?? fallback);
}

export function instantiateModifier(
  template: ModifierTemplate,
  character: Character,
  sourceId: string,
): ModifierInstance {
  const ctx: ExprContext = { character, resolved: getRawBase(character) };
  return {
    id: Crypto.randomUUID(),
    templateId: template.id,
    sourceId,
    statModel: template.statModel,
    type: template.type,
    value: evaluateValue(template.value, ctx, template.type),
    priority: evaluatePriority(
      template,
      ctx,
      DEFAULT_MODIFIER_PRIORITY[template.type],
    ),
    condition: template.condition,
    effectId: template.effectId,
    tags: template.tags,
  };
}

export function refreshModifierInstance(
  instance: ModifierInstance,
  character: Character,
  resolved: ResolvedBase,
  targetNodeId?: string,
): ModifierInstance {
  const template = lookupModifierTemplate(instance.templateId);
  if (!template) return instance;
  const ctx: ExprContext = { character, resolved, targetNodeId };
  return {
    ...instance,
    value: evaluateValue(template.value, ctx, template.type),
    priority: evaluatePriority(template, ctx, instance.priority),
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
