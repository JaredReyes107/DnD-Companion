import { EventBus } from "./event-bus";
import { EventQueue } from "./event-queue";

export class EventEngine {
  constructor(
    private readonly queue: EventQueue,
    private readonly bus: EventBus,
  ) {}

  tick() {
    const events = this.queue.drain();

    for (const event of events) {
      this.bus.emit(event.type, event.payload);
    }
  }
}
