import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const artillerist_actions_en: GameLocalizationCategory = {
    eldritch_cannon_create: {
        name: "Create Eldritch Cannon",
        description: `You create a Small or Tiny cannon on a horizontal surface within 5 feet of you. The Small cannon occupies it's space, while a Tiny cannon which can be held on one hand. When you do so, you decide it's type between a 'Flamethrower', a 'Force Ballista' or a 'Protector', and you decide whether it has legs or not in order to allow it to move.
            The cannon has an AC of 18 and a number of hit points equal to 5 times your artificer level. It's inmune to poison and psychic damage, and all it's ability scores are 10. If the 'Mending' cantrip is cast on it, it regains 2d6 hit points.
            It dissapears after 1 hour of if it reaches 0 hit points.`,
    },
    eldritch_cannon_activate: {
        name: "Activate Eldritch Cannon",
        description: `You activate one of your Eldritch Cannons that's within 60 feet of you, and you can make it walk or climb up to 15 feet to an unnocupied space, provided it has legs. Its activation effect depends on its type:
            - Flamethrower: Every creature in 15-foot cone adjacent to the cannon must make a Dexterity saving throw against your spell save DC, takind 2d8 fire damage on a failed save or half as much damage on any succesful one. Its fire ignites any flammabe objects in the area that aren't being worn or carried.
            - Force Ballista: You make a ranged spell attack originating from the cannon with a range of 120 feet. On a hit, the target takes 2d8 force damage and, if it's a creature, it's pushed 5 feet away form the cannon.
            - Protector: The cannon itself and each creature of your choice within 10 feet of it obtain a number of temporary hit points equal to 1d8 + your Intelligence modifier (minimum of +1).`,
    },
    eldritch_cannon_dismiss: {
        name: "Dismiss Eldritch Cannon",
        description: `You dismiss one of your Eldritch Cannons.`,
    },
    arcane_firearm_create: {
        name: "Create Arcane Firearm",
        description: `When you finish a long restm you use your woodcarver's tools and make a wand, staff or rod your Arcane Firearm. 
            It counts as a spellcasting focus for your artificer spell, and you add 1d8 bonus damage to one damage roll of spells you cast using it.`,
    },
    eldritch_cannon_detonate: {
        name: "Detonate Eldritch Cannon",
        description: `One of your cannons within 60 feet of you detonates. The cannon is destroyed, and each creature within 20 feet of it makes a Dexterity saving throw against your spell save DC, taking 3d8 force damage on a failed save or half as much on a successful one.`,
    },
};
