//import { GameLocale } from "@/localization/game-localization.types";
import { resolveGameText } from "@/localization/game-localization-resolver";

//TODO: Adapt this to get the selected language
const locale = "es";

export function getLocalizedName(
  category: Parameters<typeof resolveGameText>[0],
  id: string,
  fallback = id,
): string {
  return resolveGameText(category, id, "name", locale) ?? fallback;
}

export function getLocalizedDescription(
  category: Parameters<typeof resolveGameText>[0],
  id: string,
): string | undefined {
  return resolveGameText(category, id, "description", locale);
}
