import { Ability } from "@/core/entities/rules/ability/ability.types";
import { AdvantageInstance } from "../rules/advantage/advantage-instance";

export type CharacterCheckState = {
  proficiencies: Set<string>;
  abilityOverrides: Record<string, Ability>;
  advantageStackingRule: "raw" | "oneToOne";
  passiveAdvantageInstances: Record<string, AdvantageInstance>;
};

export function buildCharacterCheckState(): CharacterCheckState {
  return {
    proficiencies: new Set<string>(),
    abilityOverrides: {},
    advantageStackingRule: "raw",
    passiveAdvantageInstances: {},
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
    advantageStackingRule: "raw",
    passiveAdvantageInstances: {},
  };
}
