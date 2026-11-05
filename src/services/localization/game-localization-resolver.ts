import {
  GameLocale,
  GameLocalizedEntry,
  LocalizationNamespace,
} from "./game-localization.types";
import { GAME_LOCALIZATION } from "./game-localization.registry";
import {
  getHomebrewText,
  getHomebrewTextAnyLocale,
} from "./homebrew-localization";

export function resolveGameText(
  category: LocalizationNamespace,
  id: string,
  field: keyof GameLocalizedEntry,
  locale: GameLocale,
): string | undefined {
  return (
    getHomebrewText(locale, category, id, field) ??
    GAME_LOCALIZATION[locale][category]?.[id]?.[field] ??
    getHomebrewTextAnyLocale(locale, category, id, field)
  );
}
