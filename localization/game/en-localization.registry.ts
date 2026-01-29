import { GameLocalization } from "../game-localization.types";
import { alignments_en } from "./alignments/en-alignments";

import { classes_en } from "./classes/en-classes";

export const game_en: GameLocalization = {
  ...alignments_en,
  ...classes_en,
};
