import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const light_actions_en: GameLocalizationCategory = {
  warding_flare: {
    name: "Warding Flare",
    description:
      "When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that can't be blinded is immune to this feature.",
  },
  channel_divinity_radiance_of_the_dawn: {
    name: "Radiance of the Dawn",
    description:
      "You present your holy symbol, and any magical darkness within 30 feet of you is dispelled. Additionally, each hostile creature within 30 feet of you must make a Constitution saving throw. A creature takes radiant damage equal to 2d10 + your cleric level on a failed saving throw, and half as much damage on a successful one. A creature that has Cover from you is not affected.",
  },
  corona_of_light: {
    name: "Corona of Light",
    description: `You activate an aura of sunlight that lasts for 1 minute or until you dismiss it using another action. You emit bright light in a 60-foot radius and dim light 30 feet beyond that. Your enemies in the bright light have disadvantage on saving throws against any spell that deals fire or radiant damage`,
  },
};
