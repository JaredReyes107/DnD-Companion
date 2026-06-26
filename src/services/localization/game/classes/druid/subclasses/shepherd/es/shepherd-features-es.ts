import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const shepherd_features_es: GameLocalizationCategory = {
  speech_of_the_woods: {
    name: "Lengua de los Bosques",
    description:
      "Obtienes la capacidad de hablar con las bestias y criaturas feéricas. Aprendes a hablar, leer y escribir Silvano. Además, los animales pueden entenderte cuando hablas y eres capaz de descifrar sus sonidos y movimientos. La mayoría de bestias no tienen la inteligencia suficiente para transmitir o entender conceptos sofisticados, pero una criatura amistosa podría informar de lo que ha visto u oído recientemente.",
  },
  spirit_totem: {
    name: "Totém Espiritual",
    description:
      "Eres capaz de convocar a los espíritus de la naturaleza para influir en el mundo. Como acción adicional, puedes invocar de forma mágica a un animal incorpóreo en un punto que puedas ver y se encuentre a 60 pies o menos de ti. Este espíritu crea un aura de 30 pies de radio alrededor de ese punto. No cuenta como criatura ni como objeto, aunque tiene el aspecto espectral del ser que representa. Como acción adicional, puedes mover el espíritu hasta 60 pies a un punto que puedas ver. Este animal incorpóreo persiste durante 1 minuto o hasta que quedes incapacitado. Una vez hayas utilizado este rasgo, deberás terminar un descanso corto o largo para poder volver a usarlo. Los efectos del aura dependen del tipo de espíritu que invoques, de entre las opciones presentadas a continuación",
  },
  mighty_summoner: {
    name: "Invocador Poderoso",
    description: `Las bestias y seres feéricos que convocas son más resistentes de lo normal. Cualquier animal o feérico invocado o creado mediante un conjuro que hayas lanzado obtiene los siguientes beneficios:
      Aparece con más puntos de golpe de lo normal: 2 puntos de golpe adicionales por cada Dado de Golpe.
      El daño de sus armas naturales se considera mágico a efectos de superar inmunidades y resistencias a ataques o daño no mágico.`,
  },
  guardian_spirit: {
    name: "Espíritu Guardian",
    description:
      "Tu tótem espiritual protege a las bestias y seres feéricos que invoques mediante tu magia. Cuando la bestia o feérico invocado o creado por un conjuro tuyo acaba su turno en el aura de tu tótem espiritual, esa criatura recupera tantos puntos de golpe como la mitad de tu nivel de druida.",
  },
  faithful_summons: {
    name: "Fieles Invocados",
    description:
      "Los espíritus de la naturaleza con los que comulgas te pretegerán cuando estés mas indefenso. Si tus puntos de golpe se reducen a 0 o eres incapacitado contra tu voluntad, puedes ganar inmediatamente los beneficios de Conjurar animales como si hubiera sido lanzado usando un espacio de conjuro de nivel 9. Este conjuro invoca a cuatro bestias de tu elección cuyo valor de desafío sea de 2 o menos. Estas aparecen a 20 pies o menos de ti. Si no reciben ninguna orden tuya, te pretegerán de todo mal y atacarán a tus enemigos. El conjuro dura 1 hora, sin que sea necesaria concentración, o hasta que decidas darlo por terminado (esto no requiere una acción). Una vez utilizado este rasgo, deberás terminal un descanso largo para poder volver a usarlo.",
  },
};
