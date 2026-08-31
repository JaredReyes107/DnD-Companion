import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { archfey_features_en } from "../subclasses/archfey/en/archfey-features-en";
import { fiend_features_en } from "../subclasses/fiend/en/fiend-features-en";
import { great_old_one_features_en } from "../subclasses/great-old-one/en/great-old-one-features-en";

import { celestial_features_en } from "../subclasses/celestial/en/celestial-features-en";
import { hexblade_features_en } from "../subclasses/hexblade/en/hexblade-features-en";

import { fathomless_features_en } from "../subclasses/fathomless/en/fathomless-features-en";
import { genie_features_en } from "../subclasses/genie/en/genie-features-en";

const subclass_features: GameLocalizationCategory = {
  // PHB
  ...archfey_features_en,
  ...fiend_features_en,
  ...great_old_one_features_en,

  // XGE
  ...celestial_features_en,
  ...hexblade_features_en,

  // TCE
  ...fathomless_features_en,
  ...genie_features_en,
};

const invocations: GameLocalizationCategory = {
  // PHB
  invocation_agonizing_blast: {
    name: "Agonizing Blast",
    description: `When you cast 'Eldritch Blast', add your Charisma modifier to the damage it deals on a hit.`,
  },
  invocation_armor_of_shadows: {
    name: "Armor of Shadows",
    description: `You cast 'Mage Armor' on yourself at willl, without expending a spell slot or material components.`,
  },
  invocation_ascendant_step: {
    name: "Ascendant Step",
    description: `You cast 'Levitate' on yourself at will, without expending a spell slot or material components.`,
  },
  invocation_beast_speech: {
    name: "Beast Speech",
    description: `You cast 'Speak with Animals' without expending a spell slot.`,
  },
  invocation_beguiling_influence: {
    name: "Beguiling Influence",
    description: `You gain proficiency in the Deception and Persuasion skills`,
  },
  invocation_bewitching_whispers: {
    name: "Bewitching Whispers",
    description: `You can cast 'Compulsion' once using a warlock spell slot. You can't do so after you finish a long rest.`,
  },
  invocation_book_of_ancient_secrets: {
    name: "Book of Ancient Secrets",
    description: `You can now inscribe magical rituais in your Book of Shadows. Choose two 1st-leveI spells that have the ritual tag fram any class's spell list. The spells appear in the book and don't count against the number of spells you know. With your Book of Shadows in hand, you can cast the chosen spells as rituals. You can't cast the spells except as rituals, unless you've learned them by some other means. You can also cast a warlock spell you know as a ritual if it has the ritual tag.
      On your adventures, you can add other ritual spells to your Book of Shadows. When you find such a spell, you can add it to the book if the spell's level is equal to or less than half your warlock level (rounded up), and it takes 2 hours and 50 gp per spell level to do so.`,
  },
  invocation_chains_of_carceri: {
    name: "Chains of Carceri",
    description: `You can cast 'Hold Monster' at will (targeting a celestial, fiend or elemental) without expending a spell slot or material components`,
  },
  invocation_devil_sight: {
    name: "Devil's Sight",
    description: `You can see normally in darkness both magical and nonmagical, to a distance of 200`,
  },
  invocation_dreadful_word: {
    name: "Dreadful Word",
    description: `You can cast 'Confusion' once using a warlock spell slot. You can't do so again until you finish a long rest.`,
  },
  invocation_eldritch_sight: {
    name: "Eldritch Sight",
    description: `You can cast 'Detect Magic' at will, without expending a spell slot`,
  },
  invocation_eldritch_spear: {
    name: "Eldritch Spear",
    description: `When you cast 'Eldritch Blast', its range is 300 feet.`,
  },
  invocation_eyes_of_the_rune_keeper: {
    name: "Eyes of the Rune Keeper",
    description: `You can read all writing.`,
  },
  invocation_fiendish_vigor: {
    name: "Fiendish Vigor",
    description: `You can cast 'False Life' on yourself at will as a 1st-level spell, without expending a spell slot or material components.`,
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
    description: `You can cast 'Disguise Self' at will, without expending a spell slot.`,
  },
  invocation_master_of_myriad_forms: {
    name: "Master of Myriad Forms",
    description: `You can cast 'Alter Self' at will, without expending a spell slot.`,
  },
  invocation_minions_of_chaos: {
    name: "Minions of Chaos",
    description: `You can cast 'Conjure Elemental' once using warlock spell slot, You can't do so again until you finish a long rest.`,
  },
  invocation_mire_the_mind: {
    name: "Mire the Mind",
    description: `You can cast 'Slow' using a warlock spell slot. You can't do so again until you finish a long rest.`,
  },
  invocation_misty_visions: {
    name: "Misty Visions",
    description: `You can cast 'Silent Image' at will, without expending a spell slot or material components.`,
  },
  invocation_one_with_shadows: {
    name: "One with Shadows",
    description: `When you are in an area of dim light or darkness, you can use your action to become invisible until you move or take an action or reaction.`,
  },
  invocation_otherworldly_leap: {
    name: "Otherworldly Leap",
    description: `You can cast 'Jump' on yourself at will, without expending a spell slot or material components.`,
  },
  invocation_repelling_blast: {
    name: "Repelling Blast",
    description: `When you hit a creature with 'Eldritch Blast', you can push the creature up to 10 feet away from you in a straight line.`,
  },
  invocation_sculptor_of_flesh: {
    name: "Sculptor of Flesh",
    description: `You can cast 'Polymorph' once using a warlock spell slot. You can't do so again until you finish a long rest`,
  },
  invocation_sign_of_ill_omen: {
    name: "Sign of Ill Omen",
    description: `You can cast 'Bestow Curse' once using a warlock spell slot. You can't do so again until you finish a long rest.`,
  },
  invocation_thief_of_five_fates: {
    name: "Thief of Five Fates",
    description: `You can cast 'Bane' once using a warlock spell slot. You can't do so again until you finish a long rest.`,
  },
  invocation_thirsting_blade: {
    name: "Thirsting Blade",
    description: `You can attack with your pact weapon twice instead of once, whenever you take the Attack action on your turn.`,
  },
  invocation_visions_of_distant_realms: {
    name: "Visions of Distant Realms",
    description: `You can cast 'Arcane Eye' at will, without expending a spell slot.`,
  },
  invocation_voice_of_the_chain_master: {
    name: "Voice of the Chain Master",
    description: `You can communicate telepathically with your familiar and perceive trhough your familiar's senses as long as you are on the same plane of existence. Additionally, while perceiving through your familiar's senses, you can also speak through your familiar in your own voice, even if your familiar is normally incapable of speech.`,
  },
  invocation_whispers_of_the_grave: {
    name: "Whispers of the Grave",
    description: `You can cast 'Speak with Dead' at will, without expending a spell slot.`,
  },
  invocation_witch_sight: {
    name: "Witch Sight",
    description: `You can see the true form of any shapechanger or creature concealed by illusion or transmutation magic while the creature is within 30 feet of you and within line of sight.`,
  },

  // XGE
  invocation_aspect_of_the_moon: {
    name: "Aspect of the Moon",
    description: `You no longer need to sleep and can't be forced to sleep by any means. To gain the benefits of a long rest, you can spend all 8 hours doing light activity, such as reading your Book of Shadows and keepin watch.`,
  },
  invocation_cloak_of_flies: {
    name: "Cloak of Flies",
    description: `As a bonus action, you can surround yourself with a magical aura that looks like buzzing flies. The aura extends 5 feet from you in every direction, but not trhough total cover. It lasts until you're incapacitated or you dismiss it as a bonus action.
      This aura grants you advantage on Charisma (Intimidation) checks but disadvantage on all other Charisma checks. Any other creature that starts its turn in the aura takes posion damage equal to your Charisma modifier (minimum of 0 damage).
      Once you use this invocation, you can't use it again until you finish a short or long rest.`,
  },
  invocation_eldritch_smite: {
    name: "Eldritch Smite",
    description: `Once per turn when you hit a creature with your pact weapon, you can expend a warlock spell slot to deal an extra 1d8 force damage to the target, plus another 1d8 per level of the spell slot, and you can knock the target prone if it's Huge or Smaller.`,
  },
  invocation_ghostly_gaze: {
    name: "Ghostly Gaze",
    description: `As an action, you gain the ability to see through solid objects to a range of 30 feet. Within that range, you have darkvision if you dont already have it. This special sight lasts for 1 minute until your concentration ends as if you were concentrating on a spell. During that time, you perceive objects as ghostly, trasparent images. Once you use this invocation, you can't use it again until you finish a short or long rest.`,
  },
  invocation_gift_of_the_depths: {
    name: "Gift of the Depths",
    description: `You can breathe underwater and you gain a swimming speed equal to your walking speed.
      you can also cast 'Water Breathing' once without expending a spell slot. You regain the ability to do so when you finish a long rest.`,
  },
  invocation_gift_of_the_ever_living_ones: {
    name: "Gift of the Ever-Living Ones",
    description: `Whenever you regain hit points while your familiar is within 100 feet of you, treat any dice rolled to determine the hit points you regain as having rolled their maximum value for you.`,
  },
  invocation_grasp_of_hadar: {
    name: "Grasp of Hadar",
    description: `Once on each of your turns when you hit a creature with your eldritch blast, you can move that creature in a straight line 10 feet closer to yourself.`,
  },
  invocation_improved_pact_weapon: {
    name: "Improved Pact Weapon",
    description: `You can use any weapon you summon with your Pact of the Blade feature as a spellcasting focus for your warlock spells.
      In addition, the weapon gains a +1 bonus to its attack and damage rolls, unless it is a magic weapon that already has a bonus to those rolls.
      Finally, the weapon you conjure can be a shortbow, longbow, light crossbow, or heavy crossbow.`,
  },
  invocation_lance_of_lethargy: {
    name: "Lance of Lethargy",
    description: `Once on each of your turns when you hit a creature with your eldritch blast, you can reduce that creature's speed by 10 feet until the end of your next turn.`,
  },
  invocation_maddening_hex: {
    name: "Maddening Hex",
    description: `As a bonus action, you cause a psychic disturbance around the target cursed by your hex spell or by a warlock feature of yours, such as Hexblade's Curse and Sign of Ill Omen. When you do so, you deal psychic damage to the cursed target and each creature of your choice within 5 feet of it. The psychic damage equals your Charisma modifier (minimum of 1 damage). To use this invocation, you must be able to see the cursed target, and it must be within 30 feet of you.`,
  },
  invocation_relentless_hex: {
    name: "Relentless Hex",
    description: `Your curse creates a temporary bond between you and your target. As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see within 5 feet of the target cursed by your hex spell or by a warlock feature of yours, such as Hexblade's Curse and Sign of Ill Omen. To teleport in this way, you must be able to see the cursed target.`,
  },
  invocation_shroud_of_shadow: {
    name: "Shroud of Shadows",
    description: `You can cast invisibility at will, without expending a spell slot.`,
  },
  invocation_tomb_of_levistus: {
    name: "Tomb of Levistus",
    description: `As a reaction when you take damage, you can entomb yourself in ice, which melts away at the end of your next turn. You gain 10 temporary hit points per warlock level, which take as much of the triggering damage as possible. Immediately after you take the damage, you gain vulnerability to fire damage, your speed is reduced to 0, and you are incapacitated. These effects, including any remaining temporary hit points, all end when the ice melts.
      Once you use this invocation, you can't use it again until you finish a short or long rest.`,
  },
  invocation_trickster_escape: {
    name: "Trickster's Escape",
    description: `You can cast freedom of movement once on yourself without expending a spell slot. You regain the ability to do so when you finish a long rest.`,
  },

  // TCE
  invocation_bond_of_the_talisman: {
    name: "Bond of the Talisman",
    description: `While someone else is wearing your talisman, you can use your action to teleport to the unoccupied space closest to them, provided the two of you are on the same plane of existence. The wearer of your talisman can do the same thing, using their action to teleport to you. The teleportation can be used a number of times equal to your proficiency bonus, and all expended uses are restored when you finish a long rest.`,
  },
  invocation_eldritch_mind: {
    name: "Eldritch Mind",
    description: `You have advantage on Constitution saving throws that you make to maintain your concentration on a spell.`,
  },
  invocation_far_scribe: {
    name: "Far Scribe",
    description: `A new page appears in your Book of Shadows. With your permission, a creature can use its action to write its name on that page, which can contain a number of names equal to your proficiency bonus.
      You can cast the sending spell, targeting a creature whose name is on the page, without using a spell slot and without using material components. To do so, you must write the message on the page. The target hears the message in their mind, and if the target replies, their message appears on the page, rather than in your mind. The writing disappears after 1 minute.
      As an action, you can magically erase a name on the page by touching it.`,
  },
  invocation_gift_of_the_protectors: {
    name: "Gift of the Protectors",
    description: `A new page appears in your Book of Shadows. With your permission, a creature can use its action to write its name on that page, which can contain a number of names equal to your proficiency bonus.
      When any creature whose name is on the page is reduced to 0 hit points but not killed outright, the creature magically drops to 1 hit point instead. Once this magic is triggered, no creature can benefit from it until you finish a long rest.
      As an action, you can magically erase a name on the page by touching it.`,
  },
  invocation_investment_of_the_chain_master: {
    name: "Investment of the Chain Master",
    description: `When you cast find familiar, you infuse the summoned familiar with a measure of your eldritch power, granting the creature the following benefits:
      - The familiar gains either a flying speed or a swimming speed (your choice) of 40 feet.
      - As a bonus action, you can command the familiar to take the Attack action.
      - The familiar's weapon attacks are considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks.
      - If the familiar forces a creature to make a saving throw, it uses your spell save DC.
      - When the familiar takes damage, you can use your reaction to grant it resistance against that damage.`,
  },
  invocation_protection_of_the_talisman: {
    name: "Protection of the Talisman",
    description: `When the wearer of your talisman fails a saving throw, they can add a d4 to the roll, potentially turning the save into a success. This benefit can be used a number of times equal to your proficiency bonus, and all expended uses are restored when you finish a long rest.`,
  },
  invocation_rebuke_of_the_talisman: {
    name: "Rebuke of the Talisman",
    description: `When the wearer of your talisman is hit by an attacker you can see within 30 feet of you, you can use your reaction to deal psychic damage to the attacker equal to your proficiency bonus and push it up to 10 feet away from the talisman's wearer.`,
  },
  invocation_undying_servitude: {
    name: "Undying Servitude",
    description: `You can cast animate dead without using a spell slot. Once you do so, you can't cast it in this way again until you finish a long rest.`,
  },
};

