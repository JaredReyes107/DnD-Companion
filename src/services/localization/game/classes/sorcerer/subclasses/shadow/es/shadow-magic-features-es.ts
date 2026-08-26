import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const shadow_magic_features_es: GameLocalizationCategory = {
  eyes_of_the_dark: {
    name: "Ojos de la Oscuridad",
    description:
      "Tienes visión en la oscuridad hasta a 120 pies. Cuando alcanzas el nivel 3 de esta clase, aprendes el conjuro de oscuridad, pero no cuenta como uno de tus conjuros de hechicero conocidos. Podrás lanzarlo utilizando un espacio de conjuro o gastando 2 puntos de hechiceria. Si lo utilizas con puntos de hechiceria, eres capaz de ver a través de laoscuridad creada por el conjuro.",
  },
  strength_of_the_grave: {
    name: "Fuerza de ultratumba",
    description:
      "Tu existencia entre la vida y la muerte te hace dificil de derrotar. Cuando tus puntos de golpe fueran a ser reducidos a 0, puedes realizar una tirada de salvación de Carisma (CD5 + el daño recibido). Si tienes éxito, en vez de que ocurra esto tus puntos de golpe quedan reducidos a 1. No puedes usar este rasgo si tus puntos de golpe llegan a 0 por daño radiante o por un crítico. Una vez tengas éxito haciendo esta tirada de salvación, no podrás volver a emplear este rasgo hasta que no completes un descanso largo.",
  },
  hound_of_ill_omen: {
    name: "Sabueso de Mal Agüero",
    description: `Eres capaz de llamar a una criatura aullante de oscuridad para acosar a tus enemigos. Como acción adicional, puedes gastar 3 puntos de hechicería para invocar mágicamente a un sabueso de mal agüero, que tendrá como objetivo a una criatura que puedas ver y se encuentre a 120 pies o menos de ti. Este animal utiliza el perfil de un lobo terrible (consulta el Monster Manual o el apéndice C del Player's Handbook), con las siguientes modificaciones:
      - El sabueso es de tamaño Mediano, no Grande, y es considerado una monstruosidad, no una bestia.
      - Aparece con un número de puntos de golpe temporales igual a la mitad de tu nivel de hechicero.
      - Puede moverse a través de otras criaturas y objetos como si fueran terreno difícil. El sabueso recibirá 5 de daño si acaba su turno dentro de un objeto.
      - Al principio de su turno, aprende automáticamente la localización de su objetivo. Si este estaba escondido, ya no es considerado así para el sabueso.
      El sabueso aparece en un espacio libre de tu elección situado a 30 pies o menos del objetivo. Haz una tirada de iniciativa para el. En su turno, solo puede moverse hacia su objetivo por la ruta más directa y, además, no puede usar su acción más que para atacarle. El sabueso puede realizar ataques de oportunidad, pero solo contra su objetivo. Además, mientras el sabueso se encuentre a 5 pies o menos del objetivo, este último tiene desventaja en tiradas de salvación contra cualquier conjuro que lances. El sabueso desaparece si sus puntos de golpe se reducen a 0, si los puntos de golpe de su objetivo se reducen a 0 o 5 minutos después de ser convocado.`,
  },
  shadow_walk: {
    name: "Caminante de Sombras",
    description:
      "Obtienes la habilidad para saltar de una sombra a otra. Cuando te encuentres bajo luz tenue u oscuridad podrás, usando una acción adicional, teletransportarte mágicamente hasta 120 pies a un espacio desocupado que puedas ver y que también se encuentre bajo luz tenue u oscuridad.",
  },
  umbral_form: {
    name: "Forma de Umbra",
    description:
      "Ahora puedes gastar 6 puntos de hechicería y una acción adicional para transformarte mágicamente en una forma hecha de sombras. Cuando te encuentres bajo esta forma, tendrás resistencia a todo el daño excepto el de fuerza y radiante, y podrás moverte a través de otras criaturas y objetos como si fueran terreno difícil. Recibes 5 de daño de fuerza si terminas tu turno dentro de un objeto. Permaneces en esta forma durante 1 minuto. Este efecto termina antes de tiempo si estás incapacitado, si mueres o si lo das por terminado usando una acción adicional.",
  },
};
