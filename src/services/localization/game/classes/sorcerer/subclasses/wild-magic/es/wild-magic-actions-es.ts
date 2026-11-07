import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const wild_magic_sorcerer_actions_es: GameLocalizationCategory = {
  wild_magic_surge: {
    name: "Oleada de Magia Salvaje",
    description: `Después de que lances un conjuro de hechicero de nivel 1 o superior, el DM puede hacerte tirar un d20. Si sacas un 1, tira en la tabla de oleada de magia salvaje para crear un efecto mágico aleatorio. Además, recuperas una carga de 'Mareas del Caos'`,
  },
  tides_of_chaos: {
    name: "Mareas de Caos",
    description: `Ganas ventaja en una tirada de ataque, prueba de habilidad o tirada de salvación.`,
  },
  bend_luck: {
    name: "Curvar la Suerte",
    description: ` Cuando otra criatura a la que puedas ver realice una tirada de ataque, una prueba de habilidad o una tirada de salvación, puedes usar tu reacción y gastar 2 puntos de hechicería para lanzar 1d4 y aplicar el resultado como un bonificador o un penalizador (tú eliges) a la tirada de la criatura. Puedes hacer esto después de la tirada de la criatura, pero antes de saber los resultados de la tirada.`,
  },
  spell_bombardment: {
    name: "Bombardeo de Conjuros",
    description: `Cuando lanzas el daño de un conjuro y sacas el mayor resultado posible en cualquiera de los dados, elige uno de los dados, lánzalo de nuevo y añade el resultado a la tirada de daño. Puedes usar este rasgo sólo una vez por turno.`,
  },
};