const boon_actions: GameLocalizationCategory = {
  pact_of_the_blade: {
    name: "Pact of the Blade",
    description: `You can use your action to create a pact weapon in your empty hand. You can choose the form that this melee weapon takes each time you create it. You are proficient with it while you wield it. This weapon counts as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.
      Your pact weapon disappears if it is more than 5 feet away from you for 1 minute or more. It also disappears if you use this feature again, if you dismiss the weapon (no action required), or if you die.
      You can transform one magic weapon into your pact weapon by performing a special ritual while you hold the weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest.
      You can then dismiss the weapon, shunting it into an extradimensional space, and it appears whenever you create your pact weapon thereafter. You can't affect an artifact or a sentient weapon in this way. The weapon ceases being your pact weapon if you die, if you perform the 1-hour ritual on a different weapon, or if you use a 1-hour ritual to break your bond to it. The weapon appears at your feet if it is in the extradimensional space when the bond breaks.`,
  },
  pact_of_the_chain: {
    name: "Pact of the Chain",
    description: `You learn the find familiar spell and can cast it as a ritual. The spell doesn't count against your number of spells known.
      When you cast the spell, you can choose one of the normal forms for your familiar or one of the following special forms: imp, pseudodragon, quasit, or sprite.
      Additionally, when you take the Attack action, you can forgo one of your own attacks to allow your familiar to make one attack with its reaction.`,
  },
  pact_of_the_tome: {
    name: "Pact of the Tome",
    description: `Your patron gives you a grimoire called a Book of Shadows. When you gain this feature, choose three cantrips from any class's spell list (the three needn't be from the same list). While the book is on your person, you can cast those cantrips at will. They don't count against your number of cantrips known. If they don't appear on the warlock spell list, they are nonetheless warlock spells for you.
      If you lose your Book of Shadows, you can perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and it destroys the previous book. The book turns to ash when you die.`,
  },

  pact_of_the_talisman: {
    name: "Pact of the Talisman",
    description: `Your patron gives you an amulet, a talisman that can aid the wearer when the need is great. When the wearer fails an ability check, they can add a d4 to the roll, potentially turning the roll into a success. This benefit can be used a number of times equal to your proficiency bonus, and all expended uses are restored when you finish a long rest.
      If you lose the talisman, you can perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and it destroys the previous amulet. The talisman turns to ash when you die.`,
  },
};

