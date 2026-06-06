export class EntityRegistry {
  private readonly entities = new Set<string>();

  register(id: string) {
    this.entities.add(id);
  }

  remove(id: string) {
    this.entities.delete(id);
  }

  getAll() {
    return this.entities;
  }
}
