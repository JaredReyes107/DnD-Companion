import { game_es } from "./game/es-localization.registry";
import { game_en } from "./game/en-localization.registry";
import { GameLocale, GameLocalization } from "./game-localization.types";

export const GAME_LOCALIZATION: Record<GameLocale, GameLocalization> = {
  es: game_es,
  en: game_en,
};
