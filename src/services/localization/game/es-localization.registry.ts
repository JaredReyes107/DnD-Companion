import { GameLocalization } from "../game-localization.types";

import { abilities_es } from "./ability-scores.ts/es-ability-scores";
import { skills_es } from "./skills/es-skills";
import { alignments_es } from "./alignments/es-alignments";
import { classes_es } from "./classes/es-classes";
import { subclasses_es } from "./classes/es-subclasses";
import { features_es } from "./features/es-features.registry";
import { resources_es } from "./resources/resources-es";
import { actions_es } from "./actions/es-actions.registry";

export const game_es: GameLocalization = {
  ...abilities_es,
  ...skills_es,
  ...alignments_es,

  ...classes_es,
  ...subclasses_es,
  ...features_es,
  ...resources_es,
  ...actions_es,
};
