import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const fiend_actions_es: GameLocalizationCategory = {
  dark_ones_blessing: {
    name: "Bendición del Oscuro",
    description: `Consigues tantos puntos de golpe temporales como tu modificador por Carisma + tu nivel de brujo (mínimo 1) cuando reduces a 0 los puntos de golpe de una criatura hostil.`,
  },
  dark_ones_own_luck: {
    name: "Suerte del Oscuro",
    description: `Añades 1d10 a una  prueba de característica o una tirada de salvación`,
  },
  fiendish_resilience: {
    name: "Resistencia Infernal",
    description: `Después de un descanso corto o largo, ganas resistencia a un tipo de daño que elijas hasta que elijas un tipo de daño diferente con este rasgo. Daño de armas mágicas o de plata ignoran esta resistencia.`,
  },
  hurl_through_hell: {
    name: "Lanzar a Través del Infierno",
    description: `Desapareces a una criatura que impactes con un ataque hasta el final de tu siguiente turno, en el cual egresa al espacio que ocupaba antes o al espacio sin ocupar más cercano. Si el objetivo no es un infernal, recibe 10d10 puntos de daño psíquico.`,
  },
};
