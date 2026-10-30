import {
  GameLocale,
  GameLocalizedEntry,
  LocalizationNamespace,
} from "./game-localization.types";

type Overlay = Partial<
  Record<
    GameLocale,
    Partial<Record<LocalizationNamespace, Record<string, GameLocalizedEntry>>>
  >
>;

const LOCALES: GameLocale[] = ["en", "es"];
let overlay: Overlay = {};

export function registerHomebrewLocalization(
  locale: GameLocale,
  namespace: LocalizationNamespace,
  id: string,
  entry: GameLocalizedEntry,
) {
  const table = ((overlay[locale] ??= {})[namespace] ??= {});
  table[id] = { ...table[id], ...entry };
}

/** Tests only. */
export function clearHomebrewLocalization() {
  overlay = {};
}

export function getHomebrewText(
  locale: GameLocale,
  namespace: LocalizationNamespace,
  id: string,
  field: keyof GameLocalizedEntry,
): string | undefined {
  return overlay[locale]?.[namespace]?.[id]?.[field];
}

export function getHomebrewTextAnyLocale(
  locale: GameLocale,
  namespace: LocalizationNamespace,
  id: string,
  field: keyof GameLocalizedEntry,
): string | undefined {
  for (const other of LOCALES) {
    if (other === locale) continue;
    const text = getHomebrewText(other, namespace, id, field);
    if (text !== undefined) return text;
  }
  return undefined;
}
