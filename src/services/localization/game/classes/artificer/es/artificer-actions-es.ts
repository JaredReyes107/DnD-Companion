import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { alchemist_actions_es } from "../subclasses/alchemist/es/alchemist-actions-es";
import { armorer_actions_es } from "../subclasses/armorer/es/armorer-actions-es";
import { artillerist_actions_es } from "../subclasses/artillerist/es/artillerist-actions-es";
import { battle_smith_actions_es } from "../subclasses/battle-smith/es/battle-smith-actions-es";

const subclass_actions: GameLocalizationCategory = {
  // TCE
  ...alchemist_actions_es,
  ...armorer_actions_es,
  ...artillerist_actions_es,
  ...battle_smith_actions_es,
};

export const artificer_actions_es: GameLocalizationCategory = {
  ...subclass_actions,

  magical_tinkering_bestow: {
    name: "Arreglos Mágicos",
    description: `Con herramientas de ladrón o de artesano a la mano, tocas un objeto no mágico Diminuto y le otorgas una de las siguientes propiedades mágicas a tu elección:
      - El objeto emite luz brillante en un radio de 5 pies y luz tenue 5 pies más allá.
      - Siempre que una criatura lo toque, el objeto emitirá un mensaje grabado que puede oírse a una distancia de hasta 10 pies. Pronuncias el mensaje cuando otorgas esta propiedad al objeto y la grabación no puede durar más de 6 segundos.
      - El objeto emite continuamente un olor o un sonido no verbal (viento, olas, trino, etc). El fenómeno elegido es perceptible a una distancia de hasta 10 pies.
      - Aparece un efecto visual estático en una de las superficies del objeto. Este efecto puede ser una imagen, hasta 25 palabras de texto, líneas y formas, o una mezcla de estos elementos, lo que prefieras.`,
  },
  magical_tinkering_end: {
    name: "Finalizar Arreglo Mágico",
    description: `Tocas un objeto afectado por uno de tus efectos de 'Arreglos Mágicos' y termina inmediatamente.`,
  },
  the_right_tool_for_the_job: {
    name: "La Herramienta Adecuada para la Tarea",
    description: `Usas heramientas de ladrón o de artesano y, después de 1 hora, creas un juego de herramientas de artesano en un espacio sin ocupar a 5 pies o menos de ti. La hora de trabajo puede ser realizada durante un descanso corto o largo, y las herramientas se desvanecerán cuando vuelvas a utilizar este rasgo.`,
  },
  flash_of_genius: {
    name: "Destello de Genio",
    description: `Añades tu modificador de Inteligencia a una prueba de habilidad o una tirada de salvación que tú o una criatura que puedas ver a 30 pies de ti realicen.`,
  },
  spell_storing_item_store: {
    name: "Almacenar Conjuro",
    description: `Guardas un conjuro de nivel 1 o 2 de la lista de conjuros de artífice que requiera 1 acción para lanzarlo en un arma marcial o sencilla o en un foco arcano que toques. Quien sostenga el objeto puede usar una acción para lanzar el conjuro almacenado en él, hasta un número de veces igual al al doble de tu modificador por Inteligencia.`,
  },
  soul_of_artifice: {
    name: "Alma de Artífice",
    description: `Si tus puntos de golpe fuesen a ser reducidos a 0, pones fin a una de tus infusiones de artífice y pasas a tener 1 punto de golpe en su lugar.`,
  },
};
