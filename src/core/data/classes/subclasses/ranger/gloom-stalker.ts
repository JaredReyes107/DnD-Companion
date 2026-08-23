import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const GLOOM_STALKER: SubclassTemplate = {
  id: "gloom_stalker",
  classId: "ranger",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    3: [
      {
        id: "gloom_stalker_magic",
        source: "subclass" as const,
        level: 3,
        tags: ["spells"],
      },
      {
        id: "dread_ambusher",
        source: "subclass" as const,
        level: 3,
        grants: [{ type: "action", id: "dread_ambusher" }],
        tags: ["combat", "initiative", "movement"],
        // TODO: Modifier: Initiative bonus (+WIS) always-on
        // TODO: New trigger: First turn of combat:
        // - Modifier: +10 speed
        // - Action: +1 attack to Attack action. Extra 1d8 for that attack
      },
      {
        id: "umbral_sight",
        source: "subclass" as const,
        level: 3,
        tags: ["senses", "stealth"],
        // TODO: Modifier: Darkvision 60ft (or +30ft to existing), invisible to
        // darkvision-reliant creatures while in darkness
      },
    ],

    7: [
      {
        id: "iron_mind",
        source: "subclass" as const,
        level: 7,
        tags: ["proficiency"],
        // TODO: WIS save proficiency, or INT/CHA (build choice) if WIS
        // is already proficient
      },
    ],

    11: [
      {
        id: "stalkers_flurry",
        source: "subclass" as const,
        level: 11,
        grants: [
          { type: "resource", id: "stalkers_flurry" },
          { type: "action", id: "stalkers_flurry" },
        ],
        tags: ["combat"],
      },
    ],

    15: [
      {
        id: "shadowy_dodge",
        source: "subclass" as const,
        level: 15,
        grants: [{ type: "action", id: "shadowy_dodge" }],
        tags: ["defense", "reaction"],
      },
    ],
  },
};
