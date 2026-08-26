import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const draconic_actions_es: GameLocalizationCategory = {
  elemental_affinity_damage: {
    name: "Afinidad Elemental: Daño",
    description: `Cuando lanzas un conjuro que inflige el tipo de daño asociado a tu ancestro dragón, puedes sumar tu modificador por Carisma a una de las tiradas de daño de ese conjuro.`,
  },
  elemental_affinity_resistance: {
    name: "Afinidad Elemental: Resistencia",
    description: `Cuando lanzas un conjuro que inflige el tipo de daño asociado a tu ancestro dragón, puedes gastar 1 punto de hechicería para conseguir resistencia a ese tipo de daño durante 1 hora.`,
  },
  dragon_wings_manifest: {
    name: "Alas de Dragón: Manifestar",
    description: `Haces que broten un par de alas de tu espalda, adquiriendo una velocidad de vuelo igual a tu velocidad actual. Duran hasta que las disipas como acción adicional.
        No puedes sacar las alas mientras lleves armadura, a menos que la armadura esté creada para acomodarlas, y la ropa que no esté adaptada podría destruirse cuando se manifiesten.`,
  },
  dragon_wings_dismiss: {
    name: "Alas de Dragón: Disipar",
    description: `Disipas tus Alas de Dragón.`,
  },
  draconic_presence: {
    name: "Presencia Dracónica",
    description: `Gastas 5 puntos de hechicería para recurrir a este poder y crear un aura de temor o miedo (a tu elección) a una distancia de 60 pies. Durante 1 minuto o hasta que pierdas la concentración (como si estuvieras lanzando un conjuro), cada criatura hostil que empiece su turno en esta aura debe superar una tirada de salvación de Sabiduría para no quedar hechizado (si eliges temor) o asustado (si eliges miedo) hasta que el aura se disipe. Si tiene éxito, se vuelve inmune a tu aura durante 24 horas.`,
  },
};
