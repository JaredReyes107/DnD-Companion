import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const redemption_actions_es: GameLocalizationCategory = {
  channel_divinity_emissary_of_peace: {
    name: "Emisario de Paz",
    description: `Obtienes un bonificador de +5 a las pruebas de Carisma (Persuasión) durante los próximos 10 minutos.`,
  },
  channel_divinity_rebuke_the_violent: {
    name: "Reprender a los Violentos",
    description: `Inmediatamente después de que un atacante situado a 30 pies o menos de ti inflija daño con un ataque a una criatura distinta a ti, puedes emplear tu reacción para forzar al atacante a realizar una tirada de salvación de Sabiduría. Si falla, recibirá tanto daño radiante como el daño que acaba de infligir. Si la supera, sufre la mitad del daño.`,
  },
};
