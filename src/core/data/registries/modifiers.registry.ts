import { WIZARD_MODIFIERS } from "../rules/modifiers/by-class/wizard-modifiers";
import { StatModifierTemplate } from "@/core/entities/rules/stats.types";

const homebrewModifiers: Record<string, StatModifierTemplate> = {};

export const CLASS_MODIFIERS = {
  ...WIZARD_MODIFIERS,
};

export const BASE_MODIFIERS: Record<string, StatModifierTemplate> = {
  ...CLASS_MODIFIERS,
};

export function registerHomebrewAction(res: StatModifierTemplate) {
  homebrewModifiers[res.id] = res;
}

export function getActionRegistry() {
  return {
    ...BASE_MODIFIERS,
    ...homebrewModifiers,
  };
}

export function getStatModifierTemplateById(id: string): StatModifierTemplate {
  const template = BASE_MODIFIERS[id];

  if (!template) {
    throw new Error(`StatModifierTemplate not found: ${id}`);
  }

  return template;
}
