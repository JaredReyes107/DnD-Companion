import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const fiend_features_es: GameLocalizationCategory = {
  dark_ones_blessing: {
    name: "Bendición del Oscuro",
    description:
      "Cuando reduces a 0 los puntos de golpe de una criatura hostil, consigues tantos puntos de golpe temporales como tu modificador por Carisma + tu nivel de brujo (mínimo 1).",
  },
  dark_ones_own_luck: {
    name: "Suerte del Oscuro",
    description: `uedes llamar a tu patrón para que altere el destino a tu favor. Cuando hagas una prueba de característica o una tirada de salvación, puedes usar este rasgo para añadir 1d10 a tu tirada. Puedes hacerlo después de ver la tirada inicial, pero tiene que ser antes de que ocurran los efectos de la tirada.
      Una vez uses este rasgo, no puedes volver a usarlo hasta que no termines un descanso prolongado o breve.`,
  },
  fiendish_resilience: {
    name: "Resistencia Infernal",
    description: `Puedes elegir un tipo de daño cuando termines un descanso prolongado o breve. Consigues resistencia a ese tipo de daño hasta que elijas uno diferente con este rasgo. El daño de las armas mágicas o de plata ignora esta resistencia.`,
  },
  hurl_through_hell: {
    name: "Lanzar a Través del Infierno",
    description: `Cuando impactes a una criatura con un ataque, puedes usar este rasgo para transportar al objetivo instantáneamente a los planos inferiores. La criatura desaparece y se precipita por un paisaje de pesadilla.
      Al final de tu siguiente turno, el objetivo regresa al espacio que ocupaba antes o al espacio sin ocupar más cercano. Si el objetivo no es un infernal, recibe 10d10 puntos de daño psíquico por esta horrible experiencia.
      Una vez uses este rasgo, no puedes volver a usarlo hasta que termines un descanso prolongado.`,
  },
};
