import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const celestial_features_en: GameLocalizationCategory = {
  bonus_cantrips: {
    name: "Bonus Cantrips",
    description:
      "You learn the sacred flame and light cantrips. They count as warlock cantrips for you, but they don't count against your number of cantrips known.",
  },
  healing_light: {
    name: "Healing Light",
    description:
      "You gain the ability to channel celestial energy to heal wounds. You have a pool of d6s that you spend to fuel this healing. The number of dice in the pool equals 1 + your warlock level. As a bonus action, you can heal one creature you can see within 60 feet of you, spending dice from the pool. The maximum number of dice you can spend at once equals your Charisma modifier (minimum of one die). Roll the dice you spend, add them together, and restore a number of hit points equal to the total. Your pool regains all expended dice when you finish a long rest.",
  },
  radiant_soul: {
    name: "Radiant Soul",
    description:
      "Your link to the Celestial allows you to serve as a conduit for radiant energy. You have resistance to radiant damage, and when you cast a spell that deals radiant or fire damage, you can add your Charisma modifier to one radiant or fire damage roll of that spell against one of its targets.",
  },
  celestial_resilience: {
    name: "Celestial Resilience",
    description:
      "You gain temporary hit points whenever you finish a short or long rest. These temporary hit points equal your warlock level + your Charisma modifier. Additionally, choose up to five creatures you can see at the end of the rest. Those creatures each gain temporary hit points equal to half your warlock level + your Charisma modifier.",
  },
  searing_vengeance: {
    name: "Searing Vengeance",
    description:
      "The radiant energy you channel allows you to resist death. When you have to make a death saving throw at the start of your turn, you can instead spring back to your feet with a burst of radiant energy. You regain hit points equal to half your hit point maximum, and then you stand up if you so choose. Each creature of your choice that is within 30 feet of you takes radiant damage equal to 2d8 + your Charisma modifier, and it is blinded until the end of the current turn. Once you use this feature, you can't use it again until you finish a long rest.",
  },
};
