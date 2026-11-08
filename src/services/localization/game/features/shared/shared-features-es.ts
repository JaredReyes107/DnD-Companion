import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const shared_features_es: GameLocalizationCategory = {
  ability_score_improvement: {
    name: "Mejora de la Puntuación de Habilidad",
    description:
      "Cuando alcanzas un nivel que te concede una Mejora de la Puntuación de Habilidad, aumenta una puntuación de tu elección en 2 o dos puntuaciones en 1 cada una, o elige una ventaja si tu mesa usa la regla opcional. No puedes aumentar una puntuación por encima de 20 con esta característica.",
  },
  blessed_strikes: {
    name: "Golpes Bendecidos",
    description:
      "Cuando una criatura sufre daño por uno de tus trucos o ataques con arma, puedes también infligir 1d8 de daño radiante a esa criatura. Cuando haces este daño, no puedes usar esta característica de nuevo hasta el inicio de tu siguiente turno.",
  },
  evasion: {
    name: "Evasión",
    description:
      "Tu agilidad instintiva te permite esquivar ciertos efectos de área. Cuando estás sometido a un efecto que te permite hacer una tirada de salvación de Destreza para recibir solo la mitad del daño, en lugar de eso no recibes ningún daño si tienes éxito en la tirada y solo la mitad si fallas.",
  },
  extra_attack: {
    name: "Ataque Adicional",
    description:
      "Puedes atacar dos veces, en lugar de una, cada vez que realizas la acción Ataque en tu turno.",
  },
  potent_spellcasting: {
    name: "Conjuración Potente",
    description:
      "A partir del octavo nivel, añades tu modificador de Sabiduría al daño que infliges con cualquier truco de clérigo.",
  },
};
