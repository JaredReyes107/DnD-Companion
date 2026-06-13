import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const STORM_HERALD: SubclassTemplate = {
  id: "storm_herald",
  classId: "barbarian",
  name: "Storm Herald",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    3: [
      {
        id: "storm_aura",
        label: "Storm Aura",
        source: "subclass",
        level: 3,
        description:
          "While raging, you emit an aura in a 10-foot radius. Choose an environment — Desert, Sea, or Tundra. Desert: each enemy that starts its turn in the aura takes 2 fire damage. Sea: you can choose one creature in the aura to take 1d6 lightning damage. Tundra: each creature of your choice gains 2 temporary HP. Damage increases at higher levels.",
        tags: ["passive", "combat", "build-choice"],
        // TODO: rage hook + aura system
        // TODO: build-choice (environment selection)
        // TODO: scaling per level
      },
    ],

    6: [
      {
        id: "storm_soul",
        label: "Storm Soul",
        source: "subclass",
        level: 6,
        description:
          "You gain a permanent benefit based on your chosen environment. Desert: resistance to fire damage, no harm from extreme heat. Sea: resistance to lightning damage, can breathe underwater, gain a swimming speed equal to walking speed. Tundra: resistance to cold damage, no harm from extreme cold, ground within 10ft becomes difficult terrain for others.",
        tags: ["passive", "defense", "build-choice"],
        // TODO: build-choice passive modifier injection
        // TODO: resistance system
      },
    ],

    10: [
      {
        id: "shielding_storm",
        label: "Shielding Storm",
        source: "subclass",
        level: 10,
        description:
          "While raging, creatures of your choice within your Storm Aura gain the resistance granted by Storm Soul.",
        tags: ["passive", "defense"],
        // TODO: aura hook + conditional resistance sharing
      },
    ],

    14: [
      {
        id: "raging_storm",
        label: "Raging Storm",
        source: "subclass",
        level: 14,
        description:
          "The power of your storm grows. Desert: when hit by a melee attack, you can use your reaction to deal 2d6 fire damage to the attacker (DEX save halves). Sea: when you hit with an attack, you can use a bonus action to knock the target prone (STR save negates). Tundra: when you hit a creature, it is restrained until the start of your next turn (STR save negates).",
        // TODO: reaction/bonus action hooks per environment choice
        tags: ["combat", "build-choice"],
        // TODO: saving throw system
      },
    ],
  },
};
