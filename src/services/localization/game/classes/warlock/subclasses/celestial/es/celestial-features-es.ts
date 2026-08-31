import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const celestial_features_es: GameLocalizationCategory = {
  bonus_cantrips: {
    name: "Trucos Adicionales",
    description: `Aprendes los trucos 'Luz' y 'Llama Sagrada'. Se consideran trucos de brujo para ti, pero no cuentan como parte de tu número de trucos conocidos.`,
  },
  healing_light: {
    name: "Luz Sanadora",
    description: `Obtienes la capacidad de canalizar energía celestial para curar heridas. Tienes una reserva de dados (d6) que puedes gastar para realizar esta curación, y aa cantidad de estos dados es igual a 1 + tu nivel de brujo. 
      Como acción adicional, puedes sanar a una criatura que puedas ver y se encuentre a 60 pies o menos de ti, gastando dados de dicha reserva. El máximo número de ellos que puedes emplear a la vez es igual a tu modificador de Carisma (mínimo de 1 dado). Lanza los dados que hayas decidido, suma los resultados y restaura ese número total de puntos de golpe a la criatura escogida. Tu reserva recupera todos los dados gastados cuando completas un descanso largo.`,
  },
  radiant_soul: {
    name: "Alma Radiante",
    description: `Tu vínculo con el Celestial te permite servir como conducto para la energía luminosa. Obtienes resistencia al daño radiante y, además, cuando lanzas un conjuro que inflige daño de fuego o radiante, puedes añadir tu modificador de Carisma a una tirada de daño radiante o de fuego de ese conjuro, contra uno de sus objetivos.`,
  },
  celestial_resilience: {
    name: "Resiliencia Celestial",
    description: `Consigues puntos de golpe temporales siempre que termines un descanso corto o largo. Estos son iguales a tu nivel de brujo + tu modificador de Carisma. Además, elige hasta a cinco criaturas que puedas ver en el momento de terminar el descanso. Cada una de ellas consigue tantos puntos de golpe temporales iguales a la mitad de tu nivel de brujo + tu modificador por Carisma.`,
  },
  searing_vengeance: {
    name: "Venganza Ardiente",
    description: `La energía radiante que canalizas te permite resistir a la muerte. Cuando tengas que realizar una tirada de salvación contra muerte al principio de tu turno, en vez de eso puedes ponerte en pie súbitamente en un estallido de energía radiante. Recuperas tantos puntos de golpe como tus puntos de golpe máximos y después puedes levantarte si así lo deseas. Cada criatura de tu elección que se encuentre a 30 pies o menos de ti recibirá 2d8 + tu modificador de Carisma de daño radiante y quedará cegada hasta el final del turno actual. Una vez utilizado este rasgo, deberás terminar un descanso largo para poder volver a usarlo.`,
  },
};
