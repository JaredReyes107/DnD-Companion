import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const assassin_actions_es: GameLocalizationCategory = {
  assassinate: {
    name: "Asesinar",
    description: `Tienes ventaja en las tiradas de ataque contra cualquier criatura que aún no haya llevado a cabo ningún turno en el combate actual. Además, cualquier impacto contra una criatura sorprendida será automáticamente un crítico.`,
  },
  infiltration_expertise: {
    name: "Experto en Infiltración",
    description: `Empleas siete días y 25 po para establecer la historia, profesión y afiliaciones para crear una identidad. No puedes establecer una identidad que pertenezca a alguien más. Entonces, si adoptas la nueva identidad como un disfraz, las demás criaturas creen que eres esa persona hasta que tengan un motivo obvio para no hacerlo.`,
  },
  impostor: {
    name: "Impostor",
    description: `Empleas al menos tres horas estudiando estos tres componentes del comportamiento de una persona, escuchándola hablar, examinando su escritura y observando sus peculiaridades.
        Tu ardid es indiscernible frente al observador casual. Si una criatura alerta sospecha que algo está mal, tienes ventaja en cualquier tirada de Carisma (Engaño) para evitar ser detectado.`,
  },
  death_strike: {
    name: "Golpe Mortal",
    description: `Te conviertes en un maestro de la muerte instantánea. Cuando atacas y golpeas a una criatura sorprendida, ésta debe hacer una tirada de salvación de Constitución (CD 8 + tu modificador de Destreza + tu bonificador de competencia). Si falla la tirada de salvación, duplica el daño de tu ataque contra esa criatura.`,
  },
};
