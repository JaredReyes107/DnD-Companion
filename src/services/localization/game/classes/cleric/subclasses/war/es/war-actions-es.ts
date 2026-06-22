import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const war_actions_es: GameLocalizationCategory = {
war_priest: {
    name: "Clérigo de Guerra",
    description: `Cuando usas la acción de Atacar, puedes hacer un ataque con armas como acción adicional.`
  },
  channel_divinity_guided_strike: {
    name: "Canalizar Divinidad: Impacto Guiado",
    description: "Cuando realices una tirada de ataque, puedes usar tu Canalizar Divinidad para ganar un bonificador de +10 a la tirada. Haces esta elección después de ver la tirada, pero antes de que el DM diga si el ataque acierta o falla.",
  },
  channel_divinity_war_gods_blessing: {
    name: "Canalizar Divinidad: Bendición de Guerra",
    description: "Cuando una criatura en un rango de 30 pies de ti hace una tirada de ataque, puedes usar tu reacción para darle a esa criatura un bonificador de +10 a la tirada, usando tu Canalizar Divinidad. Haces esta elección después de ver la tirada, pero antes de que el DM diga si el ataque golpea o falla.",
  },
};
