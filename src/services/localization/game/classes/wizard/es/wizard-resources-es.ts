import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { abjuration_resources_es } from "../subclasses/abjuration/es/abjuration-resources-es";
import { conjuration_resources_es } from "../subclasses/conjuration/es/conjuration-resources-es";
import { divination_resources_es } from "../subclasses/divination/es/divination-resources-es";
import { enchantment_resources_es } from "../subclasses/enchantment/es/enchantment-resources-es";
import { evocation_resources_es } from "../subclasses/evocation/es/evocation-resources-es";
import { illusion_resources_es } from "../subclasses/illusion/es/illusion-resources-es";
import { necromancy_resources_es } from "../subclasses/necromancy/es/necromancy-resources-es";
import { transmutation_resources_es } from "../subclasses/transmutation/es/transmutation-resources-es";

import { war_magic_resources_es } from "../subclasses/war-magic/es/war-magic-resources-es";

import { scribes_resources_es } from "../subclasses/scribes/es/scribes-resources-es";
import { bladesinging_resources_es } from "../subclasses/bladesinging/es/bladesinging-resources-es";

export const subclass_resources: GameLocalizationCategory = {
  // PHB
  ...abjuration_resources_es,
  ...conjuration_resources_es,
  ...divination_resources_es,
  ...enchantment_resources_es,
  ...evocation_resources_es,
  ...illusion_resources_es,
  ...necromancy_resources_es,
  ...transmutation_resources_es,

  // XGE
  ...war_magic_resources_es,

  // TCE
  ...bladesinging_resources_es,
  ...scribes_resources_es,
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
