import { grantsOfType } from "@/core/rules/shared/grant-filters";
import { getActiveFeatures } from "./features-helper";
import { Character } from "@/core/entities/character/Character";
import {
  CharacterLanguageState,
  LanguageMode,
} from "@/core/entities/character/language-state";
import { getLanguageNodeAncestryChain } from "@/core/data/registries/language-nodes.registry";

export function resolveLanguageMode(
  character: Character,
  nodeId: string,
  mode: LanguageMode,
): boolean {
  const chain = getLanguageNodeAncestryChain(nodeId);
  return chain.some((id) => character.languages[id]?.has(mode));
}

export function grantLanguageMode(
  character: Character,
  nodeId: string,
  mode: LanguageMode,
): Character {
  const existing = character.languages[nodeId] ?? new Set<LanguageMode>();
  const next = new Set(existing);
  next.add(mode);
  return {
    ...character,
    languages: { ...character.languages, [nodeId]: next },
  };
}

export function revokeLanguageMode(
  character: Character,
  nodeId: string,
  mode: LanguageMode,
): Character {
  const existing = character.languages[nodeId];
  if (!existing) return character;
  const next = new Set(existing);
  next.delete(mode);
  return {
    ...character,
    languages: { ...character.languages, [nodeId]: next },
  };
}

/**
 * Merges feature-derived language grants into whatever the character
 * already has (manual/spell-granted modes, once that path exists).
 * Additive only, per mode — never removes a mode a rebuild doesn't
 * mention, same "never overwrite existing selections" rule
 * bootstrapFeatureChoices follows.
 */
export function buildCharacterLanguageState(
  character: Character,
): CharacterLanguageState {
  const next: CharacterLanguageState = {};
  for (const [nodeId, modes] of Object.entries(character.languages)) {
    next[nodeId] = new Set(modes);
  }

  const features = getActiveFeatures(character);
  for (const feature of features) {
    for (const grant of grantsOfType(feature.grants, "language")) {
      const existing = next[grant.nodeId] ?? new Set<LanguageMode>();
      grant.modes.forEach((m) => existing.add(m));
      next[grant.nodeId] = existing;
    }
  }

  return next;
}
