import { ClassTemplate } from "@/game/data/templates/class-template";

export const MONK: ClassTemplate = {
  id: "monk",
  name: "Monk",

  hitDie: 8,

  primaryAbilities: ["STR", "DEX"],
  savingThrows: ["STR", "DEX"],

  featuresByLevel: {
    1: [
      {
        id: "unarmored_defense_monk",
        label: "Unarmored Defense",
        source: "class",
        level: 1,
        description: "While not wearing armor, your AC equals 10 + Dex + Wis.",
        tags: ["passive", "defense"],
        // TODO: AC calculation hook
      },
      {
        id: "martial_arts",
        label: "Martial Arts",
        source: "class",
        level: 1,
        description:
          "You gain special benefits while using monk weapons or unarmed strikes.",
        tags: ["combat"],
        // TODO: combat-hook
        // TODO: scaling (damage die)
      },
    ],

    2: [
      {
        id: "ki",
        label: "Ki",
        source: "class",
        level: 2,
        description:
          "Your training allows you to harness the mystic energy of ki.",
        resources: ["ki_points"],
        actions: ["flurry_of_blows", "patient_defense", "step_of_the_wind"],
        tags: ["resource"],
        // TODO: rest-hook
      },
      {
        id: "unarmored_movement",
        label: "Unarmored Movement",
        source: "class",
        level: 2,
        description: "Your speed increases while you are not wearing armor.",
        tags: ["movement"],
        // TODO: movement-hook
        // NOTE: scaling ignored
      },
    ],

    3: [
      {
        id: "monastic_tradition",
        label: "Monastic Tradition",
        source: "class",
        level: 3,
        description: "You commit yourself to a monastic tradition.",
        tags: ["subclass"],
      },
      {
        id: "deflect_missiles",
        label: "Deflect Missiles",
        source: "class",
        level: 3,
        description: "You can use your reaction to deflect or catch a missile.",
        actions: ["deflect_missiles"],
        tags: ["reaction", "combat"],
        // TODO: combat-hook
      },
    ],

    4: [
      {
        id: "slow_fall",
        label: "Slow Fall",
        source: "class",
        level: 4,
        description: "You can reduce falling damage when you fall.",
        actions: ["slow_fall"],
        tags: ["reaction"],
        // TODO: reaction
      },
    ],

    5: [
      {
        id: "extra_attack_monk",
        label: "Extra Attack",
        source: "class",
        level: 5,
        description:
          "You can attack twice whenever you take the Attack action.",
        tags: ["combat"],
        // TODO: combat-hook
      },
      {
        id: "stunning_strike",
        label: "Stunning Strike",
        source: "class",
        level: 5,
        description:
          "You can interfere with the flow of ki in an opponent's body.",
        actions: ["stunning_strike"],
        tags: ["combat", "debuff"],
        // TODO: combat-hook
      },
    ],

    6: [
      {
        id: "ki_empowered_strikes",
        label: "Ki-Empowered Strikes",
        source: "class",
        level: 6,
        description: "Your unarmed strikes count as magical.",
        tags: ["combat", "passive"],
        // TODO: damage-type hook
      },
    ],

    7: [
      {
        id: "evasion",
        label: "Evasion",
        source: "class",
        level: 7,
        description: "You can nimbly dodge certain area effects.",
        tags: ["defense"],
        // TODO: saving-throw hook
      },
      {
        id: "stillness_of_mind",
        label: "Stillness of Mind",
        source: "class",
        level: 7,
        description:
          "You can use your action to end certain effects on yourself.",
        actions: ["stillness_of_mind"],
        tags: ["action"],
        //? TODO: condition system
      },
    ],

    8: [],

    9: [
      {
        id: "unarmored_movement_improvement",
        label: "Unarmored Movement Improvement",
        source: "class",
        level: 9,
        description: "You can move along vertical surfaces and across liquids.",
        tags: ["movement"],
        // TODO: movement-hook
      },
    ],

    10: [
      {
        id: "purity_of_body",
        label: "Purity of Body",
        source: "class",
        level: 10,
        description: "You are immune to disease and poison.",
        tags: ["passive", "defense"],
        // TODO: condition immunity system
      },
    ],

    11: [],

    12: [],

    13: [
      {
        id: "tongue_of_the_sun_and_moon",
        label: "Tongue of the Sun and Moon",
        source: "class",
        level: 13,
        description: "You can understand and speak any spoken language.",
        tags: ["utility", "roleplay"],
        // TODO: language system
      },
    ],

    14: [
      {
        id: "diamond_soul",
        label: "Diamond Soul",
        source: "class",
        level: 14,
        description:
          "Your mastery of ki grants proficiency in all saving throws.",
        actions: ["diamond_soul"],
        tags: ["defense"],
        // NOTE: flat bonus logic ignored per constraints
      },
    ],

    15: [
      {
        id: "timeless_body_monk",
        label: "Timeless Body",
        source: "class",
        level: 15,
        description: "You suffer none of the frailty of old age.",
        tags: ["passive"],
      },
    ],

    16: [],

    17: [],

    18: [
      {
        id: "empty_body",
        label: "Empty Body",
        source: "class",
        level: 18,
        description: "You can use ki to become invisible or astral.",
        actions: ["empty_body_invisibility", "empty_body_astral_projection"],
        // TODO: transformation
        tags: ["resource", "transformation"],
      },
    ],

    19: [],

    20: [
      {
        id: "perfect_self",
        label: "Perfect Self",
        source: "class",
        level: 20,
        description: "You regain ki when you roll initiative and have none.",
        tags: ["resource"],
        // TODO: combat-hook
        // TODO: resource override
      },
    ],
  },
};
