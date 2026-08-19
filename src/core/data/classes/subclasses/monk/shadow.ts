import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const SHADOW: SubclassTemplate = {
  id: "shadow",
  classId: "monk",
  source: "Players Handbook",

  featuresByLevel: {
    3: [
      {
        id: "shadow_arts",
        source: "subclass",
        level: 3,
        grants: [
          { type: "action", id: "shadow_arts_minor_illusion" },
          { type: "action", id: "shadow_arts_darkness" },
          { type: "action", id: "shadow_arts_darkvision" },
          { type: "action", id: "shadow_arts_pass_without_trace" },
          { type: "action", id: "shadow_arts_silence" },
        ],
        tags: ["spellcasting", "utility", "stealth"],
      },
    ],

    6: [
      {
        id: "shadow_step",
        source: "subclass",
        level: 6,
        grants: [{ type: "action", id: "shadow_step" }],
        tags: ["movement", "stealth"],
      },
    ],

    11: [
      {
        id: "cloak_of_shadows",
        source: "subclass",
        level: 11,
        grants: [{ type: "action", id: "cloak_of_shadows" }],
        tags: ["stealth", "defense"],
      },
    ],

    17: [
      {
        id: "opportunist",
        source: "subclass",
        level: 17,
        grants: [{ type: "action", id: "opportunist" }],
        tags: ["reaction", "combat"],
      },
    ],
  },
};
