import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const PSI_WARRIOR: SubclassTemplate = {
  id: "psi_warrior",
  classId: "fighter",

  featuresByLevel: {
    3: [
      {
        id: "psionic_power",
        source: "subclass" as const,
        level: 3,
        grants: [
          { type: "resource", id: "psionic_dice" },
          { type: "resource", id: "psionic_recovery" },
          { type: "action", id: "psionic_recovery" },
          { type: "action", id: "protective_field" },
          { type: "action", id: "psionic_strike" },
          { type: "resource", id: "telekinetic_movement" },
          { type: "action", id: "telekinetic_movement" },
        ],
        tags: ["combat"],
      },
    ],

    7: [
      {
        id: "telekinetic_adept",
        source: "subclass" as const,
        level: 7,
        grants: [
          { type: "resource", id: "psi_powered_leap" },
          { type: "action", id: "psi_powered_leap" },
          { type: "action", id: "telekinetic_thrust" },
        ],
        tags: [],
      },
    ],

    10: [
      {
        id: "guarded_mind",
        source: "subclass" as const,
        level: 10,
        grants: [{ type: "action", id: "guarded_mind" }],
        tags: [],
      },
    ],

    15: [
      {
        id: "bulwark_of_force",
        source: "subclass" as const,
        level: 15,
        grants: [
          { type: "resource", id: "bulwark_of_force" },
          { type: "action", id: "bulwark_of_force" },
        ],
        tags: [],
      },
    ],

    18: [
      {
        id: "telekinetic_master",
        source: "subclass" as const,
        level: 18,
        grants: [
          { type: "resource", id: "telekinetic_master" },
          { type: "action", id: "telekinetic_master_telekinesis" },
          { type: "action", id: "telekinetic_master_attack" },
        ],
        tags: [],
      },
    ],
  },
};
