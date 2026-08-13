import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const fighter_actions_es: GameLocalizationCategory = {
  second_wind: {
    name: "Tomar aliento",
    description:
      "Recuperas puntos de golpe igual a 1d10 + tu nivel de guerrero.",
  },
  action_surge: {
    name: "Acción súbita",
    description: `Puedes tomar una acción extra.`,
  },
  indomitable: {
    name: "Indomable",
    description: `Rehaces una tirada de salvación que hallas fallado. Debes usar el nuevo resultado.`,
  },
};
