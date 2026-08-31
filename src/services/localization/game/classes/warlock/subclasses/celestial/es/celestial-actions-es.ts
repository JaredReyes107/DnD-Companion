import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const celestial_actions_es: GameLocalizationCategory = {
  healing_light: {
    name: "Luz Sanadora",
    description: `Sanas a una criatura que puedas ver y se encuentre a 60 pies o menos de ti gastando cualquier número de dados de tu reserva de dados, hasta un máximo de dados igual a tu modifcador de Carisma por vez (mínimo de 1 dado). Lanza los dados que hayas decidido, suma los resultados y restaura ese número total de puntos de golpe a la criatura escogida.`,
  },
  radiant_soul: {
    name: "Alma Radiante",
    description: `Añades tu modificador de Carisma a una tirada de daño radiante o de fuego contra un objetivo de un conjuro que lances.`,
  },
  celestial_resilience: {
    name: "Resiliencia Celestial",
    description: `Cuando terminas un descanso corto o largo, tú obtienes puntos de golpe temporales igual a tu nivel de brujo + tu modificador de Carisma. Además, hasta 5 criaturas adicionales que puedas ver cuando termine el descanso obtienen una cantidad de puntos de golpe temporales igual a la mitad de tu nivel de brujo + tu modificador de Carisma.`,
  },
  searing_vengeance: {
    name: "Venganza Ardiente",
    description: `Cuando tengas que realizar una tirada de salvación contra muerte al principio de tu turno, puedes decidir en su lugar recuperar tantos puntos de golpe como tus puntos de golpe máximos y después puedes levantarte si así lo deseas. Además, cada criatura de tu elección que se encuentre a 30 pies o menos de ti recibirá 2d8 + tu modificador de Carisma de daño radiante y quedará cegada hasta el final del turno actual.`,
  },
};
