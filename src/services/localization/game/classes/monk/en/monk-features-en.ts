import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const monk_features_en: GameLocalizationCategory = {
  unarmored_defense: {
    name: "Unarmored Defense",
    description: `While you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.`,
  },
  martial_arts: {
    name: "Martial Arts",
    description: `Your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don't have the two-handed or heavy property.
      You gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield:
      You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.
      You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.
      When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn.
      Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon on the Weapons page.`,
  },
  ki: {
    name: "Ki",
    description: `Your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table.
      You can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.
      When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.
      Some of your ki features require your target to make a saving throw to resist the feature's effects. The saving throw DC is calculated as follows:
        Ki save DC = 8 + your proficiency bonus + your Wisdom modifier`,
  },
  unarmored_movement_monk: {
    name: "Unarmored Movement",
    description: `Your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases by an additional 5 feet at levels.
      At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move.`,
  },
  monastic_tradition: {
    name: "Monastic Tradition",
    description: `When you reach 3rd level, you commit yourself to a monastic tradition. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level.`,
  },
  deflect_missiles: {
    name: "Deflect Missiles",
    description: `You can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level.
      If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with a range of 20/60 using the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack.`,
  },
  slow_fall: {
    name: "Slow Fall",
    description: `You can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level.`,
  },
  extra_attack: {
    name: "Extra Attack",
    description: `You can attack twice, instead of once, whenever you take the Attack action on your turn.`,
  },
  stunning_strike: {
    name: "Stunning Strike",
    description: `You can interfere with the flow of ki in an opponent's body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.`,
  },
  ki_empowered_strikes: {
    name: "Ki-Empowered Strikes",
    description: `Your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.`,
  },
  evasion: {
    name: "Evasion",
    description: `Your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon's lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.`,
  },
  stillness_of_mind: {
    name: "Stillness of Mind",
    description: `You can use your action to end one effect on yourself that is causing you to be charmed or frightened.`,
  },
  purity_of_body: {
    name: "Purity of Body",
    description: `Your mastery of the ki flowing through you makes you immune to disease and poison.`,
  },
  tongue_of_the_sun_and_moon: {
    name: "Tongue of the Sun and Moon",
    description: `You learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say.`,
  },
  diamond_soul: {
    name: "Diamond Soul",
    description: `Your mastery of ki grants you proficiency in all saving throws. Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result.`,
  },
  timeless_body: {
    name: "Timeless Body",
    description: `Your ki sustains you so that you suffer none of the frailty of old age, and you can't be aged magically. You can still die of old age, however. In addition, you no longer need food or water.`,
  },
  empty_body: {
    name: "Empty Body",
    description: `You can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.
      Additionally, you can spend 8 ki points to cast the astral projection spell, without needing material components. When you do so, you can't take any other creatures with you.`,
  },
  perfect_self: {
    name: "Perfect Self",
    description: `When you roll for initiative and have no ki points remaining, you regain 4 ki points.`,
  },
};
