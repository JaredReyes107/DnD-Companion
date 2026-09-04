import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { alchemist_resources_es } from "../subclasses/alchemist/es/alchemist-resources-es";
import { armorer_resources_es } from "../subclasses/armorer/es/armorer-resources-es";
import { artillerist_resources_es } from "../subclasses/artillerist/es/artillerist-resources-es";
import { battle_smith_resources_es } from "../subclasses/battle-smith/es/battle-smith-resources-es";

const subclass_resources: GameLocalizationCategory = {
  // TCE
  ...alchemist_resources_es,
  ...armorer_resources_es,
  ...artillerist_resources_es,
  ...battle_smith_resources_es,
};

export const artificer_resources_es: GameLocalizationCategory = {
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
