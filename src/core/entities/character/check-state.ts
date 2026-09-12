import { Ability } from "@/core/entities/rules/ability/ability.types";

export type CharacterCheckState = {
  proficiencies: Set<string>;
  abilityOverrides: Record<string, Ability>;

  // TEMPORARY: manual expertise grants for freeform character creation.
  // Architecturally this should be a StatModifierInstance sourced from a
  // feature/choice grant (see checks-helper.ts). There's no grant/choice
  // UI backing manual sheet entry yet, and statModifiers is fully
  // rebuilt by buildCharacterPassiveModifiers on every save, which would
  // erase a manually-added modifier. This set is the stopgap until that
  // exists — migrate it to the modifier pipeline once expertise can be
  // granted through a proper source.
  manualExpertise: Set<string>;
};

export function buildCharacterCheckState(): CharacterCheckState {
  return {
    proficiencies: new Set<string>(),
    abilityOverrides: {},
    manualExpertise: new Set<string>(),
  };
}

export type SerializedCharacterCheckState = {
  proficiencies: string[];
  abilityOverrides: Record<string, Ability>;
  manualExpertise: string[];
};

export function serializeCharacterCheckState(
  state: CharacterCheckState,
): SerializedCharacterCheckState {
  return {
    proficiencies: [...state.proficiencies],
    abilityOverrides: state.abilityOverrides,
    manualExpertise: [...state.manualExpertise],
  };
}

export function hydrateCharacterCheckState(
  raw: SerializedCharacterCheckState,
): CharacterCheckState {
  return {
    proficiencies: new Set(raw.proficiencies),
    abilityOverrides: raw.abilityOverrides,
    manualExpertise: new Set(raw.manualExpertise),
  };
}
