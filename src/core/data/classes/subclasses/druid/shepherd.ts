import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const SHEPHERD: SubclassTemplate = {
  id: "shepherd",
  classId: "druid",
  source: "tce",
  progression: {
    2: ["druid.shepherd.speech_of_the_woods", "druid.shepherd.spirit_totem"],
    6: ["druid.shepherd.mighty_summoner"],
    10: ["druid.shepherd.guardian_spirit"],
    14: ["druid.shepherd.faithful_summons"],
  },

  featuresByLevel: {
    2: [
      {
        id: "druid.shepherd.speech_of_the_woods",
        source: "subclass" as const,
        level: 2,
        tags: ["utility", "roleplay", "language"],
        // TODO: language system — speak with beasts/fey, share with allies who know Druidic
      },
      {
        id: "druid.shepherd.spirit_totem",
        source: "subclass" as const,
        level: 2,
        grants: [
          { type: "resource", id: "spirit_totem" },
          { type: "action", id: "spirit_totem_summon" },
          { type: "action", id: "spirit_totem_move" },
        ],
        tags: ["support", "build-choice"],
        // TODO: Totem choice system (Bear/Hawk/Unicorn)
        // TODO: Aura hook per totem (temp HP / advantage / healing)
      },
    ],

    6: [
      {
        id: "druid.shepherd.mighty_summoner",
        source: "subclass" as const,
        level: 6,
        tags: ["summoning", "passive"],
        // TODO: Summon spell modifier hook (extra HP, magical damage)
      },
    ],

    10: [
      {
        id: "druid.shepherd.guardian_spirit",
        source: "subclass" as const,
        level: 10,
        tags: ["summoning", "healing"],
        // TODO: Extends mighty_summoner — healing hook for summoned creatures within aura (30ft)
      },
    ],

    14: [
      {
        id: "druid.shepherd.faithful_summons",
        source: "subclass" as const,
        level: 14,
        grants: [
          { type: "action", id: "faithful_summons" },
          { type: "resource", id: "faithful_summons" },
        ],
        tags: ["summoning", "defense"],
        // TODO: Trigger hook to auto-trigger (0 HP or incapacitated, no allies within 30ft)
        // TODO: Summon 2 CR 2 beasts
      },
    ],
  },
};
