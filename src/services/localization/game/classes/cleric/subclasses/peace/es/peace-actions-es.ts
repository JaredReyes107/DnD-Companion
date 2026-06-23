import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const peace_actions_es: GameLocalizationCategory = {
  emboldening_bond: {
    name: "Vínculo Incentivador",
    description: `Elige una cantidad de criaturas voluntarias a 30 pies o menos de ti (puede incluirte a ti) igual a tu bonificador por competencia. Crearás un vínculo mágico entre ellas durante 10 minutos o hasta que vuelvas a usar este rasgo. Mientras cualquier criatura vinculada esté a 30 pies o menos de otra, la criatura podrá tirar 1d4 y sumar el resultado a una tirada de ataque, una prueba de característica o una tirada de salvación que haga. Cada criatura solo puede sumar el d4 una vez por turno.`,
  },
  channel_divinity_balm_of_peace: {
    name: "Bálsamo de la Paz",
    description:
      "Te mueves hasta tu velocidad sin provocar ataques de oportunidad y, cuando te muevas a 5 pies o menos de cualquier otra criatura durante esta acción, podrás hacer que esa criatura recupere una cantidad de puntos de golpe igual a 2d6 + tu modificador por Sabiduría (mínimo de 1 punto de golpe). Una criatura puede recibir esta curación solo una vez en cada ocasión que realices esta acción.",
  },
  protective_bond: {
    name: "Vínculo Protector",
    description:
      "Cuando una criatura afectada por tu rasgo Vínculo lncentivador esté a punto de recibir algún daño, una segunda criatura vinculada que esté a 30 pies o menos de la primera podrá usar su reacción para teletransportarse a un espacio sin ocupar a 5 pies o menos de la primera criatura. La segunda criatura recibirá todo el daño en su lugar.",
  },
};
