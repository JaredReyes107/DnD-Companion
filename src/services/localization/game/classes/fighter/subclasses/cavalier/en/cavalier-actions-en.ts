import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const cavalier_actions_en: GameLocalizationCategory = {
  unwavering_mark: {
    name: "Unwavering Mark",
    description:
      "When you hit a creature with a melee weapon attack, you can mark the creature until the end of your next turn. This effect ends early if you are incapacitated or you die, or if someone else marks the creature. While it is within 5 feet of you, a creature marked by you has disadvantage on any attack roll that doesn't target you.",
  },
  unwavering_mark_retaliate: {
    name: "Unwavering Mark: Retaliate",
    description:
      "If a creature marked by you deals damage to anyone other than you, you can make a special melee weapon attack against the marked creature as a bonus action on your next turn. You have advantage on the attack roll, and if it hits, the attack's weapon deals extra damage to the target equal to half your fighter level.",
  },
  warding_maneuver: {
    name: "Warding Maneuver",
    description:
      "If you or a creature you can see within 5 feet of you is hit by an attack, you can roll 1d8 as a reaction if you're wielding a melee weapon or a shield. Roll the die, and add the number rolled to the target's AC against that attack. If the attack still hits, the target has resistance against the attack's damage.",
  },
  hold_the_line: {
    name: "Hold the Line",
    description:
      "Creatures provoke an opportunity attack from you when they move 5 feet or more while within your reach, and if you hit a creature with an opportunity attack, the target's speed is reduced to 0 until the end of the current turn.",
  },
  ferocious_charger: {
    name: "Ferocious Charger",
    description:
      "If you move at least 10 feet in a straight line right before attacking a creature and you hit it with the attack, that target must succeed on a Strength saving throw (8 + your proficiency bonus + your Strength modifier) or be knocked prone. You can use this feature only once on each of your turns.",
  },
  vigilant_defender: {
    name: "Vigilant Defender",
    description:
      "You get a special reaction that you can take once on every creature's turn, except your turn. You can use this special reaction only to make an opportunity attack, and you can't use it on the same turn that you take your normal reaction.",
  },
};
