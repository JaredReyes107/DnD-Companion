import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const samurai_actions_es: GameLocalizationCategory = {
  fighting_spirit: {
    name: "Espíritu de Lucha",
    description:
      "Obtienes ventaja en las tiradas de ataque con arma hasta el final del mismo turno. Si lo haces, también ganas 5 puntos de golpe temporales. Este número de puntos de golpe temporales aumenta según alcanzas ciertos niveles en esta clase, incrementándose a 10 en el nivel 10 y a 15 en el nivel 15.",
  },
  rapid_strike: {
    name: "Golpe Súbito",
    description:
      "Si realizas una acción de Atacar en tu turno y tienes ventaja contra uno de los objetivos, puedes renunciar a la ventaja en esa tirada para realizar un ataque con arma adicional contra el objetivo, como parte de la misma acción. No puedes hacer esto más de una vez por turno.",
  },
  strength_before_death: {
    name: "Fortaleza ante la Muerte",
    description:
      "Si sufres una cantidad de daño que reduce tus puntos de golpe a 0, pero no te mata, usas tu reacción para no caer inconsciente y obtener un turno adicional inmediatamente, interrumpiendo el actual. Mientras tengas 0 puntos de golpe durante ese turno adicional, recibir daño causa fallos en tiradas de salvación contra muerte de la forma habitual y tres fallos en tiradas de salvación contra muerte todavía pueden matarte. Cuando el turno adicional termina, caes inconsciente si todavia tienes 0 puntos de golpe.",
  },
};
