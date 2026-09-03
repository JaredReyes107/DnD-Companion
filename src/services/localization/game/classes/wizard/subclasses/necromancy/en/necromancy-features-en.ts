import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const necromancy_features_en: GameLocalizationCategory = {
  necromancy_savant: {
    name: "Necromancy Savant",
    description:
      "The gold and time you must spend to copy a necromancy spell into your spellbook is halved.",
  },
  grim_harvest: {
    name: "Grim Harvest",
    description:
      "You gain the ability to reap life energy from creatures you kill with your spells. Once per turn when you kill one or more creatures with a spell of 1st level or higher, you regain hit points equal to twice the spell's level, or three times its level if the spell belongs to the School of Necromancy. You don't gain this benefit for killing constructs or undead.",
  },
  undead_thralls: {
    name: "Undead Thralls",
    description:
      "You add the animate dead spell to your spellbook if it is not there already. When you cast animate dead, you can target one additional corpse or pile of bones, creating another zombie or skeleton, as appropriate. Whenever you create an undead using a necromancy spell, it has additional benefits: The creature's hit point maximum is increased by an amount equal to your wizard level. The creature adds your proficiency bonus to its weapon damage rolls.",
  },
  inured_to_undeath: {
    name: "Inured to Undeath",
    description:
      "You have resistance to necrotic damage, and your hit point maximum can't be reduced. You have spent so much time dealing with undead and the forces that animate them that you have become inured to some of their worst effects.",
  },
  command_undead: {
    name: "Command Undead",
    description:
      "You can use magic to bring undead under your control, even those created by other wizards. As an action, you can choose one undead that you can see within 60 feet of you. That creature must make a Charisma saving throw against your wizard spell save DC. If it succeeds, you can't use this feature on it again. If it fails, it becomes friendly to you and obeys your commands until you use this feature again. Intelligent undead are harder to control in this way. If the target has an Intelligence of 8 or higher, it has advantage on the saving throw. If it fails the saving throw and has an Intelligence of 12 or higher, it can repeat the saving throw at the end of every hour until it succeeds and breaks free.",
  },
};
