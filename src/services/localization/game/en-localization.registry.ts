import { GameLocalization } from "../game-localization.types";
import { abilities_en } from "./ability-scores.ts/en-ability-scores";
import { actions_en } from "./actions/en-actions.registry";
import { alignments_en } from "./alignments/en-alignments";

import { classes_en } from "./classes/en-classes";
import { subclasses_en } from "./classes/en-subclasses";
import { features_en } from "./features/en-features.registry";
import { resources_en } from "./resources/resources-en";
import { skills_en } from "./skills/en-skills";

export const game_en: GameLocalization = {
  ...abilities_en,
  ...skills_en,
  ...alignments_en,

  ...classes_en,
  ...subclasses_en,
  ...features_en,
  ...resources_en,
  ...actions_en,
};
