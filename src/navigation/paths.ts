/**
 * Centralized path helpers for Expo Router.
 * This ensures that if the filesystem structure changes, we only update here.
 */

export type CombatTab =
  | "tab-character-sheet"
  | "tab-stats"
  | "tab-actions"
  | "tab-resources"
  | "tab-equipment";

export const Paths = {
  home: "/" as const,
  characterCreation: "/character-creation" as const,
  characterEdition: "/character-edition" as const,

  // Dynamic segments
  combat: (characterId: string) => `/combat/${characterId}` as const,
  combatTab: (characterId: string, tab: CombatTab) =>
    `/combat/${characterId}/${tab}` as const,
} satisfies Record<string, string | ((...args: never) => string)>;
