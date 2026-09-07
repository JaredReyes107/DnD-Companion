import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { abjuration_actions_es } from "../subclasses/abjuration/es/abjuration-actions-es";
import { conjuration_actions_es } from "../subclasses/conjuration/es/conjuration-actions-es";
import { divination_actions_es } from "../subclasses/divination/es/divination-actions-es";
import { enchantment_actions_es } from "../subclasses/enchantment/es/enchantment-actions-es";
import { evocation_actions_es } from "../subclasses/evocation/es/evocation-actions-es";
import { illusion_actions_es } from "../subclasses/illusion/es/illusion-actions-es";
import { necromancy_actions_es } from "../subclasses/necromancy/es/necromancy-actions-es";
import { transmutation_actions_es } from "../subclasses/transmutation/es/transmutation-actions-es";

import { war_magic_actions_es } from "../subclasses/war-magic/es/war-magic-actions-es";

import { scribes_actions_es } from "../subclasses/scribes/es/scribes-actions-es";
import { bladesinging_actions_es } from "../subclasses/bladesinging/es/bladesinging-actions-es";

export const subclass_actions: GameLocalizationCategory = {
  // PHB
  ...abjuration_actions_es,
  ...conjuration_actions_es,
  ...divination_actions_es,
  ...enchantment_actions_es,
  ...evocation_actions_es,
  ...illusion_actions_es,
  ...necromancy_actions_es,
  ...transmutation_actions_es,

  // XGE
  ...war_magic_actions_es,

  // TCE
  ...bladesinging_actions_es,
  ...scribes_actions_es,
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
  replace_spell_mastery: {
    name: "Eemplazar Conjuro de Maestría",
    description: `Dedicas 8 horas de estudio y cambias cualquiera de tus Conjuros de Maestría por otro del mismo nivel que esté en tu libro de conjuros.`,
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
