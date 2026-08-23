import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const SWARMKEEPER: SubclassTemplate = {
  id: "swarmkeeper",
  classId: "ranger",
  source: "Tasha's Cauldron of Everything",

  featuresByLevel: {
    3: [
      {
        id: "gathered_swarm",
        source: "subclass" as const,
        level: 3,
        grants: [
          { type: "resource", id: "gathered_swarm" },
          { type: "action", id: "gathered_swarm_attack" },
          { type: "action", id: "gathered_swarm_push" },
          { type: "action", id: "gathered_swarm_move" },
        ],
        tags: ["combat"],
      },
      {
        id: "swarmkeeper_magic",
        source: "subclass" as const,
        level: 3,
        tags: ["spells"],
      },
    ],

    7: [
      {
        id: "writhing_tide",
        source: "subclass" as const,
        level: 7,
        grants: [
          { type: "action", id: "writhing_tide" },
          { type: "resource", id: "writhing_tide" },
        ],
        tags: ["movement", "utility"],
      },
    ],

    11: [
      {
        id: "mighty_swarm",
        source: "subclass" as const,
        level: 11,
        tags: ["combat"],
        // TODO: Overrides: Append description to swarm Attack and Push, give modifier to Move (Half Cover)
      },
    ],

    15: [
      {
        id: "swarming_dispersal",
        source: "subclass" as const,
        level: 15,
        grants: [
          { type: "action", id: "swarming_dispersal" },
          { type: "resource", id: "swarming_dispersal" },
        ],
        tags: ["defense", "reaction", "movement", "resistance"],
      },
    ],
  },
};
