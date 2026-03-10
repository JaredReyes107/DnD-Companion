export type EntityId = string;

export class EntityRegistry {
  private entities = new Set<EntityId>();

  register(id: EntityId) {
    this.entities.add(id);
  }

  remove(id: EntityId) {
    this.entities.delete(id);
  }

  getAll() {
    return this.entities;
  }
}