export const warlock_features_en: GameLocalizationCategory = {
  ...invocations,
  ...subclass_features,
  ...boon_actions,

  pact_magic: {
    name: "Pact Magic",
    description: `Your arcane research and the magic bestowed on you by your patron have given you facility with spells.
      Cantrips
        You know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table.
      Spell Slots
        The Warlock table shows how many spell slots you have to cast your warlock spells of 1st through 5th level. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.
        For example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell witch bolt, you must spend one of those slots, and you cast it as a 3rd-level spell.
      Spells Known of 1st Level and Higher
        At 1st level, you know two 1st-level spells of your choice from the warlock spell list.
        The Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level or higher. A spell you choose must be of a level no higher than what's shown in the table's Slot Level column for your level. When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level.
        Additionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots.
      Spellcasting Ability
        Charisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one.
          Spell save DC = 8 + your proficiency bonus + your Charisma modifier
          Spell attack modifier = your proficiency bonus + your Charisma modifier
      Spellcasting Focus
        You can use an arcane focus as a spellcasting focus for your warlock spells.`,
  },
  otherworldly_patron: {
    name: "Otherworldly Patron",
    description: `You have struck a bargain with an otherworldly being of your choice. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level.`,
  },
  eldritch_invocations: {
    name: "Eldritch Invocations",
    description: `In your study of occult lore, you have unearthed Eldritch Invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.
      You gain two eldritch invocations of your choice. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table. A level prerequisite refers to your level in this class.
      Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level.`,
  },
  pact_boon: {
    name: "Pact Boon",
    description: `Your otherworldly patron bestows a gift upon you for your loyal service. You gain one feature of Pact Boon.`,
  },
  mystic_arcanum: {
    name: "Mystic Arcanum",
    description: `Your patron bestows upon you a magical secret called an arcanum. Choose one 6th-level spell from the warlock spell list as this arcanum.
      You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.
      At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th-level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest.`,
  },
  eldritch_master: {
    name: "Eldritch Master",
    description:
      "You can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature. Once you regain spell slots with this feature, you must finish a long rest before you can do so again.",
  },
};
