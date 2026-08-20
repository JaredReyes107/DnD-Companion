import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const mercy_features_es: GameLocalizationCategory = {
  implements_of_mercy: {
    name: "Instrumentos de Misericordia",
    description:
      "Obtienes competencia en las habilidades Perspicacia y Medicina y con los útiles de herborista. También obtienes una máscara especial que sueles llevar puesta cuando utilizas los rasgos de esta subclase.",
  },
  hand_of_healing: {
    name: "Mano de Curación",
    description: `Tu toque místico puede curar heridas. Como acción, puedes gastar 1 punto de ki para tocar a una criatura y hacer que recupere una cantidad de puntos de golpe igual al resultado de una tirada de tu dado de Artes Marciales + tu modificador por Sabiduría.
      Cuando usas Ráfaga de Golpes, puedes sustituir uno de los ataques sin armas por un uso de este rasgo sin gastar un punto de ki para la curación.`,
  },
  hand_of_harm: {
    name: "Mano de Aflicción",
    description:
      "Usas tu ki para infligir heridas. Cuando impactas a una criatura con un ataque sin armas, puedes gastar 1 punto de ki para infligir daño necrótico adicional igual al resultado de una tirada de tu dado de Artes Marciales + tu modificador por Sabiduría. Solo puedes usar este rasgo una vez por turno.",
  },
  physicians_touch: {
    name: "Toque de Galeno",
    description: `Puedes administrar curas aún más potentes con tu toque y, si es necesario, usar tus conocimientos para infligir daño.
      Cuando uses Mano de Curación en una criatura, también podrás sanar una enfermedad o poner fin a uno de los siguientes estados que afecten a la criatura: cegado, ensordecido, paralizado, envenenado o aturdido.
      Cuando uses Mano de Aflicción en una criatura, podrás infligirle el estado "envenenado" hasta el final de tu siguiente turno.`,
  },
  flurry_of_healing_and_harm: {
    name: "Ráfaga de Curación y Aflicción",
    description: `Ahora puedes desatar una oleada de bienestar y dolor. Cuando usas Ráfaga de Golpes, puedes sustituir cada uno de los ataques sin armas por un uso de Mano de Curación sin gastar puntos de ki para curar a un objetivo.
      Además, cuando hagas un ataque sin armas con Ráfaga de Golpes, podrás usar Mano de Aflicción en ese ataque sin gastar un punto de ki. Solo puedes usar Mano de Aflicción una vez por turno.`,
  },
  hand_of_ultimate_mercy: {
    name: "Mano de Misericordia Suprema",
    description: `Tu dominio de la energía vital te abre las puertas de la misericordia suprema. Como acción, puedes tocar el cadáver de una criatura que haya muerto en las últimas 24 horas y gastar 5 puntos de ki. La criatura volverá a la vida y recuperará una cantidad de puntos de golpe igual a 4d10 + tu modificador por Sabiduría. Si la criatura murió mientras estaba afectada por alguno de los siguientes estados, revivirá sin ellos: cegado, ensordecido, paralizado, envenenado y aturdido.
      Cuando uses este rasgo, no podrás volver a hacerlo hasta que finalices un descanso largo`,
  },
};
