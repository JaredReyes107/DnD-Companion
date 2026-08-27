import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const wild_magic_sorcerer_actions_en: GameLocalizationCategory = {
  wild_magic_surge: {
    name: "Wild Magic Surge",
    description: `Once per turn, the DM can have you roll a d20 immediately after you cast a sorcerer spell of 1st level or higher. If you roll a 1, roll on the Wild Magic Surge table to create a magical effect. If that effect is a spell, it is too wild to be affected by your Metamagic, and if it normally requires concentration, it doesn't require concentration in this case; the spell lasts for its full duration. In addition, you regain one use of 'Tides of Chaos'.`,
  },
  tides_of_chaos: {
    name: "Tides of Chaos",
    description: `You gain advantage on one attack roll, ability check, or saving throw.`,
  },
  bend_luck: {
    name: "Bend Luck",
    description: `When another creature you can see makes an attack roll, an ability check, or a saving throw, you can use your reaction and spend 2 sorcery points to roll 1d4 and apply the number rolled as a bonus or penalty (your choice) to the creature's roll. You can do so after the creature rolls but before any effects of the roll occur.`,
  },
  spell_bombardment: {
    name: "Spell Bombardment",
    description: `When you roll damage for a spell and roll the highest number possible on any of the dice, choose one of those dice, roll it again and add that roll to the damage. You can use the feature only once per turn.`,
  },
};
