import {
  GameLocale,
  GameLocalizedEntry,
  LocalizationNamespace,
} from "./game-localization.types";
import { GAME_LOCALIZATION } from "./game-localization.registry";

export function resolveGameText(
  category: LocalizationNamespace,
  id: string,
  field: keyof GameLocalizedEntry,
  locale: GameLocale,
): string | undefined {
  const localization = GAME_LOCALIZATION[locale];
  const categoryTable = localization[category];

  if (categoryTable != undefined && categoryTable.toString() == "subclass") {
    console.log(categoryTable[id]?.[field]);
  }
  if (!categoryTable) return undefined;

  return categoryTable[id]?.[field];
}
