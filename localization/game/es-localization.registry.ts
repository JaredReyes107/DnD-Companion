import { GameLocalization } from "../game-localization.types";
import { abilities_es } from "./ability-scores.ts/ability-scores-es";
import { alignments_es } from "./alignments/es-alignments";
import { classes_es } from "./classes/es-classes";
import { resources_es } from "./resources/resources-es";
import { skills_es } from "./skills/es-skills";

export const game_es: GameLocalization = {
  ...abilities_es,
  ...alignments_es,
  ...classes_es,
  ...skills_es,
  ...resources_es,

  features: {
    "bardic-inspiration": {
      name: "Inspiración de bardo",
      description: "Puedes inspirar a otros con palabras o música.",
    },

    "jack-of-all-trades": {
      name: "Aprendiz de todo",
      description:
        "Añades la mitad de tu bonificador de competencia a pruebas no competentes.",
    },
  },
};
