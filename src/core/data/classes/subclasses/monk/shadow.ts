import { SubclassTemplate } from "@/core/entities/rules/subclass-template";

export const SHADOW: SubclassTemplate = {
  id: "shadow",
  classId: "monk",
  source: "Players Handbook",
  progression: {
    3: ["monk.shadow.shadow_arts"],
    6: ["monk.shadow.shadow_step"],
    11: ["monk.shadow.cloak_of_shadows"],
    17: ["monk.shadow.opportunist"],
  },

  featuresByLevel: {
    3: [
      {
        id: "monk.shadow.shadow_arts",
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
        id: "monk.shadow.shadow_step",
        source: "subclass",
        level: 6,
        grants: [{ type: "action", id: "shadow_step" }],
        tags: ["movement", "stealth"],
      },
    ],

    11: [
      {
        id: "monk.shadow.cloak_of_shadows",
        source: "subclass",
        level: 11,
        grants: [{ type: "action", id: "cloak_of_shadows" }],
        tags: ["stealth", "defense"],
      },
    ],

    17: [
      {
        id: "monk.shadow.opportunist",
        source: "subclass",
        level: 17,
        grants: [{ type: "action", id: "opportunist" }],
        tags: ["reaction", "combat"],
      },
    ],
  },
};
