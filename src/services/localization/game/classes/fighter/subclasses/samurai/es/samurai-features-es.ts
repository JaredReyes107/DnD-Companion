import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const samurai_features_es: GameLocalizationCategory = {
  bonus_proficiency: {
    name: "Competencia Adicional",
    description:
      "Obtienes competencia en una de las siguientes habilidades, a tu elección: Interpretación, Perspicacía o Persuasión. Como alternativa, puedes aprender un idioma, el que prefieras.",
  },
  fighting_spirit: {
    name: "Espíritu de Lucha",
    description:
      "Tu intensidad en batalla puede escudarte y ayudarte a golpear de forma certera. Como acción adicional en tu turno puedes obtener ventaja en las tiradas de ataque con arma hasta el final del mismo turno. Si lo haces, también ganas 5 puntos de golpe temporales. Este número de puntos de golpe temporales aumenta según alcanzas ciertos niveles en esta clase, incrementándose a 10 en el nivel 10 y a 15 en el nivel 15. Puedes utilizar este rasgo tres veces, recuperando todos los usos gastados cuando terminas un descanso largo.",
  },
  elegant_courtier: {
    name: "Cortesano Elegante",
    description:
      "Tu disciplina y atención al detalle te permiten brillar en situaciones sociales. Cuando realices una prueba de Carisma (Persuasión), recibes un bonificador igual a tu modificador de Sabiduría. Tu autocontrol también te hace ganar competencia en tiradas de salvación de Sabiduría. Si ya tienes esta competencia, en vez de eso obtienes competencia en tiradas de salvación de Inteligencia o Carisma, a tu elección.",
  },
  tireless_spirit: {
    name: "Espíritu Incansable",
    description:
      "Siempre que realices una tirada de iniciativa y no te queden usos de Espíritu de Lucha, recuperas uno de ellos.",
  },
  rapid_strike: {
    name: "Golpe Súbito",
    description:
      "Aprendes a intercambiar precisión por rapidez en el ataque. Si realizas una acción de Atacar en tu turno y tienes ventaja contra uno de los objetivos, puedes renunciar a la ventaja en esa tirada para realizar un ataque con arma adicional contra el objetivo, como parte de la misma acción. No puedes hacer esto más de una vez por turno.",
  },
  strength_before_death: {
    name: "Fortaleza ante la Muerte",
    description:
      "La fuerza de tu espíritu es capaz de impedir el abrazo de la muerte. Si sufres una cantidad de daño que reduce tus puntos de golpe a 0, pero no te mata, puedes usar tu reacción para no caer inconsciente y obtener un turno adicional inmediatamente, interrumpiendo el actual. Mientras tengas 0 puntos de golpe durante ese turno adicional, recibir daño causa fallos en tiradas de salvación contra muerte de la forma habitual y tres fallos en tiradas de salvación contra muerte todavía pueden matarte. Cuando el turno adicional termina, caes inconsciente si todavia tienes 0 puntos de golpe. Una vez utilizado este rasgo, deberás terminar un descanso largo para poder volver a usarlo.",
  },
};
