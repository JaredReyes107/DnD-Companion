import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { archfey_actions_en } from "../subclasses/archfey/en/archfey-actions-en";
import { fiend_actions_en } from "../subclasses/fiend/en/fiend-actions-en";
import { great_old_one_actions_en } from "../subclasses/great-old-one/en/great-old-one-actions-en";

import { celestial_actions_en } from "../subclasses/celestial/en/celestial-actions-en";
import { hexblade_actions_en } from "../subclasses/hexblade/en/hexblade-actions-en";

import { fathomless_actions_en } from "../subclasses/fathomless/en/fathomless-actions-en";
import { genie_actions_en } from "../subclasses/genie/en/genie-actions-en";

const subclass_actions: GameLocalizationCategory = {
  // PHB
  ...archfey_actions_en,
  ...fiend_actions_en,
  ...great_old_one_actions_en,

  // XGE
  ...celestial_actions_en,
  ...hexblade_actions_en,

  // TCE
  ...fathomless_actions_en,
  ...genie_actions_en,
};

const invocations_actions: GameLocalizationCategory = {
  // PHB
  invocation_armor_of_shadows: {
    name: "Armor of Shadows",
    description: `You cast 'Mage Armor' on yourself at will, without expending a spell slot or material components.`,
  },
  invocation_ascendant_step: {
    name: "Ascendant Step",
    description: `You cast 'Levitate' on yourself at will, without expending a spell slot or material components.`,
  },
  invocation_beast_speech: {
    name: "Beast Speech",
    description: `You cast 'Speak with Animals' without expending a spell slot.`,
  },
  invocation_bewitching_whispers: {
    name: "Bewitching Whispers",
    description: `You cast 'Compulsion' once using a warlock spell slot.`,
  },
  invocation_book_of_ancient_secrets_inscribe: {
    name: "Book of Ancient Secrets: Inscribe",
    description: `You add a ritual spell to your Book of Shadows if the spell's level is equal to or less than half your warlock level (rounded up). You have to spend 2 hours and 50 gp per spell level to do so.`,
  },
  invocation_chains_of_carceri: {
    name: "Chains of Carceri",
    description: `You cast 'Hold Monster' (targeting a celestial, fiend or elemental) without expending a spell slot or material components`,
  },
  invocation_dreadful_word: {
    name: "Dreadful Word",
    description: `You cast 'Confusion' once using a warlock spell slot. You can't do so again until you finish a long rest.`,
  },
  invocation_eldritch_sight: {
    name: "Eldritch Sight",
    description: `You cast 'Detect Magic' at will, without expending a spell slot`,
  },
  invocation_fiendish_vigor: {
    name: "Fiendish Vigor",
    description: `You cast 'False Life' on yourself at will as a 1st-level spell, without expending a spell slot or material components.`,
  },
  invocation_gaze_of_two_minds: {
    name: "Gaze of Two Minds",
    description: `You can use your action to touch a willing humanoid and perceive through its senses until the end of your next turn. As long as the creature is on the same plane of existence as you, you can use your action on subsequent turns to maintain this connection, extending the duration until the end of your next turn. While perceiving through the other creature's senses, you benefit from any special senses possessed by that creature, and you are blinded and deafened to your own surroundings`,
  },
  invocation_lifedrinker: {
    name: "Lifedrinker",
    description: `When you hit a creature with your pact weapon, the creature takes extra necrotic damage equal to your Charisma modifier (minimum 1).`,
  },
  invocation_mask_of_many_faces: {
    name: "Mask of Many Faces",
    description: `You cast 'Disguise Self' at will, without expending a spell slot.`,
  },
  invocation_master_of_myriad_forms: {
    name: "Master of Myriad Forms",
    description: `You cast 'Alter Self' at will, without expending a spell slot.`,
  },
  invocation_minions_of_chaos: {
    name: "Minions of Chaos",
    description: `You cast 'Conjure Elemental' once using warlock spell slot, You can't do so again until you finish a long rest.`,
  },
  invocation_mire_the_mind: {
    name: "Mire the Mind",
    description: `You cast 'Slow' using a warlock spell slot. You can't do so again until you finish a long rest.`,
  },
  invocation_misty_visions: {
    name: "Misty Visions",
    description: `You cast 'Silent Image' at will, without expending a spell slot or material components.`,
  },
  invocation_one_with_shadows: {
    name: "One with Shadows",
    description: `When you are in an area of dim light or darkness, you can use your action to become invisible until you move or take an action or reaction.`,
  },
  invocation_otherworldly_leap: {
    name: "Otherworldly Leap",
    description: `You cast 'Jump' on yourself at will, without expending a spell slot or material components.`,
  },
  invocation_sculptor_of_flesh: {
    name: "Sculptor of Flesh",
    description: `You cast 'Polymorph' once using a warlock spell slot. You can't do so again until you finish a long rest`,
  },
  invocation_sign_of_ill_omen: {
    name: "Sign of Ill Omen",
    description: `You cast 'Bestow Curse' once using a warlock spell slot. You can't do so again until you finish a long rest.`,
  },
  invocation_thief_of_five_fates: {
    name: "Thief of Five Fates",
    description: `You cast 'Bane' once using a warlock spell slot. You can't do so again until you finish a long rest.`,
  },
  invocation_thirsting_blade: {
    name: "Thirsting Blade",
    description: `You attack with your pact weapon twice whenever you take the Attack action on your turn.`,
  },
  invocation_visions_of_distant_realms: {
    name: "Visions of Distant Realms",
    description: `You cast 'Arcane Eye' at will, without expending a spell slot.`,
  },
  invocation_whispers_of_the_grave: {
    name: "Whispers of the Grave",
    description: `You cast 'Speak with Dead' at will, without expending a spell slot.`,
  },

  // XGE
  invocation_cloak_of_flies: {
    name: "Cloak of Flies",
    description: `As a bonus action, you can surround yourself with a magical aura that extends 5 feet from you in every direction, but not through total cover. It lasts until you're incapacitated or you dismiss it as a bonus action.
      This aura grants you advantage on Charisma (Intimidation) checks but disadvantage on all other Charisma checks. Any other creature that starts its turn in the aura takes posion damage equal to your Charisma modifier (minimum of 0 damage)..`,
  },
  invocation_eldritch_smite: {
    name: "Eldritch Smite",
    description: `Once per turn when you hit a creature with your pact weapon, you can expend a warlock spell slot to deal an extra 1d8 force damage to the target, plus another 1d8 per level of the spell slot, and you can knock the target prone if it's Huge or Smaller.`,
  },
  invocation_ghostly_gaze: {
    name: "Ghostly Gaze",
    description: `During 1 minute and while you mantain concentration on this feature, you gain the ability to see through solid objects to a range of 30 feet. Within that range, you have darkvision if you don't already have it. During that time, you perceive objects as ghostly, trasparent images.`,
  },
  invocation_gift_of_the_depths: {
    name: "Gift of the Depths",
    description: `You cast 'Water Breathing' without expending a spell slot. You regain the ability to do so when you finish a long rest.`,
  },
  invocation_gift_of_the_ever_living_ones: {
    name: "Gift of the Ever Living Ones",
    description: `You  treat any dice rolled to determine the hit points you regain as having rolled their maximum value for you while your familiar is within 100 feet of you.`,
  },
  invocation_grasp_of_hadar: {
    name: "Grasp of Hadar",
    description: `You pull a creature 10 feet closer in a straight line when you hit it with 'Eldritch Blast'.`,
  },
  invocation_lance_of_lethargy: {
    name: "Lance of Lethargy",
    description: `You reduce the speed of a creature hit by your 'Eldritch Blast' by 10 feet until the end of your next turn.`,
  },
  invocation_maddening_hex: {
    name: "Maddening Hex",
    description: `You deal psychic damage equal to your Charisma modifier (minimum of 1 damage) to a cursed target that you can see within 30 feet of you and to each creature of your choice within 5 feet of it. A 'cursed' creature is one which is affected by your 'Hex' spell or a Warlock feature like 'Hexblade's Curse' and 'Sign of Ill Omen'.`,
  },
  invocation_relentless_hex: {
    name: "Relentless Hex",
    description: `You teleport up to 30 feet to an unoccupied space you can see within 5 feet of a cursed target that you can see. A 'cursed' creature is one affected by your 'Hex' spell or a Warlock feature like 'Hexblade's Curse' and 'Sign of Ill Omen'`,
  },
  invocation_shroud_of_shadow: {
    name: "Shroud of Shadow",
    description: `You cast 'Invisibility' at will, without expending a spell slot.`,
  },
  invocation_tomb_of_levistus: {
    name: "Tomb of Levistus",
    description: `When you take damage, you can entomb yourself in ice, which melts away at the end of your next turn. You gain 10 temporary hit points per warlock level, which take as much of the triggering damage as possible. Immediately after you take the damage, you gain vulnerability to fire damage, your speed is reduced to 0, and you are incapacitated. These effects, including any remaining temporary hit points, all end when the ice melts.`,
  },
  invocation_trickster_escape: {
    name: "Trickster's Escape",
    description: `You cast 'Freedom of Movement' on yourself without expending a spell slot.`,
  },

  // TCE
  invocation_bond_of_the_talisman: {
    name: "Bond of the Talisman",
    description: `While someone else is wearing your talisman, you can teleport to the unoccupied space closest to them, provided the two of you are on the same plane of existence. The wearer of your talisman can do the same thing, using their action to teleport to you.`,
  },
  invocation_far_scribe_inscribe: {
    name: "Far Scribe: Inscribe Name",
    description: `With your permission, a creature (other than you) can use its action to write its name on a special page to communicate with it later.`,
  },
  invocation_far_scribe_send: {
    name: "Far Scribe: Send",
    description: `You cast the 'Sending' spell, targeting a creature whose name is on your special 'Far Scribe', without using a spell slot and without using material components. To do so, you must write the message on the page. The target hears the message in their mind, and if the target replies, their message appears on the page, rather than in your mind. The writing disappears after 1 minute.`,
  },
  invocation_far_scribe_erase: {
    name: "Far Scribe: Erase Name",
    description: `You magically erase a name inscribed on your special 'Far Scribe' page by touching it.`,
  },
  invocation_gift_of_the_protectors_inscribe: {
    name: "Gift of the Protectors: Inscribe Name",
    description: `With your permission, a creature can use its action to write its name on a special page to protect it from harm later.`,
  },
  invocation_gift_of_the_protectors_protect: {
    name: "Gift of the Protectors: Protect",
    description: `When any creature whose name is on your special 'Far Scribe' is reduced to 0 hit points but not killed outright, the creature magically drops to 1 hit point instead.`,
  },
  invocation_gift_of_the_protectors_erase: {
    name: "Gift of the Protectors: Erase Name",
    description: `You magically erase a name inscribed on your special 'Gift of the Protectors' page by touching it.`,
  },
  invocation_investment_of_the_chain_master_attack: {
    name: "Investment of the Chain Master: Attack",
    description: `You command the familiar to take the Attack action.`,
  },
  invocation_investment_of_the_chain_master_defend: {
    name: "Investment of the Chain Master: Defend",
    description: `When the familiar takes damage, you can use your reaction to grant it resistance against that damage.`,
  },
  invocation_protection_of_the_talisman: {
    name: "Protection of the Talisman",
    description: `When the wearer of your talisman fails a saving throw, they can add a d4 to the roll, potentially turning the save into a success`,
  },
  invocation_rebuke_of_the_talisman: {
    name: "Rebuke of the Talisman",
    description: `When the wearer of your talisman is hit by an attacker you can see within 30 feet of you, you can use your reaction to deal psychic damage to the attacker equal to your proficiency bonus and push it up to 10 feet away from the talisman's wearer.`,
  },
  invocation_undying_servitude: {
    name: "Undying Servitude",
    description: `You can cast animate dead without using a spell slot.`,
  },
};

