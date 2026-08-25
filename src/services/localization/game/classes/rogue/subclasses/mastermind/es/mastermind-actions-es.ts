import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const mastermind_actions_es: GameLocalizationCategory = {
  master_of_intrigue: {
    name: "Maestro de la Intriga",
    description: `Escuchas a una criatura durante minuto. A partir de ese momento, puedes imitar sin equivocarte el dialecto y el acento de la criatura siempre que sepas el idioma.`,
  },
  master_of_tactics: {
    name: "Maestro de la Táctica",
    description: `Usas la acción 'Ayudar' y, si es para un ataque, el objetivo del ataque puede estar a 30 pies de ti en lugar de 5 pies mientras te pueda ver o escuchar.`,
  },
  insightful_manipulator: {
    name: "Manipulador Perspicaz",
    description: `Dedicas 1 minuto en observar o interactuar con otra criatura fuera del combate, podrás dilucidar hasta cierto punto sus capacidades en comparación con las tuyas. El DM te dirá si la criatura es tu igual, tu superior o tu inferior en lo que respcta a dos de las siguientes características a tu elección:
        - Puntuación de Inteligencia
        - Puntuación de Sabiduría
        - Puntuación de Carisma
        - Nivel de clase (si lo tiene)
        Si el DM lo prefiere, también puedes darte cuenta de que conoces parte de la historia de la criatura o uno de sus rasgos de personalidad, si es que tiene.`,
  },
  misdirection: {
    name: "Distracción",
    description: `Cuando seas el objetivo de un ataque en el que una criatura situada a 5 pies o menos de ti te da cobertura para ese ataque, puedes usar tu reacción para que dicha criatura se convierta en el objetivo en tu lugar.`,
  },
};
