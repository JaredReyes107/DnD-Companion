import { OptionTemplate } from "@/core/entities/rules/option-template";

const PACT_BOONS: Record<string, OptionTemplate> = {
  pact_of_the_blade: {
    id: "pact_of_the_blade",
    poolIds: ["pact_boon"],
    tags: ["combat", "equipment", "utility"],
    grants: [
      { type: "action", id: "pact_of_the_blade_summon" },
      { type: "action", id: "pact_of_the_blade_bind_weapon" },
    ],
    // TODO: conjured weapon (choice of form), counts as magical —
    // equipment-conjuration + weapon-tagging gap, same class flagged
    // for Kensei/Psychic Blades. Auto-dismisses if >5ft away for 1+
    // minute — proximity-based auto-dismiss condition not modeled.
  },

  pact_of_the_chain: {
    id: "pact_of_the_chain",
    poolIds: ["pact_boon"],
    tags: ["utility", "summoning", "spells"],
    grants: [
      { type: "action", id: "pact_of_the_chain_find_familiar" },
      { type: "action", id: "pact_of_the_chain_trade_attack" },
    ],
    // TODO: Grants ritual spell: Find Familiar
  },

  pact_of_the_tome: {
    id: "pact_of_the_tome",
    poolIds: ["pact_boon"],
    tags: ["spells", "utility"],
    grants: [{ type: "action", id: "pact_of_the_tome_replace" }],
    // TODO: Spells: Cantrip selection
  },

  pact_of_the_talisman: {
    id: "pact_of_the_talisman",
    poolIds: ["pact_boon"],
    tags: ["defense", "utility"],
    grants: [
      { type: "action", id: "pact_of_the_talisman_aid" },
      { type: "action", id: "pact_of_the_talisman_replace" },
      { type: "resource", id: "pact_of_the_talisman_aid" },
    ],
    // TODO: Makes an Item. Can be transferred
  },
};

