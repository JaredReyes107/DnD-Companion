import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ELDRITCH_INVOCATIONS_RESOURCES: Record<string, ResourceTemplate> =
  {
    // ============================== PHB ==============================
    invocation_bewitching_whispers: {
      id: "invocation_bewitching_whispers",
      sourceId: "invocation_bewitching_whispers",
      category: "class_features",
      scalingType: "fixed:1",
      recharge: "longRest",
      tags: ["spells", "control"],
    },

    invocation_chains_of_carceri: {
      id: "invocation_chains_of_carceri",
      sourceId: "invocation_chains_of_carceri",
      category: "class_features",
      scalingType: "fixed:1", // TODO: 1 per creature, per long rest
      recharge: "longRest",
      tags: ["spells", "control"],
    },

    invocation_dreadful_word: {
      id: "invocation_dreadful_word",
      sourceId: "invocation_dreadful_word",
      category: "class_features",
      scalingType: "fixed:1",
      recharge: "longRest",
      tags: ["spells", "control"],
    },

    invocation_minions_of_chaos: {
      id: "invocation_minions_of_chaos",
      sourceId: "invocation_minions_of_chaos",
      category: "class_features",
      scalingType: "fixed:1",
      recharge: "longRest",
      tags: ["spells", "summoning"],
    },

    invocation_mire_the_mind: {
      id: "invocation_mire_the_mind",
      sourceId: "invocation_mire_the_mind",
      category: "class_features",
      scalingType: "fixed:1",
      recharge: "longRest",
      tags: ["spells", "control"],
    },

    invocation_sculptor_of_flesh: {
      id: "invocation_sculptor_of_flesh",
      sourceId: "invocation_sculptor_of_flesh",
      category: "class_features",
      scalingType: "fixed:1",
      recharge: "longRest",
      tags: ["spells", "control"],
    },

    invocation_sign_of_ill_omen: {
      id: "invocation_sign_of_ill_omen",
      sourceId: "invocation_sign_of_ill_omen",
      category: "class_features",
      scalingType: "fixed:1",
      recharge: "longRest",
      tags: ["spells", "debuff"],
    },

    invocation_thief_of_five_fates: {
      id: "invocation_thief_of_five_fates",
      sourceId: "invocation_thief_of_five_fates",
      category: "class_features",
      scalingType: "fixed:1",
      recharge: "longRest",
      tags: ["spells", "debuff"],
    },

    // ============================== XGE ==============================

    invocation_cloak_of_flies: {
      id: "invocation_cloak_of_flies",
      sourceId: "invocation_cloak_of_flies",
      category: "class_features",
      scalingType: "fixed:1",
      recharge: "shortRest",
      tags: ["utility", "combat"],
    },

    invocation_eldritch_smite: {
      id: "invocation_eldritch_smite",
      sourceId: "invocation_eldritch_smite",
      category: "class_features",
      scalingType: "fixed:1",
      recharge: "perTurn",
      tags: ["combat", "damage"],
    },

    invocation_ghostly_gaze: {
      id: "invocation_ghostly_gaze",
      sourceId: "invocation_ghostly_gaze",
      category: "class_features",
      scalingType: "fixed:1",
      recharge: "shortRest",
      tags: ["senses", "utility"],
    },

    invocation_gift_of_the_depths_water_breathing: {
      id: "invocation_gift_of_the_depths_water_breathing",
      sourceId: "invocation_gift_of_the_depths",
      category: "class_features",
      scalingType: "fixed:1",
      recharge: "longRest",
      tags: ["spells", "movement"],
    },

    invocation_grasp_of_hadar: {
      id: "invocation_grasp_of_hadar",
      sourceId: "invocation_grasp_of_hadar",
      category: "class_features",
      scalingType: "fixed:1",
      recharge: "perRound",
      tags: ["combat", "movement"],
    },

    invocation_lance_of_lethargy: {
      id: "invocation_lance_of_lethargy",
      sourceId: "invocation_lance_of_lethargy",
      category: "class_features",
      scalingType: "fixed:1",
      recharge: "perRound",
      tags: ["combat", "movement"],
    },

    invocation_tomb_of_levistus: {
      id: "invocation_tomb_of_levistus",
      sourceId: "invocation_tomb_of_levistus",
      category: "class_features",
      scalingType: "fixed:1",
      recharge: "shortRest",
      tags: ["defense", "reaction"],
    },

    invocation_trickster_escape: {
      id: "invocation_trickster_escape",
      sourceId: "invocation_trickster_escape",
      category: "class_features",
      scalingType: "fixed:1",
      recharge: "longRest",
      tags: ["spells", "defense"],
    },

    // ============================== TCE ==============================

    invocation_bond_of_the_talisman: {
      id: "invocation_bond_of_the_talisman",
      sourceId: "invocation_bond_of_the_talisman",
      category: "class_features",
      scalingType: "PB",
      recharge: "longRest",
      tags: ["utility"],
    },

    invocation_far_scribe_inscribed_names: {
      id: "invocation_far_scribe_inscribed_names",
      sourceId: "invocation_far_scribe",
      category: "class_features",
      scalingType: "PB",
      recharge: "longRest",
      tags: ["communication", "utility"],
    },

    invocation_gift_of_the_protectors_inscribed_names: {
      id: "invocation_gift_of_the_protectors_inscribed_names",
      sourceId: "invocation_gift_of_the_protectors",
      category: "class_features",
      scalingType: "PB",
      recharge: "longRest",
      tags: ["utility"],
    },
    invocation_gift_of_the_protectors_trigger: {
      id: "invocation_gift_of_the_protectors_trigger",
      sourceId: "invocation_gift_of_the_protectors",
      category: "class_features",
      scalingType: "fixed:1",
      recharge: "longRest",
      tags: ["defense"],
    },

    invocation_protection_of_the_talisman: {
      id: "invocation_protection_of_the_talisman",
      sourceId: "invocation_protection_of_the_talisman",
      category: "class_features",
      scalingType: "PB",
      recharge: "longRest",
      tags: ["saving-throw", "bonus"],
    },

    invocation_undying_servitude: {
      id: "invocation_undying_servitude",
      sourceId: "invocation_undying_servitude",
      category: "class_features",
      scalingType: "fixed:1",
      recharge: "longRest",
      tags: ["spells", "summoning"],
    },
  };
