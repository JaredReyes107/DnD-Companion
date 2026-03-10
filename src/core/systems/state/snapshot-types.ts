import { EncounterState } from "../../entities/combat/EncounterState";
import { QueuedEvent } from "../events/event-queue";

export interface EngineSnapshot {
  id: string;
  timestamp: number;
  tickInfo: number;
  triggerEvent?: QueuedEvent;
  state: EncounterState;
}

export interface EngineSnapshotConfig {
  historyLimit?: number;
}
