import { ModifierTemplate } from "@/core/entities/modifiers/Modifier";

import { EXPERTISE_MODIFIERS } from "../rules/modifiers/expertise-modifiers";

import { BARD_MODIFIERS } from "../rules/modifiers/by-class/bard-modifiers";
import { WIZARD_MODIFIERS } from "../rules/modifiers/by-class/wizard-modifiers";
import { TEST_MODIFIERS } from "../rules/test-grants";

const homebrewModifiers: Record<string, ModifierTemplate> = {};

export const CLASS_MODIFIERS: Record<string, ModifierTemplate> = {
  ...BARD_MODIFIERS,
  ...WIZARD_MODIFIERS,
};

export const BASE_MODIFIERS: Record<string, ModifierTemplate> = {
  ...EXPERTISE_MODIFIERS,
  ...TEST_MODIFIERS,

  ...CLASS_MODIFIERS,
};

export function registerHomebrewModifier(template: ModifierTemplate) {
  homebrewModifiers[template.id] = template;
}

export function getModifierRegistry(): Record<string, ModifierTemplate> {
  return { ...BASE_MODIFIERS, ...homebrewModifiers };
}

export function getModifierTemplateById(id: string): ModifierTemplate {
  const template = getModifierRegistry()[id];
  if (!template) {
    throw new Error(`ModifierTemplate not found: ${id}`);
  }
  return template;
}
