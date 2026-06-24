import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const land_features_es: GameLocalizationCategory = {
  bonus_cantrip: {
    name: "Truco Adicional",
    description: "Aprendes un truco de druida adicional de tu elección.",
  },
  circle_spells: {
    name: "Conjuros del Círculo",
    description: "Tu conexión mística con la tierra te concede la capacidad de lanzar ciertos conjuros. En los niveles 3, 5, 7 y 9 consigues acceder a los conjuros del círculo conectados con la tierra en la que te convertiste en druida. Elige qué tipo de tierra es (ártico, costa, desierto, bosque, pradera, montaña o pantano) y consulta su lista de conjuros correspondiente. Una vez accedes a un conjuro del círculo, siempre lo tienes preparado y no se tiene en cuenta para el número de conjuros que puedes preparar cada día. Si accedes a un conjuro que no aparece en la lista de conjuros de druida, para ti cuenta como un conjuro de druida.",
  },
  natural_recovery: {
    name: "Recuperación Natural",
    description: "Puedes recuperar parte de tu energía mágica sentándote a meditar y comunicarte con la naturaleza. Durante un descanso breve, puedes recuperar los espacios de conjuro que elijas mientras la suma de sus niveles sea igual o menor que la mitad de tu nivel de druida (redondeado hacia abajo) y mientras sean de nivel inferior a 6. No puedes volver a usar ese rasgo hasta que no termines un descanso prolongado. Por ejemplo, cuando eres un druida de nivel 4, puedes recuperar hasta dos niveles de espacio de conjuro: un espacio de nivel 2 o dos espacios de nivel 1.",
  },
  lands_stride: {
    name: "Zancada de la Tierra",
    description: "Moverte por terreno difícil no mágico no te cuesta ningún movimiento adicional. También puedes pasar por plantas no mágicas sin que estas te ralenticen y sin recibir daño de ellas si tienen pinchos, espinas o un peligro similar. Además, tienes ventaja en las tiradas de salvación contra plantas que se han creado o manipulado con magia para impedir el movimiento, como las que crea el conjuro Enmarañar.",
  },
  natures_ward: {
    name: "Custodia de la Naturaleza",
    description: "Ni los elementales ni las fatas pueden hechizarte o asustarte, y eres inmune al veneno y a la enfermedad.",
  },
  natures_sanctuary: {
    name: "Santuario de la Naturaleza",
    description: "Las criaturas del mundo natural sienten tu conexión con la naturaleza y dudan a la hora de atacarte. Cuando una bestia o una planta te ataca, dicha criatura debe hacer una tirada de salvación de Sabiduría enfrentada a la CD de salvación de tu conjuro. Si falla, la criatura debe elegir un objetivo diferente; si no, el ataque falla automáticamente. Si tiene éxito, la criatura se vuelve inmune a tu efecto durante 24 horas. La criatura es consciente de este efecto antes de atacarte.",
  },
};
