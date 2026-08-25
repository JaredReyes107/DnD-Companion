import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const PHANTOM: SubclassTemplate = {
  id: "phantom",
  classId: "rogue",
  source: "Tasha's Cauldron of Everything",

  featuresByLevel: {
    3: [
      {
        id: "whispers_of_the_dead",
        source: "subclass" as const,
        level: 3,
        //TODO: Add selection after short/long rest
        tags: ["proficiency", "utility"],
      },
      {
        id: "wails_from_the_grave",
        source: "subclass" as const,
        level: 3,
        grants: [
          { type: "action", id: "wails_from_the_grave" },
          { type: "resource", id: "wails_from_the_grave" },
        ],
        tags: ["combat", "damage"],
      },
    ],

    9: [
      {
        id: "tokens_of_the_departed",
        source: "subclass" as const,
        level: 9,
        grants: [
          { type: "resource", id: "soul_trinkets" },
          { type: "action", id: "tokens_of_the_departed_capture" },
          { type: "action", id: "tokens_of_the_departed_retribution" },
          { type: "action", id: "tokens_of_the_departed_interrogate" },
        ],
        tags: ["combat", "utility", "reaction"],
      },
    ],

    13: [
      {
        id: "ghost_walk",
        source: "subclass" as const,
        level: 13,
        grants: [
          { type: "action", id: "ghost_walk" },
          { type: "resource", id: "ghost_walk" },
        ],
        tags: ["combat", "movement", "transformation"],
      },
    ],

    17: [
      {
        id: "deaths_friend",
        source: "subclass" as const,
        level: 17,
        //TODO: Override. Append to 'Wails from the Grave'. Recover 1 trinket on long rest if = 0
        tags: ["passive", "combat"],
      },
    ],
  },
};
