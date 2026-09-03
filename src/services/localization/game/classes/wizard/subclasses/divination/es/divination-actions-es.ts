import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const divination_actions_es: GameLocalizationCategory = {
  portent: {
    name: "Presagio",
    description: `Reemplazas una tirada de ataque, tirada de salvación o prueba de habilidad que tú o una criatura fuesen a hacer por uno de tus Presagios. Debes decidir hacer esto antes de que realice la tirada.`,
  },
  expert_divination: {
    name: "Adivinación Experta",
    description: `Cuando lanzas un conjuro de adivinación de nivel 2 o superior usando un espacio de conjuro, recuperas un espacio de conjuro que hayas gastado. El espacio que recuperes debe ser de un nivel inferior al del conjuro que lanzaste y no puede ser superior al nivel 5.`,
  },
  the_third_eye: {
    name: "El Tercer Ojo",
    description: `Te permite ampliar tus sentidos temporalmente. `,
  },
};
