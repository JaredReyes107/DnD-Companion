import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const SOULKNIFE: SubclassTemplate = {
  id: "soulknife",
  classId: "rogue",
  source: "Tasha's Cauldron of Everything",

  featuresByLevel: {
    3: [
      {
        id: "psionic_power",
        source: "subclass" as const,
        level: 3,
        grants: [
          { type: "resource", id: "psionic_energy_dice" },
          { type: "resource", id: "regain_psionic_energy_die" },
          { type: "action", id: "psionic_energy_die_recover" },
          { type: "resource", id: "psychic_whispers" },
          { type: "action", id: "psychic_whispers" },
          { type: "action", id: "psi_bolstered_knack" },
        ],
        tags: ["resource-pool"],
      },
      {
        id: "psychic_blades",
        source: "subclass" as const,
        level: 3,
        grants: [
          { type: "action", id: "psychic_blade_attack" }, //TODO: Override instead of attack
          { type: "action", id: "psychic_blade_offhand_attack" },
        ],
        tags: ["combat", "damage"],
      },
    ],

    9: [
      {
        id: "soul_blades",
        source: "subclass" as const,
        level: 9,
        grants: [
          { type: "action", id: "homing_strikes" },
          { type: "action", id: "psychic_teleportation" },
        ],
        tags: ["combat", "movement", "utility"],
      },
    ],

    13: [
      {
        id: "psychic_veil",
        source: "subclass" as const,
        level: 13,
        grants: [
          { type: "action", id: "psychic_veil" },
          { type: "resource", id: "psychic_veil" },
        ],
        tags: ["utility", "defense"],
      },
    ],

    17: [
      {
        id: "rend_mind",
        source: "subclass" as const,
        level: 17,
        grants: [
          { type: "action", id: "rend_mind" },
          { type: "resource", id: "rend_mind" },
        ],
        tags: ["combat", "control"],
      },
    ],
  },
};
