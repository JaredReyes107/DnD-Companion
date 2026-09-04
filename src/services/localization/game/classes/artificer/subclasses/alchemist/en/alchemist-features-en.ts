import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const alchemist_features_en: GameLocalizationCategory = {
  alchemist_spells: {
    name: "Alchemist Spells",
    description:
      "You always have certain spells prepared after you reach particular levels in this class, as shown in the Alchemist Spells table. These spells count as artificer spells for you, but they don't count against the number of artificer spells you prepare.",
  },
  tool_proficiency: {
    name: "Tool Proficiency",
    description:
      "You gain proficiency with alchemist's supplies. If you already have this proficiency, you gain proficiency with one other type of artisan's tools of your choice.",
  },
  experimental_elixir: {
    name: "Experimental Elixir",
    description:
      "Whenever you finish a long rest, you can magically produce an experimental elixir in an empty flask you touch. Roll on the Experimental Elixir table for the elixir's effect, which is triggered when someone drinks the elixir. As an action, a creature can drink the elixir or administer it to an incapacitated creature. Creating an experimental elixir requires you to have alchemist's supplies on your person, and any elixir you create with this feature lasts until it is drunk or until the end of your next long rest. When you reach certain levels in this class, you can make more elixirs at the end of a long rest: two at 6th level and three at 15th level. Roll for each elixir's effect separately. Each elixir requires its own flask. You can create additional experimental elixirs by expending a spell slot of 1st level or higher for each one. When you do so, you use your action to create the elixir in an empty flask you touch, and you choose the elixir's effect from the Experimental Elixir table.",
  },
  alchemical_savant: {
    name: "Alchemical Savant",
    description:
      "You develop masterful command of magical chemicals, enhancing the healing and damage you create through them. Whenever you cast a spell using your alchemist's supplies as the spellcasting focus, you gain a bonus to one roll of the spell. That roll must restore hit points or be a damage roll that deals acid, fire, necrotic, or poison damage, and the bonus equals your Intelligence modifier (minimum of +1).",
  },
  restorative_reagents: {
    name: "Restorative Reagents",
    description:
      "You can incorporate restorative reagents into some of your works: Whenever a creature drinks an experimental elixir you created, the creature gains temporary hit points equal to 2d6 + your Intelligence modifier (minimum of 1 temporary hit point). You can cast lesser restoration without expending a spell slot and without preparing the spell, provided you use alchemist's supplies as the spellcasting focus. You can do so a number of times equal to your Intelligence modifier (minimum of once), and you regain all expended uses when you finish a long rest.",
  },
  chemical_mastery: {
    name: "Chemical Mastery",
    description:
      "You have been exposed to so many chemicals that they pose little risk to you, and you can use them to quickly end certain ailments: You gain resistance to acid damage and poison damage, and you are immune to the poisoned condition. You can cast greater restoration and heal without expending a spell slot, without preparing the spell, and without material components, provided you use alchemist's supplies as the spellcasting focus. Once you cast either spell with this feature, you can't cast that spell with it again until you finish a long rest.",
  },
};
