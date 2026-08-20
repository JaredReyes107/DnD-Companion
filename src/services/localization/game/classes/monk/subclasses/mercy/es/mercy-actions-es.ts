import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const mercy_actions_es: GameLocalizationCategory = {
  hand_of_healing: {
    name: "Mano de Curación",
    description: `Gastas 1 punto de ki para tocar a una criatura y hacer que recupere una cantidad de puntos de golpe igual al resultado de una tirada de tu dado de Artes Marciales + tu modificador por Sabiduría.
        Cuando usas Ráfaga de Golpes, puedes sustituir uno de los ataques sin armas por un uso de este rasgo sin gastar un punto de ki para la curación.`,
  },
  hand_of_harm: {
    name: "Mano de Aflicción",
    description: `Gastas 1 punto de ki al impactar una criatura con un ataque sin armas para para infligir daño necrótico adicional igual al resultado de una tirada de tu dado de Artes Marciales + tu modificador por Sabiduría. Solo puedes usar este rasgo una vez por turno.`,
  },
  hand_of_ultimate_mercy: {
    name: "Mano de Misericordia Suprema",
    description: `Tocas el cadáver de una criatura que haya muerto en las últimas 24 horas y gastar 5 puntos de ki. La criatura volverá a la vida y recuperará una cantidad de puntos de golpe igual a 4d10 + tu modificador por Sabiduría. Si la criatura murió mientras estaba afectada por alguno de los siguientes estados, revivirá sin ellos: cegado, ensordecido, paralizado, envenenado y aturdido.
        Cuando uses este rasgo, no podrás volver a hacerlo hasta que finalices un descanso largo`,
  },
};
