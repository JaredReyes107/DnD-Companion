import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const devotion_actions_es: GameLocalizationCategory = {
  channel_divinity_sacred_weapon: {
    name: "Arma Sagrada",
    description: `Durante 1 minuto, sumarás tu modificador por Carisma a las tiradas de ataque hechas con un arma que sostengas (mínimo de +1). El arma también emite luz brillante en un radio de 20 pies y luz tenue 20 pies más allá. Si el arma no es mágica, pasará a serlo hasta que acabe el efecto. Puedes poner fin a este efecto durante tu turno como parte de cualquier otra acción. El efecto termina si ya no sostienes o llevas contigo el arma o si caes inconsciente.`,
  },
  channel_divinity_turn_the_unholy: {
    name: "Expulsar Muertos Vivientes",
    description: `Cada infernal o muerto viviente que pueda verte u oírte a 30 pies o menos de ti deberá realizar una tirada de salvación de Sabiduría. Si la criatura falla su tirada de salvación, será expulsada durante 1 minuto o hasta recibir daño. Una criatura expulsada deberá dedicar sus turnos a tratar de alejarse de ti todo lo que pueda y no podrá acercarse voluntariamente a ningún espacio que se encuentre a 30 pies o menos de ti. Tampoco podrá llevar a cabo reacciones. Tan solo podrá realizar la acción de correr o intentar escapar de un efecto que le impida moverse. Si no tiene adónde ir, la criatura podrá usar la acción de esquivar.`,
  },
  holy_nimbus: {
    name: "Halo Sagrado",
    description: `Durante 1 minuto, emanas una luz brillante emana de ti en un radio de 30 pies y una luz tenue en otros 30 pies adicionales. Cuando una criatura enemiga empiece su turno en la luz brillante, recibe 10 puntos de daño radiante. Además, durante ese periodo, tienes ventaja en las tiradas de salvación que realices contra los conjuros de infernales o no muertos.`,
  },
};
