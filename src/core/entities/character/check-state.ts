import { Ability } from "@/core/entities/rules/ability/ability.types";
import { AdvantageInstance } from "../rules/advantage/advantage-instance";

export type CharacterCheckState = {
  proficiencies: Set<string>;
  derivedProficiencies: Set<string>;
  abilityOverrides: Record<string, Ability>;
  advantageStackingRule: "raw" | "oneToOne";
  passiveAdvantageInstances: Record<string, AdvantageInstance>;
};

export function buildCharacterCheckState(): CharacterCheckState {
  return {
    proficiencies: new Set<string>(),
    derivedProficiencies: new Set<string>(),
    abilityOverrides: {},
    advantageStackingRule: "raw",
    passiveAdvantageInstances: {},
  };
}

export type SerializedCharacterCheckState = {
  proficiencies: string[];
  derivedProficiencies: string[];
  abilityOverrides: Record<string, Ability>;
  advantageStackingRule: "raw" | "oneToOne";
  passiveAdvantageInstances: Record<string, AdvantageInstance>;
};

export function serializeCharacterCheckState(
  state: CharacterCheckState,
): SerializedCharacterCheckState {
  return {
    proficiencies: [...state.proficiencies],
    derivedProficiencies: [...state.derivedProficiencies],
    abilityOverrides: state.abilityOverrides,
    advantageStackingRule: state.advantageStackingRule,
    passiveAdvantageInstances: state.passiveAdvantageInstances,
  };
}

export function hydrateCharacterCheckState(
  raw: SerializedCharacterCheckState,
): CharacterCheckState {
  return {
    proficiencies: new Set(raw.proficiencies),
    derivedProficiencies: new Set(raw.derivedProficiencies ?? []),
    abilityOverrides: raw.abilityOverrides,
    advantageStackingRule: raw.advantageStackingRule,
    passiveAdvantageInstances: raw.passiveAdvantageInstances,
  };
}
