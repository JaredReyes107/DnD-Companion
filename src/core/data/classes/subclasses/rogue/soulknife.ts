import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const SOULKNIFE: SubclassTemplate = {
  id: "soulknife",
  classId: "rogue",
  source: "Tasha's Cauldron of Everything",
  progression: {
    3: ["rogue.soulknife.psionic_power", "rogue.soulknife.psychic_blades"],
    9: ["rogue.soulknife.soul_blades"],
    13: ["rogue.soulknife.psychic_veil"],
    17: ["rogue.soulknife.rend_mind"],
  },

  featuresByLevel: {
    3: [
      {
        id: "rogue.soulknife.psionic_power",
        source: "subclass" as const,
        level: 3,
        grants: [
          { type: "resource", id: "psionic_energy_dice" },
          { type: "action", id: "psionic_energy_die_recover" },
          { type: "resource", id: "psychic_whispers" },
          { type: "action", id: "psychic_whispers" },
          { type: "action", id: "psi_bolstered_knack" },
        ],
        tags: ["resource-pool"],
      },
      {
        id: "rogue.soulknife.psychic_blades",
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
        id: "rogue.soulknife.soul_blades",
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
        id: "rogue.soulknife.psychic_veil",
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
        id: "rogue.soulknife.rend_mind",
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
