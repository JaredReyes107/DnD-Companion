import { EventEngine } from "../events/event-engine";
import { EventQueue } from "../events/event-queue";
import { LoggedEvent } from "./event-log";
import { EngineSnapshot } from "./snapshot-types";

export class ReplayEngine {
  constructor(
    private eventEngine: EventEngine,
    private queue: EventQueue,
  ) {}

  /**
   * Replays events sequentially starting from a given engine snapshot.
   * State mutation is driven entirely by the events passing through the EventBus back into the Combat/Modifier engines.
   */
  startReplay(snapshot: EngineSnapshot, eventsToReplay: LoggedEvent[]): void {
    const sortedEvents = [...eventsToReplay].sort(
      (a, b) => a.tickInfo - b.tickInfo,
    );

    for (const log of sortedEvents) {
      this.queue.enqueue(log.event.type, log.event.payload);
      this.eventEngine.tick();
    }
  }
}
