import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ANCESTRAL_GUARDIAN: SubclassTemplate = {
  id: "ancestral_guardian",
  classId: "barbarian",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    3: [
      {
        id: "ancestral_protectors",
        source: "subclass",
        level: 3,
        tags: ["combat", "debuff"],
        // TODO: rage hook + on-hit condition application
      },
    ],

    6: [
      {
        id: "spirit_shield",
        source: "subclass",
        level: 6,
        actions: ["spirit_shield"],
        tags: ["reaction", "defense"],
        // TODO: reaction hook + damage reduction
        // TODO: scaling (2d6 → 3d6 → 4d6)
      },
    ],

    10: [
      {
        id: "consult_the_spirits",
        source: "subclass",
        level: 10,
        tags: ["utility", "spellcasting"],
        // TODO: limited spell use system (not spell slots)
      },
    ],

    14: [
      {
        id: "vengeful_ancestors",
        source: "subclass",
        level: 14,
        tags: ["combat", "reaction"],
        // TODO: extends spirit_shield — damage reflection hook
      },
    ],
  },
};
