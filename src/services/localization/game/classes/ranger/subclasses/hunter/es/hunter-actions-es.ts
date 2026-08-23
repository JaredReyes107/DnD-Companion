import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const hunter_actions_es: GameLocalizationCategory = {
  colossus_slayer: {
    name: "Azote de Colosos",
    description: `Infliges 1d8 de daño adicional con un ataque con arma a un enemigo que no esté al máximo de sus puntos de golpe.`,
  },
  giant_killer: {
    name: "Asesino de Gigantes",
    description: `Atacas inmediatamente a  una criatura de tamaño Grande o mayor que se encuentre a menos de 5 pies de distancia de ti que te ataque.`,
  },
  horde_breaker: {
    name: "Destructor de Hordas",
    description: `Cuando hagas un ataque de arma, puedes hacer otro ataque con la misma arma contra una criatura diferente que se encuentre a menos de 5 pies de distancia del objetivo original y que esté dentro del alcance de tu arma.`,
  },
  volley: {
    name: "Andanada",
    description: `Realizas un ataque a distancia contra cualquier número de criaturas que estén a menos de 10 pies de distancia de un punto que puedas ver y dentro del alcance de tu arma. Debes tener munición para cada objetivo, y hacer una tirada de ataque distinta para cada uno.`,
  },
  whirlwind_attack: {
    name: "Ataque de Torbellino",
    description: `Haces una tirada de ataque contra cualquier número de criaturas que se encuentren a menos de 5 pies de ti, con una tirada de ataque distinta para cada objetivo.`,
  },
  stand_against_the_tide: {
    name: "Aguantar la Marea",
    description: `Cuando una criatura hostil te impacta con un ataque cuerpo a cuerpo, puedes usar tu reacción para obligarla a que repita el mismo ataque contra otra criatura que tú elijas (que no sea ella misma).`,
  },
  uncanny_dodge_hunter: {
    name: "Esquive Asombroso",
    description: `Cuando un atacante que puedes ver te impacta con un ataque, puedes usar tu reacción para reducir la mitad el daño que recibes del ataque.`,
  },
};
