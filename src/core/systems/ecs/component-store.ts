export class ComponentStore<T> {
  private readonly components = new Map<string, T>();

  add(entityId: string, component: T) {
    this.components.set(entityId, component);
  }

  get(entityId: string): T | undefined {
    return this.components.get(entityId);
  }

  remove(entityId: string) {
    this.components.delete(entityId);
  }

  entries() {
    return this.components.entries();
  }
}
