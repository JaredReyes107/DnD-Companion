// src/core/data/classes/subclasses/fighter/Arcane-Archer.ts
import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ARCANE_ARCHER: SubclassTemplate = {
  id: "arcane_archer",
  classId: "fighter",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    3: [
      {
        id: "arcane_archer_lore",
        source: "subclass",
        level: 3,
        tags: ["skill", "proficiency", "spellcasting"],
      },
      {
        id: "arcane_shot",
        source: "subclass",
        level: 3,
        grants: [
          { type: "resource", id: "arcane_shot" },
          { type: "choice", id: "arcane_shots_known" },
        ],
        tags: ["combat", "build-choice"],
      },
    ],

    7: [
      {
        id: "curving_shot",
        source: "subclass",
        level: 7,
        grants: [{ type: "action", id: "curving_shot" }],
        tags: ["combat", "utility"],
      },
      {
        id: "magic_arrow",
        source: "subclass",
        level: 7,
        tags: ["combat"],
      },
    ],

    15: [
      {
        id: "ever_ready_shot",
        source: "subclass",
        level: 15,
        grants: [{ type: "action", id: "ever_ready_shot" }],
        tags: ["resource"],
      },
    ],
  },
};
