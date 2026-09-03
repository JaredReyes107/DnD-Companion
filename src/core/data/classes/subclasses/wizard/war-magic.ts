import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const WAR_MAGIC: SubclassTemplate = {
  id: "war_magic",
  classId: "wizard",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    2: [
      {
        id: "arcane_deflection",
        source: "subclass" as const,
        level: 2,
        grants: [{ type: "action", id: "arcane_deflection" }],
        tags: ["defense", "reaction"],
      },
      {
        id: "tactical_wit",
        source: "subclass" as const,
        level: 2,
        tags: ["initiative"],
        // TODO: Modifier. +INT to initiative
      },
    ],

    6: [
      {
        id: "power_surge",
        source: "subclass" as const,
        level: 6,
        grants: [
          { type: "action", id: "power_surge_accumulate" },
          { type: "action", id: "power_surge_liberate" },
          { type: "resource", id: "power_surge" },
          { type: "resource", id: "power_surge_turn_uses" },
        ],
        tags: ["combat", "damage"],
      },
    ],

    10: [
      {
        id: "durable_magic",
        source: "subclass" as const,
        level: 10,
        tags: ["defense", "ac", "concentration"],
        // TODO: Modifier. +2 AC and all saves while concentrating
      },
    ],

    14: [
      {
        id: "deflecting_shroud",
        source: "subclass" as const,
        level: 14,
        tags: ["combat", "damage", "aoe"],
        // TODO: Override. Arcane Deflection. Description only
      },
    ],
  },
};
