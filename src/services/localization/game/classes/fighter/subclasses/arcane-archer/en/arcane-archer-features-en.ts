import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const arcane_archer_features_en: GameLocalizationCategory = {
  arcane_archer_lore: {
    name: "Arcane Archer Lore",
    description:
      "You learn magical theory or some of the secrets of nature—typical for practitioners of this elven martial tradition. You choose to gain proficiency in either the Arcana or the Nature skill, and you choose to learn either the prestidigitation or the druidcraft cantrip.",
  },
  arcane_shot: {
    name: "Arcane Shot",
    description: `You learn to unleash special magical effects with some of your shots. When you gain this feature, you learn two Arcane Shot options of your choice (see "Arcane Shot Options" below). Once per turn when you fire an arrow from a shortbow or longbow as part of the Attack action, you can apply one of your Arcane Shot options to that arrow. You decide to use the option when the arrow hits a creature, unless the option doesn't involve an attack roll. You have two uses of this ability, and you regain all expended uses of it when you finish a short or long rest. You gain an additional Arcane Shot option of your choice when you reach certain levels in this class: 7th, 10th, 15th, and 18th level. Each option also improves when you become an 18th-level fighter.
      The Arcane Shot feature lets you choose options for it at certain levels. The options are presented here in alphabetical order. They are all magical effects, and each one is associated with one of the schools of magic. If an option requires a saving throw, your Arcane Shot save DC is calculated as follows: 8 + your proficiency bonus + your Intelli-gence modifier.
      You gain an additional Arcane Shot option of your choice when you reach 18th level. Each option also improves when you become an 18th-level fighter.`,
  },
  curving_shot: {
    name: "Curving Shot",
    description:
      "At 7th level, you learn how to direct an errant arrow toward a new target. When you make an attack roll with a magic arrow and miss, you can use a bonus action to reroll the attack roll against a different target within 60 feet of the original target.",
  },
  magic_arrow: {
    name: "Magic Arrow",
    description:
      "At 7th level, you gain the ability to infuse arrows with magic. Whenever you fire a nonmagical arrow from a shortbow or longbow, you can make it magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage. The magic fades from the arrow immediately after it hits or misses its target.",
  },
  everready_shot: {
    name: "Ever-Ready Shot",
    description:
      "Starting at 15th level, your magical archery is available whenever battle starts. If you roll initiative and have no uses of Arcane Shot remaining, you regain one use of it.",
  },
};
