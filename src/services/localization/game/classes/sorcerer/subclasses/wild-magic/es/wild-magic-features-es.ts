import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const wild_magic_sorcerer_features_es: GameLocalizationCategory = {
  tides_of_chaos: {
    name: "Oleada de Magia Salvaje",
    description: `Tus lanzamientos de conjuros pueden desatar oleadas de magia salvaje. Inmediatamente después de que lances un conjuro de hechicero de nivel 1 o superior, el DM puede hacerte tirar un d20. Si sacas un 1, tira en la tabla de oleada de magia salvaje para crear un efecto mágico aleatorio.`,
  },
  wild_magic_surge: {
    name: "Mareas de Caos",
    description: `Puedes manipular las fuerzas de la probabilidad y del caos para ganar ventaja en una tirada de ataque, prueba de habilidad o tirada de salvación. Una vez hecho esto, necesitas finalizar un descanso prolongado antes de usar este rasgo otra vez. En cualquier momento, antes de recuperar el uso de este rasgo, el DM puede hacerte tirar en la tabla de oleada de magia salvaje inmediatamente después de que lances un conjuro de hechicero de nivel 1 o superior. Después de esto, recuperas el uso de este rasgo.`,
  },
  bend_luck: {
    name: "Curvar la Suerte",
    description: `Tienes la capacidad de torcer el destino usando tu magia salvaje. Cuando otra criatura a la que puedas ver realice una tirada de ataque, una prueba de habilidad o una tirada de salvación, puedes usar tu reacción y gastar 2 puntos de hechicería para lanzar 1d4 y aplicar el resultado como un bonificador o un penalizador (tú eliges) a la tirada de la criatura. Puedes hacer esto después de la tirada de la criatura, pero antes de saber los resultados de la tirada.`,
  },
  controlled_chaos: {
    name: "Caos Controlado",
    description: `Ganas un mínimo control sobre las oleadas de magia salvaje. Siempre que lances en la tabla de Oleada de Magia salvaje, puedes tirar de nuevo y usar cualquiera de las dos tiradas.`,
  },
  spell_bombardment: {
    name: "Bombardeo de Conjuros",
    description: `La energía dañina de tus conjuros se intensifica. Cuando lanzas el daño de un conjuro y sacas el mayor resultado posible en cualquiera de los dados, elige uno de los dados, lánzalo de nuevo y añade el resultado a la tirada de daño. Puedes usar este rasgo sólo una vez por turno.`,
  },
};
