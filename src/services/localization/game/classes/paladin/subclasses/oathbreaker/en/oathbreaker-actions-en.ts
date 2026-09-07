import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const oathbreaker_actions_en: GameLocalizationCategory = {
  channel_divinity_control_undead: {
    name: "Control Undead",
    description: `You target one undead creature you can see within 30 feet of you. The target must make a Wisdom saving throw. On a failed save, the target must obey your commands for the next 24 hours, or until you use this Channel Divinity option again. An undead whose challenge rating is equal to or greater than your paladin level is immune to this effect.`,
  },
  channel_divinity_dreadful_aspect: {
    name: "Dreadful Aspect",
    description: `Each creature of your choice within 30 feet of you must make a Wisdom saving throw if it can see you. On a failed save, the target is frightened of you for 1 minute. If a creature frightened by this effect ends its turn more than 30 feet away from you, it can attempt another Wisdom saving throw to end the effect on it.`,
  },
  dread_lord: {
    name: "Dread Lord",
    description: `You surround yourself with an aura of gloom that lasts for 1 minute. The aura reduces any bright light in a 30-foot radius around you to dim light. Whenever an enemy that is frightened by you starts its turn in the aura, it takes 4d10 psychic damage. Additionally, you and any creatures of your choosing in the aura are draped in deeper shadow. Creatures that rely on sight have disadvantage on attack rolls against creatures draped in this shadow.`,
  },
  dread_lord_shadow_grasp: {
    name: "Dread Lord: Shadow Grasp",
    description: `You make a melee spell attack against a target inside the aura target. If the attack hits, the target takes necrotic damage equal to 3d10 + your Charisma modifier.`,
  },
};
