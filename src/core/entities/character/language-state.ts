export type LanguageMode = "speak" | "readWrite" | "understand";
export const LANGUAGE_MODES: LanguageMode[] = [
  "speak",
  "readWrite",
  "understand",
];

/**
 * Per node, the set of modes the character has for that language.
 * Independently grantable and mergeable — one source can grant
 * "understand" and a separate one later add "speak" to the same node,
 * so this is a Set, not a replaced enum.
 */
export type CharacterLanguageState = Record<string, Set<LanguageMode>>;

export type SerializedCharacterLanguageState = Record<string, LanguageMode[]>;

export function serializeCharacterLanguageState(
  state: CharacterLanguageState,
): SerializedCharacterLanguageState {
  return Object.fromEntries(
    Object.entries(state).map(([nodeId, modes]) => [nodeId, [...modes]]),
  );
}

export function hydrateCharacterLanguageState(
  raw: SerializedCharacterLanguageState,
): CharacterLanguageState {
  return Object.fromEntries(
    Object.entries(raw).map(([nodeId, modes]) => [nodeId, new Set(modes)]),
  );
}
