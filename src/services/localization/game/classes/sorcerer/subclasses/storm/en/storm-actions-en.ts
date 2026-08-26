import { GameLocalizationCategory } from "@/services/localization/game-localization.types";

export const storm_actions_en: GameLocalizationCategory = {
  tempestuous_magic: {
    name: "Tempestuous Magic",
    description: `Immediately before or after you cast a spell of 1st level or higher, you can fly up to 10 feet without provoking opportunity attacks.`,
  },
  heart_of_the_storm: {
    name: "Heart of the Storm",
    description: `Whenever you start casting a spell of 1st level or higher that deals lightning or thunder damage, creatures of your choice that you can see within 10 feet of you to take lightning or thunder damage (choose each time this ability activates) equal to half your sorcerer level.`,
  },
  storm_guide_stop_rain: {
    name: "Storm Guard: Stop Rain",
    description: `You cause rain to stop falling in a 20-foot-radius sphere centered on you. You can end this effect as a bonus action.`,
  },
  storm_guide_wind_direction: {
    name: "Storm Guide: Wind Direction",
    description: `If it is windy, you can use a bonus action each round to choose the direction that the wind blows in a 100-foot-radius sphere centered on you. The wind blows in that direction until the end of your next turn. This feature doesn't alter the speed of the wind.`,
  },
  storms_fury: {
    name: "Storm's Fury",
    description: `When you are hit by a melee attack, you can use your reaction to deal lightning damage to the attacker equal to your sorcerer level. The attacker must also make a Strength saving throw against your sorcerer spell save DC. On a failed save, the attacker is pushed in a straight line up to 20 feet away from you.`,
  },
  wind_soul_share_flight: {
    name: "Wind Soul: Share Flight",
    description: `Reduces tu velocidad volando a 30 pies durante una hora, pero le otorgas una velocidad volando de 30 pies durante la misma duración a un número de criaturas igual a 3 + tu modificador de Carisma a 30 pies de ti.`,
  },
};
