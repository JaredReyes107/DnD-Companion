import { GameLocalization } from "../../game-localization.types";

import { barbarian_es } from "./barbarian/es-barbarian";
import { bard_es } from "./bard/es/bard-es";
import { cleric_es } from "./cleric/es/cleric-es";
import { druid_es } from "./druid/es/druid-es";
import { fighter_es } from "./fighter/es/fighter-es";
import { monk_es } from "./monk/es/monk-es";
import { paladin_es } from "./paladin/es/paladin-es";
import { ranger_es } from "./ranger/es/ranger-es";
import { rogue_es } from "./rogue/es/rogue-es";

export const classes_es: GameLocalization = {
  classes: {
    artificer: {
      name: "Artífice",
      description:
        "Un inventor experto que combina magia y tecnología para crear infusiones, artilugios y objetos mágicos.",
    },
    ...barbarian_es,
    ...bard_es,
    ...cleric_es,
    ...druid_es,
    ...fighter_es,
    ...monk_es,
    ...paladin_es,
    ...monk_es,
    ...ranger_es,
    ...rogue_es,
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
