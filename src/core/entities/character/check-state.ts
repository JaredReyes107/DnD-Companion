import { Ability } from "@/core/entities/rules/ability/ability.types";
import { AdvantageState } from "./advantage-state";

export type CharacterCheckState = {
  proficiencies: Set<string>;
  abilityOverrides: Record<string, Ability>;
  advantage: Record<string, AdvantageState>; // manual, per-node, character-authored.
  // NOT sourced/derived — the eventual ModifierType.ADVANTAGE system (still
  // deferred) will supersede this with real grant-derived resolution; this
  // is a sticky-note-style override until then.
};

export function buildCharacterCheckState(): CharacterCheckState {
  return {
    proficiencies: new Set<string>(),
    abilityOverrides: {},
    advantage: {},
  };
}

export type SerializedCharacterCheckState = {
  proficiencies: string[];
  abilityOverrides: Record<string, Ability>;
  advantage: Record<string, AdvantageState>;
};

export function serializeCharacterCheckState(
  state: CharacterCheckState,
): SerializedCharacterCheckState {
  return {
    proficiencies: [...state.proficiencies],
    abilityOverrides: state.abilityOverrides,
    advantage: state.advantage,
  };
}

export function hydrateCharacterCheckState(
  raw: SerializedCharacterCheckState,
): CharacterCheckState {
  return {
    proficiencies: new Set(raw.proficiencies),
    abilityOverrides: raw.abilityOverrides,
    advantage: raw.advantage,
  };
}
