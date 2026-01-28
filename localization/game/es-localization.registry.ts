import { GameLocalization } from "../game-localization.types";

import { classes_es } from "./classes/es-classes";

export const game_es: GameLocalization = {
  ...classes_es,

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
