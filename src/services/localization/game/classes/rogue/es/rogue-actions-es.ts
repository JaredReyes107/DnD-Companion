import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

const subclass_actions: GameLocalizationCategory = {
  // PHB
  // Xanathar's
  // Tasha's
};

export const rogue_actions_es: GameLocalizationCategory = {
  ...subclass_actions,

  sneak_attack: {
    name: "Ataque Furtivo",
    description: `Infliges 1d6 de daño adicional a una criatura que impactes con un ataque si tienes ventaja en la tirada de ataque o  si otro enemigo del objetivo no incapacitado está a menos de 5 pies de él y si tú no tienes desventaja en la tirada de ataque. El ataque debe usar un arma sutil o a distancia. La cantidad de daño adicional aumenta 1d6 en cada nivel impar.`,
  },
  dash: {
    name: "Correr",
    description: `Tomas la acción 'Correr'.`,
  },
  disengage: {
    name: "Destrabarse",
    description: `Tomas la acción 'Destrabarse'.`,
  },
  hide: {
    name: "Esconderse",
    description: `Tomas la acción 'Esconderse'.`,
  },
  uncanny_dodge: {
    name: "Esquive Asombroso",
    description: `Cuando un atacante que puedas ver te impacta con un ataque, puedes usar tu reacción para reducir a la mitad el daño que te provoca.`,
  },
  stroke_of_luck: {
    name: "Golpe de Suerte",
    description: `Si tu ataque no impacta a un objetivo que esté a tu alcance, puedes convertir el fallo en un impacto. Alternativamente, si fallas una prueba de característica, puedes considerar el resultado de la tirada de 1d20 como 20..`,
  },
};
