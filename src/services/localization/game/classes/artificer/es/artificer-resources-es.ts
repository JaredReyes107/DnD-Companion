import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

const subclass_resources: GameLocalizationCategory = {
  // TCE
};

export const artificer_resources_en: GameLocalizationCategory = {
  ...subclass_resources,

  magical_tinkering: {
    name: "Arreglos Mágicos",
    description: `La cantidad de distintos objetos que puedes afectar mágicamente de manera simultánea.`,
  },
  infused_items: {
    name: "Objetos Imbuidos",
    description: `La cantidad de objetos imbuidos activos actualmente.`,
  },
  flash_of_genius: {
    name: "Destello de Genio",
    description: `Usado para añadir un bonus a una prueba de habilidad o una tirada de salvación que tú u otra criatura realicen. Se recarga tras un descanso largo.`,
  },
  spell_storing_item_limit: {
    name: "Límite de Objetos Guardaconjuros",
    description: `La cantidad de objetos distintos en los que puedes almacenar conjuros de forma simultánea.`,
  },
};
