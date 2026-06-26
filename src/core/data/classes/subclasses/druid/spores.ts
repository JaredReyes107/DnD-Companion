import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const SPORES: SubclassTemplate = {
  id: "spores",
  classId: "druid",
  source: "tce",

  featuresByLevel: {
    2: [
      {
        id: "circle_spells_spores",
        source: "subclass" as const,
        level: 2,
        tags: ["spells"],
      },
      {
        id: "halo_of_spores",
        source: "subclass" as const,
        level: 2,
        actions: ["halo_of_spores"],
        tags: ["damage", "reaction"],
        // TODO: Trigger hook (damage dealt by you, or creature ends turn within 10ft)
        // TODO: Damage scaling (1d4 → 1d6 at lv6 → 1d8 at lv10 → 1d10 at lv14)
      },
      {
        id: "symbiotic_entity",
        source: "subclass" as const,
        level: 2,
        actions: ["symbiotic_entity"],
        tags: ["combat", "transformation"],
        // TODO: Apply status and Temp HP (4x druid level)
        // TODO: status ends after 10 min, wild shape use or ful temp hp loss
        // TODO: Melee Weapon damage hook while active
      },
    ],

    6: [
      {
        id: "fungal_infestation",
        source: "subclass" as const,
        level: 6,
        resources: ["fungal_infestation"],
        actions: ["fungal_infestation"],
        tags: ["reaction", "summoning"],
        // TODO: Trigger hook (creature death within 10ft)
      },
    ],

    10: [
      {
        id: "spreading_spores",
        source: "subclass" as const,
        level: 10,
        actions: ["spreading_spores_activate", "spreading_spores_deactivate"],
        tags: ["damage", "build-choice"],
        // TODO: Area damage hook (10ft cube within 30ft, requires symbiotic_entity active)
      },
    ],

    14: [
      {
        id: "fungal_body",
        source: "subclass" as const,
        level: 14,
        tags: ["defense", "passive", "critical", "conditions"],
        // TODO: Extends symbiotic_entity — condition immunity (blinded/deafened/frightened/poisoned)
        // TODO: Inmunity to crits
        // TODO: Apply Permanent modifiers
      },
    ],
  },
};