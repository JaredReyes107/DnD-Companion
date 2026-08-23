import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const ranger_actions_es: GameLocalizationCategory = {
  primeval_awareness: {
    name: "Conciencia Primigenia",
    description: `Durante 1 minuto por nivel del espacio del conjuro que gastas, puedes sentir si los siguientes tipos de criaturas están presentes a menos de 1 milla de ti (o 6 millas si estás en tu terreno predilecto): aberraciones, celestiales, dragones, elementales, fatas, infernales y no muertos. Este rasgo no revela ni el número de criaturas ni dónde se encuentran.`,
  },
  hide_in_plain_sight: {
    name: "Esconderse a Plena Vista",
    description: `Dedicas un minuto a crear un camuflaje si tienes acceso a barro fresco, tierra, plantas, hollín u otros materiales naturales. Cuando te camufles de este modo, puedes intentar esconderte pegándote contra una superficie sólida, como un árbol o un muro, que por lo menos sea tan alto y tan ancho como tú. Consigues un bonificador de +10 a las pruebas de Destreza (Sigilo) siempre y cuando permanezcas sin moverte y sin realizar acciones. Cuando te muevas o realices una acción o una reacción, debes volver a camuflarte para volver a conseguir este beneficio.`,
  },
  hide: {
    name: "Esconderse",
    description: `Tomas la acción 'Esconderse'.`,
  },
  foe_slayer: {
    name: "Asesino de Enemigos",
    description: `Sumas tu modificador por Sabiduría a la tirada de ataque o a la tirada de daño que hagas contra uno de tus enemigos predilectos. Puedes usar este rasgo antes o después de hacer la tirada, pero no después de que se apliquen sus efectos.`,
  },
};
