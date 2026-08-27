import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const aberrant_mind_features_en: GameLocalizationCategory = {
  psionic_spells: {
    name: "Psionic Spells",
    description:
      "You learn additional spells when you reach certain levels in this class, as shown on the Psionic Spells table. Each of these spells counts as a sorcerer spell for you, but it doesn't count against the number of sorcerer spells you know. Whenever you gain a sorcerer level, you can replace one spell you gained from this feature with another spell of the same level. The new spell must be a divination or an enchantment spell from the sorcerer, warlock, or wizard spell list.",
  },
  telepathic_speech: {
    name: "Telepathic Speech",
    description:
      "You can form a telepathic connection between your mind and the mind of another. As a bonus action, choose one creature you can see within 30 feet of you. You and the chosen creature can speak telepathically with each other while the two of you are within a number of miles of each other equal to your Charisma modifier (minimum of 1 mile). To understand each other, you each must speak mentally in a language the other knows. The telepathic connection lasts for a number of minutes equal to your sorcerer level. It ends early if you are incapacitated or die or if you use this ability to form a connection with a different creature.",
  },
  psionic_sorcery: {
    name: "Psionic Sorcery",
    description:
      "When you cast any spell of 1st level or higher from your Psionic Spells feature, you can cast it by expending a spell slot as normal or by spending a number of sorcery points equal to the spell's level. If you cast the spell using sorcery points, it requires no verbal or somatic components, and it requires no material components, unless they are consumed by the spell.",
  },
  psychic_defenses: {
    name: "Psychic Defenses",
    description:
      "You gain resistance to psychic damage, and you have advantage on saving throws against being charmed or frightened.",
  },
  revelation_in_flesh: {
    name: "Revelation in Flesh",
    description:
      "You can unleash the aberrant truth hidden within yourself. As a bonus action, you can spend 1 or more sorcery points to magically transform your body for 10 minutes. For each sorcery point you spend, you can gain one of the following benefits of your choice, the effects of which last until the transformation ends: You can see any invisible creature within 60 feet of you, provided it isn't behind Cover. Your eyes also turn black or become writhing sensory tendrils. You gain a flying speed equal to your walking speed, and you can hover. As you fly, your skin glistens with mucus or shines with an otherworldly light. You gain a swimming speed equal to twice your walking speed, and you can breathe underwater. Moreover, gills grow from your neck or fan out from behind your ears, your fingers become webbed, or you grow writhing cilia that extend through your clothing. Your body, along with any equipment you are wearing or carrying, becomes slimy and pliable. You can move through any space as narrow as 1 inch without squeezing, and you can spend 5 feet of movement to escape from nonmagical restraints or being grappled.",
  },
  warping_implosion: {
    name: "Warping Implosion",
    description:
      "You can unleash your aberrant power as a space-warping anomaly. As an action, you can teleport to an unoccupied space you can see within 120 feet of you. Immediately after you disappear, each creature within 30 feet of the space you left must make a Strength saving throw against your spell save DC. On a failed save, a creature takes 3d10 force damage and is pulled straight toward the space you left, ending in an unoccupied space as close to your former space as possible. On a successful save, the creature takes half as much damage and isn't pulled. Once you use this feature, you can't do so again until you finish a long rest, unless you spend 5 sorcery points to use it again.",
  },
};
