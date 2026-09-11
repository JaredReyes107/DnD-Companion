import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const kensei_actions_en: GameLocalizationCategory = {
  agile_parry: {
    name: "Agile Parry",
    description: `If you make an unarmed strike as part of the Attack action on your turn and are holding a kensei weapon, you can use it to defend yourself if it is a melee weapon. You gain a +2 bonus to AC until the start of your next turn, while the weapon is in your hand and you aren’t incapacitated.`,
  },
  kensei_shot: {
    name: "Kensei Shot",
    description: `Until the end of your turn, your ranged attacks with a kensei weapon deal an extra 1d4 damage of the weapon’s type.`,
  },
  deft_strike: {
    name: "Deft Strike",
    description: `You spend 1 ki point when you hit a target with a kensei weapon to deal extra damage to the target equal to your Martial Arts die.`,
  },
  sharpen_the_blade: {
    name: "Sharpen the Blade",
    description: `You expend up to 3 ki points to grant one kensei weapon you touch a bonus to attack and damage rolls when you attack with it. The bonus equals the number of ki points you spent. This bonus lasts for 1 minute or until you use this feature again. This feature has no effect on a magic weapon that already has a bonus to attack and damage rolls.`,
  },
  unerring_accurracy: {
    name: "Unerring Acurracy",
    description: `You reroll an atack you missed using a monk weapon on your turn.`,
  },
};
