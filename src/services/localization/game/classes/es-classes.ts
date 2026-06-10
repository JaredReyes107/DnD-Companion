import { GameLocalization } from "../../game-localization.types";

import { barbarian_es } from "./barbarian/es-barbarian";

export const classes_es: GameLocalization = {
  classes: {
    artificer: {
      name: "Artífice",
      description:
        "Un inventor experto que combina magia y tecnología para crear infusiones, artilugios y objetos mágicos.",
    },
    ...barbarian_es,
    bard: {
      name: "Bardo",
      description:
        "Un maestro de la palabra, la música y la magia, que inspira aliados y manipula la realidad con su arte.",
    },
    cleric: {
      name: "Clérigo",
      description:
        "Un campeón divino que canaliza el poder de su deidad para sanar, proteger y castigar a sus enemigos.",
    },
    druid: {
      name: "Druida",
      description:
        "Un guardián de la naturaleza que obtiene su poder de los espíritus y las fuerzas primordiales del mundo.",
    },
    fighter: {
      name: "Guerrero",
      description:
        "Un combatiente versátil, maestro del combate físico y del uso de armas y armaduras.",
    },
    monk: {
      name: "Monje",
      description:
        "Un luchador disciplinado que canaliza la energía interior para lograr hazañas físicas extraordinarias.",
    },
    paladin: {
      name: "Paladín",
      description:
        "Un guerrero sagrado ligado por un juramento, que combina combate marcial y poder divino.",
    },
    ranger: {
      name: "Explorador",
      description:
        "Un cazador y rastreador experto que domina la supervivencia, el combate a distancia y la magia natural.",
    },
    rogue: {
      name: "Pícaro",
      description:
        "Un especialista en sigilo y precisión, capaz de explotar las debilidades de sus enemigos.",
    },
    sorcerer: {
      name: "Hechicero",
      description:
        "Un lanzador de conjuros cuyo poder mágico es innato, fruto de una herencia o evento extraordinario.",
    },
    warlock: {
      name: "Brujo",
      description:
        "Un usuario de magia que obtiene su poder a través de un pacto con una entidad sobrenatural.",
    },
    wizard: {
      name: "Mago",
      description:
        "Un erudito de la magia arcana que estudia y domina los conjuros mediante conocimiento y preparación.",
    },
  },
};
