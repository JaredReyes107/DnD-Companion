import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const BEAST: SubclassTemplate = {
  id: "beast",
  classId: "barbarian",
  name: "Path of the Beast",
  source: "Tasha's Cauldron of Everything",

  featuresByLevel: {
    3: [
      {
        id: "form_of_the_beast",
        label: "Form of the Beast",
        source: "subclass",
        level: 3,
        description:
          "When you enter your rage, you can transform to gain a natural weapon. Choose one: Bite (1d8 piercing, regain HP equal to your proficiency bonus once per turn on a hit), Claws (two claw attacks as part of the Attack action, each dealing 1d6 slashing), or Tail (1d8 piercing as a reaction when hit, adds +1d8 to AC calculation once per turn).",
        tags: ["combat", "build-choice"],
        // TODO: rage hook + natural weapon system
        // TODO: build-choice (bite / claws / tail per rage)
      },
    ],

    6: [
      {
        id: "bestial_soul",
        label: "Bestial Soul",
        source: "subclass",
        level: 6,
        description:
          "Your natural weapons count as magical. Additionally choose one permanent benefit: swimming speed equal to walking speed, climbing speed equal to walking speed, or the ability to jump three times the normal distance.",
        tags: ["passive", "combat", "build-choice"],
        // TODO: movement hook
        // TODO: damage type override (magical)
      },
    ],

    10: [
      {
        id: "infectious_fury",
        label: "Infectious Fury",
        source: "subclass",
        level: 10,
        description:
          "When you hit a creature with your natural weapon while raging, you can force it to make a WIS saving throw (DC 8 + CON modifier + proficiency bonus) or suffer one of the following effects: it uses its reaction to make a melee attack against another creature you choose, or it takes 2d12 psychic damage. You can use this a number of times equal to your proficiency bonus per long rest.",
        resources: ["infectious_fury"],
        actions: ["infectious_fury"],
        tags: ["combat", "debuff"],
        // TODO: on-hit saving throw hook
        // TODO: condition / reaction redirect system
      },
    ],

    14: [
      {
        id: "call_the_hunt",
        label: "Call the Hunt",
        source: "subclass",
        level: 14,
        description:
          "When you enter a rage, you can choose a number of willing creatures you can see within 30 feet equal to your CON modifier (minimum 1). Until the rage ends, each chosen creature gains the benefit of your Form of the Beast's natural weapon choice once per turn. You can use this a number of times equal to your proficiency bonus per long rest.",
        resources: ["call_the_hunt"],
        tags: ["support", "combat"],
        // TODO: rage hook + buff application to multiple targets
      },
    ],
  },
};
