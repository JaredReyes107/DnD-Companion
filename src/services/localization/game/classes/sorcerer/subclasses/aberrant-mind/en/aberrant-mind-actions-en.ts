import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const aberrant_mind_actions_en: GameLocalizationCategory = {
  telepathic_speech: {
    name: "Telepathic Speech",
    description: `You and a creature you choose within 30 feet of you  can speak telepathically with each other while the two of you are within a number of miles of each other equal to your Charisma modifier (minimum of 1 mile). To understand each other, you each must speak mentally in a language the other knows.
        The telepathic connection lasts for a number of minutes equal to your sorcerer level. It ends early if you are incapacitated or die or if you use this ability to form a connection with a different creature.`,
  },
  psionic_sorcery: {
    name: "Psionic Sorcery",
    description: `You cast a spell from your 'Psionic Spells' feature using sorcery points equal to the spell's level.`,
  },
  revelation_in_flesh: {
    name: "Revelation in Flesh",
    description: `You spend 1 or more sorcery points to magically transform your body for 10 minutes. For each sorcery point you spend, you can gain one of the following benefits of your choice, the effects of which last until the transformation ends:
        - You can see any invisible creature within 60 feet of you, provided it isn't behind total cover. Your eyes also turn black or become writhing sensory tendrils.
        - You gain a flying speed equal to your walking speed and can hover. As you fly, your skin glistens with mucus or shines with an otherworldly light.
        - You gain a swimming speed equal to twice your walking speed, and you can breathe underwater. Moreover, gills grow from your neck or fan out from behind your ears, your fingers become webbed, or you grow writhing cilia that extend through your clothing.
        - Your body, along with any equipment you are wearing or carrying, becomes slimy and pliable. You can move through any space as narrow as 1 inch without squeezing, and you can spend 5 feet of movement to escape from nonmagical restraints or being grappled.`,
  },
  warping_implosion: {
    name: "Warping Implosion",
    description: `You teleport to an unoccupied space you can see within 120 feet of you. Immediately after you disappear, each creature within 30 feet of the space you left must make a Strength saving throw against your spell save DC. On a failed save, a creature takes 3d10 force damage and is pulled straight toward the space you left, ending in an unoccupied space as close to your former space as possible. On a successful save, the creature takes half as much damage and isn't pulled.`,
  },
};
