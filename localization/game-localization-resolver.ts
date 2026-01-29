import { GameLocale, GameLocalizedEntry } from "./game-localization.types";
import { GAME_LOCALIZATION } from "./game-localization.registry";

export type LocalizationNamespace =
  | "alignments"
  | "classes"
  | "features"
  | "resources"
  | "actions"
  | "races"
  | "skills"
  | "equipment"
  | "spells";

/**
 * Resolve localized text for any game entity.
 *
 * Example:
 * resolveGameText("features", "bardic-inspiration", "name", "es")
 */
export function resolveGameText(
  category: LocalizationNamespace,
  id: string,
  field: keyof GameLocalizedEntry,
  locale: GameLocale,
): string | undefined {
  const localization = GAME_LOCALIZATION[locale];
  const categoryTable = localization[category];

  if (!categoryTable) return undefined;

  return categoryTable[id]?.[field];
}
