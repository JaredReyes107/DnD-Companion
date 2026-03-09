import { GameLocalization } from "../game-localization.types";
import { abilities_en } from "./ability-scores.ts/en-ability-scores";
import { alignments_en } from "./alignments/en-alignments";

import { classes_en } from "./classes/en-classes";
import { skills_en } from "./skills/en-skills";

export const game_en: GameLocalization = {
  ...abilities_en,
  ...alignments_en,
  ...classes_en,
  ...skills_en,
};