const INVOCATIONS: Record<string, OptionTemplate> = {
  // ============================== PHB ==============================
  invocation_agonizing_blast: {
    id: "invocation_agonizing_blast",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "damage", "passive"],
    // TODO: Option Requirement: Known Spell: Eldritch Blast.
    // TODO: Override Spell: 'Eldritch Blast'. Description + DMG roll
    grants: [],
  },
  invocation_armor_of_shadows: {
    id: "invocation_armor_of_shadows",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "spells", "utility"],
    grants: [{ type: "action", id: "invocation_armor_of_shadows" }],
  },
  invocation_ascendant_step: {
    id: "invocation_ascendant_step",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "spells", "movement"],
    grants: [{ type: "action", id: "invocation_ascendant_step" }],
  },
  invocation_beast_speech: {
    id: "invocation_beast_speech",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "spells", "utility"],
    grants: [{ type: "action", id: "invocation_beast_speech" }],
  },
  invocation_beguiling_influence: {
    id: "invocation_beguiling_influence",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "proficiency", "passive"],
    // TODO: Deception + Persuasion proficiency
    grants: [],
  },
  invocation_bewitching_whispers: {
    id: "invocation_bewitching_whispers",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "spells", "control"],
    grants: [
      { type: "action", id: "invocation_bewitching_whispers" },
      { type: "resource", id: "invocation_bewitching_whispers" },
    ],
  },
  invocation_book_of_ancient_secrets: {
    id: "invocation_book_of_ancient_secrets",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "spells", "utility"],
    // TODO: Option Requirement: Pact of the Tome.
    // TODO: Ritual List + Learning UI
    grants: [
      { type: "action", id: "invocation_book_of_ancient_secrets_inscribe" },
    ],
  },
  invocation_chains_of_carceri: {
    id: "invocation_chains_of_carceri",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "spells", "control"],
    // Requires Pact of the Chain, warlock 15.
    grants: [
      { type: "action", id: "invocation_chains_of_carceri" },
      { type: "resource", id: "invocation_chains_of_carceri" },
    ],
    // TODO: Recharge Type: per-target, long-rest
  },
  invocation_devils_sight: {
    id: "invocation_devils_sight",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "senses"],
    // TODO: Modifier. Flavour only
    grants: [],
  },
  invocation_dreadful_word: {
    id: "invocation_dreadful_word",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "spells", "control"],
    grants: [
      { type: "action", id: "invocation_dreadful_word" },
      { type: "resource", id: "invocation_dreadful_word" },
    ],
  },
  invocation_eldritch_sight: {
    id: "invocation_eldritch_sight",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "spells", "senses"],
    grants: [{ type: "action", id: "invocation_eldritch_sight" }],
  },
  invocation_eldritch_spear: {
    id: "invocation_eldritch_spear",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation"],
    // TODO: Option Requirement: Known Spell: Eldritch Blast.
    // TODO: Spell Override: Eldritch Blast. Range to 300 ft
    grants: [],
  },
  invocation_eyes_of_the_rune_keeper: {
    id: "invocation_eyes_of_the_rune_keeper",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "utility", "language", "reading"],
    grants: [],
  },
  invocation_fiendish_vigor: {
    id: "invocation_fiendish_vigor",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "spells", "defense"],
    grants: [{ type: "action", id: "invocation_fiendish_vigor" }],
  },
  invocation_gaze_of_two_minds: {
    id: "invocation_gaze_of_two_minds",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "utility", "senses"],
    grants: [{ type: "action", id: "invocation_gaze_of_two_minds" }],
  },
  invocation_lifedrinker: {
    id: "invocation_lifedrinker",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "combat", "damage"],
    // TODO: Option Requirement: Pact of the Blade Option + Lv. 12 Warlock.
    // TODO: Override: Attack. Add description/damage bonus
    grants: [],
  },
  invocation_mask_of_many_faces: {
    id: "invocation_mask_of_many_faces",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "spells", "utility"],
    grants: [{ type: "action", id: "invocation_mask_of_many_faces" }],
  },
  invocation_master_of_myriad_forms: {
    id: "invocation_master_of_myriad_forms",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "spells", "utility"],
    grants: [{ type: "action", id: "invocation_master_of_myriad_forms" }],
  },
  invocation_minions_of_chaos: {
    id: "invocation_minions_of_chaos",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "spells", "summoning"],
    grants: [
      { type: "action", id: "invocation_minions_of_chaos" },
      { type: "resource", id: "invocation_minions_of_chaos" },
    ],
    // TODO: summon creature
  },
  invocation_mire_the_mind: {
    id: "invocation_mire_the_mind",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "spells", "control"],
    grants: [
      { type: "action", id: "invocation_mire_the_mind" },
      { type: "resource", id: "invocation_mire_the_mind" },
    ],
  },
  invocation_misty_visions: {
    id: "invocation_misty_visions",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "spells", "utility"],
    grants: [{ type: "action", id: "invocation_misty_visions" }],
  },
  invocation_one_with_shadows: {
    id: "invocation_one_with_shadows",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "utility", "defense"],
    grants: [{ type: "action", id: "invocation_one_with_shadows" }],
  },
  invocation_otherworldly_leap: {
    id: "invocation_otherworldly_leap",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "spells", "movement"],
    grants: [{ type: "action", id: "invocation_otherworldly_leap" }],
  },
  invocation_repelling_blast: {
    id: "invocation_repelling_blast",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "combat", "movement"],
    // TODO: Known Spell Requirement: Eldritch Blast.
    // TODO: Override Spell: Eldritch Blast. Append description
    grants: [],
  },
  invocation_sculptor_of_flesh: {
    id: "invocation_sculptor_of_flesh",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "spells", "control"],
    grants: [
      { type: "action", id: "invocation_sculptor_of_flesh" },
      { type: "resource", id: "invocation_sculptor_of_flesh" },
    ],
  },
  invocation_sign_of_ill_omen: {
    id: "invocation_sign_of_ill_omen",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "spells", "debuff"],
    grants: [
      { type: "action", id: "invocation_sign_of_ill_omen" },
      { type: "resource", id: "invocation_sign_of_ill_omen" },
    ],
  },
  invocation_thief_of_five_fates: {
    id: "invocation_thief_of_five_fates",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "spells", "debuff"],
    grants: [
      { type: "action", id: "invocation_thief_of_five_fates" },
      { type: "resource", id: "invocation_thief_of_five_fates" },
    ],
  },
  invocation_thirsting_blade: {
    id: "invocation_thirsting_blade",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "combat", "passive"],
    // TODO: Requirement Option: Pact of the Tome + Warlock Lv. 5.
    // TODO: Override Action: Attack. Append description
    grants: [],
  },
  invocation_visions_of_distant_realms: {
    id: "invocation_visions_of_distant_realms",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "spells", "senses"],
    grants: [{ type: "action", id: "invocation_visions_of_distant_realms" }],
  },
  invocation_voice_of_the_chain_master: {
    id: "invocation_voice_of_the_chain_master",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "utility", "passive"],
    // TODO: Requirement Option: Pact of the Chain.
    grants: [],
  },
  invocation_whispers_of_the_grave: {
    id: "invocation_whispers_of_the_grave",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "spells", "utility"],
    grants: [{ type: "action", id: "invocation_whispers_of_the_grave" }],
  },
  invocation_witch_sight: {
    id: "invocation_witch_sight",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "senses"],
    // TODO: Modifier. Falvour only
    grants: [],
  },

  // ============================== XGE ==============================

  invocation_aspect_of_the_moon: {
    id: "invocation_aspect_of_the_moon",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "utility"],
    // TODO: Requirement Option: Pact of the Tome.
    grants: [],
  },
  invocation_cloak_of_flies: {
    id: "invocation_cloak_of_flies",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "utility", "combat", "damage"],
    grants: [
      { type: "action", id: "invocation_cloak_of_flies" },
      { type: "resource", id: "invocation_cloak_of_flies" },
    ],
    // TODO: Modifier. Intimidation advantage + Other CHA skills Disadvantage
  },
  invocation_eldritch_smite: {
    id: "invocation_eldritch_smite",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "combat", "damage"],
    grants: [
      { type: "action", id: "invocation_eldritch_smite" },
      { type: "resource", id: "invocation_eldritch_smite" },
    ],
    // TODO: Requirement Option: Pact of the Blade + Warlock Lv. 5.
  },
  invocation_ghostly_gaze: {
    id: "invocation_ghostly_gaze",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "senses", "utility"],
    grants: [
      { type: "action", id: "invocation_ghostly_gaze" },
      { type: "resource", id: "invocation_ghostly_gaze" },
    ],
  },
  invocation_gift_of_the_depths: {
    id: "invocation_gift_of_the_depths",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "movement", "spells", "passive"],
    grants: [
      { type: "action", id: "invocation_gift_of_the_depths_water_breathing" },
      { type: "resource", id: "invocation_gift_of_the_depths_water_breathing" },
    ],
    // TODO: Modifier. Swim speed + water breathing
  },
  invocation_gift_of_the_ever_living_ones: {
    id: "invocation_gift_of_the_ever_living_ones",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "healing"],
    // TODO: Requirement Option: Pact of the Chain.
    grants: [],
  },
  invocation_grasp_of_hadar: {
    id: "invocation_grasp_of_hadar",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "combat", "movement"],
    grants: [
      { type: "action", id: "invocation_grasp_of_hadar" },
      { type: "resource", id: "invocation_grasp_of_hadar" },
    ],
    // TODO: Known Spell Requirement: Eldritch Blast.
    // TODO: Override Spell: Eldritch Blast. Append description
  },
  invocation_improved_pact_weapon: {
    id: "invocation_improved_pact_weapon",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "combat", "equipment"],
    // TODO: Requirement Option: Pact of the Chain.
    // TODO: Override for modifier-giving action over items
    grants: [],
  },
  invocation_lance_of_lethargy: {
    id: "invocation_lance_of_lethargy",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "combat", "movement"],
    grants: [
      { type: "action", id: "invocation_lance_of_lethargy" },
      { type: "resource", id: "invocation_lance_of_lethargy" },
    ],
    // TODO: Known Spell Requirement: Eldritch Blast.
    // TODO: Override Spell: Eldritch Blast. Append description
  },
  invocation_maddening_hex: {
    id: "invocation_maddening_hex",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "combat", "damage", "aoe"],
    // TODO: Requirement: Options (tagged) OR spell + Warlock 5.
    grants: [{ type: "action", id: "invocation_maddening_hex" }],
  },
  invocation_relentless_hex: {
    id: "invocation_relentless_hex",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "movement"],
    // TODO: Requirement: Options (tagged) OR spell + Warlock 7.
    grants: [{ type: "action", id: "invocation_relentless_hex" }],
  },
  invocation_shroud_of_shadow: {
    id: "invocation_shroud_of_shadow",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "spells", "utility"],
    grants: [{ type: "action", id: "invocation_shroud_of_shadow" }],
  },
  invocation_tomb_of_levistus: {
    id: "invocation_tomb_of_levistus",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "defense", "reaction"],
    grants: [
      { type: "action", id: "invocation_tomb_of_levistus" },
      { type: "resource", id: "invocation_tomb_of_levistus" },
    ],
  },
  invocation_trickster_escape: {
    id: "invocation_trickster_escape",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "spells", "movement"],
    grants: [
      { type: "action", id: "invocation_trickster_escape" },
      { type: "resource", id: "invocation_trickster_escape" },
    ],
  },

  // ============================== TCE ==============================

  invocation_bond_of_the_talisman: {
    id: "invocation_bond_of_the_talisman",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "movement", "utility"],
    grants: [
      { type: "action", id: "invocation_bond_of_the_talisman" },
      { type: "resource", id: "invocation_bond_of_the_talisman" },
    ],
    // TODO: Requirement Option: Pact of the Talisman + Warlock Lv. 12.
  },
  invocation_eldritch_mind: {
    id: "invocation_eldritch_mind",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "passive"],
    // TODO: Modifier. Advantage on CON saves for concentration
    grants: [],
  },
  invocation_far_scribe: {
    id: "invocation_far_scribe",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "spells", "utility"],
    grants: [
      { type: "action", id: "invocation_far_scribe_inscribe" },
      { type: "action", id: "invocation_far_scribe_send" },
      { type: "action", id: "invocation_far_scribe_erase" },
      { type: "resource", id: "invocation_far_scribe" },
    ],
    // TODO: Requirement Option: Pact of the Tome + Warlock Lv. 5.
  },
  invocation_gift_of_the_protectors: {
    id: "invocation_gift_of_the_protectors",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "defense", "utility"],
    grants: [
      { type: "action", id: "invocation_gift_of_the_protectors_inscribe" },
      { type: "action", id: "invocation_gift_of_the_protectors_trigger" },
      { type: "action", id: "invocation_gift_of_the_protectors_erase" },
      { type: "resource", id: "invocation_gift_of_the_protectors" },
      { type: "resource", id: "invocation_gift_of_the_protectors_trigger" },
    ],
    // TODO: Requirement Option: Pact of the Tome + Warlock Lv. 9.
  },
  invocation_investment_of_the_chain_master: {
    id: "invocation_investment_of_the_chain_master",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "combat"],
    // TODO: Requirement Option: Pact of the Chain.
    // TODO: Modifiers. Familiar, not self
    grants: [
      {
        type: "action",
        id: "invocation_investment_of_the_chain_master_attack",
      },
      {
        type: "action",
        id: "invocation_investment_of_the_chain_master_defend",
      },
    ],
  },
  invocation_protection_of_the_talisman: {
    id: "invocation_protection_of_the_talisman",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "defense"],
    // TODO: Requirement Option: Pact of the Talisman + warlock 7.
    grants: [
      {
        type: "action",
        id: "invocation_protection_of_the_talisman",
      },
      {
        type: "resource",
        id: "invocation_protection_of_the_talisman",
      },
    ],
  },
  invocation_rebuke_of_the_talisman: {
    id: "invocation_rebuke_of_the_talisman",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "combat", "reaction", "damage"],
    // TODO: Requirement Option: Pact of the Talisman + warlock 3.
    // TODO: Self vs Other. when the WEARER (not you) is hit.
    grants: [{ type: "action", id: "invocation_rebuke_of_the_talisman" }],
  },
  invocation_undying_servitude: {
    id: "invocation_undying_servitude",
    poolIds: ["eldritch_invocations"],
    tags: ["invocation", "spells", "summoning"],
    grants: [
      { type: "action", id: "invocation_undying_servitude" },
      { type: "resource", id: "invocation_undying_servitude" },
    ],
  },
};

export const WARLOCK_OPTIONS: Record<string, OptionTemplate> = {
  ...INVOCATIONS,
  ...PACT_BOONS,
};
