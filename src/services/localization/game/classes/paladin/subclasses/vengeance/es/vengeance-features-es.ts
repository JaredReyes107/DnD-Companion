import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const vengeance_features_es: GameLocalizationCategory = {
  tenets_of_vengeance: {
    name: "Principios de la Venganza",
    description: `Las creencias del Juramento de la Venganza pueden variar de un paladín a otro, pero todo su credo gira en torno a castigar a los malhechores empleando cualquier medio necesario. Los paladines que se entregan a esta creencia sacrifican voluntariamente su propia rectitud con tal de impartir la justicia necesaria a aquellos que han hecho el mal, por lo que estos paladines normalmente son de alineamiento neutral o legal neutral. Los principios centrales de este credo son brutalmente simples.
      - Combatir el Mal Mayor. Enfrentado a una elección de luchar con los enemigos de mi juramento o combatir un mal menor, escojo el mal mayor.
      - No hay piedad para los malvados. Los enemigos normales puede que merezcan mi piedad, pero los enemigos de mi juramento no.
      - El fin justifica los medios. No tengo reparos a la hora de exterminar a mis enemigos.
      - Restitución. Si mis enemigos traen la ruina al mundo es debido a que yo no pude pararlos. Debo ayudar a aquellos que sufren por sus fechorías.`,
  },
  oath_spells: {
    name: "Conjuros de Juramento",
    description: `Consigues los conjuros de juramento en los niveles de paladín indicados. Una vez accedes a un conjuro de juramento, siempre lo tienes preparado. Los conjuros de juramento no cuentan conjuros que puedes preparar cada día. Si consigues un conjuro de juramento que no aparece en la lista de conjuros de paladín, para ti ese conjuro cuenta como un conjuro de paladín.`,
  },
  channel_divinity: {
    name: "Canalizar Divinidad",
    description: `Obtienes las siguientes opciones de Canalizar Divinidad:
    - Puedes utilizar Canalizar Divinidad e invertir tu acción para mostrar tu símbolo sagrado y rezar una oración de denuncia. Como acción, elige a una criatura que puedas ver a 60 pies o menos de ti. Dicha criatura, salvo que sea inmune a ser asustada, deberá hacer una tirada de salvación de Sabiduría. Los muertos vivientes y los infernales tienen desventaja en esta tirada de salvación. Si el objetivo falla su tirada de salvación, estará asustado durante 1 minuto o hasta recibir daño. Mientras esté asustada, la velocidad de la criatura será 0 y no podrá beneficiarse de ningún bonificador a su velocidad. Si el objetivo tiene éxito en la tirada de salvación, su velocidad se verá reducida a la mitad durante 1 minuto o hasta recibir daño.
    - Como acción adicional, puedes realizar un voto de enemistad contra una criatura que esté a 10 pies o menos de ti y que puedas ver, usando tu Canalizar Divinidad. Ganas ventaja en las tiradas de ataque contra esa criatura durante 1 minuto o hasta que sus puntos de golpe lleguen a 0 o caiga inconsciente.`,
  },
  relentless_avenger: {
    name: "Vengador Implacable",
    description: `Tu concentración sobrenatural te ayuda a evitar la retirada de tu enemigo. Cuando golpeas a una criatura con un ataque de oportunidad, puedes moverte hasta la mitad de tu velocidad inmediatamente después del ataque como parte de esa misma reacción. Este movimiento no provoca ataques de oportunidad.`,
  },
  soul_of_vengeance: {
    name: "Alma de Venganza",
    description: `La autoridad con la que recitas tu Voto de Enemistad te otorga un poder aún mayor sobre tu enemigo. Cuando una criatura bajo los efectos de tu Voto de Enemistad realiza un ataque, puedes usar tu reacción para realizar un ataque con un arma cuerpo a cuerpo contra esa criatura si está dentro de tu rango.`,
  },
  avenging_angel: {
    name: "Ángel Vengador",
    description: `Puedes asumir la forma de un vengador angelical. Usando tu acción, comienzas a transformarte.
      Durante 1 hora, ganas los siguientes beneficios:
      - De tu espalda surgen alas y te otorgan una velocidad de vuelo de 60 pies. 
      - Emanas un aura amenazante en un radio de 30 pies. La primera vez que una criatura enemiga entra en el aura, o comienza su turno ahí durante la batalla, debe superar una tirada de salvación de Sabiduría o estará asustada durante 1 minuto o hasta que reciba algún daño. Las tiradas de ataque contra la criatura asustada tienen ventaja. 
      Una vez hayas usado esta característica, no podrás volver a usarla hasta que finalices un descanso prolongado.`,
  },
};
