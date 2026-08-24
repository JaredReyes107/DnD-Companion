import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const rogue_features_en: GameLocalizationCategory = {
  expertise_rogue: {
    name: "Expertise",
    description:
      "Choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies. At 6th level, you can choose two more of your proficiencies (in skills or with thieves' tools) to gain this benefit.",
  },
  sneak_attack: {
    name: "Sneak Attack",
    description: `You know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.
      You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll.
      The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table.`,
  },
  thieves_cant: {
    name: "Thieves' Cant",
    description: `During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.
      In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.`,
  },
  cunning_action: {
    name: "Cunning Action",
    description: `Your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action.`,
  },
  roguish_archetype: {
    name: "Roguish Archetype",
    description: `You choose an archetype that you emulate in the exercise of your rogue abilities. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level.`,
  },
  uncanny_dodge: {
    name: "Uncanny Dodge",
    description: `When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you.`,
  },
  evasion: {
    name: "Evasion",
    description: `You can nimbly dodge out of the way of certain area effects, such as a red dragon's fiery breath or an Ice Storm spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.`,
  },
  reliable_talent: {
    name: "Reliable Talent",
    description: `You have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10.`,
  },
  blindsense: {
    name: "Blindsense",
    description: `If you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you.`,
  },
  slippery_mind: {
    name: "Slippery Mind",
    description: `You have acquired greater mental strength. You gain proficiency in Wisdom saving throws.`,
  },
  elusive: {
    name: "Elusive",
    description: `You are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren't incapacitated.`,
  },
  stroke_of_luck: {
    name: "Stroke of Luck",
    description: `You have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20.
      Once you use this feature, you can't use it again until you finish a short or long rest.`,
  },
};
