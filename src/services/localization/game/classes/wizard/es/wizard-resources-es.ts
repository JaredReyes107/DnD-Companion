import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

const subclass_resources: GameLocalizationCategory = {
  // PHB
  // XGE
  // TCE
};
export const wizard_resources_es: GameLocalizationCategory = {
  ...subclass_resources,

  arcane_recovery: {
    name: "Recuperación Arcana",
    description: `Te permiten recuperar una porción de tus reservas de energía mágica. Se recupera al pasar de un día.`,
  },
  signature_spell_1: {
    name: "Conjuro Insignia 1",
    description: `Te permiten lanzar tu primer conjuro insignia sin usar espacios de conjuro. Se recarga tras un descanso corto.`,
  },
  signature_spell_2: {
    name: "Conjuro Insignia 2",
    description: `Te permiten lanzar tu segundo conjuro insignia sin usar espacios de conjuro. Se recarga tras un descanso corto.`,
  },
};
