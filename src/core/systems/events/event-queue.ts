import { EngineEventMap } from "./event-types";

export interface QueuedEvent<
  K extends keyof EngineEventMap = keyof EngineEventMap,
> {
  type: K;
  payload: EngineEventMap[K];
}

export class EventQueue {
  private currentQueue: QueuedEvent[] = [];
  private nextQueue: QueuedEvent[] = [];

  enqueue<K extends keyof EngineEventMap>(type: K, payload: EngineEventMap[K]) {
    this.nextQueue.push({ type, payload } as QueuedEvent);
  }

  drain(): QueuedEvent[] {
    this.currentQueue = this.nextQueue;
    this.nextQueue = [];
    return this.currentQueue;
  }
}
