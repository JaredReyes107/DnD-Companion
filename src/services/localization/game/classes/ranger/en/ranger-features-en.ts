import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { beast_master_features_en } from "../subclasses/beast-master/en/beast-master-features-en";
import { hunter_features_en } from "../subclasses/hunter/en/hunter-features-en";

import { gloom_stalker_features_en } from "../subclasses/gloom-stalker/en/gloom-stalker-features-en";
import { horizon_walker_features_en } from "../subclasses/horizon-walker/en/horizon-walker-features-en";
import { monster_slayer_features_en } from "../subclasses/monster-slayer/en/monster-slayer-features-en";

import { fey_wanderer_features_en } from "../subclasses/fey-wanderer/en/fey-wanderer-features-en";
import { swarmkeeper_features_en } from "../subclasses/swarmkeeper/en/swarmkeeper-features-en";

const subclass_features: GameLocalizationCategory = {
  //PHB
  ...beast_master_features_en,
  ...hunter_features_en,

  // XGE
  ...gloom_stalker_features_en,
  ...horizon_walker_features_en,
  ...monster_slayer_features_en,

  // TCE
  ...fey_wanderer_features_en,
  ...swarmkeeper_features_en,
};

export const ranger_features_en: GameLocalizationCategory = {
  ...subclass_features,

  favored_enemy: {
    name: "Favored Enemy",
    description: `You have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.
      Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies. You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.
      When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all. You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures.`,
  },
  natural_explorer: {
    name: "Natural Explorer",
    description: `You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in.
      While traveling for an hour or more in your favored terrain, you gain the following benefits:
        - Difficult terrain doesn’t slow your group’s travel.
        - Your group can’t become lost except by magical means.
        - Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.
        - If you are traveling alone, you can move stealthily at a normal pace.
        - When you forage, you find twice as much food as you normally would.
        - While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.
      You choose additional favored terrain types at 6th and 10th level.`,
  },
  spellcasting_ranger: {
    name: "Spellcasting",
    description: `You have learned to use the magical essence of nature to cast spells, much as a druid does.
      Spell Slots
        The Ranger table shows how many spell slots you have to cast your ranger spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.
        For example, if you know the 1st-level spell Animal Friendship and have a 1st-level and a 2nd-level spell slot available, you can cast Animal Friendship using either slot.
      Spells Known of 1st Level and Higher
        You know two 1st-level spells of your choice from the ranger spell list.
        The Spells Known column of the Ranger table shows when you learn more ranger spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 5th level in this class, you can learn one new spell of 1st or 2nd level.
        Additionally, when you gain a level in this class, you can choose one of the ranger spells you know and replace it with another spell from the ranger spell list, which also must be of a level for which you have spell slots.
      Spellcasting Ability
        Wisdom is your spellcasting ability for your ranger spells, since your magic draws on your attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a ranger spell you cast and when making an attack roll with one.
          Spell save DC = 8 + your proficiency bonus + your Wisdom modifier
          Spell attack modifier = your proficiency bonus + your Wisdom modifier
      Spellcasting Focus
        You can use a druidic focus as a spellcasting focus for your ranger spells. A druidic focus might be a sprig of mistletoe or holly, a wand or rod made of yew or another special wood, a staff drawn whole from a living tree, or an object incorporating feathers, fur, bones, and teeth from sacred animals.`,
  },
  primeval_awareness: {
    name: "Primeval Awareness",
    description: `You can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn’t reveal the creatures’ location or number.`,
  },
  ranger_archetype: {
    name: "Ranger Archetype",
    description: `You choose to emulate the ideals and training of a ranger conclave. Your choice grants you features at 3rd level and again at 7th, 11th, and 15th level.`,
  },
  extra_attack: {
    name: "Extra Attack",
    description: `You can attack twice, instead of once, whenever you take the Attack action on your turn.`,
  },
  lands_stride: {
    name: "Land's Stride",
    description: ``,
  },
  hide_in_plain_sight: {
    name: "Hide in Plain Sight",
    description: `You can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage.
      Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit.`,
  },
  vanish: {
    name: "Vanish",
    description: `You can use the Hide action as a bonus action on your turn. Also, you can't be tracked by nonmagical means, unless you choose to leave a trail.`,
  },
  feral_senses: {
    name: "Feral Senses",
    description: `You gain preternatural senses that help you fight creatures you can't see. When you attack a creature you can't see, your inability to see it doesn't impose disadvantage on your attack rolls against it.
      You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn't hidden from you and you aren't blinded or deafened.`,
  },
  foe_slayer: {
    name: "Foe Slayer",
    description: `You become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied.`,
  },
};
