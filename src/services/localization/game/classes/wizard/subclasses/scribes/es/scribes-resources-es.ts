import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const scribes_resources_es: GameLocalizationCategory = {
  awakened_spellbook_fast_ritual: {
    name: "Ritual Acelerado",
    description: `Te permite lanzar un conjuro de mago como ritual pero usando su tiempo de lanzamiento normal. Se recupera tras un descanso largo.`,
  },
  manifest_mind: {
    name: "Manifestar Mente",
    description: `Te permite manifestar la mente de tu Libro de Conjuros Despertado para extender tus sentidos y lanzamiento de conjuros. Se recarga tras un descanso largo.`,
  },
  manifest_mind_cast_through: {
    name: "Manifestar Mente: Lanzamiento Lejano",
    description: `Usado para lanzar un conjuro usando la posición y sentidos de tu 'Mente Manifestada' en lugar de los tuyos. Se recarga tras un descanso largo o recuperas 1 carga si gastas un espacio de conjuro de cualquier nivel.`,
  },
  master_scrivener: {
    name: "Maestro Escribiente",
    description: `La cantidad de pergaminos de conjuro especiales que creas cada descanso largo.`,
  },
};
