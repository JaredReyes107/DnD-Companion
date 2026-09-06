//import { GameLocale } from "@/services/localization/game-localization.types";
import { resolveGameText } from "@/services/localization/game-localization-resolver";
import { useLocaleStore } from "@/store/localizationStore";

export function getLocalizedName(
  category: Parameters<typeof resolveGameText>[0],
  id: string,
  fallback = id,
): string {
  const locale = useLocaleStore.getState().locale;
  return resolveGameText(category, id, "name", locale) ?? fallback;
}

export function getLocalizedShortName(
  category: Parameters<typeof resolveGameText>[0],
  id: string,
): string | undefined {
  const locale = useLocaleStore.getState().locale;
  return resolveGameText(category, id, "shortName", locale);
}

export function getLocalizedDescription(
  category: Parameters<typeof resolveGameText>[0],
  id: string,
): string | undefined {
  const locale = useLocaleStore.getState().locale;
  return resolveGameText(category, id, "description", locale);
}

export function sortGameIdsByName<T extends string>(
  ids: readonly T[],
  category: Parameters<typeof getLocalizedName>[0],
): T[] {
  const locale = useLocaleStore.getState().locale;
  return [...ids].sort((a, b) =>
    getLocalizedName(category, a).localeCompare(
      getLocalizedName(category, b),
      locale,
    ),
  );
}
