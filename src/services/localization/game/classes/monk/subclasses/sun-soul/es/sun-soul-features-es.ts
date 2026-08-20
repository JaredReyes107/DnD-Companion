import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const sun_soul_features_es: GameLocalizationCategory = {
  radiant_sun_bolt: {
    name: "Rayo de Sol Radiante",
    description:
      "Puedes lanzar rayos de resplandor mágico abrasador. Obtienes un ataque de conjuro a distancia que puedes usar con tu acción de Atacar. El ataque tiene un alcance de 30 pies. Eres competente en el y añades tu modificador de Destreza a las tiradas de ataque y daño. Su daño es radiante y usas d4 como dado de daño. Este dado cambia según subes niveles como monje, tal y como se muestra en la columna “Artes Marciales” de la tabla del monje. Si empleas la acción Atacar en tu turno para usar este ataque especial, puedes gastar 1 punto de ki para hacer otros dos ataques de este tipo como acción adicional. Si obtienes el rasgo Ataque Adicional, podrás utilizar este ataque especial como cualquiera de los ataques que realizas como parte de la acción Atacar.",
  },
  searing_arc_strike: {
    name: "Golpe del Arco Radiante",
    description: `Obtienes la habilidad de canalizar tu ki en forma de olas de energía abrasadoras. Justo después de que realices una acción Atacar durante tu turno, puedes gastar 2 puntos de ki para lanzar el conjuro de nivel 1 manos ardientes como acción adicional. Puedes gastar más puntos de ki para lanzar manos ardientes como conjuro de nivel superior. El nivel del conjuro aumenta en uno por cada punto de ki adicional que gastes. La cantidad máxima de puntos de ki (2 más cualquier punto adicional) que puedes gastar en el conjuro es equivalente a la mitad de tu nivel de monje (redondeando hacia abajo).`,
  },
  searing_sunburst: {
    name: "Explosión Solar Abrasadora",
    description: `Ganas la habilidad de crear mágicamente un orbe de luz que estalla en una explosión devastadora. Puedes usar una acción para crear un orbe y lanzarlo a un lugar que elijas y que se encuentre a 150 pies o menos de ti, donde explota en una esfera de luz radiante durante un instante breve pero mortal. Todas las criaturas situadas en una esfera de 20 pies de radio centrada en ese punto deben superar una tirada de salvación de Constitución o recibirán 2d6 de daño radiante. Una criatura que esté bajo una cobertura completa opaca no tiene que hacer la tirada de salvación. Puedes incrementar el daño que hace la esfera gastando puntos de ki. Cada punto que gastes, hasta un máximo de 3, aumenta el daño en 2d6.`,
  },
  sun_shield: {
    name: "Escudo Solar",
    description: `Te cubre un aura luminosa mágica. Emites luz brillante en un radio de 30 pies y luz tenue 30 pies más allá. Puedes apagar la luz o volver a encenderla como acción adicional. Si una criatura te golpea con un ataque cuerpo a cuerpo mientras brilla esta luz, puedes usar tu reacción para infligir daño radiante a la criatura. El daño radiante equivale a 5 + tu modificador de Sabiduría.`,
  },
};
