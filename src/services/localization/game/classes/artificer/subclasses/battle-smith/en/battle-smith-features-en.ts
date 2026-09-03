import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const battle_smith_features_en: GameLocalizationCategory = {
  tool_proficiency_battle_smith: {
    name: "Tool Proficiency",
    description:
      "You gain proficiency with smith's tools. If you already have this proficiency, you gain proficiency with one other type of artisan's tools of your choice.",
  },
  battle_smith_spells: {
    name: "Battle Smith Spells",
    description:
      "You always have certain spells prepared after you reach particular levels in this class, as shown in the Battle Smith Spells table. These spells count as artificer spells for you, but they don't count against the number of artificer spells you prepare.",
  },
  battle_ready: {
    name: "Battle Ready",
    description:
      "Your combat training and your experiments with magic have paid off in two ways: You gain proficiency with martial weapons. When you attack with a magic weapon, you can use your Intelligence modifier, instead of Strength or Dexterity modifier, for the attack and damage rolls.",
  },
  steel_defender: {
    name: "Steel Defender",
    description:
      "Your tinkering has borne you a faithful companion, a steel defender. It is friendly to you and your companions, and it obeys your commands. See this creature's game statistics in the steel defender stat block, which uses your proficiency bonus (PB) in several places. You determine the creature's appearance and whether it has two legs or four; your choice has no effect on its game statistics. In combat, the defender shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are incapacitated, the defender can take any action of its choice, not just Dodge. If the mending spell is cast on it, it regains 2d6 hit points. If it has died within the last hour, you can use your smith's tools as an action to revive it, provided you are within 5 feet of it and you expend a spell slot of 1st level or higher. The steel defender returns to life after 1 minute with all its hit points restored. At the end of a long rest, you can create a new steel defender if you have your smith's tools with you. If you already have a steel defender from this feature, the first one immediately perishes. The defender also perishes if you die.",
  },
  extra_attack: {
    name: "Extra Attack",
    description:
      "You can attack twice, rather than once, whenever you take the Attack action on your turn.",
  },
  arcane_jolt: {
    name: "Arcane Jolt",
    description:
      "You learn new ways to channel arcane energy to harm or heal. When either you hit a target with a magic weapon attack or your steel defender hits a target, you can channel magical energy through the strike to create one of the following effects: The target takes an extra 2d6 force damage. Choose one creature or object you can see within 30 feet of the target. Healing energy flows into the chosen recipient, restoring 2d6 hit points to it. You can use this energy a number of times equal to your Intelligence modifier (minimum of once), but you can do so no more than once on a turn. You regain all expended uses when you finish a long rest.",
  },
  improved_defender: {
    name: "Improved Defender",
    description:
      "Your Arcane Jolt and steel defender become more powerful: The extra damage and the healing of your Arcane Jolt both increase to 4d6. Your steel defender gains a +2 bonus to Armor Class. Whenever your steel defender uses its Deflect Attack, the attacker takes force damage equal to 1d4 + your Intelligence modifier.",
  },
};
