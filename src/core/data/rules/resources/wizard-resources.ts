import { ResourceTemplate } from "@/core/entities/rules/resource-template";

import { ABJURATION_RESOURCES } from "./wizard/abjuration-resources";
import { CONJURATION_RESOURCES } from "./wizard/conjuration-resources";
import { DIVINATION_RESOURCES } from "./wizard/divination-resources";
import { ENCHANTMENT_RESOURCES } from "./wizard/enchantment-resources";
import { EVOCATION_RESOURCES } from "./wizard/evocation-resources";
import { ILLUSION_RESOURCES } from "./wizard/illusion-resources";
import { NECROMANCY_RESOURCES } from "./wizard/necromancy-resources";
import { TRANSMUTATION_RESOURCES } from "./wizard/transmutation-resources";

import { WAR_MAGIC_RESOURCES } from "./wizard/war-resources";

import { BLADESINGING_RESOURCES } from "./wizard/bladesinging-resources";
import { ORDER_OF_SCRIBES_RESOURCES } from "./wizard/scribes-resources";

const SUBCLASS_RESOURCES: Record<string, ResourceTemplate> = {
  //PHB
  ...ABJURATION_RESOURCES,
  ...CONJURATION_RESOURCES,
  ...DIVINATION_RESOURCES,
  ...ENCHANTMENT_RESOURCES,
  ...EVOCATION_RESOURCES,
  ...ILLUSION_RESOURCES,
  ...NECROMANCY_RESOURCES,
  ...TRANSMUTATION_RESOURCES,

  //XGE
  ...WAR_MAGIC_RESOURCES,

  //TCE
  ...BLADESINGING_RESOURCES,
  ...ORDER_OF_SCRIBES_RESOURCES,
};

export const WIZARD_RESOURCES: Record<string, ResourceTemplate> = {
  ...SUBCLASS_RESOURCES,

  arcane_recovery: {
    id: "arcane_recovery",
    sourceId: "wizard",
    category: "class_features",
    scalingType: "class-level:/2",
    recharge: "longRest", // TODO: Once per DAY
    tags: ["spells", "utility"],
  },

  signature_spell_1: {
    id: "signature_spell_1",
    sourceId: "wizard",
    category: "class_features",
    scalingType: "fixed:1",
    recharge: "shortRest",
    tags: ["spellcasting"],
  },
  signature_spell_2: {
    id: "signature_spell_2",
    sourceId: "wizard",
    category: "class_features",
    scalingType: "fixed:1",
    recharge: "shortRest",
    tags: ["spellcasting"],
  },
};
