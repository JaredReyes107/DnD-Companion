import {
  ModifierTemplate,
  ModifierType,
} from "@/core/entities/modifiers/Modifier";

import { BARBARIAN_MODIFIERS } from "../rules/modifiers/by-class/barbarian/barbarian-modifiers";
import { BARD_MODIFIERS } from "../rules/modifiers/by-class/bard-modifiers";
import { WIZARD_MODIFIERS } from "../rules/modifiers/by-class/wizard-modifiers";
import { RUNE_KNIGHT_MODIFIERS } from "../rules/modifiers/by-class/fighter/rune-knight-modifiers";
import { STATUS_MODIFIERS } from "../rules/modifiers/status-modifiers";

import { buildExpertiseModifiers } from "../rules/modifiers/expertise-modifiers";
import { getCheckNodeRegistryVersion } from "./check-nodes.registry";

const homebrewModifiers: Record<string, ModifierTemplate> = {};

export const CLASS_MODIFIERS: Record<string, ModifierTemplate> = {
  ...BARBARIAN_MODIFIERS,
  ...BARD_MODIFIERS,
  ...WIZARD_MODIFIERS,
  ...RUNE_KNIGHT_MODIFIERS,
};

export const FIGHTING_STYLE_MODIFIERS: Record<string, ModifierTemplate> = {
  fighting_style_archery_attack: {
    id: "fighting_style_archery_attack",
    sourceId: "fighting_style_archery",
    statModel: { type: "custom", key: "attack" },
    type: ModifierType.ADDITIVE,
    value: 2,
  },
  fighting_style_defense_ac: {
    id: "fighting_style_defense_ac",
    sourceId: "fighting_style_defense",
    statModel: { type: "derived", key: "ac" },
    type: ModifierType.ADDITIVE,
    value: 1,
  },
  fighting_style_dueling_damage: {
    id: "fighting_style_dueling_damage",
    sourceId: "fighting_style_dueling",
    statModel: { type: "custom", key: "damage" },
    type: ModifierType.ADDITIVE,
    value: 2,
  },
};

export const BASE_MODIFIERS: Record<string, ModifierTemplate> = {
  ...STATUS_MODIFIERS,
  ...FIGHTING_STYLE_MODIFIERS,

  ...CLASS_MODIFIERS,
};

// Generated expertise templates, rebuilt only when the check registry changes
let expertiseCache: {
  version: number;
  templates: Record<string, ModifierTemplate>;
} | null = null;
function getExpertiseTemplates(): Record<string, ModifierTemplate> {
  const version = getCheckNodeRegistryVersion();
  if (!expertiseCache || expertiseCache.version !== version) {
    expertiseCache = { version, templates: buildExpertiseModifiers() };
  }
  return expertiseCache.templates;
}

export function registerHomebrewModifier(template: ModifierTemplate) {
  homebrewModifiers[template.id] = template;
}

// Precedence: homebrew > base > generated, so a table can replace expertise
export function lookupModifierTemplate(
  id: string,
): ModifierTemplate | undefined {
  return (
    homebrewModifiers[id] ?? BASE_MODIFIERS[id] ?? getExpertiseTemplates()[id]
  );
}

export function getModifierTemplateById(id: string): ModifierTemplate {
  const template = lookupModifierTemplate(id);
  if (!template) throw new Error(`ModifierTemplate not found: ${id}`);
  return template;
}

export function getModifierRegistry(): Record<string, ModifierTemplate> {
  return {
    ...getExpertiseTemplates(),
    ...BASE_MODIFIERS,
    ...homebrewModifiers,
  };
}
