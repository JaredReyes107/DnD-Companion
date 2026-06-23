import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const nature_actions_en: GameLocalizationCategory = {
  channel_divinity_charm_animals_and_plants: {
    name: "Charm Animals and Plants",
    description:
      "You present your holy symbol and invoke the name of your deity. Each beast or plant creature that can see you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is charmed by you for 1 minute or until it takes damage. While it is charmed by you, it is friendly to you and other creatures you designate.",
  },
  dampen_elements: {
    name: "Dampen Elements",
    description:
      "When you or a creature within 30 feet of you takes acid, cold, fire, lightning, or thunder damage, you can use your reaction to grant resistance to the creature against that instance of the damage.",
  },
  master_of_nature: {
    name: "Master of Nature",
    description:
      "While creatures are charmed by your Charm Animals and Plants feature, you can take a bonus action on your turn to verbally command what each of those creatures will do on its next turn.",
  },
};
