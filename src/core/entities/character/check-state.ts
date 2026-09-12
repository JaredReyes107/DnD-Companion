import { Ability } from "@/core/entities/rules/ability/ability.types";

/**
 * Runtime check-related state for a character.
 *
 * `proficiencies` is a flat set of CheckNode ids. Proficiency recorded
 * at a non-leaf node (e.g. "weapon.martial") is inherited by every
 * descendant leaf at resolve time — never expanded into individual
 * leaves at build time. A new leaf added to a category later (homebrew
 * or errata) is automatically covered by existing "all X" grants
 * without touching existing characters.
 *
 * Expertise and advantage are deliberately NOT modeled here. Both are
 * StatModifierInstance grants targeting a node (see stats.types.ts),
 * resolved through the same modifier pipeline as everything else in
 * the app — sourced, and they disappear when their source does.
 *
 * `abilityOverrides` records per-character deviations from a node's
 * registry-declared ability (e.g. using INT instead of WIS for a
 * specific tool, or for a skill). Sparse — only nodes the player has
 * actually changed appear here.
 */
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
