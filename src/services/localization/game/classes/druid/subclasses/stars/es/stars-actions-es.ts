import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const stars_actions_es: GameLocalizationCategory = {
  star_map_guiding_bolt: {
    name: "Lanzar Seta Guiada",
    description: `Lanzas el conjuro 'Saeta Guiada' sin gastar un espacio de conjuro.`,
  },
  starry_form: {
    name: "Forma Estelar",
    description:
      "Gastas 1 uso de Forma Salvaje y asumes una forma estelar durante 10 minutos, hasta que seas incapactidado, hasta que mueras o hasta que uses este rasgo de nuevo. Para tu forma estelar, puedes elegir entre Arquero, Cáliz y Dragón.",
  },
  cosmic_omen: {
    name: "Presagio Cósmico",
    description: `Puedes usar una reacción especial según el resultado que hayas sacado en una tirada de de20 tras tu último descanso largo, el cual puede ser dicha o desdicha.
      Dicha (par). Cuando una criatura que puedas ver a 30 pies o menos de ti vaya a hacer una tirada de ataque, una tirada de salvación o una prueba de característica, puedes emplear tu reacción para tirar un d6 y sumar el resultado al total.
      Desdicha (impar). Cuando una criatura que puedas ver a 30 pies o menos de ti vaya a hacer una tirada de ataque, una tirada de salvación o una prueba de característica, puedes usar tu reacción para tirar un d6 y restar el resultado del total.`,
  },
};
