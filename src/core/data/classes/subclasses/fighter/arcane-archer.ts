// src/core/data/classes/subclasses/fighter/Arcane-Archer.ts
import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ARCANE_ARCHER: SubclassTemplate = {
  id: "arcane_archer",
  classId: "fighter",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    3: [
      {
        id: "fighter.arcane_archer.arcane_archer_lore",
        source: "subclass",
        level: 3,
        tags: ["skill", "proficiency", "spellcasting"],
      },
      {
        id: "fighter.arcane_archer.arcane_shot",
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
        id: "fighter.arcane_archer.curving_shot",
        source: "subclass",
        level: 7,
        grants: [{ type: "action", id: "curving_shot" }],
        tags: ["combat", "utility"],
      },
      {
        id: "fighter.arcane_archer.magic_arrow",
        source: "subclass",
        level: 7,
        tags: ["combat"],
      },
    ],

    15: [
      {
        id: "fighter.arcane_archer.ever_ready_shot",
        source: "subclass",
        level: 15,
        tags: ["resource"],
      },
    ],
  },
};
