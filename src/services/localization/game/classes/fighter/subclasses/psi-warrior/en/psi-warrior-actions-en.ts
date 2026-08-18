import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const psi_warrior_actions_en: GameLocalizationCategory = {
  psionic_recovery: {
    name: "Psionic Recovery",
    description: `You regain one expended Psionic Energy die`,
  },
  protective_field: {
    name: "Protective Field",
    description: `When you or another creature you can see within 30 feet of you takes damage, you can use your reaction to expend one Psionic Energy die, roll the die, and reduce the damage taken by the number rolled plus your Intelligence modifier (minimum reduction of 1).`,
  },
  psionic_strike: {
    name: "Psionic Strike",
    description: `Once on each of your turns, immediately after you hit a target within 30 feet of you with an attack and deal damage to it with a weapon, you can expend one Psionic Energy die, rolling it and dealing force damage to the target equal to the number rolled plus your Intelligence modifier.`,
  },
  telekinetic_movement: {
    name: "Telekinetic Movement",
    description: `You target one loose object that is Large or smaller or one willing creature, other than yourself. If you can see the target and it is within 30 feet of you, you can move it up to 30 feet to an unoccupied space you can see. Alternatively, if it is a Tiny object, you can move it to or from your hand. Either way, you can move the target horizontally, vertically, or both.`,
  },
  psi_powered_leap: {
    name: "Psi-Powered Leap",
    description: `You gain a flying speed equal to twice your walking speed until the end of the current turn.`,
  },
  telekinetic_thrust: {
    name: "Telekinetic Thrust",
    description: `When you deal damage to a target with your Psionic Strike, you can force the target to make a Strength saving throw against a DC equal to 8 + your proficiency bonus + your Intelligence modifier. If the save fails, you can knock the target prone or move it up to 10 feet in any direction horizontally.`,
  },
  guarded_mind: {
    name: "Guarded Mind",
    description: `If you start your turn charmed or frightened, you can expend a Psionic Energy die and end every effect on yourself subjecting you to those conditions.`,
  },
  bulwark_of_force: {
    name: "Bulwark of Force",
    description: `You can choose creatures, which can include you, that you can see within 30 feet of you, up to a number of creatures equal to your Intelligence modifier (minimum of one creature). Each of the chosen creatures is protected by half cover for 1 minute or until you're incapacitated.`,
  },
  telekinetic_master_telekinesis: {
    name: "Telekinetic Master: Telekinesis",
    description: `You cast the 'Telekinesis' spell, requiring no components, and your spellcasting ability for the spell is Intelligence.`,
  },
  telekinetic_master_attack: {
    name: "Telekinetic Master: Attack",
    description: `On each of your turns while you concentrate on the spell 'Telekinesis', including the turn when you cast it, you can make one attack with a weapon as a bonus action.`,
  },
};
