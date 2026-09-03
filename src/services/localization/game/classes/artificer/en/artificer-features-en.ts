import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const artificer_features_en: GameLocalizationCategory = {
  magical_tinkering: {
    name: "Magical Tinkering",
    description:
      "You've learned how to invest a spark of magic into mundane objects. To use this ability, you must have thieves' tools or artisan's tools in hand. You then touch a Tiny nonmagical object as an action and give it one of the following magical properties of your choice: The object sheds bright light in a 5-foot radius and dim light for an additional 5 feet. Whenever tapped by a creature, the object emits a recorded message that can be heard up to 10 feet away. You utter the message when you bestow this property on the object, and the recording can be no more than 6 seconds long. The object continuously emits your choice of an odor or a nonverbal sound (wind, waves, chirping, or the like). The chosen phenomenon is perceivable up to 10 feet away. A static visual effect appears on one of the object's surfaces. This effect can be a picture, up to 25 words of text, lines and shapes, or a mixture of these elements, as you like. The chosen property lasts indefinitely. As an action, you can touch the object and end the property early. You can bestow magic on multiple objects, touching one object each time you use this feature, though a single object can only bear one property at a time. The maximum number of objects you can affect with this feature at one time is equal to your Intelligence modifier (minimum of one object). If you try to exceed your maximum, the oldest property immediately ends, and then the new property applies.",
  },
  spellcasting_artificer: {
    name: "Spellcasting",
    description:
      "You've studied the workings of magic and how to cast spells, channeling the magic through objects. To observers, you don't appear to be casting spells in a conventional way; you appear to produce wonders from mundane items and outlandish inventions. You produce your artificer spell effects through your tools. You must have a spellcasting focus—specifically thieves' tools or some kind of artisan's tools—in hand when you cast any spell with this Spellcasting feature (meaning the spell has an 'M' component when you cast it). You must be proficient with the tool to use it in this way. See chapter 5, \"Equipment,\" in the Player's Handbook for descriptions of these tools. After you gain the Infuse Item feature at 2nd level, you can also use any item bearing one of your infusions as a spellcasting focus. As an artificer, you use tools when you cast your spells. When describing your spellcasting, think about how you're using a tool to perform the spell effect. If you cast cure wounds using alchemist's supplies, you could be quickly producing a salve. If you cast it using tinker's tools, you might have a miniature mechanical spider that binds wounds. When you cast poison spray, you could fling foul chemicals or use a wand that spits venom. The effect of the spell is the same as for a spellcaster of any other class, but your method of spellcasting is special. The same principle applies when you prepare your spells. As an artificer, you don't study a spellbook or pray to prepare your spells. Instead, you work with your tools and create the specialized items you'll use to produce your effects. If you replace cure wounds with heat metal, you might be altering the device you use to heal—perhaps modifying a tool so that it channels heat instead of healing energy. Such details don't limit you in any way or provide you with any benefit beyond the spell's effects. You don't have to justify how you're using tools to cast a spell. But describing your spellcasting creatively is a fun way to distinguish yourself from other spellcasters. At 1st level, you know two cantrips of your choice from the artificer spell list. At higher levels, you learn additional artificer cantrips of your choice, as shown in the Cantrips Known column of the Artificer table. When you gain a level in this class, you can replace one of the artificer cantrips you know with another cantrip from the artificer spell list. The Artificer table shows how many spell slots you have to cast your artificer spells. To cast one of your artificer spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest. You prepare the list of artificer spells that are available for you to cast, choosing from the artificer spell list. When you do so, choose a number of artificer spells equal to your Intelligence modifier + half your artificer level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots. For example, if you are a 5th-level artificer, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells. You can change your list of prepared spells when you finish a long rest. Preparing a new list of artificer spells requires time spent tinkering with your spellcasting focuses: at least 1 minute per spell level for each spell on your list. Intelligence is your spellcasting ability for your artificer spells; your understanding of the theory behind magic allows you to wield these spells with superior skill. You use your Intelligence whenever an artificer spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for an artificer spell you cast and when making an attack roll with one. You can cast an artificer spell as a ritual if that spell has the ritual tag and you have the spell prepared.",
  },
  infuse_item: {
    name: "Infuse Item",
    description:
      "You've gained the ability to imbue mundane items with certain magical infusions, turning those objects into magic items. Artificers have invented numerous magical infusions, extraordinary processes that rapidly create magic items. To many, artificers seem like wonderworkers, accomplishing in hours what others need weeks to complete. The description of each of the following infusions details the type of item that can receive it, along with whether the resulting magic item requires attunement. Some infusions specify a minimum artificer level. You can't learn such an infusion until you are at least that level. Unless an infusion's description says otherwise, you can't learn an infusion more than once. Whenever you finish a long rest, you can touch a nonmagical object and imbue it with one of your artificer infusions, turning it into a magic item. An infusion works on only certain kinds of objects, as specified in the infusion's description. If the item requires attunement, you can attune yourself to it the instant you infuse the item. If you decide to attune to the item later, you must do so using the normal process for attunement (see \"Attunement\" in chapter 7 of the Dungeon Master's Guide). Your infusion remains in an item indefinitely, but when you die, the infusion vanishes after a number of days have passed equal to your Intelligence modifier (minimum of 1 day). The infusion also vanishes if you give up your knowledge of the infusion for another one. You can infuse more than one nonmagical object at the end of a long rest; the maximum number of objects appears in the Infused Items column of the Artificer table. You must touch each of the objects, and each of your infusions can be in only one object at a time. Moreover, no object can bear more than one of your infusions at a time. If you try to exceed your maximum number of infusions, the oldest infusion immediately ends, and then the new infusion applies. If an infusion ends on an item that contains other things, like a bag of holding, its contents harmlessly appear in and around its space.",
  },
  artificer_specialist: {
    name: "Artificer Specialist",
    description:
      "Choose the type of specialist you are, each of which is detailed at the end of the class's description. Your choice grants you features at 5th level and again at 9th and 15th level.",
  },
  the_right_tool_for_the_job: {
    name: "The Right Tool for the Job",
    description:
      "You've learned how to produce exactly the tool you need: with thieves' tools or artisan's tools in hand, you can magically create one set of artisan's tools in an unoccupied space within 5 feet of you. This creation requires 1 hour of uninterrupted work, which can coincide with a short or long rest. Though the product of magic, the tools are nonmagical, and they vanish when you use this feature again.",
  },
  tool_expertise: {
    name: "Tool Expertise",
    description:
      "Your proficiency bonus is now doubled for any ability check you make that uses your proficiency with a tool.",
  },
  flash_of_genius: {
    name: "Flash of Genius",
    description:
      "You've gained the ability to come up with solutions under pressure. When you or another creature you can see within 30 feet of you makes an ability check or a saving throw, you can use your reaction to add your Intelligence modifier to the roll. You can use this feature a number of times equal to your Intelligence modifier (minimum of once). You regain all expended uses when you finish a long rest.",
  },
  magic_item_adept: {
    name: "Magic Item Adept",
    description:
      "You've achieved a profound understanding of how to use and make magic items: You can attune to up to four magic items at once. If you craft a magic item with a rarity of common or uncommon, it takes you a quarter of the normal time, and it costs you half as much of the usual gold.",
  },
  spellstoring_item: {
    name: "Spell-Storing Item",
    description:
      "You can now store a spell in an object. Whenever you finish a long rest, you can touch one simple or martial weapon or one item that you can use as a spellcasting focus, and you store a spell in it, choosing a 1st- or 2nd-level spell from the artificer spell list that requires 1 action to cast (you needn't have it prepared). While holding the object, a creature can take an action to produce the spell's effect from it, using your spellcasting ability modifier. If the spell requires concentration, the creature must concentrate. The spell stays in the object until it's been used a number of times equal to twice your Intelligence modifier (minimum of twice) or until you use this feature again to store a spell in an object.",
  },
  magic_item_savant: {
    name: "Magic Item Savant",
    description:
      "Your skill with magic items deepens: You can attune to up to five magic items at once. You ignore all class, race, spell, and level requirements on attuning to or using a magic item.",
  },
  magic_item_master: {
    name: "Magic Item Master",
    description: "You can now attune to up to six magic items at once.",
  },
  soul_of_artifice: {
    name: "Soul of Artifice",
    description:
      "You have developed a mystical connection to your magic items, which you can draw on for protection: You gain a +1 bonus to all saving throws per magic item you are currently attuned to. If you're reduced to 0 hit points but not killed outright, you can use your reaction to end one of your artificer infusions, causing you to drop to 1 hit point instead of 0.",
  },
};
