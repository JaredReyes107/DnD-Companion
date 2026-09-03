import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const transmutation_actions_en: GameLocalizationCategory = {
  minor_alchemy: {
    name: "Minor Alchemy",
    description: `You spend 10 minutes and transform 1 cubic foot of material of an object composed entirely of wood, stone (but not a gemstone), iron, copper, or silver into a different one of those materials. It lasts for 1 hour or until you lose concentration., after which the material reverts to its original substance.`,
  },
  transmuters_stone_create: {
    name: "Create Transmuter's Stone",
    description: `You spend 8 hours creating a transmuter's stone that can gives the creature who carries it one of the next benefits, chosen at creation:
        - Darkvision out to a range of 60 feet
        - An increase to speed of 10 feet while the creature is unencumbered
        - Proficiency in Constitution saving throws
        - Resistance to acid, cold, fire, lightning, or thunder damage (your choice whenever you choose this benefit)
        If you create a new transmuter's stone, the previous one ceases to function.`,
  },
  transmuters_stone_alter: {
    name: "Alter Transmuter's Stone",
    description: `Each time you cast a transmutation spell of 1st level or higher, you can change the effect of your stone if the stone is on your person.`,
  },
  shapechanger: {
    name: "Shapechanger",
    description: `You cast 'Polymorph' on yourself, transforming into a beast whose challenge rating is 1 or lower.`,
  },
  master_transmuter: {
    name: "Master Transmuter",
    description: `You destroy your transmuter's stone and can't be remade until you finish a long rest, granting you one of the next benefits:
        - Major Transformation. You can transmute one nonmagical object (no larger than a 5-foot cube) into another nonmagical object of similar size and mass and of equal or lesser value. You must spend 10 minutes handling the object to transform it.
        - Panacea. You remove all curses, diseases, and poisons affecting a creature that you touch with the transmuter's stone. The creature also regains all its hit points.
        - Restore Life. You cast the Raise Dead spell on a creature you touch with the transmuter's stone, without expending a spell slot or needing to have the spell in your spellbook.
        - Restore Youth. You touch the transmuter's stone to a willing creature, and that creature's apparent age is reduced by 3d10 years, to a minimum of 13 years. This effect doesn't extend the creature's lifespan.`,
  },
};
