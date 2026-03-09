import { Effect } from "../../entities/modifiers/Effect";
import { GameEvent } from "../../entities/modifiers/Event";

export function processEventDurations(
  activeEffects: Effect[],
  event: GameEvent,
): Effect[] {
  return activeEffects
    .map((effect) => {
      if (!effect.duration) return effect;

      if (effect.duration.type === "rounds" && event === GameEvent.TURN_END) {
        if (effect.duration.remaining !== undefined) {
          return {
            ...effect,
            duration: {
              ...effect.duration,
              remaining: effect.duration.remaining - 1,
            },
          };
        }
      }

      return effect;
    })
    .filter(
      (effect) =>
        !effect.duration ||
        effect.duration.remaining === undefined ||
        effect.duration.remaining > 0,
    );
}

export function applyEffect(
  activeEffects: Effect[],
  newEffect: Effect,
): Effect[] {
  return [...activeEffects, newEffect];
}

export function removeEffectById(
  activeEffects: Effect[],
  effectInstanceId: string,
): Effect[] {
  return activeEffects.filter((e) => e.id !== effectInstanceId);
}
