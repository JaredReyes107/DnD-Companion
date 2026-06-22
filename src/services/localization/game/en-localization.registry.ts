import { GameLocalization } from "../game-localization.types";
import { abilities_en } from "./ability-scores.ts/en-ability-scores";
import { actions_en } from "./actions/actions-en.registry";
import { alignments_en } from "./alignments/en-alignments";

import { classes_en } from "./classes/classes-en";
import { subclasses_en } from "./classes/subclasses-en";
import { features_en } from "./features/features-en.registry";
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
