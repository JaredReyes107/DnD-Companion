import { QueuedEvent } from "../events/event-queue";
import * as Crypto from "expo-crypto";

export interface LoggedEvent {
  id: string;
  timestamp: number;
  tickInfo: number;
  event: QueuedEvent;
}

export class EventLog {
  private readonly log: LoggedEvent[] = [];

  record(tickInfo: number, event: QueuedEvent) {
    this.log.push({
      id: Crypto.randomUUID(),
      timestamp: Date.now(),
      tickInfo,
      event: structuredClone(event),
    });
  }

  getEventsSince(tickInfo: number): LoggedEvent[] {
    return this.log.filter((e) => e.tickInfo >= tickInfo);
  }

  getAllEvents(): LoggedEvent[] {
    return [...this.log];
  }
}
