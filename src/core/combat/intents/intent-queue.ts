import { CombatIntent } from "./combat-intent";

export class IntentQueue {
  private queue: CombatIntent[] = [];

  enqueue(intent: CombatIntent) {
    this.queue.push(intent);
  }

  next(): CombatIntent | undefined {
    return this.queue.shift();
  }

  peek(): CombatIntent | undefined {
    return this.queue[0];
  }

  getAll(): CombatIntent[] {
    return [...this.queue];
  }
}
