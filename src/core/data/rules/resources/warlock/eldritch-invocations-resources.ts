import { ResourceTemplate } from "@/core/entities/rules/resource-template";

export const ELDRITCH_INVOCATIONS_RESOURCES: Record<string, ResourceTemplate> =
  {
    // ============================== PHB ==============================
    invocation_bewitching_whispers: {
      id: "invocation_bewitching_whispers",
      category: "class_features",
      origin: { book: "PHB" },
      grantors: [
        {
          system: "feature",
          featureId: "invocation_bewitching_whispers",
          obtainedVia: {
            via: "choice",
            poolId: "eldritch_invocations",
            grantedBy: { via: "class", classId: "warlock" },
          },
        },
      ],
      max: { kind: "value", amount: 1 },
      min: { kind: "value", amount: 0 },
      recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
      tags: ["spells", "control"],
    },

    // TODO: 1 per creature, per long rest
    invocation_chains_of_carceri: {
      id: "invocation_chains_of_carceri",
      category: "class_features",
      origin: { book: "PHB" },
      grantors: [
        {
          system: "feature",
          featureId: "invocation_chains_of_carceri",
          obtainedVia: {
            via: "choice",
            poolId: "eldritch_invocations",
            grantedBy: { via: "class", classId: "warlock" },
          },
        },
      ],
      max: { kind: "value", amount: 1 },
      min: { kind: "value", amount: 0 },
      recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
      tags: ["spells", "control"],
    },

    invocation_dreadful_word: {
      id: "invocation_dreadful_word",
      category: "class_features",
      origin: { book: "PHB" },
      grantors: [
        {
          system: "feature",
          featureId: "invocation_dreadful_word",
          obtainedVia: {
            via: "choice",
            poolId: "eldritch_invocations",
            grantedBy: { via: "class", classId: "warlock" },
          },
        },
      ],
      max: { kind: "value", amount: 1 },
      min: { kind: "value", amount: 0 },
      recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
      tags: ["spells", "control"],
    },

    invocation_minions_of_chaos: {
      id: "invocation_minions_of_chaos",
      category: "class_features",
      origin: { book: "PHB" },
      grantors: [
        {
          system: "feature",
          featureId: "invocation_minions_of_chaos",
          obtainedVia: {
            via: "choice",
            poolId: "eldritch_invocations",
            grantedBy: { via: "class", classId: "warlock" },
          },
        },
      ],
      max: { kind: "value", amount: 1 },
      min: { kind: "value", amount: 0 },
      recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
      tags: ["spells", "summoning"],
    },

    invocation_mire_the_mind: {
      id: "invocation_mire_the_mind",
      category: "class_features",
      origin: { book: "PHB" },
      grantors: [
        {
          system: "feature",
          featureId: "invocation_mire_the_mind",
          obtainedVia: {
            via: "choice",
            poolId: "eldritch_invocations",
            grantedBy: { via: "class", classId: "warlock" },
          },
        },
      ],
      max: { kind: "value", amount: 1 },
      min: { kind: "value", amount: 0 },
      recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
      tags: ["spells", "control"],
    },

    invocation_sculptor_of_flesh: {
      id: "invocation_sculptor_of_flesh",
      category: "class_features",
      origin: { book: "PHB" },
      grantors: [
        {
          system: "feature",
          featureId: "invocation_sculptor_of_flesh",
          obtainedVia: {
            via: "choice",
            poolId: "eldritch_invocations",
            grantedBy: { via: "class", classId: "warlock" },
          },
        },
      ],
      max: { kind: "value", amount: 1 },
      min: { kind: "value", amount: 0 },
      recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
      tags: ["spells", "control"],
    },

    invocation_sign_of_ill_omen: {
      id: "invocation_sign_of_ill_omen",
      category: "class_features",
      origin: { book: "PHB" },
      grantors: [
        {
          system: "feature",
          featureId: "invocation_sign_of_ill_omen",
          obtainedVia: {
            via: "choice",
            poolId: "eldritch_invocations",
            grantedBy: { via: "class", classId: "warlock" },
          },
        },
      ],
      max: { kind: "value", amount: 1 },
      min: { kind: "value", amount: 0 },
      recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
      tags: ["spells", "debuff"],
    },

    invocation_thief_of_five_fates: {
      id: "invocation_thief_of_five_fates",
      category: "class_features",
      origin: { book: "PHB" },
      grantors: [
        {
          system: "feature",
          featureId: "invocation_thief_of_five_fates",
          obtainedVia: {
            via: "choice",
            poolId: "eldritch_invocations",
            grantedBy: { via: "class", classId: "warlock" },
          },
        },
      ],
      max: { kind: "value", amount: 1 },
      min: { kind: "value", amount: 0 },
      recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
      tags: ["spells", "debuff"],
    },

    // ============================== XGE ==============================
    invocation_cloak_of_flies: {
      id: "invocation_cloak_of_flies",
      category: "class_features",
      origin: { book: "XGE" },
      grantors: [
        {
          system: "feature",
          featureId: "invocation_cloak_of_flies",
          obtainedVia: {
            via: "choice",
            poolId: "eldritch_invocations",
            grantedBy: { via: "class", classId: "warlock" },
          },
        },
      ],
      max: { kind: "value", amount: 1 },
      min: { kind: "value", amount: 0 },
      recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
      tags: ["utility", "combat"],
    },

    invocation_eldritch_smite: {
      id: "invocation_eldritch_smite",
      category: "class_features",
      origin: { book: "XGE" },
      grantors: [
        {
          system: "feature",
          featureId: "invocation_eldritch_smite",
          obtainedVia: {
            via: "choice",
            poolId: "eldritch_invocations",
            grantedBy: { via: "class", classId: "warlock" },
          },
        },
      ],
      max: { kind: "value", amount: 1 },
      min: { kind: "value", amount: 0 },
      recharge: [{ trigger: { type: "turnStart" }, amount: "full" }],
      tags: ["combat", "damage"],
    },

    invocation_ghostly_gaze: {
      id: "invocation_ghostly_gaze",
      category: "class_features",
      origin: { book: "XGE" },
      grantors: [
        {
          system: "feature",
          featureId: "invocation_ghostly_gaze",
          obtainedVia: {
            via: "choice",
            poolId: "eldritch_invocations",
            grantedBy: { via: "class", classId: "warlock" },
          },
        },
      ],
      max: { kind: "value", amount: 1 },
      min: { kind: "value", amount: 0 },
      recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
      tags: ["senses", "utility"],
    },

    invocation_gift_of_the_depths_water_breathing: {
      id: "invocation_gift_of_the_depths_water_breathing",
      category: "class_features",
      origin: { book: "XGE" },
      grantors: [
        {
          system: "feature",
          featureId: "invocation_gift_of_the_depths_water_breathing",
          obtainedVia: {
            via: "choice",
            poolId: "eldritch_invocations",
            grantedBy: { via: "class", classId: "warlock" },
          },
        },
      ],
      max: { kind: "value", amount: 1 },
      min: { kind: "value", amount: 0 },
      recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
      tags: ["spells", "movement"],
    },

    invocation_grasp_of_hadar: {
      id: "invocation_grasp_of_hadar",
      category: "class_features",
      origin: { book: "XGE" },
      grantors: [
        {
          system: "feature",
          featureId: "invocation_grasp_of_hadar",
          obtainedVia: {
            via: "choice",
            poolId: "eldritch_invocations",
            grantedBy: { via: "class", classId: "warlock" },
          },
        },
      ],
      max: { kind: "value", amount: 1 },
      min: { kind: "value", amount: 0 },
      recharge: [{ trigger: { type: "roundStart" }, amount: "full" }],
      tags: ["combat", "movement"],
    },

    invocation_lance_of_lethargy: {
      id: "invocation_lance_of_lethargy",
      category: "class_features",
      origin: { book: "XGE" },
      grantors: [
        {
          system: "feature",
          featureId: "invocation_lance_of_lethargy",
          obtainedVia: {
            via: "choice",
            poolId: "eldritch_invocations",
            grantedBy: { via: "class", classId: "warlock" },
          },
        },
      ],
      max: { kind: "value", amount: 1 },
      min: { kind: "value", amount: 0 },
      recharge: [{ trigger: { type: "roundStart" }, amount: "full" }],
      tags: ["combat", "movement"],
    },

    invocation_tomb_of_levistus: {
      id: "invocation_tomb_of_levistus",
      category: "class_features",
      origin: { book: "XGE" },
      grantors: [
        {
          system: "feature",
          featureId: "invocation_tomb_of_levistus",
          obtainedVia: {
            via: "choice",
            poolId: "eldritch_invocations",
            grantedBy: { via: "class", classId: "warlock" },
          },
        },
      ],
      max: { kind: "value", amount: 1 },
      min: { kind: "value", amount: 0 },
      recharge: [{ trigger: { type: "shortRest" }, amount: "full" }],
      tags: ["defense", "reaction"],
    },

    invocation_trickster_escape: {
      id: "invocation_trickster_escape",
      category: "class_features",
      origin: { book: "XGE" },
      grantors: [
        {
          system: "feature",
          featureId: "invocation_trickster_escape",
          obtainedVia: {
            via: "choice",
            poolId: "eldritch_invocations",
            grantedBy: { via: "class", classId: "warlock" },
          },
        },
      ],
      max: { kind: "value", amount: 1 },
      min: { kind: "value", amount: 0 },
      recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
      tags: ["spells", "defense"],
    },

    // ============================== TCE ==============================
    invocation_bond_of_the_talisman: {
      id: "invocation_bond_of_the_talisman",
      category: "class_features",
      origin: { book: "TCE" },
      grantors: [
        {
          system: "feature",
          featureId: "invocation_bond_of_the_talisman",
          obtainedVia: {
            via: "choice",
            poolId: "eldritch_invocations",
            grantedBy: { via: "class", classId: "warlock" },
          },
        },
      ],
      max: { kind: "formula", formula: { base: { kind: "scaler", id: "PB" } } },
      min: { kind: "value", amount: 0 },
      recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
      tags: ["utility"],
    },

    invocation_far_scribe_inscribed_names: {
      id: "invocation_far_scribe_inscribed_names",
      category: "class_features",
      origin: { book: "TCE" },
      grantors: [
        {
          system: "feature",
          featureId: "invocation_far_scribe_inscribed_names",
          obtainedVia: {
            via: "choice",
            poolId: "eldritch_invocations",
            grantedBy: { via: "class", classId: "warlock" },
          },
        },
      ],
      max: { kind: "formula", formula: { base: { kind: "scaler", id: "PB" } } },
      min: { kind: "value", amount: 0 },
      recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
      tags: ["communication", "utility"],
    },

    invocation_gift_of_the_protectors_inscribed_names: {
      id: "invocation_gift_of_the_protectors_inscribed_names",
      category: "class_features",
      origin: { book: "TCE" },
      grantors: [
        {
          system: "feature",
          featureId: "invocation_gift_of_the_protectors_inscribed_names",
          obtainedVia: {
            via: "choice",
            poolId: "eldritch_invocations",
            grantedBy: { via: "class", classId: "warlock" },
          },
        },
      ],
      max: { kind: "formula", formula: { base: { kind: "scaler", id: "PB" } } },
      min: { kind: "value", amount: 0 },
      recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
      tags: ["utility"],
    },

    invocation_gift_of_the_protectors_trigger: {
      id: "invocation_gift_of_the_protectors_trigger",
      category: "class_features",
      origin: { book: "TCE" },
      grantors: [
        {
          system: "feature",
          featureId: "invocation_gift_of_the_protectors_trigger",
          obtainedVia: {
            via: "choice",
            poolId: "eldritch_invocations",
            grantedBy: { via: "class", classId: "warlock" },
          },
        },
      ],
      max: { kind: "value", amount: 1 },
      min: { kind: "value", amount: 0 },
      recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
      tags: ["defense"],
    },

    invocation_protection_of_the_talisman: {
      id: "invocation_protection_of_the_talisman",
      category: "class_features",
      origin: { book: "TCE" },
      grantors: [
        {
          system: "feature",
          featureId: "invocation_protection_of_the_talisman",
          obtainedVia: {
            via: "choice",
            poolId: "eldritch_invocations",
            grantedBy: { via: "class", classId: "warlock" },
          },
        },
      ],
      max: { kind: "formula", formula: { base: { kind: "scaler", id: "PB" } } },
      min: { kind: "value", amount: 0 },
      recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
      tags: ["saving-throw", "bonus"],
    },

    invocation_undying_servitude: {
      id: "invocation_undying_servitude",
      category: "class_features",
      origin: { book: "TCE" },
      grantors: [
        {
          system: "feature",
          featureId: "invocation_undying_servitude",
          obtainedVia: {
            via: "choice",
            poolId: "eldritch_invocations",
            grantedBy: { via: "class", classId: "warlock" },
          },
        },
      ],
      max: { kind: "value", amount: 1 },
      min: { kind: "value", amount: 0 },
      recharge: [{ trigger: { type: "longRest" }, amount: "full" }],
      tags: ["spells", "summoning"],
    },
  };
