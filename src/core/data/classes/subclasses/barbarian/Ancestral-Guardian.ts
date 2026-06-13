import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const ANCESTRAL_GUARDIAN: SubclassTemplate = {
  id: "ancestral_guardian",
  classId: "barbarian",
  name: "Ancestral Guardian",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    3: [
      {
        id: "ancestral_protectors",
        label: "Ancestral Protectors",
        source: "subclass",
        level: 3,
        description:
          "While raging, the first creature you hit with an attack has disadvantage on attack rolls against targets other than you, and that target is restrained by spectral ancestors until the start of your next turn.",
        tags: ["combat", "debuff"],
        // TODO: rage hook + on-hit condition application
      },
    ],

    6: [
      {
        id: "spirit_shield",
        label: "Spirit Shield",
        source: "subclass",
        level: 6,
        description:
          "While raging, you can use your reaction to reduce damage dealt to another creature you can see within 30 feet by 2d6. This increases to 3d6 at level 10 and 4d6 at level 14.",
        actions: ["spirit_shield"],
        tags: ["reaction", "defense"],
        // TODO: reaction hook + damage reduction
        // TODO: scaling (2d6 → 3d6 → 4d6)
      },
    ],

    10: [
      {
        id: "consult_the_spirits",
        label: "Consult the Spirits",
        source: "subclass",
        level: 10,
        description:
          "You can cast Clairvoyance or Detect Magic without expending a spell slot or material components. After using this feature you must finish a short or long rest before using it again.",
        tags: ["utility", "spellcasting"],
        // TODO: limited spell use system (not spell slots)
      },
    ],

    14: [
      {
        id: "vengeful_ancestors",
        label: "Vengeful Ancestors",
        source: "subclass",
        level: 14,
        description:
          "When you use Spirit Shield to reduce damage, the attacker takes the amount of damage prevented as force damage.",
        tags: ["combat", "reaction"],
        // TODO: extends spirit_shield — damage reflection hook
      },
    ],
  },
};
