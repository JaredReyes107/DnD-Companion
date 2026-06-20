import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const WILD_MAGIC: SubclassTemplate = {
  id: "wild_magic",
  classId: "barbarian",
  source: "Tasha's Cauldron of Everything",

  featuresByLevel: {
    3: [
      {
        id: "magic_awareness",
        source: "subclass",
        level: 3,
        resources: ["magic_awareness"],
        actions: ["magic_awareness"],
        tags: ["utility"],
        // TODO: detection system (out of combat)
      },
      {
        id: "wild_surge",
        source: "subclass",
        level: 3,
        tags: ["combat"],
        // TODO: wild magic table — random effect system
        // TODO: rage hook
      },
    ],

    6: [
      {
        id: "bolstering_magic",
        source: "subclass",
        level: 6,
        resources: ["bolstering_magic"],
        actions: ["bolstering_magic"],
        tags: ["support", "utility"],
        // TODO: buff application + spell slot recovery hook
      },
    ],

    10: [
      {
        id: "unstable_backlash",
        source: "subclass",
        level: 10,
        actions: ["unstable_backlash"],
        tags: ["reaction", "combat"],
        // TODO: reaction hook + wild magic table reroll
      },
    ],

    14: [
      {
        id: "controlled_surge",
        source: "subclass",
        level: 14,
        tags: ["passive"],
        // TODO: extends wild_surge — roll modifier system
      },
    ],
  },
};
