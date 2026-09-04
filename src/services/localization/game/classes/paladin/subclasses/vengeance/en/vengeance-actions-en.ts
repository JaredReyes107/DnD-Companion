import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const vengeance_actions_en: GameLocalizationCategory = {
  channel_divinity_abjure_enemy: {
    name: "Abjure Enemy",
    description: `Choose one creature within 60 feet of you that you can see. That creature must make a Wisdom saving throw, unless it is immune to being frightened. Fiends and undead have disadvantage on this saving throw.`,
  },
  channel_divinity_vow_of_enmity: {
    name: "Vow of Enmity",
    description: `You utter a vow of enmity against a creature you can see within 10 feet of you. You gain advantage on attack rolls against the creature for 1 minute or until it drops to 0 hit points or falls unconscious.`,
  },
  soul_of_vengeance: {
    name: "Soul of Vengeance",
    description: `You make a melee weapon attack against a creature under the effect of your Vow of Enmity making an attack`,
  },
  avenging_angel: {
    name: "Avenging Angel",
    description: `You transform and gain the following benefits for 1 hour:
    - Wings sprout from your back and grant you a flying speed of 60 feet.
    - You emanate an aura of menace in a 30-foot radius. The first time any enemy creature enters the aura or starts its turn there during a battle, the creature must succeed on a Wisdom saving throw or become frightened of you for 1 minute or until it takes any damage. Attack rolls against the frightened creature have advantage.`,
  },
};
