import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const spores_actions_es: GameLocalizationCategory = {
  halo_of_spores: {
    name: "Halo of Spores",
    description:
      "You are surrounded by invisible, necrotic spores that are harmless until you unleash them on a creature nearby. When a creature you can see moves into a space within 10 feet of you or starts its turn there, you can use your reaction to deal 1d4 necrotic damage to that creature unless it succeeds on a Constitution saving throw against your spell save DC. The necrotic damage increases to 1d6 at 6th level, 1d8 at 10th level, and 1d10 at 14th level.",
  },
  symbiotic_entity: {
    name: "Symbiotic Entity",
    description:
      "You gain the ability to channel magic into your spores. As an action, you can expend a use of your Wild Shape feature to awaken those spores, rather than transforming into a beast form, and you gain 4 temporary hit points for each level you have in this class. While this feature is active, you gain the following benefits: When you deal your Halo of Spores damage, roll the damage die a second time and add it to the total. Your melee weapon attacks deal an extra 1d6 necrotic damage to any target they hit. These benefits last for 10 minutes, until you lose all these temporary hit points, or until you use your Wild Shape again.",
  },
  fungal_infestation: {
    name: "Fungal Infestation",
    description:
      "Your spores gain the ability to infest a corpse and animate it. If a beast or a humanoid that is Small or Medium dies within 10 feet of you, you can use your reaction to animate it, causing it to stand up immediately with 1 hit point. The creature uses the zombie stat block in the Monster Manual. It remains animate for 1 hour, after which time it collapses and dies. In combat, the zombie's turn comes immediately after yours. It obeys your mental commands, and the only action it can take is the Attack action, making one melee attack. You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest.",
  },
  spreading_spores_activate: {
    name: "Create Spreading Spores",
    description:
      "While your Symbiotic Entity feature is active, you can hurl spores up to 30 feet away, where they swirl in a 10-foot cube for 1 minute. The spores disappear early if you use this feature again. Whenever a creature moves into the cube or starts its turn there, that creature takes your Halo of Spores damage, unless the creature succeeds on a Constitution saving throw against your spell save DC. A creature can take this damage no more than once per turn. While the cube of spores persists, you can't use your Halo of Spores reaction.",
  },
  spreading_spores_deactivate: {
    name: "Dispel Spreading Spores",
    description:
      "You can dismiss the spores early as a bonus action. They also dissapear if your Symbiotic Entity feature is no longer active.",
  },
};