const boon_actions: GameLocalizationCategory = {
  pact_of_the_blade_summon: {
    name: "Summon Pact Weapon",
    description: `You create a pact weapon in your empty hand. You can choose the form that this melee weapon takes each time you create it. You are proficient with it while you wield it. This weapon counts as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.
      This summoned weapon dissappears if it is more than 5 feet away from you for 1 minute or more, if you use this feature again, if you dismiss the weapon (no action required), or if you die.`,
  },
  pact_of_the_blade_bind: {
    name: "Bind Pact Weapon",
    description: `You transform one magic weapon into your pact weapon by performing a special ritual over the course of 1 hour while you hold the weapon. This can be done during a short rest.
      You can dismiss this weapon, shunting it into an extradimensional space, and it appears whenever you create your pact weapon thereafter. You can't affect an artifact or a sentient weapon in this way. The weapon ceases being your pact weapon if you die, if you perform the 1-hour ritual on a different weapon, or if you use a 1-hour ritual to break your bond to it. The weapon appears at your feet if it is in the extradimensional space when the bond breaks.`,
  },
  pact_of_the_chain_find_familiar: {
    name: "Pact of the Chain: Find Familiar",
    description: `You cast the spell 'Find Familiar' as a ritual, and you can choose one of the normal forms for your familiar or one of the following special forms: imp, pseudodragon, quasit, or sprite.`,
  },
  pact_of_the_chain_trade_attack: {
    name: "Pact of the Chain: Attack",
    description: `When you take the Attack action, you can forgo one of your own attacks to allow your familiar to make one attack with its reaction.`,
  },
  pact_of_the_tome_replace: {
    name: "Pact of the Tome: Replace Book",
    description: `You perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and it destroys the previous book. The book turns to ash when you die.`,
  },

  pact_of_the_talisman_aid: {
    name: "Aid of the Talisman",
    description: `When the wearer fails an ability check, they can add a d4 to the roll, potentially turning the roll into a success.`,
  },
  pact_of_the_talisman_replace: {
    name: "Replace Talisman",
    description: `You perform a 1-hour ceremony to receive a replacement talisman from your patron. This ceremony can be performed during a short or long rest, and it destroys the previous amulet.`,
  },
};

export const warlock_actions_en: GameLocalizationCategory = {
  ...subclass_actions,
  ...invocations_actions,
  ...boon_actions,

  invocation_eldritch_master: {
    name: "Eldritch Master",
    description: `You spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature.`,
  },
};
