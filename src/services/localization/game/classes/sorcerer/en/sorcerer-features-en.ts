import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

import { draconic_features_en } from "../subclasses/draconic/en/draconic-features-en";
import { wild_magic_sorcerer_features_en } from "../subclasses/wild/en/wild-magic-features-en";

import { divine_soul_features_en } from "../subclasses/divine-soul/en/divine-soul-features-en";
import { shadow_features_en } from "../../monk/subclasses/shadow/en/shadow-features-en";
import { storm_features_en } from "../subclasses/storm/en/storm-features-en";

import { aberrant_mind_features_en } from "../subclasses/aberrant-mind/en/aberrant-mind-features-en";
import { clockwork_soul_features_en } from "../subclasses/clockwork-soul/en/clockwork-soul-features-en";

const subclass_features: GameLocalizationCategory = {
  //PHB
  ...draconic_features_en,
  ...wild_magic_sorcerer_features_en,

  // XGE
  ...divine_soul_features_en,
  ...shadow_features_en,
  ...storm_features_en,

  // TCE
  ...aberrant_mind_features_en,
  ...clockwork_soul_features_en,
};

export const sorcerer_features_en: GameLocalizationCategory = {
  ...subclass_features,

  spellcasting_sorcerer: {
    name: "Spellcasting",
    description: `An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells.
      Cantrips:
        At 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn additional sorcerer cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Sorcerer table.
      Spell Slots:
        The Sorcerer table shows how many spell slots you have to cast your sorcerer spells of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.
        For example, if you know the 1st-level spell burning hands and have a 1st-level and a 2nd-level spell slot available, you can cast burning hands using either slot.
      Spells Known of 1st Level and Higher:
        You know two 1st-level spells of your choice from the sorcerer spell list.
        The Spells Known column of the Sorcerer table shows when you learn more sorcerer spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.
        Additionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and replace it with another spell from the sorcerer spell list, which also must be of a level for which you have spell slots.
      Spellcasting Ability:
        Charisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when making an attack roll with one.
          Spell save DC = 8 + your proficiency bonus + your Charisma modifier
          Spell attack modifier = your proficiency bonus + your Charisma modifier
      Spellcasting Focus:
          You can use an arcane focus as a spellcasting focus for your sorcerer spells.`,
  },
  sorcerous_origin: {
    name: "Sorcerous Origin",
    description: `Choose a sorcerous origin, which describes the source of your innate magical power. Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level.`,
  },
  font_of_magic: {
    name: "Font of Magic",
    description: `You tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects.
      Sorcery Points: You have 2 sorcery points, and you gain 1 more sorcery point for each level in this class above 2. You can never have more sorcery points than your level in this class. You regain all spent sorcery points when you finish a long rest.
      Flexible Casting. You can use your sorcery points to gain additional spell slots, or sacrifice spell slots to gain additional sorcery points. You learn other ways to use your sorcery points as you reach higher levels.
        - Creating Spell Slots. You can transform unexpended sorcery points into one spell slot as a bonus action on your turn. The Creating Spell Slots table shows the cost of creating a spell slot of a given level. You can create spell slots no higher in level than 5th. Any spell slot you create with this feature vanishes when you finish a long rest.
        - Converting a Spell Slot to Sorcery Points. As a bonus action on your turn, you can expend one spell slot and gain a number of sorcery points equal to the slot's level.`,
  },
  metamagic: {
    name: "Metamagic",
    description: `You gain the ability to twist your spells to suit your needs. You gain two Metamagic options of your choice. You gain another one at 10th and 17th level. You can use only one Metamagic option on a spell when you cast it, unless otherwise noted.`,
  },
  sorcerous_restoration: {
    name: "Sorcerous Restoration",
    description: `You regain 4 expended sorcery points whenever you finish a short rest.`,
  },
};
