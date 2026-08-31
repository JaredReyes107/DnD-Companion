import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

const subclass_actions: GameLocalizationCategory = {
  // PHB
  // XGE
  // TCE
};

export const wizard_actions_es: GameLocalizationCategory = {
  ...subclass_actions,

  arcane_recovery: {
    name: "Recuperación Arcana",
    description: `Recuperas una espacios de conjuro en base a la cantidad de cargas de 'Recuperación Arcana' que uses al terminar un descanso corto.`,
  },
  cast_spell_mastery_1st: {
    name: "Conjuro de Maestría: Nivel 1",
    description: `Lanzas tu primer conjuro de maestría nivel 1 a ese nivel sin usar un espacio de conjuro.`,
  },
  cast_spell_mastery_2nd: {
    name: "Conjuro de Maestría: Nivel 2",
    description: `Lanzas tu primer conjuro de maestría nivel 2 a ese nivel sin usar un espacio de conjuro.`,
  },
  cast_signature_spell_1: {
    name: "Conjuro Insignia 1",
    description: `Lanzas tu primer conjuro insignia a su nivel más bajo sin usar un espacio de conjuro.`,
  },
  cast_signature_spell_2: {
    name: "Conjuro Insignia 2",
    description: `Lanzas tu segundo conjuro insignia a su nivel más bajo sin usar un espacio de conjuro.`,
  },
};
