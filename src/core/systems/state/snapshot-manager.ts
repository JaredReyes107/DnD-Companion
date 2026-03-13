import { EngineSnapshot, EngineSnapshotConfig } from "./snapshot-types";
import { EncounterState } from "../../entities/combat/EncounterState";
import { QueuedEvent } from "../events/event-queue";

export class SnapshotManager {
  private readonly snapshots: EngineSnapshot[] = [];
  private readonly historyLimit: number;

  constructor(config?: EngineSnapshotConfig) {
    this.historyLimit = config?.historyLimit ?? 50;
  }

  takeSnapshot(
    tickInfo: number,
    state: EncounterState,
    triggerEvent?: QueuedEvent,
  ): EngineSnapshot {
    const serializedState = structuredClone(state);

    const snapshot: EngineSnapshot = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      tickInfo,
      triggerEvent,
      state: serializedState,
    };

    this.snapshots.push(snapshot);

    if (this.snapshots.length > this.historyLimit) {
      this.snapshots.shift();
    }

    return snapshot;
  }

  getSnapshot(id: string): EngineSnapshot | undefined {
    return this.snapshots.find((s) => s.id === id);
  }

  getLatestSnapshot(): EngineSnapshot | undefined {
    return this.snapshots.at(-1);
  }

  getAllSnapshots(): EngineSnapshot[] {
    return [...this.snapshots];
  }
}
