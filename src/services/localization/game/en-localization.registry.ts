import { GameLocalization } from "../game-localization.types";

import { abilities_en } from "./ability-scores.ts/en-ability-scores";
import { skills_en } from "./skills/en-skills";
import { check_nodes_en } from "./check-nodes/check-nodes-en";
import { languages_en } from "./languages/language-en";
import { alignments_en } from "./alignments/en-alignments";

import { classes_en } from "./classes/classes-en";
import { subclasses_en } from "./classes/subclasses-en";
import { features_en } from "./features/features-en.registry";
import { resources_en } from "./resources/resources-en";
import { actions_en } from "./actions/actions-en.registry";
import { cost_options_en } from "./cost-options/cost-options-en";

export const game_en: GameLocalization = {
  ...abilities_en,
  ...skills_en,
  ...check_nodes_en,
  ...languages_en,
  ...alignments_en,

  ...classes_en,
  ...subclasses_en,
  ...features_en,
  ...resources_en,
  ...actions_en,
  ...cost_options_en,
};
