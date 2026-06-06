import { EventPhase } from "./event-phase";
import { EngineEventMap } from "./event-types";

type Listener<T> = (payload: T) => void;

interface PrioritizedListener<T> {
  callback: Listener<T>;
  priority: number;
}

export class EventBus {
  private listeners: {
    [K in keyof EngineEventMap]?: {
      [P in EventPhase]?: PrioritizedListener<EngineEventMap[K]>[];
    };
  } = {};

  on<K extends keyof EngineEventMap>(
    event: K,
    phase: EventPhase,
    listener: Listener<EngineEventMap[K]>,
    priority: number = 0,
  ) {
    let eventListeners = this.listeners[event];
    if (!eventListeners) {
      eventListeners = {};
      this.listeners[event] = eventListeners;
    }

    let phaseListeners = eventListeners[phase];
    if (!phaseListeners) {
      phaseListeners = [];
      eventListeners[phase] = phaseListeners;
    }

    phaseListeners.push({ callback: listener, priority });
    phaseListeners.sort((a, b) => b.priority - a.priority);
  }

  emit<K extends keyof EngineEventMap>(event: K, payload: EngineEventMap[K]) {
    const phases = [EventPhase.BEFORE, EventPhase.MAIN, EventPhase.AFTER];

    const eventListeners = this.listeners[event];

    if (!eventListeners) return;

    for (const phase of phases) {
      const phaseListeners = eventListeners[phase];

      if (!phaseListeners) continue;

      for (const listener of phaseListeners) {
        listener.callback(payload);
      }
    }
  }
}
