import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const clockwork_soul_actions_en: GameLocalizationCategory = {
  restore_balance: {
    name: "Restore Balance",
    description: `You cancel the advantage or disadvantage on a d20 roll of a creature you can see within 60 feet of you.`,
  },
  bastion_of_law: {
    name: "Bastion of Law",
    description: `You 1 to 5 sorcery points to create a magical ward around yourself or another creature you can see within 30 feet of you. The ward lasts until you finish a long rest or until you use this feature again.
      The ward is represented by a number of d8s equal to the number of sorcery points spent to create it. When the warded creature takes damage, it can expend a number of those dice, roll them, and reduce the damage taken by the total rolled on those dice.`,
  },
  trance_of_order: {
    name: "Trance of Order",
    description: `For 1 minute, attack rolls against you can't benefit from advantage, and whenever you make an attack roll, an ability check, or a saving throw, you can treat a roll of 9 or lower on the d20 as a 10..`,
  },
  clockwork_cavalcade: {
    name: "Clockwork Cavalcade",
    description: `You provoke the next effects in a 30-feet cube originating from you:
        - You restore up to 100 hit points, divided as you choose among any number of creatures of your choice in the cube.
        - Any damaged objects entirely in the cube are repaired instantly.
        - Every spell of 6th level or lower ends on creatures and objects of your choice in the cube.`,
  },
};
