import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const battle_master_actions_es: GameLocalizationCategory = {
  know_your_enemy: {
    name: "Conoce a tu Enemigo",
    description:
      "Aprendes cierta información acerca de sus capacidades comparadas con las tuyas propias. El DM te dirá si dos de las siguientes características del adversario son iguales, inferiores o superiores con respecto a las tuyas: Puntuación de Fuerza, Puntuación de Destreza, Puntuación de Constitución, Clase de Armadura, Puntos de golpe actuales, Niveles totales de clase (si hay alguno), Niveles de clase de Guerrero (si hay alguno).",
  },
  relentless: {
    name: "Implacable",
    description:
      "Al realizar una tirada de iniciativa recuperas 1 dado de superioridad si no tenías ninguno.",
  },

  // PHB
  commander_strike: {
    name: "Ordenar Ataque",
    description:
      "Cuando realizas la acción Atacar en tu turno, puedes renunciar a uno de tus ataques y usar una acción adicional para ordenar a uno de tus aliados que ataque. Cuando lo hagas, escoge a una criatura amistosa que pueda verte o escucharte, y gasta un dado de superioridad. Esa criatura puede usar su reacción inmediatamente para realizar un ataque de arma, añadiendo el dado de superioridad a la tirada de daño de su ataque.",
  },
  disarming_attack: {
    name: "Disarming Attack",
    description:
      "Cuando impactas a una criatura con un ataque con arma, puedes gastar un dado de superioridad en un intento de desarmar al objetivo, forzándolo a soltar un arma de tu elección que esté sujetando en ese momento. Añade tu dado de superioridad a la tirada de daño del ataque, y el objetivo debe realizar una tirada de salvación de Fuerza. Si falla, el objetivo suelta el objeto de tu elección. El objeto cae a sus pies.",
  },
  distracting_strike: {
    name: "Golpe de Distracción",
    description:
      "Cuando impactas a una criatura con un ataque con arma, puedes gastar un dado de superioridad para distraer a la criatura, abriendo el frente para tus aliados. Añade el dado de superioridad a la tirada de daño del ataque. La siguiente tirada de ataque contra el objetivo por un atacante que no seas tú tendrá ventaja si el ataque se realiza antes de tu siguiente turno.",
  },
  evasive_footwork: {
    name: "Juego de Piernas Evasivo",
    description:
      "Cuando te mueves, puedes gastar un dado de superioridad, realizando la tirada y añadiendo el resultado a tu CA hasta que dejes de moverte.",
  },
  feinting_attack: {
    name: "Feinting Attack",
    description:
      "Puedes gastar un dado de superioridad y usar una acción adicional en tu turno para fintar, escogiendo a una criatura que esté a 5 pies o menos de ti como objetivo. Tienes ventaja en la siguiente tirada de ataque que realices contra esa criatura. Si el ataque impacta, añade el dado de superioridad a la tirada de daño del ataque.",
  },
  goading_attack: {
    name: "Goading Attack",
    description:
      "Cuando impactas a una criatura con un ataque con arma, puedes gastar un dado de superioridad para intentar provocar a la criatura para que te ataque a ti. Añade el dado de superioridad a la tirada de daño del ataque, y el objetivo debe realizar una tirada de salvación de Sabiduría. Si falla, el objetivo tiene desventaja en todas las tiradas de ataque que haga contra cualquiera que no seas tú, hasta el final de tu siguiente turno.",
  },
  lunging_attack: {
    name: "Ataque de Arremetida",
    description:
      "Cuando haces un ataque con arma cuerpo a cuerpo en tu turno, puedes gastar un dado de superioridad para incrementar el rango de ese ataque en 5 pies. Si impactas, añades el dado de superioridad a tirada de daño del ataque.",
  },
  maneuvering_attack: {
    name: "Ataque Táctico",
    description:
      "Cuando impactas a una criatura con un ataque con arma, puedes gastar un dado de superioridad para que uno de tus aliados pueda maniobrar hasta una posición más ventajosa. Añade el dado de superioridad a la tirada de daño del ataque, y escoge una criatura amistosa que pueda verte o escucharte. Esa criatura puede usar su reacción para moverse hasta la mitad de su velocidad sin provocar ataques de oportunidad de la criatura a la que has atacado.",
  },
  menacing_attack: {
    name: "Ataque Amenazante",
    description:
      "Cuando impactas a una criatura con un ataque con arma, puedes gastar un dado de superioridad para intentar asustar al objetivo. Añade el dado de superioridad a la tirada de daño, y el objetivo debe hacer una tirada de salvación de Sabiduría. Si falla la tirada, el objetivo estará asustado hasta el final de tu siguiente turno.",
  },
  parry: {
    name: "Parada",
    description:
      "Cuando una criatura te hace daño con un ataque cuerpo a cuerpo, puedes usar tu reacción y gastar un dado de superioridad para reducir el daño un número igual a la tirada de tu dado de superioridad + tu modificador de Destreza.",
  },
  precision_attack: {
    name: "Ataque de Precisión",
    description:
      "Cuando realizas una tirada de ataque con arma contra una criatura, puedes gastar un dado de superioridad para añadirlo a la tirada. Puedes usar esta maniobra antes o después de la tirada de ataque, pero debe ser antes de que ningún efecto del ataque sea aplicado.",
  },
  pushing_attack: {
    name: "Ataque de Empujón",
    description:
      "Cuando impactas a una criatura con un ataque con arma, puedes gastar un dado de superioridad para intentar hacer retroceder al objetivo. Añade el dado de superioridad a la tirada de daño del ataque, y si el objetivo es de tamaño Grande o más pequeño, debe realizar una tirada de salvación de Fuerza. Si falla, empujas al objetivo 15 pies.",
  },
  rally: {
    name: "Alentar",
    description:
      "En tu turno, puedes usar una acción adicional y gastar un dado de superioridad para enaltecer la resolución de uno de tus compañeros. Cuando lo hagas, escoge a una criatura amistosa que pueda verte o escucharte. Esa criatura gana un número de puntos de golpe temporales igual a la tirada de tu dado de superioridad + tu modificador de Carisma.",
  },
  riposte: {
    name: "Contraataque",
    description:
      "Cuando una criatura falla un ataque cuerpo a cuerpo contra ti, puedes usar tu reacción y gastar un dado de superioridad para realizar un ataque cuerpo a cuerpo de arma contra la criatura. Si golpeas, añade el dado de superioridad a la tirada de daño del ataque.",
  },
  sweeping_attack: {
    name: "Ataque de Barrido",
    description:
      "Cuando impactas a una criatura con un ataque con arma cuerpo a cuerpo, puedes gastar un dado de superioridad para intentar hacer daño a otra criatura con el mismo ataque. Escoge otra criatura a 5 pies o menos del objetivo original y que esté dentro de tu rango. Si la tirada del ataque original fuese suficiente para golpear a la segunda criatura, esta sufre un daño igual a la tirada de tu dado de superioridad. El daño infligido es del mismo tipo que el ataque original.",
  },
  trip_attack: {
    name: "Ataque de Derribo",
    description:
      "Cuando impactas a una criatura con un ataque con arma, puedes gastar un dado de superioridad para intentar derribar al objetivo. Añade el dado de superioridad a la tirada de daño del ataque, y si el objetivo es de tamaño Grande o más pequeño, debe realizar una tirada de salvación de Fuerza. Si falla, el objetivo es derribado.",
  },

  // TCE
  ambush: {
    name: "Emboscada",
    description:
      "Cuando haces una prueba de Destreza (Sigilo) o una tirada de iniciativa, puedes gastar un dado de supremacía y añadirlo a la tirada, siempre que no estés incapacitado.",
  },
  bait_and_switch: {
    name: "Cambio de Posición Ventajoso",
    description:
      "Si en tu turno estás a 5 pies o menos de una criatura, puedes gastar un dado de supremacía y cambiar tu posición por la de ella, siempre que gastes al menos 5 pies de movimiento y que esa criatura acceda voluntariamente y no esté incapacitada. Este movimiento no provocará ataques de oportunidad. Tira el dado de supremacía. Hasta el principio de tu siguiente turno, tú o la otra criatura (a tu elección) obtenéis un bonificador a la CA igual al resultado.",
  },
  brace: {
    name: "Presteza",
    description:
      "Cuando una criatura que puedas ver pase a estar al alcance del arma cuerpo a cuerpo que estés empuñando, puedes usar tu reacción para gastar un dado de supremacía y atacar a la criatura con esa arma. Si el ataque impacta, añade el dado de supremacía a la tirada de daño del arma.",
  },
  commanding_presence: {
    name: "Presencia Imponente",
    description:
      "Cuando haces una prueba de Carisma (Intimidación), Carisma (Interpretación) o Carisma (Persuasión), puedes gastar un dado de supremacía y añadirlo a la prueba de característica.",
  },
  grappling_strike: {
    name: "Ataque y Agarre",
    description:
      "Justo después de impactar a una criatura en tu turno con un ataque cuerpo a cuerpo, puedes gastar un dado de supremacía e intentar agarrarla como acción adicional (consulta las reglas sobre agarrar en el Player's Handbook). Añade el dado de supremacía a tu prueba de Fuerza (Atletismo).",
  },
  quick_toss: {
    name: "Lanzamiento Raudo",
    description:
      "Como acción adicional, puedes gastar un dado de supremacía y hacer un ataque a distancia con un arma que tenga la propiedad 'arrojadiza'. Puedes desenvainar el arma como parte de este ataque. Si impactas, añade el dado de supremacía a la tirada de daño del arma.",
  },
  tactical_assesment: {
    name: "Evaluación Táctica",
    description:
      "Cuando haces una prueba de Inteligencia (Investigación), Inteligencia (Historia) o Sabiduría (Perspicacia), puedes gastar un dado de supremacía y añadirlo a la prueba de característica.",
  },
};
