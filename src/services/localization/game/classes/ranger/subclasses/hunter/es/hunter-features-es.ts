import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const hunter_features_es: GameLocalizationCategory = {
  "ranger.hunter.hunters_prey": {
    name: "El Cazador y la Presa",
    description: `Consigues uno de los siguientes rasgos de tu elección: Asesino de Gigantes, Azote de colosos o Destructor de Hordas.`,
  },
  "ranger.hunter.defensive_tactics": {
    name: "Tácticas Defensivas",
    description: `Consigues uno de los siguientes rasgos de tu elección: Defensa de ataques múltiples, Huir de la horda o Voluntad de acero.`,
  },
  "ranger.hunter.multiattack": {
    name: "Ataque Múltiple",
    description: `Consigues uno de los siguientes rasgos de tu elección: Andanada o Ataque de torbellino.`,
  },
  "ranger.hunter.superior_hunters_defense": {
    name: "Defensa de Cazador Experto",
    description: `Obtienes uno de los siguientes rasgos, a tu elección: Evasión, Aguantar la Marea o Esquive Asombroso.`,
  },

  // Lv. 3
  "ranger.hunter.colossus_slayer": {
    name: "Azote de Colosos",
    description: `Tu tenacidad puede agotar incluso a los enemigos más poderosos. Cuando impactes a una criatura con un ataque de arma, la criatura recibe daño adicional igual a 1d8 si tenía menos de sus puntos de golpe máximos. Solo puedes infligir este daño adicional una vez por turno.`,
  },
  "ranger.hunter.giant_killer": {
    name: "Asesino de Gigantes",
    description: `Cuando una criatura de tamaño Grande o mayor que se encuentre a menos de 5 pies de distancia de ti te ataque, tanto si impacta como si no, puedes usar tu reacción para atacarla inmediatamente, siempre y cuando puedas verla.`,
  },
  "ranger.hunter.horde_breaker": {
    name: "Destructor de Hordas",
    description: `Una vez en cada uno de tus turnos, cuando hagas un ataque de arma, puedes hacer otro ataque con la misma arma contra una criatura diferente que se encuentre a menos de 5 pies de distancia del objetivo original y que esté dentro del alcance de tu arma.`,
  },

  // Lv. 7
  "ranger.hunter.escape_the_horde": {
    name: "Huir de la Horda",
    description: `Los ataques de oportunidad contra ti tienen desventaja.`,
  },
  "ranger.hunter.multiattack_defense": {
    name: "Defensa de Ataques Múltiples",
    description: `Cuando una criatura te impacte con un ataque, consigues un bonificador de +4 a la CA contra todos los ataques subsecuentes que haga esa criatura durante el resto del turno.`,
  },
  "ranger.hunter.steel_will": {
    name: "Voluntad de Acero",
    description: `Tienes ventaja en las tiradas de salvación para no asustarte.`,
  },

  // Lv. 11
  "ranger.hunter.volley": {
    name: "Andanada",
    description: `Puedes usar tu acción para hacer un ataque a distancia contra cualquier número de criaturas que estén a menos de 10 pies de distancia de un punto que puedas ver y dentro del alcance de tu arma. Debes tener munición para cada objetivo, como es habitual, y hacer una tirada de ataque para cada uno.`,
  },
  "ranger.hunter.whirlwind_attack": {
    name: "Ataque de Torbellino",
    description: `Puedes usar tu acción para hacer una tirada de ataque contra cualquier número de criaturas que se encuentren a menos de 5 pies de ti, con una tirada de ataque para cada objetivo.`,
  },

  // Lv. 15
  evasion: {
    name: "Evasión",
    description: `Cuando estás sufriendo un efecto que te permita hacer una tirada de salvación de Destreza para recibir la mitad del daño, como el fiero aliento de un dragón rojo o el conjuro Golpe de rayo, si tienes éxito en la tirada de salvación, no recibes daño y, si fallas, solo recibes la mitad.`,
  },
  "ranger.hunter.stand_against_the_tide": {
    name: "Aguantar la Marea",
    description: `Cuando una criatura hostil te impacta con un ataque cuerpo a cuerpo, puedes usar tu reacción para obligarla a que repita el mismo ataque contra otra criatura que tú elijas (que no sea ella misma).`,
  },
  "ranger.hunter.uncanny_dodge": {
    name: "Esquive Asombroso",
    description: `Cuando un atacante que puedes ver te impacta con un ataque, puedes usar tu reacción para reducir la mitad el daño que recibes del ataque.`,
  },
};
