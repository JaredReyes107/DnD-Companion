import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const SUN_SOUL: SubclassTemplate = {
  id: "sun_soul",
  classId: "monk",
  source: "Xanathar's Guide to Everything",

  featuresByLevel: {
    3: [
      {
        id: "radiant_sun_bolt",
        source: "subclass" as const,
        level: 3,
        grants: [
          { type: "action", id: "radiant_sun_bolt" },
          { type: "action", id: "radiant_sun_burst" },
        ],
        tags: ["combat", "damage", "ranged"],
      },
    ],

    6: [
      {
        id: "searing_arc_strike",
        source: "subclass" as const,
        level: 6,
        grants: [{ type: "action", id: "searing_arc_strike" }],
        tags: ["combat", "damage", "aoe", "bonus-action"],
      },
    ],

    11: [
      {
        id: "searing_sunburst",
        source: "subclass" as const,
        level: 11,
        grants: [{ type: "action", id: "searing_sunburst" }],
        tags: ["combat", "damage", "aoe", "saving-throw"],
      },
    ],

    17: [
      {
        id: "sun_shield",
        source: "subclass" as const,
        level: 17,
        grants: [
          { type: "action", id: "sun_shield_switch_aura" },
          { type: "action", id: "sun_shield_retaliate" },
        ],
        tags: ["passive", "aura", "reaction", "damage"],
      },
    ],
  },
};
