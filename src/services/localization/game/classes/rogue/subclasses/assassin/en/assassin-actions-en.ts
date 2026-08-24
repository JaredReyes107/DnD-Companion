import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const assassin_actions_en: GameLocalizationCategory = {
  assassinate: {
    name: "Assasinate",
    description: `You have advantage on attack rolls against any creature that hasn't taken a turn in the combat yet. In addition, any hit you score against a creature that is surprised is a critical hit.`,
  },
  infiltration_expertise: {
    name: "Infiltration Expertise",
    description: `You spend seven days and 25 gp to establish the history, profession, and affiliations for a false identity. You can't establish an identity that belongs to someone else. Thereafter, if you adopt the new identity as a disguise, other creatures believe you to be that person until given an obvious reason not to.`,
  },
  impostor: {
    name: "Impostor",
    description: `You spend at least three hours studying these three components of a person's behavior, listening to speech, examining handwriting, and observing mannerisms. You then are able to mimic that person in an indiscernible way to the casual observer. If a wary creature suspects something is amiss, you have advantage on any Charisma (Deception) check you make to avoid detection.`,
  },
  death_strike: {
    name: "Death Strike",
    description: `When you attack and hit a creature that is surprised, it must make a Constitution saving throw (DC 8 + your Dexterity modifier + your proficiency bonus). On a failed save, double the damage of your attack against the creature.`,
  },
};
