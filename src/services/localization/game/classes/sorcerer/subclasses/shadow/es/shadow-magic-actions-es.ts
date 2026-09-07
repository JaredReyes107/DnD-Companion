import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const shadow_magic_actions_es: GameLocalizationCategory = {
  eyes_of_the_dark_darkness: {
    name: "Lanzar Oscuridad",
    description: `Lanzas el conjuro 'Oscuridad' usando 2 puntos de hechicería en lugar de un espacio de conjuro. Eres capaz de ver a través de la oscuridad creada por el conjuro.`,
  },
  strength_of_the_grave: {
    name: "Fuerza de Ultratumba",
    description: `Cuando tus puntos de golpe fueran a ser reducidos a 0 excepto a casua de daño radiante o un golpe crítico, puedes realizar una tirada de salvación de Carisma (CD5 + el daño recibido). Si tienes éxito, tus puntos de golpe se reducen a 1 en su lugar.`,
  },
  hound_of_ill_omen: {
    name: "Sabueso de Mal Agüero",
    description: `Gastas 3 puntos de hechicería e invocas mágicamente a un sabueso de mal agüero, que tendrá como objetivo a una criatura que puedas ver y se encuentre a 120 pies o menos de ti. Este animal utiliza el perfil de un lobo terrible (consulta el Monster Manual o el apéndice C del Player's Handbook), con las siguientes modificaciones:
        - El sabueso es de tamaño Mediano, no Grande, y es considerado una monstruosidad, no una bestia.
        - Aparece con un número de puntos de golpe temporales igual a la mitad de tu nivel de hechicero.
        - Puede moverse a través de otras criaturas y objetos como si fueran terreno difícil. El sabueso recibirá 5 de daño si acaba su turno dentro de un objeto.
        - Al principio de su turno, aprende automáticamente la localización de su objetivo. Si este estaba escondido, ya no es considerado así para el sabueso.
        El sabueso aparece en un espacio libre de tu elección situado a 30 pies o menos del objetivo. Haz una tirada de iniciativa para el. En su turno, solo puede moverse hacia su objetivo por la ruta más directa y, además, no puede usar su acción más que para atacarle. El sabueso puede realizar ataques de oportunidad, pero solo contra su objetivo. Además, mientras el sabueso se encuentre a 5 pies o menos del objetivo, este último tiene desventaja en tiradas de salvación contra cualquier conjuro que lances. 
        El sabueso desaparece si sus puntos de golpe se reducen a 0, si los puntos de golpe de su objetivo se reducen a 0 o 5 minutos después de ser convocado.`,
  },
  shadow_walk: {
    name: "Caminante de Sombras",
    description: `Mientras te encuentres bajo luz tenue u oscuridad, puedes teletransportarte mágicamente hasta 120 pies a un espacio desocupado que puedas ver y que también se encuentre bajo luz tenue u oscuridad.`,
  },
  umbral_form: {
    name: "Forma de Umbra",
    description: `Gastas 6 puntos de hechicería y te envuelves en sombras por 1 minuto, hasta que quedes incapacitado, mueras o lo disipes como acción adicional. En este estado tienes resistencia a todo el daño excepto el de fuerza y radiante, y puedes moverte a través de otras criaturas y objetos como si fueran terreno difícil. Recibes 5 de daño de fuerza si terminas tu turno dentro de un objeto.`,
  },
};
