import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const vengeance_actions_es: GameLocalizationCategory = {
  channel_divinity_abjure_enemy: {
    name: "Abjurar Enemigo",
    description: `Elige a una criatura que puedas ver a 60 pies o menos de ti. Dicha criatura, salvo que sea inmune a ser asustada, deberá hacer una tirada de salvación de Sabiduría. Los muertos vivientes y los infernales tienen desventaja en esta tirada de salvación.
        Si el objetivo falla su tirada de salvación, estará asustado durante 1 minuto o hasta recibir daño. Mientras esté asustada, la velocidad de la criatura será 0 y no podrá beneficiarse de ningún bonificador a su velocidad. Si el objetivo tiene éxito en la tirada de salvación, su velocidad se verá reducida a la mitad durante 1 minuto o hasta recibir daño.`,
  },
  channel_divinity_vow_of_enmity: {
    name: "Voto de Enemistad",
    description: `Realizas un voto de enemistad contra una criatura que esté a 10 pies o menos de ti y que puedas ver. Ganas ventaja en las tiradas de ataque contra esa criatura durante 1 minuto o hasta que sus puntos de golpe lleguen a 0 o caiga inconsciente.`,
  },
  soul_of_vengeance: {
    name: "Alma de Venganza",
    description: `Atacas con un arma cuerpo a cuerpo a una criatura bajo los efectos de tu Voto de Enemistad haya realizado un ataque`,
  },
  avenging_angel: {
    name: "Ángel Vengador",
    description: `Te transformas y consigues los siguientes beneficios:
    - De tu espalda surgen alas y te otorgan una velocidad de vuelo de 60 pies.
    - Emanas un aura amenazante en un radio de 30 pies. La primera vez que una criatura enemiga entra en el aura, o comienza su turno ahí durante la batalla, debe superar una tirada de salvación de Sabiduría o estará asustada durante 1 minuto o hasta que reciba algún daño. Las tiradas de ataque contra la criatura asustada tienen ventaja.`,
  },
};
