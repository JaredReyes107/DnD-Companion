import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const scout_actions_es: GameLocalizationCategory = {
  skirmisher: {
    name: "Experto en Escaramuzas",
    description: `Cuando un enemigo termina su turno situado a 5 pies o menos de ti, puedes usar tu reacción parar moverte hasta la mitad de tu velocidad. Este movimiento no provoca ataques de oportunidad.`,
  },
  ambush_master: {
    name: "Maestro de la Emboscada",
    description: `La primera criatura a la que impactes durante el primer asalto de un combate es más fácil de golpear para ti y para otros: las tiradas de ataque contra ese objetivo se realizan con ventaja hasta el principio de tu siguiente turno.`,
  },
  sudden_strike: {
    name: "Ataque Súbito",
    description: `Cuando realizas la acción de Atacar en tu turno, puedes hacer un ataque más como acción adicional. Este ataque puede beneficiarse de tu Ataque Furtivo incluso si ya lo has usado este turno, pero no puedes emplear Ataque Furtivo contra un mismo objetivo más de una vez por turno.`,
  },
};
