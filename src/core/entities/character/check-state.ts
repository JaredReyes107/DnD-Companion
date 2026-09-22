import { Ability } from "@/core/entities/rules/ability/ability.types";

export type CharacterCheckState = {
  proficiencies: Set<string>;
  abilityOverrides: Record<string, Ability>;
};

export function buildCharacterCheckState(): CharacterCheckState {
  return {
    proficiencies: new Set<string>(),
    abilityOverrides: {},
  };
}

export type SerializedCharacterCheckState = {
  proficiencies: string[];
  abilityOverrides: Record<string, Ability>;
};

export function serializeCharacterCheckState(
  state: CharacterCheckState,
): SerializedCharacterCheckState {
  return {
    proficiencies: [...state.proficiencies],
    abilityOverrides: state.abilityOverrides,
  };
}

export function hydrateCharacterCheckState(
  raw: SerializedCharacterCheckState,
): CharacterCheckState {
  return {
    proficiencies: new Set(raw.proficiencies),
    abilityOverrides: raw.abilityOverrides,
  };
}
