import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { devotion_features_en } from "../subclasses/devotion/en/devotion-features-en";
import { ancients_features_en } from "../subclasses/ancients/en/ancients-features-en";
import { vengeance_features_en } from "../subclasses/vengeance/en/vengeance-features-en";

import { oathbreaker_features_en } from "../subclasses/oathbreaker/en/oathbreaker-features-en";

import { conquest_features_en } from "../subclasses/conquest/en/conquest-features-en";
import { redemption_features_en } from "../subclasses/redemption/en/redemption-features-en";

import { glory_features_en } from "../subclasses/glory/en/glory-features-en";
import { watchers_features_en } from "../subclasses/watchers/en/watchers-features-en";

export const subclass_features: GameLocalizationCategory = {
  devotion: devotion_features_en,
  ancient: ancients_features_en,
  vengeance: vengeance_features_en,

  oathbreaker: oathbreaker_features_en,

  conquest: conquest_features_en,
  redemption: redemption_features_en,

  glory: glory_features_en,
  watchers: watchers_features_en,
};

export const paladin_features_en: GameLocalizationCategory = {
  ...subclass_features,

  divine_sense: {
    name: "Divine Sense",
    description: `The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the Hallow spell.
      You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.`,
  },
  lay_on_hands: {
    name: "Lay on Hands",
    description: `Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5.
      As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool. Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one. This feature has no effect on undead and constructs.`,
  },
  spellcasting_paladin: {
    name: "Spellcasting",
    description: `You have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does.
      Preparing and Casting Spells:
        The Paladin table shows how many spell slots you have to cast your paladin spells. To cast one of your paladin spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.
        You prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.
        For example, if you are a 5th-level paladin, you have four 1st-level and two 2nd-level spell slots. With a Charisma of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell Cure Wounds, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.
        You can change your list of prepared spells when you finish a long rest. Preparing a new list of paladin spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.
      Spellcasting Ability:
        Charisma is your spellcasting ability for your paladin spells, since their power derives from the strength of your convictions. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a paladin spell you cast and when making an attack roll with one.
        Spell save DC = 8 + your proficiency bonus + your Charisma modifier
        Spell attack modifier = your proficiency bonus + your Charisma modifier
      Spellcasting Focus:
        You can use a holy symbol as a spellcasting focus for your paladin spells.`,
  },
  divine_smite: {
    name: "Divine Smite",
    description: `Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend, to a maximum of 6d8.`,
  },
  divine_health: {
    name: "Divine Health",
    description: `The divine magic flowing through you makes you immune to disease.`,
  },
  sacred_oath: {
    name: "Sacred Oath",
    description: `When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Your choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature.`,
  },
  aura_of_protection: {
    name: "Aura of Protection",
    description: `Whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus. At 18th level, the range of this aura increases to 30 feet.`,
  },
  aura_of_courage: {
    name: "Aura of Courage",
    description: `You and friendly creatures within 10 feet of you can't be frightened while you are conscious. At 18th level, the range of this aura increases to 30 feet.`,
  },
  improved_divine_smite: {
    name: "Improved Divine Smite",
    description: `You are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage.`,
  },
  cleansing_touch: {
    name: "Cleansing Touch",
    description: `You can use your action to end one spell on yourself or on one willing creature that you touch. You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest.`,
  },
};
