import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const conquest_actions_es: GameLocalizationCategory = {
  channel_divinity_conquering_presence: {
    name: "Canalizar Divinidad: Presencia de Conquistador",
    description: `Fuerzas a todas las criaturas de tu elección que puedas ver y se encuentren a 30 pies o menos de ti a realizar una tirada de salvación de Sabiduría. Las que fallen quedarán asustadas de ti durante 1 minuto. Un objetivo asustado puede repetir la tirada de salvación al final de cada uno de sus turnos, librándose del efecto si tiene éxito.`,
  },
  channel_divinity_guided_strike: {
    name: "Canalizar Divinidad: Golpe Guiado",
    description: `Sumas +10 al resultado de una tirada de ataque que hagas. Puedes elegir emplear este rasgo después de ver el resultado de la tirada, pero antes de que el DM te diga si el ataque impacta o no.`,
  },
  scornful_rebuke: {
    name: "Reprimenda Despreciativa",
    description: `Cuando una criatura te impacte con un ataque, sufrirá daño psíquico igual a tu modificador de Carisma (mínimo 1) si no estás incapacitado`,
  },
  invincible_conqueror: {
    name: "Conquistador Invincible",
    description: `Te conviertes en un avatar de la conquista, obteniendo los siguientes beneficios durante 1 minuto:
        - Tienes resistencia a todo el daño.
        - Cuando empleas la acción de Atacar en tu turno, puedes realizar un ataque adicional como parte de esa acción.
        - Tus ataques con arma cuerpo a cuerpo causan críticos con resultados de 19 o 20 en el d20.`,
  },
};
