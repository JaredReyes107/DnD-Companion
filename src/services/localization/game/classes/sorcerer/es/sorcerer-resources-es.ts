import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { draconic_resources_es } from "../subclasses/draconic/es/draconic-resources-es";
import { wild_magic_sorcerer_resources_es } from "../subclasses/wild/es/wild-magic-resources-es";

import { divine_soul_resources_es } from "../subclasses/divine-soul/es/divine-soul-resources-es";
import { shadow_magic_resources_es } from "../subclasses/shadow/es/shadow-magic-resources-es";
import { storm_resources_es } from "../subclasses/storm/es/storm-resources-es";

import { aberrant_mind_resources_es } from "../subclasses/aberrant-mind/es/aberrant-mind-resources-es";
import { clockwork_soul_resources_es } from "../subclasses/clockwork-soul/es/clockwork-soul-resources-es";

const subclass_resources: GameLocalizationCategory = {
  // PHB
  ...draconic_resources_es,
  ...wild_magic_sorcerer_resources_es,

  // XGE
  ...divine_soul_resources_es,
  ...shadow_magic_resources_es,
  ...storm_resources_es,

  // TCE
  ...aberrant_mind_resources_es,
  ...clockwork_soul_resources_es,
};

export const sorcerer_resources_es: GameLocalizationCategory = {
  ...subclass_resources,

  sorcery_points: {
    name: "Puntos de Hechicería",
    description: `Usado para lanzar conjuros o alterar sus propiedades. Se recargan tras un descanso largo.`,
  },
};
