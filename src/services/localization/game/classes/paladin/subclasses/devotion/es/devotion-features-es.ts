import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const devotion_features_es: GameLocalizationCategory = {
  tenets_of_devotion: {
    name: "Principios de la Entrega",
    description: `Aunque las palabras y escrituras exactas del Juramento de Entrega varían, los paladines de este juramento comparten los siguientes principios:
      Honestidad. No mientas ni engañes. Que tus palabras sean siempre promesas.
      Valor. Nunca temas actuar, aunque los sabios son cautelosos.
      Compasión. Ayuda a los demás, protege a los débiles y castiga a los que amenazan a otros. Muestra compasión a tus enemigos, pero con sabiduría.
      Honor. Trata a los demás con justicia y deja que tus actos honorables sean un ejemplo para ellos. Haz todo el bien que esté en tu mano y causa el menor daño posible.
      Deber. Sé responsable de tus actos y sus consecuencias, protege a aquellos a tu cargo y obedece a quienes ejercen una autoridad justa sobre ti.`,
  },
  oath_spells: {
    name: "Conjuros de Juramento",
    description: `Consigues los conjuros de juramento en los niveles de paladín indicados.
      Una vez accedes a un conjuro de juramento, siempre lo tienes preparado. Los conjuros de juramento no cuentan conjuros que puedes preparar cada día.
      Si consigues un conjuro de juramento que no aparece en la lista de conjuros de paladín, para ti ese conjuro cuenta como un conjuro de paladín.`,
  },
  channel_divinity_devotion: {
    name: "Canalizar Divinidad",
    description: `Consigues las siguientes opciones de Canalizar Divinidad:
      - Como acción, puedes usar Canalizar Divinidad para imbuir de energía positiva un arma que sostengas. Durante 1 minuto, sumarás tu modificador por Carisma a las tiradas de ataque hechas con esa arma (mínimo de +1). El arma también emite luz brillante en un radio de 20 pies y luz tenue 20 pies más allá. Si el arma no es mágica, pasará a serlo hasta que acabe el efecto. Puedes poner fin a este efecto durante tu turno como parte de cualquier otra acción. El efecto termina si ya no sostienes o llevas contigo el arma o si caes inconsciente.
      - Turn Undead: Como acción, puedes usar Canalizar Divinidad para mostrar tu símbolo sagrado y rezar una plegaria que condene a los infernales y a los muertos vivientes. Cada infernal o muerto viviente que pueda verte u oírte a 30 pies o menos de ti deberá realizar una tirada de salvación de Sabiduría. Si la criatura falla su tirada de salvación, será expulsada durante 1 minuto o hasta recibir daño. Una criatura expulsada deberá dedicar sus turnos a tratar de alejarse de ti todo lo que pueda y no podrá acercarse voluntariamente a ningún espacio que se encuentre a 30 pies o menos de ti. Tampoco podrá llevar a cabo reacciones. Tan solo podrá realizar la acción de correr o intentar escapar de un efecto que le impida moverse. Si no tiene adónde ir, la criatura podrá usar la acción de esquivar.`,
  },
  aura_of_devotion: {
    name: "Aura de Entrega",
    description: `Las criaturas amistosas que se encuentren a 10 pies de ti no pueden quedar hechizados mientras estés consciente. A nivel 18 el alcance del aura aumenta a 30 pies`,
  },
  purity_of_spirit: {
    name: "Pureza de Espíritu",
    description: `Siempre te encuentras bajo los efectos del conjuro Protección contra el mal y el bien.`,
  },
  holy_nimbus: {
    name: "Halo Sagrado",
    description: `Como acción, puedes emitir un aura de luz solar. Durante 1 minuto, una luz brillante emana de ti en un radio de 30 pies y una luz tenue en otros 30 pies adicionales. Cuando una criatura enemiga empiece su turno en la luz brillante, recibe 10 puntos de daño radiante. Además, durante ese periodo, tienes ventaja en las tiradas de salvación que realices contra los conjuros de infernales o no muertos. Una vez usas este rasgo, no puedes volver a usarlo hasta que acabes un descanso prolongado.`,
  },
};
