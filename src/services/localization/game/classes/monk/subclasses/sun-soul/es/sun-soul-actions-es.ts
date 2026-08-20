import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const sun_soul_actions_es: GameLocalizationCategory = {
  radiant_sun_bolt: {
    name: "Rayo de Sol Radiante",
    description: `Realizas un ataque de conjuro a distancia que puedes usar con tu acción de Atacar. El ataque tiene un alcance de 30 pies. Eres competente en el y añades tu modificador de Destreza a las tiradas de ataque y daño. Su daño es radiante y usas tu dado de artes marciales como daño. Si obtienes el rasgo Ataque Adicional, podrás utilizar este ataque especial como cualquiera de los ataques que realizas como parte de la acción Atacar.`,
  },
  radiant_sun_burst: {
    name: "Ráfaga de Sol Radiante",
    description: `Si usas 'Rayo de Sol Radiante' como parte de tu acción de atacar, puedes gastar 1 punto de ki para hacer dos ataques más de este tipo.`,
  },
  searing_arc_strike: {
    name: "Golpe del Arco Ardiente",
    description: `Usas 2 puntos de ki para lanzar 'Manos Ardientes' como acción adicional justo después de realizar la acción de 'Atacar'.`,
  },
  searing_sunburst: {
    name: "Explosión Solar Abrasadora",
    description: `Creas un orbe y lanzarlo a un lugar que elijas y que se encuentre a 150 pies o menos de ti, donde explota en una esfera de luz radiante durante un instante breve pero mortal. Todas las criaturas situadas en una esfera de 20 pies de radio centrada en ese punto deben superar una tirada de salvación de Constitución o recibirán 2d6 de daño radiante. Una criatura que esté bajo una cobertura completa opaca no tiene que hacer la tirada de salvación. Puedes incrementar el daño que hace la esfera gastando puntos de ki. Cada punto que gastes, hasta un máximo de 3, aumenta el daño en 2d6.`,
  },
  sun_shield_switch_aura: {
    name: "Escudo Solar: Alternar Aura",
    description: `Emites luz brillante en un radio de 30 pies y luz tenue 30 pies más allá. Puedes apagar la luz o volver a encenderla como acción adicional.`,
  },
  sun_shield_retaliate: {
    name: "Escudo Solar: Represalia",
    description: `Si una criatura te golpea con un ataque cuerpo a cuerpo mientras brilla esta luz, puedes usar tu reacción para infligir daño radiante a la criatura. El daño radiante equivale a 5 + tu modificador de Sabiduría.`,
  },
};
