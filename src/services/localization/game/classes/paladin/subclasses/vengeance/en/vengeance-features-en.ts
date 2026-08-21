import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const vengeance_features_en: GameLocalizationCategory = {
  tenets_of_vengeance: {
    name: "Tenets of Vengeance",
    description:
      "The tenets of the Oath of Vengeance vary by paladin, but all the tenets revolve around punishing wrongdoers by any means necessary. Paladins who uphold these tenets are willing to sacrifice even their own righteousness to mete out justice upon those who do evil, so the paladins are often neutral or lawful neutral in alignment. The core principles of the tenets are brutally simple. Faced with a choice of fighting my sworn foes or combating a lesser evil, I choose the greater evil. Ordinary foes might win my mercy, but my sworn enemies do not. My qualms can't get in the way of exterminating my foes. If my foes wreak ruin on the world, it is because I failed to stop them. I must help those harmed by their misdeeds.",
  },
  oath_spells: {
    name: "Oath Spells",
    description: "You gain oath spells at the paladin levels listed.",
  },
  channel_divinity: {
    name: "Channel Divinity",
    description: `You gain the following two Channel Divinity options:
      - Abjure Enemy: As an action, you present your holy symbol and speak a prayer of denunciation, using your Channel Divinity. Choose one creature within 60 feet of you that you can see. That creature must make a Wisdom saving throw, unless it is immune to being frightened. Fiends and undead have disadvantage on this saving throw. On a failed save, the creature is frightened for 1 minute or until it takes any damage. While frightened, the creature's speed is 0, and it can't benefit from any bonus to its speed. On a successful save, the creature's speed is halved for 1 minute or until the creature takes any damage.
      - Vow of Enmity: As a bonus action, you can utter a vow of enmity against a creature you can see within 10 feet of you, using your Channel Divinity. You gain advantage on attack rolls against the creature for 1 minute or until it drops to 0 hit points or falls unconscious.`,
  },
  relentless_avenger: {
    name: "Relentless Avenger",
    description:
      "Your supernatural focus helps you close off a foe's retreat. When you hit a creature with an opportunity attack, you can move up to half your speed immediately after the attack and as part of the same reaction. This movement doesn't provoke opportunity attacks.",
  },
  soul_of_vengeance: {
    name: "Soul of Vengeance",
    description:
      "The authority with which you speak your Vow of Enmity gives you greater power over your foe. When a creature under the effect of your Vow of Enmity makes an attack, you can use your reaction to make a melee weapon attack against that creature if it is within range.",
  },
  avenging_angel: {
    name: "Avenging Angel",
    description:
      "You can assume the form of an angelic avenger. Using your action, you undergo a transformation. For 1 hour, you gain the following benefits: Wings sprout from your back and grant you a flying speed of 60 feet. You emanate an aura of menace in a 30-foot radius. The first time any enemy creature enters the aura or starts its turn there during a battle, the creature must succeed on a Wisdom saving throw or become frightened of you for 1 minute or until it takes any damage. Attack rolls against the frightened creature have advantage. Once you use this feature, you can't use it again until you finish a long rest.",
  },
};
