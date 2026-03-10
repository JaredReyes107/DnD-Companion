import { Effect } from "../../entities/modifiers/Effect";
import { GameEvent } from "../../entities/modifiers/Event";
import { EventBus } from "../events/event-bus";
import { EventPhase } from "../events/event-phase";

import { ECSWorld } from "../ecs/ecs-world";

export class ModifierEngine {
  constructor(
    private readonly bus: EventBus,
    private readonly world: ECSWorld,
  ) {
    this.registerListeners();
  }

  private registerListeners() {
    this.bus.on(
      GameEvent.TURN_START,
      EventPhase.MAIN,
      () => {
        for (const [
          entityId,
          effectComponent,
        ] of this.world.effects.entries()) {
          const newEffects = this.processEventDurations(
            effectComponent.effects,
            GameEvent.TURN_START,
          );
          this.world.effects.add(entityId, { effects: newEffects });
        }
      },
      10,
    );
  }

  public processEventDurations(
    activeEffects: Effect[],
    event: GameEvent,
  ): Effect[] {
    return activeEffects
      .map((effect) => {
        if (!effect.duration) return effect;

        if (
          effect.duration.type === "rounds" &&
          event === GameEvent.TURN_START
        ) {
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

  public applyEffect(entityId: string, newEffect: Effect): void {
    const existing = this.world.effects.get(entityId)?.effects || [];
    this.world.effects.add(entityId, { effects: [...existing, newEffect] });
    this.bus.emit(GameEvent.EFFECT_APPLIED, {
      entityId,
      effectId: newEffect.id,
    });
  }

  public removeEffectById(entityId: string, effectInstanceId: string): void {
    const existing = this.world.effects.get(entityId)?.effects || [];
    const filtered = existing.filter((e) => e.id !== effectInstanceId);
    this.world.effects.add(entityId, { effects: filtered });
    this.bus.emit(GameEvent.EFFECT_REMOVED, {
      entityId,
      effectId: effectInstanceId,
    });
  }
}
