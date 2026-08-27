import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const draconic_features_es: GameLocalizationCategory = {
  dragon_ancestor: {
    name: "Ancestro Dragón",
    description: `Eliges un tipo de dragón como tu ancestro. Los rasgos que ganes después usarán el tipo de daño asociado con cada dragón.
      Puedes hablar, leer y escribir dragón. Además, cuando hagas una prueba de Carisma al interactuar con dragones, tu bonificador por competencia se duplica si se aplica a la prueba.`,
  },
  draconic_resilience: {
    name: "Fortaleza de Dragón",
    description: `Conforme la magia fluye por tu cuerpo, los rasgos físicos que heredaste de tus ancestros dragones emergen. En el nivel 1, tus puntos de golpe máximo aumentan en 1 y vuelven a aumentar en 1 cada vez que subas de nivel en esta clase.
      Asimismo, algunas partes de tu piel están cubiertas por un brillo similar al de las escamas de un dragón. Cuando no lleves armadura, tu CA es igual a 13 + tu modificador por Destreza.`,
  },
  elemental_affinity: {
    name: "Afinidad Elemental",
    description: `Cuando lanzas un conjuro que inflige el tipo de daño asociado a tu ancestro dragón, puedes sumar tu modificador por Carisma a una de las tiradas de daño de ese conjuro. 
      Además, puedes gastar 1 punto de hechicería para conseguir resistencia a ese tipo de daño durante 1 hora.`,
  },
  dragon_wings: {
    name: "Alas de Dragón",
    description: `Consigues la capacidad de hacer que de tu espalda broten un par de alas, adquiriendo una velocidad de vuelo igual a tu velocidad actual. Puedes crear estas alas como acción adicional durante tu turno. Duran hasta que las disipas como acción adicional durante tu turno.
      No puedes sacar las alas mientras lleves armadura, a menos que la armadura esté creada para acomodarlas, y la ropa que no esté adaptada podría destruirse cuando se manifiesten.`,
  },
  draconic_presence: {
    name: "Presencia de Dragón",
    description: `Puedes canalizar la temerosa presencia de tu ancestro dragón para hacer que todos los que te rodeen queden hechizados o asustados. Como acción, puedes gastar 5 puntos de hechicería para recurrir a este poder y crear un aura de temor o miedo (a tu elección) a una distancia de 60 pies. Durante 1 minuto o hasta que pierdas la concentración (como si estuvieras lanzando un conjuro), cada criatura hostil que empiece su turno en esta aura debe superar una tirada de salvación de Sabiduría para no quedar hechizado (si eliges temor) o asustado (si eliges miedo) hasta que el aura se disipe. Si tiene éxito, se vuelve inmune a tu aura durante 24 horas.`,
  },
};
