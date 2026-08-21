import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const redemption_features_en: GameLocalizationCategory = {
  tenets_of_redemption: {
    name: "Tenets of Redemption",
    description:
      "The tenets of the Oath of Redemption hold a paladin to a high standard of peace and justice. Violence is a weapon of last resort. Diplomacy and understanding are the paths to long-lasting peace. All people begin life in an innocent state, and it is their environment or the influence of dark forces that drives them to evil. By setting the proper example, and working to heal the wounds of a deeply flawed world, you can set anyone on a righteous path. Change takes time. Those who have walked the path of the wicked must be given reminders to keep them honest and true. Once you have planted the seed of righteousness in a creature, you must work day after day to allow that seed to survive and flourish. Your heart and mind must stay clear, for eventually you will be forced to admit defeat. While every creature can be redeemed, some are so far along the path of evil that you have no choice but to end their lives for the greater good. Any such action must be carefully weighed and the consequences fully understood, but once you have made the decision, follow through with it knowing your path is just.",
  },
  oath_spells: {
    name: "Oath Spells",
    description: "You gain oath spells at the paladin levels listed.",
  },
  channel_divinity_redemption: {
    name: "Channel Divinity",
    description: `You gain the following two Channel Divinity options:
    - Emissary of Peace: You can use your Channel Divinity to augment your presence with divine power. As a bonus action, you grant yourself a +5 bonus to Charisma (Persuasion) checks for the next 10 minutes.
    - Rebuke the Violent: You can use your Channel Divinity to rebuke those who use violence. Immediately after an attacker within 30 feet of you deals damage with an attack against a creature other than you, you can use your reaction to force the attacker to make a Wisdom saving throw. On a failed save, the attacker takes radiant damage equal to the damage it just dealt. On a successful save, it takes half as much damage.`,
  },
  aura_of_the_guardian: {
    name: "Aura of the Guardian",
    description:
      "You can shield others from harm at the cost of your own health. When a creature within 10 feet of you takes damage, you can use your reaction to magically take that damage, instead of that creature taking it. This feature doesn't transfer any other effects that might accompany the damage, and this damage can't be reduced in any way. At 18th level, the range of this aura increases to 30 feet.",
  },
  protective_spirit: {
    name: "Protective Spirit",
    description:
      "A holy presence mends your wounds in battle. You regain hit points equal to 1d6 + half your paladin level if you end your turn in combat with fewer than half of your hit points remaining and you aren't incapacitated.",
  },
  emissary_of_redemption: {
    name: "Emissary of Redemption",
    description:
      "You become an avatar of peace, which gives you two benefits: You have resistance to all damage dealt by other creatures (their attacks, spells, and other effects). Whenever a creature hits you with an attack, it takes radiant damage equal to half the damage you take from the attack. If you attack a creature, cast a spell on it, or deal damage to it by any means but this feature, neither benefit works against that creature until you finish a long rest.",
  },
};
