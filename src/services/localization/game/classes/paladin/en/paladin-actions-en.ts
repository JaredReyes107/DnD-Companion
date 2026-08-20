import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const paladin_actions_en: GameLocalizationCategory = {
  divine_sense: {
    name: "Divine Sense",
    description: `Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the Hallow spell.`,
  },
  lay_on_hands: {
    name: "Lay on Hands",
    description: `You touch a creature to  restore a number of hit points to that creature, up to the maximum amount remaining in your pool. Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one. This feature has no effect on undead and constructs.`,
  },
  divine_smite: {
    name: "Divine Smite",
    description: `When you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend, to a maximum of 6d8.`,
  },
  improved_divine_smite: {
    name: "Improved Divine Smite",
    description: `Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage.`,
  },
  cleansing_touch: {
    name: "Cleansing Touch",
    description: `You end one spell on yourself or on one willing creature that you touch.`,
  },
};
