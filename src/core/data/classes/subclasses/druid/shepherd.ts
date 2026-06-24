import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const SHEPHERD: SubclassTemplate = {
  id: "shepherd",
  classId: "druid",
  source: "tce",

  featuresByLevel: {
    2: [
      {
        id: "speech_of_the_woods",
        source: "subclass" as const,
        level: 2,
        tags: ["utility", "roleplay", "language"],
        // TODO: language system — speak with beasts/fey, share with allies who know Druidic
      },
      {
        id: "spirit_totem",
        source: "subclass" as const,
        level: 2,
        resources: ["spirit_totem"],
        actions: ["spirit_totem_summon", "spirit_totem_move"],
        tags: ["support", "build-choice"],
        // TODO: Totem choice system (Bear/Hawk/Unicorn)
        // TODO: Aura hook per totem (temp HP / advantage / healing)
      },
    ],

    6: [
      {
        id: "mighty_summoner",
        source: "subclass" as const,
        level: 6,
        tags: ["summoning", "passive"],
        // TODO: Summon spell modifier hook (extra HP, magical damage)
      },
    ],

    10: [
      {
        id: "guardian_spirit",
        source: "subclass" as const,
        level: 10,
        tags: ["summoning", "healing"],
        // TODO: Extends mighty_summoner — healing hook for summoned creatures within aura (30ft)
      },
    ],

    14: [
      {
        id: "faithful_summons",
        source: "subclass" as const,
        level: 14,
        resources: ["faithful_summons"],
        actions: ["faithful_summons"],
        tags: ["summoning", "defense"],
        // TODO: Trigger hook to auto-trigger (0 HP or incapacitated, no allies within 30ft)
        // TODO: Summon 2 CR 2 beasts
      },
    ],
  },
};
