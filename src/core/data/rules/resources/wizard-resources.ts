import { ResourceTemplate } from "@/core/entities/rules/resource-template";
import { E } from "@/core/entities/rules/expr/expr";

import { ABJURATION_RESOURCES } from "./wizard/abjuration-resources";
import { CONJURATION_RESOURCES } from "./wizard/conjuration-resources";
import { DIVINATION_RESOURCES } from "./wizard/divination-resources";
import { ENCHANTMENT_RESOURCES } from "./wizard/enchantment-resources";
import { EVOCATION_RESOURCES } from "./wizard/evocation-resources";
import { ILLUSION_RESOURCES } from "./wizard/illusion-resources";
import { NECROMANCY_RESOURCES } from "./wizard/necromancy-resources";
import { TRANSMUTATION_RESOURCES } from "./wizard/transmutation-resources";

import { WAR_MAGIC_RESOURCES } from "./wizard/war-magic-resources";

import { BLADESINGING_RESOURCES } from "./wizard/bladesinging-resources";
import { SCRIBES_RESOURCES } from "./wizard/scribes-resources";

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
  ...SCRIBES_RESOURCES,
};

export const WIZARD_RESOURCES: Record<string, ResourceTemplate> = {
  ...SUBCLASS_RESOURCES,

  arcane_recovery: {
    id: "arcane_recovery",
    category: "class_features",
    max: E.div(E.classLevel("wizard"), E.n(2), "ceil"),
    // TODO: Once per DAY
    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "arcane_recovery",
        obtainedVia: { via: "class", classId: "wizard" },
      },
    ],

    recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
    tags: ["spells", "utility"],
  },

  signature_spell_1: {
    id: "signature_spell_1",
    category: "class_features",
    max: E.n(1),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "signature_spell_1",
        obtainedVia: { via: "class", classId: "wizard" },
      },
    ],

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["spellcasting"],
  },
  signature_spell_2: {
    id: "signature_spell_2",
    category: "class_features",
    max: E.n(1),

    origin: { book: "PHB" },
    grantors: [
      {
        system: "feature",
        featureId: "signature_spell_2",
        obtainedVia: { via: "class", classId: "wizard" },
      },
    ],

    recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
    tags: ["spellcasting"],
  },
};
