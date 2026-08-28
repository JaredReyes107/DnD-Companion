import { ActionInstance } from "@/core/entities/actions/action-instance";

export const ELDRITCH_INVOCATIONS_ACTIONS: Record<string, ActionInstance> = {
  // ============================== PHB ==============================
  invocation_armor_of_shadows: {
    id: "invocation_armor_of_shadows",
    sourceId: "invocation_armor_of_shadows",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
    // TODO: Add modifier (while no armor, overrides AC formula)
    // TODO: Replace with spell behaviour: Mage Armor.
  },

  invocation_ascendant_step: {
    id: "invocation_ascendant_step",
    sourceId: "invocation_ascendant_step",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
    // TODO: Replace with spell behaviour: Levitate.
  },

  invocation_beast_speech: {
    id: "invocation_beast_speech",
    sourceId: "invocation_beast_speech",
    boards: ["exploration", "roleplay"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
    // TODO: Replace with spell behaviour: Speak with Animals.
  },

  invocation_bewitching_whispers: {
    id: "invocation_bewitching_whispers",
    sourceId: "invocation_bewitching_whispers",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "invocation_invocation_bewitching_whispers",
        amount: -1,
      },
      {
        type: "modifyResource",
        resourceId: "invocation_pact_slots",
        amount: -1,
      },
    ],
    // TODO: Replace with spell behaviour: Compulsion
  },

  invocation_book_of_ancient_secrets_inscribe: {
    id: "invocation_book_of_ancient_secrets_inscribe",
    sourceId: "invocation_book_of_ancient_secrets",
    boards: ["exploration", "roleplay"],
    duration: { kind: "instantaneous" },
    effects: [],
    // TODO: Spellcasting. Adds ritual spell to list
  },

  invocation_chains_of_carceri: {
    id: "invocation_chains_of_carceri",
    sourceId: "invocation_chains_of_carceri",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "invocation_invocation_chains_of_carceri",
        amount: -1,
      },
    ],
  },

  invocation_dreadful_word: {
    id: "invocation_dreadful_word",
    sourceId: "invocation_dreadful_word",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "invocation_invocation_dreadful_word",
        amount: -1,
      },
      {
        type: "modifyResource",
        resourceId: "invocation_pact_slots",
        amount: -1,
      },
    ],
    // TODO: Replace with spell behaviour: Confusion
  },

  invocation_eldritch_sight: {
    id: "invocation_eldritch_sight",
    sourceId: "invocation_eldritch_sight",
    boards: ["exploration", "combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
    // TODO: Replace with spell behaviour: Detect Magic.
  },

  invocation_fiendish_vigor: {
    id: "invocation_fiendish_vigor",
    sourceId: "invocation_fiendish_vigor",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
    // TODO: Temporal Effect: 7 tempHp
    // TODO: Replace with spell behaviour: False Life
  },

  invocation_gaze_of_two_minds: {
    id: "invocation_gaze_of_two_minds",
    sourceId: "invocation_gaze_of_two_minds",
    boards: ["exploration", "roleplay"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },

  invocation_lifedrinker: {
    id: "invocation_lifedrinker",
    sourceId: "invocation_lifedrinker",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"],
    effects: [],
  },

  invocation_mask_of_many_faces: {
    id: "invocation_mask_of_many_faces",
    sourceId: "invocation_mask_of_many_faces",
    boards: ["exploration", "roleplay"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
    // TODO: Replace with spell behaviour: Disguise Self.
  },

  invocation_master_of_myriad_forms: {
    id: "invocation_master_of_myriad_forms",
    sourceId: "invocation_master_of_myriad_forms",
    boards: ["combat", "exploration", "roleplay"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
    // TODO: Replace with spell behaviour: Alter Self.
  },

  invocation_minions_of_chaos: {
    id: "invocation_minions_of_chaos",
    sourceId: "invocation_minions_of_chaos",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "invocation_invocation_minions_of_chaos",
        amount: -1,
      },
      {
        type: "modifyResource",
        resourceId: "invocation_pact_slots",
        amount: -1,
      },
    ],
    // TODO: Replace with spell behaviour: Conjure Elemental
  },

  invocation_mire_the_mind: {
    id: "invocation_mire_the_mind",
    sourceId: "invocation_mire_the_mind",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "invocation_invocation_mire_the_mind",
        amount: -1,
      },
    ],
    // TODO: Replace with spell behaviour: Slow
  },

  invocation_misty_visions: {
    id: "invocation_misty_visions",
    sourceId: "invocation_misty_visions",
    boards: ["combat", "exploration", "roleplay"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
    // TODO: Replace with spell behaviour: Silent Image.
  },

  invocation_one_with_shadows: {
    id: "invocation_one_with_shadows",
    sourceId: "invocation_one_with_shadows",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
  },

  invocation_otherworldly_leap: {
    id: "invocation_otherworldly_leap",
    sourceId: "invocation_otherworldly_leap",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
    // TODO: Replace with spell behaviour: Jump
  },

  invocation_repelling_blast: {
    id: "invocation_repelling_blast",
    sourceId: "invocation_repelling_blast",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"],
    effects: [],
    // Passive push rider on Eldritch Blast hits — stub per your rule.
  },

  invocation_sculptor_of_flesh: {
    id: "invocation_sculptor_of_flesh",
    sourceId: "invocation_sculptor_of_flesh",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "invocation_invocation_sculptor_of_flesh",
        amount: -1,
      },
      {
        type: "modifyResource",
        resourceId: "invocation_pact_slots",
        amount: -1,
      },
    ],
    // TODO: Replace with spell behaviour: Polymorph
  },

  invocation_sign_of_ill_omen: {
    id: "invocation_sign_of_ill_omen",
    sourceId: "invocation_sign_of_ill_omen",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "invocation_invocation_sign_of_ill_omen",
        amount: -1,
      },
      {
        type: "modifyResource",
        resourceId: "invocation_pact_slots",
        amount: -1,
      },
    ],
    // TODO: Replace with spell behaviour: Bestow Curse
  },

  invocation_thief_of_five_fates: {
    id: "invocation_thief_of_five_fates",
    sourceId: "invocation_thief_of_five_fates",
    boards: ["combat"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "invocation_invocation_thief_of_five_fates",
        amount: -1,
      },
      {
        type: "modifyResource",
        resourceId: "invocation_pact_slots",
        amount: -1,
      },
    ],
    // TODO: Replace with spell behaviour: Bane
  },

  invocation_thirsting_blade: {
    id: "invocation_thirsting_blade",
    sourceId: "invocation_thirsting_blade",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [],
  },

  invocation_visions_of_distant_realms: {
    id: "invocation_visions_of_distant_realms",
    sourceId: "invocation_visions_of_distant_realms",
    boards: ["exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
    // TODO: Replace with spell behaviour: Arcane Eye.
  },

  invocation_whispers_of_the_grave: {
    id: "invocation_whispers_of_the_grave",
    sourceId: "invocation_whispers_of_the_grave",
    boards: ["exploration", "roleplay"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
    // TODO: Replace with spell behaviour: Speak with Dead.
  },

  // ============================== XGE ==============================

  invocation_aspect_of_the_moon: {
    id: "invocation_aspect_of_the_moon",
    sourceId: "invocation_aspect_of_the_moon",
    boards: ["exploration"],
    duration: { kind: "instantaneous" },
    effects: [],
    // Passive — stub for board visibility.
  },

  invocation_cloak_of_flies: {
    id: "invocation_cloak_of_flies",
    sourceId: "invocation_cloak_of_flies",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "invocation_invocation_cloak_of_flies",
        amount: -1,
      },
    ],
    // TODO: aura pulse damage + CHA-check advantage/disadvantage —
    // aura + roll-affecting, not modeled. Dismissible via bonus
    // action — same toggle-action open question as dragon_wings.
  },

  invocation_eldritch_smite: {
    id: "invocation_eldritch_smite",
    sourceId: "invocation_eldritch_smite",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"],
    effects: [
      {
        type: "modifyResource",
        resourceId: "invocation_invocation_eldritch_smite",
        amount: -1,
      },
      // TODO: also spends a variable warlock spell slot — deferred
      // post-MVP.
    ],
  },

  invocation_ghostly_gaze: {
    id: "invocation_ghostly_gaze",
    sourceId: "invocation_ghostly_gaze",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "invocation_invocation_ghostly_gaze",
        amount: -1,
      },
    ],
  },

  invocation_gift_of_the_depths_water_breathing: {
    id: "invocation_gift_of_the_depths_water_breathing",
    sourceId: "invocation_gift_of_the_depths",
    boards: ["exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "invocation_invocation_gift_of_the_depths",
        amount: -1,
      },
    ],
  },

  invocation_gift_of_the_ever_living_ones: {
    id: "invocation_gift_of_the_ever_living_ones",
    sourceId: "invocation_gift_of_the_ever_living_ones",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onHealingReceived"],
    effects: [],
  },

  invocation_grasp_of_hadar: {
    id: "invocation_grasp_of_hadar",
    sourceId: "invocation_grasp_of_hadar",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"],
    effects: [
      {
        type: "modifyResource",
        resourceId: "invocation_invocation_grasp_of_hadar",
        amount: -1,
      },
    ],
  },

  invocation_improved_pact_weapon: {
    id: "invocation_improved_pact_weapon",
    sourceId: "invocation_improved_pact_weapon",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [],
    // Passive equipment modifier — stub, depends on weapon-tagging
    // gap.
  },

  invocation_lance_of_lethargy: {
    id: "invocation_lance_of_lethargy",
    sourceId: "invocation_lance_of_lethargy",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onAttackHit"],
    effects: [
      {
        type: "modifyResource",
        resourceId: "invocation_invocation_lance_of_lethargy",
        amount: -1,
      },
    ],
  },

  invocation_maddening_hex: {
    id: "invocation_maddening_hex",
    sourceId: "invocation_maddening_hex",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
    // Depends on the cursed-target mark-tracking primitive.
  },

  invocation_relentless_hex: {
    id: "invocation_relentless_hex",
    sourceId: "invocation_relentless_hex",
    boards: ["combat"],
    duration: { kind: "economy", slot: "bonusAction" },
    effects: [],
    // Depends on the same mark-tracking primitive.
  },

  invocation_shroud_of_shadow: {
    id: "invocation_shroud_of_shadow",
    sourceId: "invocation_shroud_of_shadow",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
    // At will, casts Invisibility.
  },

  invocation_tomb_of_levistus: {
    id: "invocation_tomb_of_levistus",
    sourceId: "invocation_tomb_of_levistus",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onDamageTaken"],
    effects: [
      {
        type: "modifyResource",
        resourceId: "invocation_invocation_tomb_of_levistus",
        amount: -1,
      },
    ],
    // TODO: temp HP scaling with level, fire vulnerability, speed 0,
    // incapacitated — condition riders not modeled.
  },

  invocation_trickster_escape: {
    id: "invocation_trickster_escape",
    sourceId: "invocation_trickster_escape",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "invocation_invocation_trickster_escape",
        amount: -1,
      },
    ],
  },

  // ============================== TCE ==============================

  invocation_bond_of_the_talisman: {
    id: "invocation_bond_of_the_talisman",
    sourceId: "invocation_bond_of_the_talisman",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "invocation_invocation_bond_of_the_talisman",
        amount: -1,
      },
    ],
    // TODO: self-vs-other-actor — wearer can also trigger this using
    // their own action.
  },

  invocation_eldritch_mind: {
    id: "invocation_eldritch_mind",
    sourceId: "invocation_eldritch_mind",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [],
    // Passive, roll-affecting — stub for board visibility.
  },

  invocation_far_scribe_write: {
    id: "invocation_far_scribe_write",
    sourceId: "invocation_far_scribe",
    boards: ["exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "invocation_far_scribe_inscribed_names",
        amount: +1,
      },
    ],
  },
  invocation_far_scribe_send: {
    id: "invocation_far_scribe_send",
    sourceId: "invocation_far_scribe",
    boards: ["exploration", "roleplay"],
    duration: { kind: "economy", slot: "action" },
    effects: [],
    // TODO: depends on the named-creature-registry gap (Book of
    // Shadows page).
  },
  invocation_far_scribe_erase: {
    id: "invocation_far_scribe_erase",
    sourceId: "invocation_far_scribe",
    boards: ["exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "invocation_far_scribe_inscribed_names",
        amount: -1,
      },
    ],
  },

  invocation_gift_of_the_protectors_write: {
    id: "invocation_gift_of_the_protectors_write",
    sourceId: "invocation_gift_of_the_protectors",
    boards: ["exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "invocation_gift_of_the_protectors_inscribed_names",
        amount: +1,
      },
    ],
  },
  invocation_gift_of_the_protectors_trigger: {
    id: "invocation_gift_of_the_protectors_trigger",
    sourceId: "invocation_gift_of_the_protectors",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onDamageTaken"], // TODO: Self-vs-other-actor: fires for ANY
    // registered creature dropping to 0 HP, not just you.
    effects: [
      {
        type: "modifyResource",
        resourceId: "invocation_gift_of_the_protectors_trigger",
        amount: -1,
      },
    ],
  },
  invocation_gift_of_the_protectors_erase: {
    id: "invocation_gift_of_the_protectors_erase",
    sourceId: "invocation_gift_of_the_protectors",
    boards: ["exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "invocation_gift_of_the_protectors_inscribed_names",
        amount: -1,
      },
    ],
  },

  invocation_investment_of_the_chain_master: {
    id: "invocation_investment_of_the_chain_master",
    sourceId: "invocation_investment_of_the_chain_master",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    effects: [],
    // Passive familiar upgrade — stub, depends on companion gap.
  },

  invocation_protection_of_the_talisman: {
    id: "invocation_protection_of_the_talisman",
    sourceId: "invocation_protection_of_the_talisman",
    boards: ["combat"],
    duration: { kind: "instantaneous" },
    trigger: ["onSavingThrow"], // Self-vs-other-actor: fires on the
    // wearer's failed save, not yours.
    effects: [
      {
        type: "modifyResource",
        resourceId: "invocation_invocation_protection_of_the_talisman",
        amount: -1,
      },
    ],
  },

  invocation_rebuke_of_the_talisman: {
    id: "invocation_rebuke_of_the_talisman",
    sourceId: "invocation_rebuke_of_the_talisman",
    boards: ["combat"],
    duration: { kind: "economy", slot: "reaction" },
    trigger: ["onDamageTaken"], // Self-vs-other-actor: fires when
    // the wearer (not you) is hit.
    effects: [],
  },

  invocation_undying_servitude: {
    id: "invocation_undying_servitude",
    sourceId: "invocation_undying_servitude",
    boards: ["combat", "exploration"],
    duration: { kind: "economy", slot: "action" },
    effects: [
      {
        type: "modifyResource",
        resourceId: "invocation_invocation_undying_servitude",
        amount: -1,
      },
    ],
    // Casts Animate Dead without a spell slot — companion/second-
    // actor gap.
  },
};
