import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const battle_master_features_es: GameLocalizationCategory = {
  combat_superiority: {
    name: "Superioridad en Combate",
    description: `Aprendes maniobras que son que puedes usar gracias a un dado especial llamado dado de superioridad. Aprendes tres maniobras de tu elección. Aprendes una maniobra adicional en los niveles 7, 10 y 15. Cada vez que aprendes una maniobra nueva, puedes reemplazar una maniobra que ya conoces con una distinta. Solo puedes usar una maniobra por ataque. 
      Tienes cuatro dados de superioridad, que son d8s. Un dado de superioridad se gasta cuando lo usas. Recuperas todos tus dados de superioridad gastados cuando finalizas un descanso corto o prolongado. Algunas de tus maniobras requieren que tu objetivo realice una tirada de salvación para resistir los efectos de la maniobra. 
      La CD de la tirada de salvación se calcula de la siguiente manera:  8 + bonificador de competencia + modificador de Fuerza o Destreza (a tu elección)`,
  },
  student_of_war: {
    name: "Estudiante de Guerra",
    description:
      "Ganas competencia con un tipo de herramientas de artesano de tu elección.",
  },
  know_your_enemy: {
    name: "Conoce a tu Enemigo",
    description: `Comenzando en el nivel 7, si te dedicas a observar o interactuar con otra criatura fuera de combate durante al menos 1 minuto, aprendes cierta información acerca de sus capacidades comparadas con las tuyas propias. El DM te dirá si dos de las siguientes características del adversario son iguales, inferiores o superiores con respecto a las tuyas:
      Puntuación de Fuerza.
      Puntuación de Destreza.
      Puntuación de Constitución.
      Clase de Armadura.
      Puntos de golpe actuales.
      Niveles totales de clase (si hay alguno).
      Niveles de clase de Guerrero (si hay alguno).`,
  },
  improved_combat_superiority: {
    name: "Superioridad en Combate Mejorada",
    description:
      "Tus dados de superioridad pasan a ser d10. En el nivel 18, pasan a ser d12.",
  },
  relentless: {
    name: "Implacable",
    description:
      "Si al realizar una tirada de iniciativa no te queda ningún dado de superioridad, recuperas 1 dado de superioridad.",
  },
};
