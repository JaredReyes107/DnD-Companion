import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const fathomless_actions_es: GameLocalizationCategory = {
  tentacle_of_the_deeps_summon: {
    name: "Tentáculos de las Profundidades: Invocar",
    description: `Invocas a un tentáculo espectral de 10 pies de largo en un punto que puedas ver a 60 pies o menos de ti. El tentáculo dura 1 minuto o hasta que utilices este rasgo para crear otro tentáculo.
        Además, el tentáculo hace un ataque de conjuro cuerpo a cuerpo contra una criatura que se encuentre a 10 pies o menos de él. Si impacta, el objetivo recibe 1d8 de daño de frío y su velocidad se reduce en 10 pies hasta el principio de tu siguiente turno. Cuando alcanzas el nivel 10 de esta clase, el daño adicional aumenta a 2d8.`,
  },
  tentacle_of_the_deeps_move_attack: {
    name: "Tentáculos de las Profundidades: Atacar",
    description: `Mueves el tentáculo hasta 30 pies y ataca a una criatura a 10 pies o menos de él. Si impacta, el objetivo recibe 1d8 de daño de frío y su velocidad se reduce en 10 pies hasta el principio de tu siguiente turno. Cuando alcanzas el nivel 10 de esta clase, el daño adicional aumenta a 2d8.`,
  },
  guardian_coil: {
    name: "Bucle Guardián",
    description: `Cuando tú o una criatura que puedas ver reciban daño mientras estén a 10 pies o menos del tentáculo, podrás usar tu reacción para elegir una de esas criaturas y reducir el daño que recibe en 1d8. Cuando alcanzas el nivel 10 de esta clase, el daño reducido por el tentáculo aumenta a 2d8.`,
  },
  grasping_tentacles: {
    name: "Tentáculos Prensiles",
    description: `Lanzas el conjuro 'Tentáculos Negros de Evard' sin usar un espacio de conjuro. Siempre que lances este conjuro obtienes una cantidad de puntos de golpe temporales igual a tu nivel de brujo y el daño no puede romper tu concentración en este conjuro.`,
  },
  fathomless_plunge: {
    name: "Zambullida Insondable",
    description: `Teletransportas a ti y a hasta otras cinco criaturas voluntarias que puedas ver a 30 pies o menos de ti. Se teletransportan a hasta a 1 milla de distancia en una masa de agua que hayas visto (con el tamaño de un estanque o mayor) o a 30 pies o menos de ella, y cada uno de aparece en un espacio sin ocupar a 30 pies o menos de los demás.`,
  },
};
