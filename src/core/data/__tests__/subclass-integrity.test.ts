import { getAllClassTemplates } from "@/core/data/registries/classes.registry";
import {
  getSubclassRegistry,
  getSubclassesForClass,
  getSubclassTemplateById,
} from "@/core/data/registries/subclasses.registry";

describe("subclass registry", () => {
  it("keys equal ids", () => {
    const bad = Object.entries(getSubclassRegistry())
      .filter(([key, s]) => key !== s.id)
      .map(([key, s]) => `${key} -> id:${s.id}`);
    expect(bad).toEqual([]);
  });

  it("every picker id resolves to its own template", () => {
    const bad: string[] = [];
    for (const cls of getAllClassTemplates()) {
      for (const s of getSubclassesForClass(cls.id)) {
        try {
          if (getSubclassTemplateById(s.id) !== s)
            bad.push(`${cls.id}/${s.id}: resolves to another template`);
        } catch {
          bad.push(`${cls.id}/${s.id}: does not resolve`);
        }
      }
    }
    expect(bad).toEqual([]);
  });

  it("every subclass points at an existing class", () => {
    const classIds = new Set(getAllClassTemplates().map((c) => c.id));
    const bad = Object.values(getSubclassRegistry())
      .filter((s) => !classIds.has(s.classId))
      .map((s) => s.id);
    expect(bad).toEqual([]);
  });
});
