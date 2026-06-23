import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const peace_features_es: GameLocalizationCategory = {
  peace_domain_spells: {
    name: "Conjuros de Dominio",
    description: `Los conjuros de dominio siempre se consideran preparados y no se contarán dentro del número de conjuros que puedes preparar cada día.
      Si tienes un conjuro de dominio que no aparece en la lista de conjuros de clérigo, para ti ese conjuro es de clérigo.`,
  },
  emboldening_bond: {
    name: "Vínculo Incentivador",
    description: `Puedes forjar un vínculo fortalecedor entre personas entre las que reine la paz. Como acción, eliges una cantidad de criaturas voluntarias a 30 pies o menos de ti (puede incluirte a ti) igual a tu bonificador por competencia. Crearás un vínculo mágico entre ellas durante 10 minutos o hasta que vuelvas a usar este rasgo. Mientras cualquier criatura vinculada esté a 30 pies o menos de otra, la criatura podrá tirar 1d4 y sumar el resultado a una tirada de ataque, una prueba de característica o una tirada de salvación que haga. Cada criatura solo puede sumar el d4 una vez por turno.
      Puedes usar este rasgo una cantidad de veces igual a tu bonificador por competencia y recuperas todos los usos tras finalizar un descanso largo.`,
  },
  implement_of_peace: {
    name: "Instrumento de Paz",
    description: "Adquieres competencia en la habilidad Perspicacia, Interpretación o Persuasión (a tu elección).",
  },
  channel_divinity_balm_of_peace: {
    name: "Canalizar Divinidad: Bálsamo de la Paz",
    description: "Puedes usar tu rasgo Canalizar Divinidad para que tu mera presencia sea un bálsamo calmante. Como acción, puedes moverte hasta tu velocidad sin provocar ataques de oportunidad y, cuando te muevas a 5 pies o menos de cualquier otra criatura durante esta acción, podrás hacer que esa criatura recupere una cantidad de puntos de golpe igual a 2d6 + tu modificador por Sabiduría (mínimo de 1 punto de golpe). Una criatura puede recibir esta curación solo una vez en cada ocasión que realices esta acción.",
  },
  protective_bond: {
    name: "Vínculo Protector",
    description: "El vínculo que forjas entre distintas personas ayuda a que se protejan unas a otras. Cuando una criatura afectada por tu rasgo Vínculo lncentivador esté a punto de recibir algún daño, una segunda criatura vinculada que esté a 30 pies o menos de la primera podrá usar su reacción para teletransportarse a un espacio sin ocupar a 5 pies o menos de la primera criatura. La segunda criatura recibirá todo el daño en su lugar.",
  },
  potent_spellcasting: {
    name: "Lanzamiento de Conjuros Potente",
    description: "Añades tu modificador por Sabiduría al daño que causas con cualquier truco de clérigo.",
  },
  expansive_bond: {
    name: "Vínculo Expansivo",
    description: "Los beneficios de tus rasgos Vínculo Incentivador y Vínculo Protector ahora funcionan cuando las criaturas se encuentran a 60 pies o menos unas de otras. Además, cuando una criatura utilice Vínculo Protector para recibir el daño de otra, tendrá resistencia a ese daño.",
  },
};
