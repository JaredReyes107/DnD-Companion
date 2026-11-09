import { Character } from "@/core/entities/character/Character";
import {
  CharacterLanguageState,
  LanguageMode,
} from "@/core/entities/character/language-state";
import { getLanguageNodeAncestryChain } from "@/core/data/registries/language-nodes.registry";
import { GrantorRef, ResolvedGrant } from "@/core/entities/rules/grantor";
import { getGrantPaths } from "./features-helper";

export type LanguageGrantWithSources = {
  nodeId: string;
  mode: LanguageMode;
  sources: GrantorRef[][];
};

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

export function getLanguageGrantsFromFeatures(
  grants: ResolvedGrant[],
): LanguageGrantWithSources[] {
  const byEffect = new Map<string, LanguageGrantWithSources>();
  for (const resolved of grants) {
    if (resolved.grant.type !== "language") continue;
    for (const mode of resolved.grant.modes) {
      const key = `${resolved.grant.nodeId}\u0000${mode}`;
      const existing = byEffect.get(key);
      if (existing) {
        existing.sources.push(resolved.chain);
      } else {
        byEffect.set(key, {
          nodeId: resolved.grant.nodeId,
          mode,
          sources: [resolved.chain],
        });
      }
    }
  }
  return [...byEffect.values()];
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

  for (const { nodeId, mode } of getLanguageGrantsFromFeatures(
    getGrantPaths(character),
  )) {
    const existing = next[nodeId] ?? new Set<LanguageMode>();
    existing.add(mode);
    next[nodeId] = existing;
  }

  return next;
}
